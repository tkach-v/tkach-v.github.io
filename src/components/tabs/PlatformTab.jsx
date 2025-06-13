// components/tabs/PlatformTab.jsx
import React, {useState} from 'react';
import {useTelegram} from '../../contexts/TelegramContext';
import {API_CONFIG, PLATFORM_OPTIONS} from '../../config/api';
import PlatformSelector from '../PlatformSelector';
import DataCard from '../cards/DataCard';
import Button from '../ui/Button';
import InteractiveMap from '../cards/InteractiveMap';

const PlatformTab = () => {
    const {userPayload} = useTelegram();
    const [selectedPlatform, setSelectedPlatform] = useState('youtube');
    const [selectedDataType, setSelectedDataType] = useState('yt_liked_videos');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPlatformData = async () => {
        setLoading(true);
        setData([]);

        try {
            const queryParams = new URLSearchParams({
                ...userPayload,
                data_type: selectedDataType
            }).toString();

            const res = await fetch(`${API_CONFIG.BASE_URL}/data/${selectedPlatform}?${queryParams}`, {
                method: "GET",
                headers: {
                    "ngrok-skip-browser-warning": API_CONFIG.SKIP_BROWSER_WARNING
                }
            });

            const result = await res.json();

            if (Array.isArray(result)) {
                setData(result);
            } else {
                throw new Error("Invalid response format");
            }
        } catch (err) {
            alert(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Функция для преобразования geo данных в формат карты
    const transformGeoDataForMap = (geoData) => {
        return geoData.map(item => ({
            device: item.device,
            os: item.os,
            browser: item.browser,
            geoIp: item.geoIp,
            geoCity: item.geoCity,
            geoRegion: item.geoRegion,
            geoCountry: item.geoCountry,
            geoPostal: item.geoPostal,
            geoLatitude: parseFloat(item.geoLatitude),
            geoLongitude: parseFloat(item.geoLongitude),
            geoTimezone: item.geoTimezone,
            geoCurrency: item.geoCurrency,
            createdAt: item.createdAt
        })).filter(item =>
            // Фильтруем только валидные координаты
            !isNaN(item.geoLatitude) && !isNaN(item.geoLongitude)
        );
    };

    const renderContent = () => {
        if (loading) {
            return (
                <div className="flex justify-center items-center h-64">
                    <div className="text-white">Loading...</div>
                </div>
            );
        }

        if (data.length === 0) {
            return (
                <p className="text-white text-center">
                    No data found for the selected platform and type.
                </p>
            );
        }

        // Если выбран тип user_geo_data, показываем карту
        if (selectedDataType === 'user_geo_data') {
            const mapData = transformGeoDataForMap(data);

            if (mapData.length === 0) {
                return (
                    <div className="text-center text-white">
                        <p>No valid geo coordinates found in the data.</p>
                    </div>
                );
            }

            return (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">
                        Location Map - {data.length} entries found
                    </h3>
                    <div className="bg-gray-800 rounded-xl overflow-hidden" style={{height: '70vh'}}>
                        <InteractiveMap data={mapData}/>
                    </div>
                </div>
            );
        }

        // Для остальных типов данных показываем обычные карточки
        return (
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                    Found {data.length} items
                </h3>
                {data.map((item, index) => (
                    <DataCard
                        key={index}
                        item={item}
                        dataType={selectedDataType}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <PlatformSelector
                platforms={PLATFORM_OPTIONS}
                selectedPlatform={selectedPlatform}
                selectedDataType={selectedDataType}
                onPlatformChange={setSelectedPlatform}
                onDataTypeChange={setSelectedDataType}
            />

            <Button
                onClick={fetchPlatformData}
                variant="primary"
                icon="fas fa-download"
                disabled={loading}
                fullWidth
            >
                {loading ? 'Loading...' : 'Fetch Data'}
            </Button>

            {renderContent()}
        </div>
    );
};

export default PlatformTab;
// components/tabs/PlatformTab.jsx
import React, { useState } from 'react';
import { useTelegram } from '../../contexts/TelegramContext';
import { API_CONFIG, PLATFORM_OPTIONS } from '../../config/api';
import PlatformSelector from '../PlatformSelector';
import DataCard from '../cards/DataCard';
import Button from '../ui/Button';

const PlatformTab = () => {
  const { userPayload } = useTelegram();
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

      {data.length > 0 ? (
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
      ) : !loading && (
        <p className="text-white text-center">No data found for the selected platform and type.</p>
      )}
    </div>
  );
};

export default PlatformTab;
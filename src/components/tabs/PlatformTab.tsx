import React, { useState } from "react";
import { useTelegram } from "../../contexts/TelegramContext";
import { API_CONFIG, PLATFORM_OPTIONS } from "../../config/api";
import PlatformSelector from "../PlatformSelector";
import DataCard from "../cards/DataCard";
import Button from "../ui/Button";
import InteractiveMap from "../cards/InteractiveMap";
import { GeoDataItem, RawGeoDataItem } from "@/src/types";

const PlatformTab: React.FC = () => {
  const { userPayload } = useTelegram();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("youtube");
  const [selectedDataType, setSelectedDataType] = useState<string>("yt_liked_videos");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPlatformData = async () => {
    setLoading(true);
    setData([]);

    try {
      const queryParams = new URLSearchParams({
        ...userPayload,
        data_type: selectedDataType,
      } as unknown as Record<string, string>).toString();

      const res = await fetch(`${API_CONFIG.BASE_URL}/data/${selectedPlatform}?${queryParams}`, {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": API_CONFIG.SKIP_BROWSER_WARNING,
        },
      });

      const result = await res.json();

      if (Array.isArray(result)) {
        setData(result);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err: unknown) {
      console.error(err instanceof Error ? `Error: ${err.message}` : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const transformGeoDataForMap = (geoData: RawGeoDataItem[]): GeoDataItem[] => {
    return geoData
      .map((item) => ({
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
        createdAt: item.createdAt,
      }))
      .filter((item) => !isNaN(item.geoLatitude) && !isNaN(item.geoLongitude));
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

    if (selectedDataType === "user_geo_data") {
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
          <div className="rounded-xl" style={{ height: "500px" }}>
            <InteractiveMap data={mapData} />
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Found {data.length} items
        </h3>
        {data.map((item, index) => (
          <DataCard key={index} item={item} dataType={selectedDataType} />
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
        {loading ? "Loading..." : "Fetch Data"}
      </Button>

      {renderContent()}
    </div>
  );
};

export default PlatformTab;

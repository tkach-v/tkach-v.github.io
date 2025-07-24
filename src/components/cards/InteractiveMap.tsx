import React, { useEffect, useRef, useState } from "react";
import * as L from "leaflet";

type Location = {
  geoLatitude: number | null;
  geoLongitude: number | null;
  geoCity: string;
  geoRegion: string;
  geoIp: string;
  device: string;
  os?: string;
  createdAt: string;
  geoCountry: string;
};

type InteractiveMapProps = {
  data: Location[];
};

const InteractiveMap: React.FC<InteractiveMapProps> = ({ data }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<Location | null>(null);

  useEffect(() => {
    const loadLeaflet = async () => {
      if (typeof window !== "undefined" && !window.L) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else if (window.L) {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (mapRef.current && !mapInstanceRef.current && window.L) {
        mapInstanceRef.current = window.L.map(mapRef.current, {
          center: [49.982, 36.2566],
          zoom: 6,
          zoomControl: true,
          attributionControl: false,
        });

        window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
          maxZoom: 18,
        }).addTo(mapInstanceRef.current);

        setTimeout(() => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
            addMarkers();
          }
        }, 100);
      }
    };

    const addMarkers = () => {
      if (!mapInstanceRef.current || !window.L) return;

      const markers: L.Marker[] = [];

      data.forEach((location, index) => {
        if (location.geoLatitude && location.geoLongitude) {
          const marker = (window as any).L.marker([location.geoLatitude, location.geoLongitude]).addTo(mapInstanceRef.current!);

          const popupContent = `
            <div style="font-family: system-ui, sans-serif;">
              <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 16px;">
                ${location.geoCity}, ${location.geoRegion}
              </h3>
              <p style="margin: 5px 0; font-size: 13px; color: #4b5563;">
                <strong>IP:</strong> ${location.geoIp}
              </p>
              <p style="margin: 5px 0; font-size: 13px; color: #4b5563;">
                <strong>Device:</strong> ${location.device}
              </p>
              <p style="margin: 5px 0; font-size: 13px; color: #4b5563;">
                <strong>OS:</strong> ${location.os}
              </p>
              <p style="margin: 5px 0; font-size: 13px; color: #4b5563;">
                <strong>Date:</strong> ${new Date(location.createdAt).toLocaleDateString()}
              </p>
            </div>
          `;

          marker.bindPopup(popupContent);

          marker.on("click", () => {
            setSelectedMarker(location);
          });

          markers.push(marker);
        }
      });

      if (markers.length > 0) {
        const group = new (window as any).L.featureGroup(markers);
        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
      }
    };

    void loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (mapInstanceRef.current && (window as any).L) {
      mapInstanceRef.current.eachLayer((layer: any) => {
        if (
          layer instanceof (window as any).L.Marker ||
          layer instanceof (window as any).L.Polyline
        ) {
          mapInstanceRef.current!.removeLayer(layer);
        }
      });

      const sortedData = [...data].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );

      const markers: L.Marker[] = [];
      const coordinates: [number, number][] = [];

      sortedData.forEach((location, index) => {
        if (location.geoLatitude && location.geoLongitude) {
          const latlng: [number, number] = [location.geoLatitude, location.geoLongitude];
          coordinates.push(latlng);

          const customIcon = window.L.divIcon({
            className: "custom-numbered-marker",
            html: `
              <div style="
                background: #3b82f6;
                color: white;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 12px;
                border: 2px solid white;
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
              ">
                ${index + 1}
              </div>
            `,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
          });

          const marker = (window as any).L.marker(latlng, { icon: customIcon }).addTo(mapInstanceRef.current!);

          const popupContent = `
            <div style="font-family: system-ui, sans-serif;">
              <h3 style="margin: 0 0 10px 0; color: #1f2937; font-size: 16px;">
                Visit #${index + 1}: ${location.geoCity}, ${location.geoRegion}
              </h3>
              <p style="margin: 5px 0; font-size: 13px; color: #4b5563;">
                <strong>IP:</strong> ${location.geoIp}
              </p>
              <p style="margin: 5px 0; font-size: 13px; color: #4b5563;">
                <strong>Device:</strong> ${location.device}
              </p>
              <p style="margin: 5px 0; font-size: 13px; color: #4b5563;">
                <strong>Date:</strong> ${new Date(location.createdAt).toLocaleString()}
              </p>
            </div>
          `;

          marker.bindPopup(popupContent);
          marker.on("click", () => setSelectedMarker(location));
          markers.push(marker);
        }
      });

      if (coordinates.length > 1) {
        const polyline = window.L.polyline(coordinates, {
          color: "#3b82f6",
          weight: 3,
          opacity: 0.8,
          smoothFactor: 1,
          dashArray: "5, 10",
        }).addTo(mapInstanceRef.current);

        coordinates.forEach((coord, index) => {
          if (index < coordinates.length - 1) {
            const nextCoord = coordinates[index + 1];
            const midpoint = [
              (coord[0] + nextCoord[0]) / 2,
              (coord[1] + nextCoord[1]) / 2,
            ];

            const angle = Math.atan2(nextCoord[1] - coord[1], nextCoord[0] - coord[0]) * 180 / Math.PI;

            const arrowIcon = window.L.divIcon({
              className: "direction-arrow",
              html: `
                <div style="
                  transform: rotate(${angle}deg);
                  font-size: 16px;
                  color: #3b82f6;
                  text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
                ">
                  ➤
                </div>
              `,
              iconSize: [20, 20],
              iconAnchor: [10, 10],
            });

            (window as any).L.marker(midpoint, { icon: arrowIcon }).addTo(mapInstanceRef.current);
          }
        });
      }

      if (markers.length > 0) {
        const group = new (window as any).L.featureGroup(markers);
        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
      }
    }
  }, [data]);

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleString();
  };

  const getCountryFlag = (countryCode: string): string => {
    return `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;
  };

  return (
    <div className="w-full h-full relative bg-gray-100 rounded-lg overflow-hidden">
      <div
        ref={mapRef}
        className="w-full h-full"
        style={{ minHeight: "400px" }}
      />

      <div
        className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 z-[1000] shadow-lg text-gray-800 text-sm">
        <h2 className="font-semibold mb-2">Location Analytics</h2>
        <div className="space-y-1">
          <div className="flex justify-between gap-4">
            <span>Total Locations:</span>
            <span className="font-semibold">{data.length}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>Countries:</span>
            <span className="font-semibold">
              {new Set(data.map(d => d.geoCountry)).size}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span>Cities:</span>
            <span className="font-semibold">
              {new Set(data.map(d => d.geoCity)).size}
            </span>
          </div>
        </div>
      </div>

      {selectedMarker && (
        <div
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 z-[1000] shadow-lg max-w-xs text-gray-800 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={getCountryFlag(selectedMarker.geoCountry)}
              alt={selectedMarker.geoCountry}
              className="rounded"
            />
            <h3 className="font-semibold">
              {selectedMarker.geoCity}
            </h3>
            <button
              onClick={() => setSelectedMarker(null)}
              className="ml-auto text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>

          <div className="space-y-1">
            <div>
              <span className="text-gray-600">Region:</span>
              <span className="ml-2">{selectedMarker.geoRegion}</span>
            </div>
            <div>
              <span className="text-gray-600">IP:</span>
              <span className="ml-2 font-mono text-xs">{selectedMarker.geoIp}</span>
            </div>
            <div>
              <span className="text-gray-600">Device:</span>
              <span className="ml-2">{selectedMarker.device}</span>
            </div>
            <div>
              <span className="text-gray-600">Time:</span>
              <span className="ml-2">{formatDate(selectedMarker.createdAt)}</span>
            </div>
          </div>
        </div>
      )}

      <div
        className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 z-[1000] shadow-lg max-w-xs max-h-48 overflow-y-auto text-gray-800 text-sm">
        <h3 className="font-semibold mb-2">Locations ({data.length})</h3>
        <div className="space-y-1">
          {data.map((location, index) => (
            <div
              key={index}
              className={`p-2 rounded cursor-pointer transition-colors ${
                selectedMarker === location
                  ? "bg-blue-100 border border-blue-300"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedMarker(location)}
            >
              <div className="flex items-center gap-2">
                <img
                  src={getCountryFlag(location.geoCountry)}
                  alt={location.geoCountry}
                  className="rounded w-4 h-3"
                />
                <div>
                  <div className="font-medium text-xs">{location.geoCity}</div>
                  <div className="text-xs text-gray-500">
                    {new Date(location.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
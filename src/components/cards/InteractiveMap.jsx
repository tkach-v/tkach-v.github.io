// components/cards/InteractiveMap.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as L from 'leaflet';

const InteractiveMap = ({ data }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([49.982, 36.2566], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstanceRef.current);
    }

    if (mapInstanceRef.current) {
      mapInstanceRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapInstanceRef.current.removeLayer(layer);
        }
      });

      const markers = [];
      data.forEach((location, index) => {
        if (location.geoLatitude && location.geoLongitude) {
          const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-pin">
                     <div class="marker-content">${location.geoCountry}</div>
                   </div>`,
            iconSize: [30, 40],
            iconAnchor: [15, 40]
          });

          const marker = L.marker([location.geoLatitude, location.geoLongitude], { icon })
            .addTo(mapInstanceRef.current);

          const popupContent = `
            <div class="marker-popup">
              <h3>${location.geoCity}, ${location.geoRegion}</h3>
              <p><strong>IP:</strong> ${location.geoIp}</p>
              <p><strong>Device:</strong> ${location.device}</p>
              <p><strong>OS:</strong> ${location.os}</p>
              <p><strong>Browser:</strong> ${location.browser}</p>
              <p><strong>Timezone:</strong> ${location.geoTimezone}</p>
              <p><strong>Date:</strong> ${new Date(location.createdAt).toLocaleDateString()}</p>
            </div>
          `;

          marker.bindPopup(popupContent);

          marker.on('click', () => {
            setSelectedMarker(location);
          });

          markers.push(marker);
        }
      });

      if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [data]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getCountryFlag = (countryCode) => {
    return `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;
  };

  return (
    <div className="w-full h-full bg-gray-900 text-white relative">
      <style jsx>{`
        .custom-marker {
          background: transparent;
          border: none;
        }
        .marker-pin {
          width: 30px;
          height: 40px;
          position: relative;
          background: #3b82f6;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 2px solid #1e40af;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .marker-pin:hover {
          background: #2563eb;
          transform: rotate(-45deg) scale(1.1);
        }
        .marker-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          font-size: 10px;
          font-weight: bold;
          color: white;
          text-align: center;
        }
        .marker-popup {
          font-family: system-ui, -apple-system, sans-serif;
        }
        .marker-popup h3 {
          margin: 0 0 10px 0;
          color: #1f2937;
          font-size: 16px;
        }
        .marker-popup p {
          margin: 5px 0;
          font-size: 13px;
          color: #4b5563;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .leaflet-container {
          background: #374151;
        }
      `}</style>

      <div ref={mapRef} className="w-full h-full" />

      <div className="absolute top-4 left-4 bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 z-[1000] shadow-lg">
        <h2 className="text-lg font-semibold mb-3 text-white">Location Analytics</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-300">Total Locations:</span>
            <span className="font-semibold text-white">{data.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Countries:</span>
            <span className="font-semibold text-white">
              {new Set(data.map(d => d.geoCountry)).size}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Cities:</span>
            <span className="font-semibold text-white">
              {new Set(data.map(d => d.geoCity)).size}
            </span>
          </div>
        </div>
      </div>

      {selectedMarker && (
        <div className="absolute top-4 right-4 bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 z-[1000] shadow-lg max-w-sm">
          <div className="flex items-center gap-2 mb-3">
            <img
              src={getCountryFlag(selectedMarker.geoCountry)}
              alt={selectedMarker.geoCountry}
              className="rounded"
            />
            <h3 className="text-lg font-semibold text-white">
              {selectedMarker.geoCity}
            </h3>
          </div>

          <div className="space-y-2 text-sm">
            <div>
              <span className="text-gray-300">Region:</span>
              <span className="ml-2 text-white">{selectedMarker.geoRegion}</span>
            </div>
            <div>
              <span className="text-gray-300">IP:</span>
              <span className="ml-2 font-mono text-white">{selectedMarker.geoIp}</span>
            </div>
            <div>
              <span className="text-gray-300">Device:</span>
              <span className="ml-2 text-white">{selectedMarker.device}</span>
            </div>
            <div>
              <span className="text-gray-300">Time:</span>
              <span className="ml-2 text-white">{formatDate(selectedMarker.createdAt)}</span>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4 bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 z-[1000] shadow-lg max-w-xs max-h-60 overflow-y-auto">
        <h3 className="font-semibold mb-3 text-white">All Locations ({data.length})</h3>
        <div className="space-y-2">
          {data.map((location, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg cursor-pointer transition-colors ${
                selectedMarker === location 
                  ? 'bg-blue-600' 
                  : 'bg-gray-700 hover:bg-gray-600'
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
                  <div className="font-medium text-white text-sm">{location.geoCity}</div>
                  <div className="text-xs text-gray-300">
                    {formatDate(location.createdAt)}
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
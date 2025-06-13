import React, {useEffect, useRef, useState} from 'react';

const InteractiveMap = ({data}) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const [selectedMarker, setSelectedMarker] = useState(null);

    useEffect(() => {
        const loadLeaflet = async () => {
            if (typeof window !== 'undefined' && !window.L) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                document.head.appendChild(link);

                const script = document.createElement('script');
                script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
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
                    attributionControl: false
                });

                window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors',
                    maxZoom: 18
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

            const markers = [];

            data.forEach((location, index) => {
                if (location.geoLatitude && location.geoLongitude) {
                    const marker = window.L.marker([location.geoLatitude, location.geoLongitude])
                        .addTo(mapInstanceRef.current);

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

                    marker.on('click', () => {
                        setSelectedMarker(location);
                    });

                    markers.push(marker);
                }
            });

            if (markers.length > 0) {
                const group = new window.L.featureGroup(markers);
                mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
            }
        };

        loadLeaflet();

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (mapInstanceRef.current && window.L) {
            mapInstanceRef.current.eachLayer((layer) => {
                if (layer instanceof window.L.Marker) {
                    mapInstanceRef.current.removeLayer(layer);
                }
            });

            const markers = [];
            data.forEach((location) => {
                if (location.geoLatitude && location.geoLongitude) {
                    const marker = window.L.marker([location.geoLatitude, location.geoLongitude])
                        .addTo(mapInstanceRef.current);

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
                <strong>Date:</strong> ${new Date(location.createdAt).toLocaleDateString()}
              </p>
            </div>
          `;

                    marker.bindPopup(popupContent);
                    marker.on('click', () => setSelectedMarker(location));
                    markers.push(marker);
                }
            });

            if (markers.length > 0) {
                const group = new window.L.featureGroup(markers);
                mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
            }
        }
    }, [data]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString();
    };

    const getCountryFlag = (countryCode) => {
        return `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;
    };

    return (
        <div className="w-full h-full relative bg-gray-100 rounded-lg overflow-hidden">
            <div
                ref={mapRef}
                className="w-full h-full"
                style={{minHeight: '400px'}}
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
                                    ? 'bg-blue-100 border border-blue-300'
                                    : 'hover:bg-gray-100'
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
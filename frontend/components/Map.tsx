'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet default icon issue
const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});


function LocationMarker({ onLocationSelect }: { onLocationSelect: (lat: number, lng: number) => void }) {
    const [position, setPosition] = useState<L.LatLng | null>(null);

    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng);
            onLocationSelect(e.latlng.lat, e.latlng.lng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position} icon={icon}>
            <Popup>Selected Location</Popup>
        </Marker>
    );
}

function MapFlyTo({ targetLocation }: { targetLocation: { lat: number, lng: number } | null }) {
    const map = useMapEvents({});
    // We compare coordinates precisely to avoid re-flying to same spot if parent re-renders
    // Using a ref or checking current center would be better, but simple state works for now 
    // if parent only sends NEW objects when search happens.

    // Actually, to be safe, we use a ref for the last target we processed
    const [lastProcessed, setLastProcessed] = useState<{ lat: number, lng: number } | null>(null);

    if (targetLocation) {
        const isSame = lastProcessed &&
            Math.abs(lastProcessed.lat - targetLocation.lat) < 0.000001 &&
            Math.abs(lastProcessed.lng - targetLocation.lng) < 0.000001;

        if (!isSame) {
            map.flyTo([targetLocation.lat, targetLocation.lng], 16, {
                duration: 1.5
            });
            setLastProcessed(targetLocation);
        }
    }

    return null;
}

export default function ZoningMap({ onLocationSelect, targetLocation }: { onLocationSelect: (lat: number, lng: number) => void, targetLocation?: { lat: number, lng: number } | null }) {
    return (
        <div className="h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 z-0 relative">
            <MapContainer
                center={[30.2672, -97.7431]} // Austin, TX
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker onLocationSelect={onLocationSelect} />
                <MapFlyTo targetLocation={targetLocation || null} />
                {targetLocation && <Marker position={[targetLocation.lat, targetLocation.lng]} icon={icon} />}
            </MapContainer>
        </div>
    );
}

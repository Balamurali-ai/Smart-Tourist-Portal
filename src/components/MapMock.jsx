import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function MapMock({ className = "" }) {
  // Example tourist coordinates (lat, lng)
  const tourists = [
    { id: 1, position: [28.6139, 77.2090], label: "Tourist A" }, // Delhi
    { id: 2, position: [19.0760, 72.8777], label: "Tourist B" }, // Mumbai
    { id: 3, position: [12.9716, 77.5946], label: "Tourist C" }, // Bangalore
  ]

  return (
    <div className={`relative ${className}`}>
      <MapContainer 
        center={[22.9734, 78.6569]} // Center: India
        zoom={5}
        style={{ height: "100%", width: "100%", borderRadius: "8px" }}
      >
        {/* Base map tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Tourist markers */}
        {tourists.map((t) => (
          <Marker key={t.id} position={t.position}>
            <Popup>{t.label}</Popup>
          </Marker>
        ))}

        {/* Example red hazard zone (circle) */}
        <Circle 
          center={[28.6139, 77.2090]} // Delhi
          radius={30000} // 30 km radius
          pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.2 }}
        />
      </MapContainer>
    </div>
  )
}

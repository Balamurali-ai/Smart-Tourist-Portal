export const stats = {
  activeTourists: 18882,
  ongoingAlerts: 15,
  missingReports: 4,
  responseRate: 96,
  avgResponseTime: 12,
}

export const tourists = [
  {
    id: "T-0799",
    name: "Asha Verma",
    itinerary: "Gateway -> Colaba -> Marine Drive",
    emergencyContacts: ["+91-98xxxxxx01"],
    safetyScore: 88,
  },
  {
    id: "T-1555",
    name: "Rahul Nair",
    itinerary: "Fort -> Churchgate -> Juhu",
    emergencyContacts: ["+91-98xxxxxx02"],
    safetyScore: 82,
  },
  {
    id: "T-1999",
    name: "Emily Chen",
    itinerary: "Old City -> Museum -> Park",
    emergencyContacts: ["+91-98xxxxxx03"],
    safetyScore: 91,
  },
  {
    id: "T-2455",
    name: "John Smith",
    itinerary: "City Palace -> Bazaar -> Lake",
    emergencyContacts: ["+91-98xxxxxx04"],
    safetyScore: 77,
  },
  {
    id: "T-2890",
    name: "Meera Kulkarni",
    itinerary: "Temple -> Market -> Beach",
    emergencyContacts: ["+91-98xxxxxx05"],
    safetyScore: 84,
  },
  {
    id: "T-3010",
    name: "Ankit Sharma",
    itinerary: "Museum -> Fort -> Theatre",
    emergencyContacts: ["+91-98xxxxxx06"],
    safetyScore: 73,
  },
  {
    id: "T-3221",
    name: "Sara Ali",
    itinerary: "Bazaar -> Garden -> Mall",
    emergencyContacts: ["+91-98xxxxxx07"],
    safetyScore: 89,
  },
  {
    id: "T-3550",
    name: "Luis Martinez",
    itinerary: "Harbor -> Old Town -> Gallery",
    emergencyContacts: ["+91-98xxxxxx08"],
    safetyScore: 86,
  },
  {
    id: "T-3777",
    name: "Kavya Menon",
    itinerary: "Science Center -> Park",
    emergencyContacts: ["+91-98xxxxxx09"],
    safetyScore: 92,
  },
  {
    id: "T-3998",
    name: "Zhang Wei",
    itinerary: "Market -> Cathedral -> Riverfront",
    emergencyContacts: ["+91-98xxxxxx10"],
    safetyScore: 80,
  },
]

export const alerts = [
  {
    id: "A-9001",
    touristId: "T-0799",
    title: "SOS triggered near Colaba",
    severity: "High",
    location: "Colaba",
    status: "Active",
    timestamp: Date.now() - 1000 * 60 * 5,
  },
  {
    id: "A-9002",
    touristId: "T-2455",
    title: "Prolonged Inactivity",
    severity: "Medium",
    location: "Old City",
    status: "Active",
    timestamp: Date.now() - 1000 * 60 * 15,
  },
  {
    id: "A-9003",
    touristId: "T-1555",
    title: "Route Deviation detected",
    severity: "Low",
    location: "Juhu Road",
    status: "Active",
    timestamp: Date.now() - 1000 * 60 * 38,
  },
  {
    id: "A-9004",
    touristId: "T-3010",
    title: "Lost network, last ping 25m ago",
    severity: "Medium",
    location: "Fort Area",
    status: "Active",
    timestamp: Date.now() - 1000 * 60 * 25,
  },
  {
    id: "A-9005",
    touristId: "T-3777",
    title: "Panic Button Pressed",
    severity: "High",
    location: "City Park",
    status: "Active",
    timestamp: Date.now() - 1000 * 60 * 2,
  },
  {
    id: "A-9006",
    touristId: "T-2890",
    title: "Group separated alert",
    severity: "Low",
    location: "Temple Street",
    status: "Active",
    timestamp: Date.now() - 1000 * 60 * 65,
  },
  {
    id: "A-9007",
    touristId: "T-3221",
    title: "Unusual speed drop",
    severity: "Low",
    location: "Garden Avenue",
    status: "Active",
    timestamp: Date.now() - 1000 * 60 * 90,
  },
]

export const anomalies = {
  flagged: [
    { touristId: "T-0799", name: "Asha Verma", state: "Distress", reason: "SOS + inside high-risk zone" },
    { touristId: "T-2455", name: "John Smith", state: "Silent", reason: "No movement 45m" },
    { touristId: "T-3010", name: "Ankit Sharma", state: "Missing", reason: "Device offline 30m" },
  ],
  movementSeries: [
    { t: "10:00", speed: 4.2, deviation: 0.2 },
    { t: "10:10", speed: 1.0, deviation: 1.2 },
    { t: "10:20", speed: 0.4, deviation: 1.6 },
    { t: "10:30", speed: 3.2, deviation: 0.6 },
    { t: "10:40", speed: 4.0, deviation: 0.3 },
    { t: "10:50", speed: 2.1, deviation: 0.9 },
  ],
  counts: [
    { type: "Inactivity", count: 12 },
    { type: "Route Deviation", count: 8 },
    { type: "SOS", count: 5 },
    { type: "Offline", count: 7 },
  ],
}

export const reports = {
  density: Array.from({ length: 24 }, (_, i) => ({
    t: `${i}:00`,
    count: Math.round(500 + Math.sin(i / 3) * 120 + Math.random() * 60),
  })),
  alertsFreq: [
    { day: "Mon", high: 4, medium: 9, low: 15 },
    { day: "Tue", high: 2, medium: 7, low: 12 },
    { day: "Wed", high: 6, medium: 8, low: 11 },
    { day: "Thu", high: 3, medium: 9, low: 10 },
    { day: "Fri", high: 5, medium: 12, low: 18 },
    { day: "Sat", high: 7, medium: 10, low: 19 },
    { day: "Sun", high: 3, medium: 6, low: 9 },
  ],
  responseTimes: Array.from({ length: 12 }, (_, i) => ({
    t: `${i * 2}:00`,
    avg: Math.round(10 + Math.sin(i / 2) * 3 + Math.random() * 2),
  })),
}

export const users = [
  { id: 1, name: "Inspector Rao", department: "Police", role: "Admin" },
  { id: 2, name: "Officer Mehta", department: "Police", role: "Responder" },
  { id: 3, name: "Anita Iyer", department: "Tourism Dept.", role: "Coordinator" },
  { id: 4, name: "Sameer Khan", department: "Tourism Dept.", role: "Analyst" },
]

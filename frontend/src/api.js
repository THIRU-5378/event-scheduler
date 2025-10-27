const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';




export async function fetchEvents(params = '') {
const res = await fetch(`${API_BASE}/events${params ? `?${params}` : ''}`);
return res.json();
}




export async function createEvent(payload) {
const res = await fetch(`${API_BASE}/events`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
});
return res.json();
}




export async function deleteEvent(id) {
await fetch(`${API_BASE}/events/${id}`, { method: 'DELETE' });
}




export async function updateEvent(id, payload) {
const res = await fetch(`${API_BASE}/events/${id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
});
return res.json();
}
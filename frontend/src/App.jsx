import React, { useEffect, useState } from 'react'
import { fetchEvents, createEvent, deleteEvent } from './api'
import EventForm from './components/EventForm'
import EventList from './components/EventList'


export default function App() {
const [events, setEvents] = useState([])


async function load() {
const data = await fetchEvents();
setEvents(data || []);
}


useEffect(() => { load() }, [])


async function handleCreate(ev) {
const created = await createEvent(ev)
setEvents(prev => [...prev, created].sort((a,b)=>new Date(a.date)-new Date(b.date)))
}


async function handleDelete(id) {
await deleteEvent(id)
setEvents(prev => prev.filter(e => e._id !== id))
}


return (
<div className="container">
<h1>Event Scheduler</h1>
<EventForm onCreate={handleCreate} />
<EventList events={events} onDelete={handleDelete} />
</div>
)
}
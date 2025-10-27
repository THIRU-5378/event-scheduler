import React, { useState } from 'react'


export default function EventForm({ onCreate }) {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [date, setDate] = useState('')
const [allDay, setAllDay] = useState(false)


async function submit(e) {
e.preventDefault();
if (!title || !date) return alert('Title and date required')
await onCreate({ title, description, date, allDay })
setTitle(''); setDescription(''); setDate(''); setAllDay(false)
}


return (
<form className="event-form" onSubmit={submit}>
<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Event title" />
<input value={date} onChange={e=>setDate(e.target.value)} type="datetime-local" />
<textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder="Description (optional)" />
<label>
<input type="checkbox" checked={allDay} onChange={e=>setAllDay(e.target.checked)} /> All day
</label>
<button type="submit">Add event</button>
</form>
)
}
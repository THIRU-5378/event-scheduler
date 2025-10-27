import React from 'react'


export default function EventList({ events = [], onDelete }) {
if (!events.length) return <p>No events yet — add one!</p>


return (
<ul className="event-list">
{events.map(ev => (
<li key={ev._id} className="event-item">
<div>
<strong>{ev.title}</strong>
<div className="date">{new Date(ev.date).toLocaleString()}</div>
{ev.description && <div className="desc">{ev.description}</div>}
</div>
<div>
<button onClick={()=>onDelete(ev._id)}>Delete</button>
</div>
</li>
))}
</ul>
)
}
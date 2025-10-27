const express = require('express');
const router = express.Router();
const Event = require('../models/Event');


// Create event
router.post('/', async (req, res) => {
try {
const ev = new Event(req.body);
const saved = await ev.save();
res.status(201).json(saved);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// List events (optionally by date range query: ?from=&to=)
router.get('/', async (req, res) => {
try {
const { from, to } = req.query;
const query = {};
if (from || to) {
query.date = {};
if (from) query.date.$gte = new Date(from);
if (to) query.date.$lte = new Date(to);
}
const events = await Event.find(query).sort({ date: 1 });
res.json(events);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// Get single event
router.get('/:id', async (req, res) => {
try {
const ev = await Event.findById(req.params.id);
if (!ev) return res.status(404).json({ error: 'Not found' });
res.json(ev);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// Update
router.put('/:id', async (req, res) => {
try {
const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(updated);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// Delete
router.delete('/:id', async (req, res) => {
try {
await Event.findByIdAndDelete(req.params.id);
res.json({ ok: true });
} catch (err) {
res.status(500).json({ error: err.message });
}
});


module.exports = router;
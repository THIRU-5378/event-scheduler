const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const eventsRouter = require('./routes/events');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/events', eventsRouter);


const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI;


mongoose
.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('Connected to MongoDB');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => {
console.error('Mongo connection error', err);
});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const participantRoutes = require('./Routes/participantRoute.js');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connecté avec succès"))
  .catch(err => console.error("Erreur de connexion à MongoDB :", err));


app.use('/api', participantRoutes);

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));

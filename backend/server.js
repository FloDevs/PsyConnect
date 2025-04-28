import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

// Chargement des variables d'environnement
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connexion à MongoDB puis lancement du serveur
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connecté à MongoDB');
  app.listen(PORT, () => console.log(`✅ Serveur lancé sur http://localhost:${PORT}`));
})
.catch((error) => {
  console.error('❌ Erreur de connexion MongoDB:', error);
});

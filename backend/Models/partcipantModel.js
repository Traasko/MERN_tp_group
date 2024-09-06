const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  typeBillet: { type: String, enum: ['standard', 'VIP'], default: 'standard' },
  statut: { type: String, enum: ['Inscrit', 'Non-Inscrit'], default: 'inscrit' },
  dateInscription: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Participant', participantSchema);

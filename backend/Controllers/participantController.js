const Participant = require('../Models/partcipantModel');

exports.ajouterParticipant = async (req, res) => {
  const nouveauParticipant = new Participant(req.body);
  try {
    await nouveauParticipant.save();
    res.status(201).json(nouveauParticipant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.obtenirParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.modifierParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!participant) return res.status(404).json({ message: 'Participant non trouvé' });
    res.json(participant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.supprimerParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndDelete(req.params.id);
    if (!participant) return res.status(404).json({ message: 'Participant non trouvé' });
    res.json({ message: 'Participant supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const express = require('express');
const router = express.Router();
const participantController = require('../Controllers/participantController');

router.post('/participants', participantController.ajouterParticipant);
router.get('/participants', participantController.obtenirParticipants);
router.put('/participants/:id', participantController.modifierParticipant);
router.delete('/participants/:id', participantController.supprimerParticipant);

module.exports = router;

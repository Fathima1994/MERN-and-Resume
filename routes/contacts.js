const express = require('express');
const router = express.Router();
const { getContacts, addContact} = require('../controllers/contactsController');

router
    .route('/')
    .get(getContacts)
    .post(addContact);

module.exports = router;

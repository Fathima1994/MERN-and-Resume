const express = require('express');
const router = express.Router();
const { getContacts, addContact, deleteContact} = require('../controllers/contactsController');

router
    .route('/')
    .get(getContacts)
    .post(addContact);

router
.route('/:id')
.delete(deleteContact)

module.exports = router;

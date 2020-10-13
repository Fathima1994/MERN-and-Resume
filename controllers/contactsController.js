const Contact = require('../models/Contact');

// @desc Get all the contact messages
// @route GET /api/v1/contacts
// @access Public
exports.getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        return res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc Add contact message
// @route POST /api/v1/contacts
// @access Public
exports.addContact = async (req, res, next) => {
    try {
        const {name, email, message} = req.body;
        const contact = await Contact.create(req.body);
        return res.status(201).json({
            success: true,
            data: contact
        })
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success:false,
                error: messages
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}

// @desc Delete contact
// @route DELETE /api/v1/contacts/:id
// @access Public
exports.deleteContact = async (req, res, next) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if(!contact) {
            return res.status(404).json({
                success: false,
                data: "No Contact found"
            })
        }
        await contact.remove();
        return res.status(200).json({
            status: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

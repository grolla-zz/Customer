let CustomerModel = require('../models/customer.model');
let express       = require('express');
let router        = express.Router();




router.post('/customer', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    } else {
        let model = new CustomerModel(req.body);
        model.save()
             .then(doc => {
                 if (!doc || doc - length === 0) {
                     return res.status(500).send(`Inserito con successo ${doc}`)
                 }
                 res.status(201).send(doc);

             }).catch(err => {
            res.status(500).json(err);
        });
    }
});

router.get('/customer/find', (req, res) => {
    if (!req.query.email) {
        return res.status(400).send("missing query string parameter");
    }
    CustomerModel.findOne({
        email: req.query.email
    }).then(doc => {
        res.json(doc);
    }).catch(err => {
        res.status(500).json(err)
    })
});


router.put('/customer/update', (req, res) => {
    if (!req.body.email) {
        return res.status(400).send("missing query string parameter");
    }
    CustomerModel.findOneAndUpdate({
        email: req.body.email
    }, req.body, {
        new: true
    }).then(doc => {
        res.json(doc);
    }).catch(err => {
        res.status(500).json(err)
    })
});

router.delete('/customer/delete', (req, res) => {
    if (!req.body.email) {
        return res.status(400).send("missing query string parameter");
    }
    CustomerModel.findOneAndRemove({
        email: req.query.email
    }).then(doc => {
        res.json(doc);
    }).catch(err => {
        res.status(500).json(err)
    })
});

module.exports = router;

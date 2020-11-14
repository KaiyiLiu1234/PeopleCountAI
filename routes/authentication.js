const router = require("express").Router();
//const db;
const BusinessModel = require("../data_models/Business");
const {registrationBusinessVerification} = require('../routes/basic_validation');

router.post('/register', async (req, res, next) => {
    const { error } = registrationBusinessVerification(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    } else {
        //verify business email is not already in database
        const checkEmailExists = await BusinessModel.findOne({})
        //access model to call mongodb functions :)

        let value = Math.random();
        while (value < 0.1) {
            value = Math.random();
        }
        let secretToken = Math.floor(value * 1000000);
        const businessUser = new BusinessModel({
            email: req.body.email,
            pass: req.body.pass,
            companyName: req.body.companyName,
            address: req.body.address,
            postalCode: req.body.postalCode,
            description: req.body.description,
            maxNumberOfPeople: req.body.maxNumberOfPeople,
            verificationToken: secretToken,
        });
        try {
            const savedUser = await businessUser.save();
            res.send(savedUser);
        } catch (err) {
            res.status(400).send(err);

        }
    }
});

module.exports = router;
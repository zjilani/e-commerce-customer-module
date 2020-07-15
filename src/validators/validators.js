const HttpError = require('../models/errors/httpError')

exports.validateCreateCustomerRequest = function (req, res, done) {
    if (!req.body.userName) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'userName is missing'))
    }else if (!req.body.mobileNo) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'mobileNo is missing'))
    }else if (!req.body.email) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'email is missing'))
    }else if (!req.body.password) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'password is missing'))
    }
    else {
        done()
    }
}

exports.validateGetCustomerRequest = function (req, res, done) {
    if (!req.query.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId is missing'))
    }
    else {
        done()
    }
}

exports.validateUpdateCustomerRequest = function (req, res, done) {
    if (!req.query.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId is missing'))
    }
    else {
        done()
    }
}
exports.validateLoginVerification = function (req, res, done) {
    if (!req.body.password) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'password is missing'))
    }
    else if (!(req.body.email || req.body.mobileNo)) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'email or mobileNo is missing'))
    }
    else {
        done()
    }
}
exports.validateCustomerFeedback = function (req, res, done) {
    if (!req.body.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId is missing'))
    }else if (!req.body.productId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'productId is missing'))
    }else if (!req.body.rating) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'rating is missing'))
    }
    else {
        done()
    }
}
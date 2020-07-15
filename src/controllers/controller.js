const services = require('../services/services')
const HttpError = require('../models/errors/httpError')

// Create a new folder in Documer Service
exports.createCustomer= async (req, res) => {
    try {
        let response = await services.createCustomer(req.fastify, req.body)
        if(response.response  === "Mobile Number Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Mobile Number already exists")
        }
        if(response.response  === "Email Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Email already exists")
        }

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Create Customer Failed", e.message)
    }
}
exports.getCustomer= async (req, res) => {
    try {
        let response = await services.getCustomer(req.fastify, req.query)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check CustomerId")
        }

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Get Customer Failed", e.message)
    }
}
exports.updateCustomer = async (req, res) => {
    try {
        let response = await services.updateCustomer(req.fastify, req.body,req.query)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check CustomerId")
        }

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Get Customer Failed", e.message)
    }
}
exports.loginVerification= async (req, res) => {
    try {
        console.log(req.body)
        let response = await services.loginVerification(req.fastify, req.body)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check Credentials")
        }

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        console.log(e)
        throw new HttpError('failiure', 2001, "Login Verification Failed", e.message)
    }
}
exports.customerFeedback= async (req, res) => {
    try {
        console.log(req.body)
        let response = await services.customerFeedback(req.fastify, req.body)
        if(response.response  === "Not Found"){
            res.code(400)
            throw new HttpError('failiure', 22005, "Check Credentials")
        }

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        console.log(e)
        throw new HttpError('failiure', 2001, "Customer Feedback Failed", e.message)
    }
}
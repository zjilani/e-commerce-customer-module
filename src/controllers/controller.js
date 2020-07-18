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
        throw new HttpError('failiure', 2001, "Update Customer Failed", e.message)
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
exports.customerDetail= async (req, res) => {
    try {
        let response = await services.customerDetail(req.fastify,req.body)

        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        console.log(e)
        throw new HttpError('failiure', 2001, "Customer Details Failed", e.message)
    }
}
exports.updateToken =  async (req, res) => {
    try {
        let response = await services.updateToken(req.fastify,req.body)

        return res.status(201).send({
            status: 'success',
            data: response,
            message : "Token Updated..."

        })
    } catch (e) {
        res.code(500)
        console.log(e)
        throw new HttpError('failiure', 2001, "Update Token Failed", e.message)
    }
}
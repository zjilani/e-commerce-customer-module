const services = require('../services/services')
const HttpError = require('../models/errors/httpError')

// Create a new folder in Documer Service
exports.createCustomer= async (req, res) => {
    try {
        let response = await services.createCustomer(req.fastify, req.body)

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failiure', 2001, "Create Customer Failed", e.message)
    }
}

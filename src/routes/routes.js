const controllers = require('../controllers/controller')
const validators = require('../validators/validators')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "POST",
        url: "/createCustomer",
        handler: controllers.createCustomer,
        schema: documentation.createCustomer,
        preValidation: validators.validateCreateCustomerRequest
    }
    
]


module.exports = routes
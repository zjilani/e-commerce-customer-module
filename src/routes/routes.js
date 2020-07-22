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
    },
    {
        method: "GET",
        url: "/getCustomer",
        handler: controllers.getCustomer,
        schema: documentation.getCustomer,
        preValidation: validators.validateGetCustomerRequest
    },
    {
        method: "POST",
        url: "/updateCustomer",
        handler: controllers.updateCustomer,
        schema: documentation.updateCustomer,
        preValidation: validators.validateUpdateCustomerRequest
    },
    {
        method: "POST",
        url: "/customerFeedback",
        handler: controllers.customerFeedback,
        schema: documentation.customerFeedback,
        preValidation: validators.validateCustomerFeedback
    },
    {
        method: "POST",
        url: "/customerDetail",
        handler: controllers.customerDetail,
        schema: documentation.customerDetail
    },
    {
        method: "POST",
        url: "/updateToken",
        handler: controllers.updateToken,
        schema: documentation.updateToken
    },
    {
        method: "POST",
        url: "/customerHistory",
        handler: controllers.customerHistory,
        schema: documentation.customerHistory
    }
    
]


module.exports = routes
const Customer = require("../models/Customer")
const Collection = require("../models/Collection")

const createCustomer = async (fastify,createCustomerRequest) =>{
    
    let collection = await Collection.findOne({})
    if(collection === null){
        await new Collection({noOfCustomers:0}).save()
        collection = await Collection.findOne({})
    }
    
    collection.noOfCustomers += 1
    
    const customer = new Customer({
        customerId:"Customer_"+collection.noOfCustomers,
        ...createCustomerRequest
    })
    
    await new Collection(collection).save()


    return customer.save()
}

const getCustomer  = async (fastify,getCustomerRequest) =>{
    
    const customer = await Customer.findOne({customerId:getCustomerRequest.customerId})
    console.log(customer)
    if(!customer){
        return {
            response:"Not Found"
        }
    }

    return customer
}


module.exports ={
    createCustomer,
    getCustomer
}
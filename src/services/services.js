const Customer = require("../models/Customer")
const Feedback = require("../models/Feedback")
const History = require("../models/History")
const Collection = require("../models/Collection")

const createCustomer = async (fastify,createCustomerRequest) =>{
    
    let collection = await Collection.findOne({})
    if(collection === null){
        await new Collection({noOfCustomers:0}).save()
        collection = await Collection.findOne({})
    }
    
    collection.noOfCustomers += 1
    const email = await Customer.findOne({email : createCustomerRequest.email})
    const mobileNo = await Customer.findOne({mobileNo : createCustomerRequest.mobileNo})
    if(mobileNo){
        return { response: "Mobile Number Found"}
    }
    if(email){
        return { response: "Email Found"}
    }
    
    const customer = new Customer({
        customerId:"Customer_"+collection.noOfCustomers,
        ...createCustomerRequest
    })
    
    await new Collection(collection).save()


    return customer.save()
}

const getCustomer  = async (fastify,getCustomerRequest) =>{
    
    const customer = await Customer.findOne({customerId:getCustomerRequest.customerId})
    
    if(!customer){
        return {
            response:"Not Found"
        }
    }

    return customer
}

const updateCustomer  = async (fastify,updateCustomerBody,updateCustomerQuery) =>{
    
    const customer = await Customer.findOne({customerId:updateCustomerQuery.customerId})
    if(!customer){
        return {response:"Not Found"}
    }
    const updates = Object.keys(updateCustomerBody)
    
    
    updates.forEach((update)=> customer[update]=updateCustomerBody[update])

    return customer.save()
}

const customerFeedback  = async (fastify,customerFeedback) =>{
    const feedBack = new Feedback({...customerFeedback})

    return feedBack.save()
}

const customerDetail = async (fastify,customerDetailRequest) =>{
    const customer =  await Customer.find(customerDetailRequest)

    return customer
}
const updateToken = async (fastify,updateTokenRequest) =>{
    const customer =  await Customer.findOne({customerId:updateTokenRequest.customerId})
    const token = updateTokenRequest.token
    customer.tokens = customer.tokens.concat({ token });
    
    console.log(customer.tokens)
    await customer.save();

    return customer
}
const customerHistory = async (fastify,customerHistoryRequest) =>{
        const history = new History({...customerHistoryRequest})

         await history.save()
        
        return {response: "Done"}
    
}


module.exports ={
    createCustomer,
    getCustomer,
    updateCustomer,
    customerFeedback,
    customerDetail,
    updateToken,
    customerHistory
}
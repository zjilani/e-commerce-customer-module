exports.createCustomer = {
    description: 'Create a new customer in Customer Service',
    tags: ["Customers"],
    summary: 'Create a customer',
    body: {
        "type": "object",
        "properties": {
            "userName": {
                "type": "string"
            },
            "mobileNo": {
                "type": "number"
            },
            "email":{
                "type":"string",
            },
            "password":{
                "type":"string",
            },
            "markForDelete":{
                "type":"boolean",
                "default":"false",
                
            }
        },
        "required": [
            "userName",
            "mobileNo",
            "email",
            "password"
        ]
    },
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "customerId":{
                            "type": "string",
                        },
                        "userName": {
                            "type": "string"
                        },
                        "mobileNo": {
                            "type": "number"
                        },
                        "email":{
                            "type":"string",
                        },
                        "password": {
                            "type": "string"
                        },
                        "markForDelete":{
                            "type":"boolean",
                        }
                    },
                    "required": [
                        "customerId",
                        "userName",
                        "mobileNo",
                        "email",
                        "password",
                        "markForDelete"
                    ]
                },
            },
                    "required": [
                            "status",
                            "data"
                            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
    }
    exports.getCustomer = {
        description: 'Getting customer in Customer Service',
        tags: ["Customers"],
        summary: 'Get customerInfo',
        query: {
            "type": "object",
            "properties": {
                "customerId": {
                    "type": "string"
                }
            },
            "required": [
                "customerId"
            ]
        },
        response: {
            201: {
                description: 'Successful response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string",
                        "enum": ['failure', 'success'],
                    },
                    "message": {
                        "type": "string"
                    },
                    "data": {
                        "type": "object",
                        "properties": {
                            "customerId":{
                                "type": "string",
                            },
                            "userName": {
                                "type": "string"
                            },
                            "mobileNo": {
                                "type": "number"
                            },
                            "email":{
                                "type":"string",
                            },
                            "password": {
                                "type": "string"
                            },
                            "markForDelete":{
                                "type":"boolean",
                            },
                            "otpVerified":{
                                "type":"boolean"
                            },
                            "otp": {
                                "type":"string"
                            }
                        },
                        "required": [
                            "customerId",
                            "userName",
                            "mobileNo",
                            "email",
                            "password",
                            "markForDelete",
                            "otpVerified",
                            "otp"
                        ]
                    },
                },
                        "required": [
                                "status",
                                "data"
                                ]
            }, 400: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code"
                ]
            },
            500: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code",
                    "errorCause"
                ]
            }
        }
        }
        exports.updateCustomer = {
            description: 'Updating Customer Info in Customer Service',
            tags: ["Customers"],
            summary: 'Updating Customer Info',
            query: {
                "type": "object",
                "properties": {
                    "customerId":{
                        "type": "string",
                    }
                },
                    "required": [
                        "customerId"
                    ]
            },
            body: {
                "type": "object",
                "properties": {
                    "userName": {
                        "type": "string"
                    },
                    "mobileNo": {
                        "type": "number"
                    },
                    "email":{
                        "type":"string",
                    },
                    "password":{
                        "type":"string",
                    },
                    "markForDelete":{
                        "type":"boolean",
                        "default":"false",
                        
                    },
                    "otpVerified": {
                        "type": "boolean",
                        "default":"false",
                    },
                    "otp": {
                        "type":"string"
                    },
                    // "tokens":{
                    //     "type":"array",
                    //     "properties": {
                    //         "token":{
                    //             "type":"string"
                    //         }
                    //     }
                    // }
                },
                "required": [
                    
                ]
            },
            response: {
                201: {
                    description: 'Successful response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string",
                            "enum": ['failure', 'success'],
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "object",
                            "properties": {
                                "customerId":{
                                    "type": "string",
                                },
                                "userName": {
                                    "type": "string"
                                },
                                "mobileNo": {
                                    "type": "number"
                                },
                                "email":{
                                    "type":"string",
                                },
                                "password": {
                                    "type": "string"
                                },
                                "markForDelete":{
                                    "type":"boolean",
                                },
                                "otpVerified": {
                                    "type": "boolean",
                                    "default":"false",
                                },
                                "otp": {
                                    "type":"string"
                                },
                                "tokens":{
                                    "type":"array",
                                    "properties": {
                                        "token":{
                                            "type":"string"
                                        }
                                    }
                                }
                            },
                            "required": [
                                "customerId",
                                "userName",
                                "mobileNo",
                                "email",
                                "password",
                                "markForDelete",
                                "otpVerified",
                                "otp"
                            ]
                        },
                    },
                            "required": [
                                    "status",
                                    "data"
                                    ]
                }, 400: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code"
                    ]
                },
                500: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code",
                        "errorCause"
                    ]
                }
            }
        }
        
        exports.customerFeedback= {
            description: 'Create Customer Feedback in Customer Service',
            tags: ["Customers"],
            summary: 'Customer Feedback',
            body: {
                "type": "object",
                "properties": {
                    "productId": {
                        "type": "string"
                    },
                    "customerId": {
                        "type": "string"
                    },
                    "rating":{
                        "type": "number"
                    },
                    "feedback":{
                        "type":"string",
                    }
                },
                "required": [
                    "productId",
                    "customerId",
                    "rating"
                ]
            },
            response: {
                201: {
                    description: 'Successful response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string",
                            "enum": ['failure', 'success'],
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "object",
                            "properties": {
                                "productTd": {
                                    "type": "string"
                                },
                                "customerId": {
                                    "type": "string"
                                },
                                "rating":{
                                    "type": "number"
                                },
                                "feedback":{
                                    "type":"string",
                                }
                            },
                            "required": [
                                "productId",
                                "customerId",
                                "rating",
                                "feedback"
                            ]
                        },
                    },
                            "required": [
                                    "status",
                                    "data"
                                    ]
                }, 400: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code"
                    ]
                },
                500: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code",
                        "errorCause"
                    ]
                }
            }
            }
            exports.customerDetail = {
                description: 'Create a new customer in Customer Service',
                tags: ["MISC"],
                summary: 'Customer Details',
                body: {
                    "type": "object",
                    "properties": {
                        "userName": {
                            "type": "string"
                        },
                        "mobileNo": {
                            "type": "number"
                        },
                        "email":{
                            "type":"string",
                        },
                        "password":{
                            "type":"string",
                        }
                    },
                    "required": [
                        
                    ]
                },
                response: {
                    201: {
                        description: 'Successful response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string",
                                "enum": ['failure', 'success'],
                            },
                            "message": {
                                "type": "string"
                            },
                            "data": {
                                "type": "object",
                                "properties": {
                                    "customerId":{
                                        "type": "string",
                                    },
                                    "userName": {
                                        "type": "string"
                                    },
                                    "mobileNo": {
                                        "type": "number"
                                    },
                                    "email":{
                                        "type":"string",
                                    },
                                    "password": {
                                        "type": "string"
                                    },
                                    "markForDelete":{
                                        "type":"boolean",
                                    }
                                },
                                "required": [
                                    "customerId",
                                    "userName",
                                    "mobileNo",
                                    "email",
                                    "password",
                                    "markForDelete"
                                ]
                            },
                        },
                                "required": [
                                        "status",
                                        "data"
                                        ]
                    }, 400: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code"
                        ]
                    },
                    500: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code",
                            "errorCause"
                        ]
                    }
                }
                }
                exports.updateToken = {
                    description: 'Updating token of a customer in Customer Service',
                    tags: ["MISC"],
                    summary: 'Updating token of a customer',
                    body: {
                        "type": "object",
                        "properties": {
                            "customerId": {
                                "type": "string"
                            },
                            "token": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "customerId",
                            "token"
                        ]
                    },
                    response: {
                        201: {
                            description: 'Successful response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string",
                                    "enum": ['failure', 'success'],
                                },
                                "message": {
                                    "type": "string"
                                },
                                
                            },
                                    "required": [
                                            "status"
                                            // "data"
                                            ]
                        }, 400: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code"
                            ]
                        },
                        500: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code",
                                "errorCause"
                            ]
                        }
                    }
                    }
const zod =  require('zod');

const signupBodyValidator = zod.object({
        userName : zod.string({
            required_error : "userName is required",
        }),
        email : zod.string({
            
        }).email({ message: "Invalid email address" }),
        firstName : zod.string(),
        lastName : zod.string().optional(),
        password : zod.string().min(8),
        confirmPassword: zod.string().min(8),
        isVerified :  zod.boolean().optional(),
        phoneNumber : zod.string()
}).required({
    email :true,
    userName : true,
    password : true,
    firstName: true,
    phoneNumber: true
})

const EmailSigninBodyValidator = zod.object({
    email : zod.string().email(),
    password : zod.string()
})

const updateBodyValidator = zod.object({
    phoneNumber:zod.string().optional(),
    email: zod.string().optional(),
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

module.exports = {
    signupBodyValidator,
    EmailSigninBodyValidator,
    updateBodyValidator,
}
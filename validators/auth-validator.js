const {z}=require("zod");

//creating an object schema

const signupSchema=z.object({

    username:z
    .string({required_error:"Name is Requires"}).trim().min(3, {message:"Name must be atleast 3 characters"})
    .max(255,{message:"Name must not have more than 255 characters"}),
    
    email:z
    .string({required_error:"Name is Requires"}).trim().min(3, {message:"Email must be atleast 3 characters"})
    .max(255,{message:"Name must not have more than 255 characters"}),
    
    phone:z
    .string({required_error:"Name is Requires"}).trim().min(10, {message:"Phone Number must be atleast 10 characters"})
    .max(20,{message:"Name must not have more than 20 characters"}),
    
    password:z
    .string({required_error:"Name is Requires"}).trim().min(7, {message:"Passsword must be atleast 7 characters"})
    .max(1024,{message:"Name must not have more than 1024 characters"}),

});



module.exports={signupSchema};








// const loginSchema=z.object({

//     email:z
//     .string({required_error:"Name is Requires"}).trim().min(3, {message:"Name must be atleast 3 characters"})
//     .max(255,{message:"Name must not have more than 255 characters"}),

//     password:z
//     .string({required_error:"Name is Requires"}).trim().min(7, {message:"Name must be atleast 7 characters"})
//     .max(1024,{message:"Name must not have more than 1024 characters"}),
// });
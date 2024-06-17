const errorMiddleware=(err,req,res,next)=>{
const status=err.status || 500;
const message=err.message || "BACKEND ERROR";
const extraDetails=err.extraDetails || "error from Backend";

return res.status(status).json({message,extraDetails}); 

};

module.exports=errorMiddleware;





 //next(error) is a middleware which will redirect here in this page if error occurs anywhere
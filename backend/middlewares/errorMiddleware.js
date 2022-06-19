const notFound = (req,res,next)=>{
    const error = new Error(`not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (err, req,res,next) =>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode

    console.log('we are  here and we are waiting something to show')
    
    res.status(statusCode);    
    res.json({
        message: err.massage,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })

}

module.exports = {notFound, errorHandler};

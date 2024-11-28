

const  verifyAdmin = (req, res, next) => {
    if(req.role !== 'admin') {
        return res.status(403).send({sucess: false, message: 'You are not authoriized to perform this action'})

    }
    next();
}


module.exports = verifyAdmin
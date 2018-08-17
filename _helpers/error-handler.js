// export out created custom error handler function
module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: err.message });
    }

    //occurs when there is a problem with JWT authorization, or user tries to access page through changing url
    if (err.name === 'UnauthorizedError') {
        console.log('error')
        return res.status(401).json({ message: err.message });
    }

    return res.status(500).json({ message: err.message });

}
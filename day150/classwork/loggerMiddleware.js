const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log(Datae.now());
    next();
}

module.exports = loggerMiddleware;
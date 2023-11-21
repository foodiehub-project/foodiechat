function errorHandler(error, req, res, next) {
    console.log(error) //for development only
    switch(error.name) {
        case "InvalidToken":
        case "Unauthenticated":
        case "JsonWebTokenError":
            res.status(401).json({ message: error.message });
            break;
        case "InvalidInput":
            res.status(400).json({ message: error.message });
            break;
        case "SequelizeUniqueConstraintError":
        case "SequelizeValidationError":
            res.status(400).json({ message: error.errors[0].message });
            break;
        case "Forbidden":
            res.status(403).json({ message: "Forbidden Access" });
            break;
        case "SequelizeDatabaseError":
        case "NotFound":
            res.status(404).json({ message: "Data not found" });
            break;
        default :
            res.status(500).json({ message: "Internal Server Error" })
            break;
    }
}
module.exports = errorHandler;
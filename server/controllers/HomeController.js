'use strict'

class HomeController {

    static statusServer(req, res, next) {
        res.status(200).json({ message: "API server ON" })
    }
}

module.exports = HomeController;
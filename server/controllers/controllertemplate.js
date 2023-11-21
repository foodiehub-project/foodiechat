class ControllerTemplate {
    static async templateStaticFunction(req, res, next) {
        try {
            
        }
        catch(error) {
            next(error);
        }
    }
}

module.exports = ControllerTemplate;
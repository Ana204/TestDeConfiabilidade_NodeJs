class AuthenticationController {
    async store(req, res){
        return res.status(200).send();
    }
}

module.exports = new AuthenticationController();
const {users} = require("../../models")

class AuthenticationController {
    async store(req, res) {

        const { email, password } = req.body;

        console.log(password)
        const user = await users.findOne({ where: { email } })

        //verificar se o user existe, se não existir retornar uma message
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        //verificar se o password passado é a mesma que está no banco
        if (!(await user.ckeckPassword(password))) {
            return res.status(401).json({ message: "Incorret password" })
        }

        return res.json({
            user,
            token: user.generateToken()
        });
    }
}

module.exports = new AuthenticationController();
const bcrypt = require("bcryptjs");

const {users} = require("../../models/");
const truncate = require("../utils/truncate");


describe("User", () => {
    beforeEach(async () => {
        await truncate();
    });

    it("deve criptografar a senha do usuário", async () => {
        const user = await users.create({
            email: "Diego@gmail.com.br",
            password: "123456"
        })

        const compareHash = await bcrypt.compare("123456", user.password_hash);

        expect(compareHash).toBe(true);
    });

    
})
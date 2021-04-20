const request = require('supertest');

const app = require("../../src/app");
const {users} = require("../../models");
const truncate = require("../utils/truncate");


describe("Autenticação" , () => {
    //executa antes de cada um dos testes
    beforeEach(async () => {
        await truncate();
    })
    
    it("Verificando as credenciais do usuario são validas", async () => {

        const user = await users.create({ 
            email: 'Diego@gomes.com.br', 
            password_hash: '123456'
        })


        const response = await request(app)
        .post("/authentication")
        .send({
            email: user.email,
            password_hash: '123456'
        })

        expect(response.status).toBe(200);
    });
});
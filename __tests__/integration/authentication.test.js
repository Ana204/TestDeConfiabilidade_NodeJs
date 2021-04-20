const request = require('supertest');

const app = require("../../src/app");
const { users } = require("../../models");
const truncate = require("../utils/truncate");


describe("Autenticação", () => {
  //executa antes de cada um dos testes
  beforeEach(async () => {
    await truncate();
  })

  it("Verificando as credenciais do usuario são validas", async () => {

    const user = await users.create({
      email: 'Diego@gomes.com.br',
      password: '123456'
    })


    const response = await request(app)
      .post("/authentication")
      .send({
        email: user.email,
        password: '123456'
      })

    expect(response.status).toBe(200);
  });


  it("Não deve autenticar com credenciais inválidas", async () => {
    const user = await users.create({
      email: 'Diego@gomes.com.br',
      password: '123456'
    })


    const response = await request(app)
      .post("/authentication")
      .send({
        email: user.email,
        password: '1611616'
      })

    expect(response.status).toBe(401);
  });

  it('Deve retornar o token jwt quando autenticado', async () => {
    const user = await users.create({
      email: 'Diego@gomes.com.br',
      password: '123456'
    })

    const response = await request(app)
      .post("/authentication")
      .send({
        email: user.email,
        password: '123456'
      })

    expect(response.body).toHaveProperty("token");
  })
});
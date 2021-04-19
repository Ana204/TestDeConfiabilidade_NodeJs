const { users } = require("../../models");


describe("Authentication", () => {
   it("should sum two numbers", async () => {
      const user = await users.create({
        email: "jv_100@outlook.com",
        password_hash: "123123",
        
      })

      expect(user.email).toBe('jv_100@outlook.com')
    });
});
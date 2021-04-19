const { Users } = require("../../models");


describe("Authentication", () => {
   it("should sum two numbers", async () => {
      const user = await Users.create({
        email: "jv_100@outlook.com",
        password_hash: "123123",
        
      })
      
      console.log(user);

      expect(user.email).toBe('jv_100@outlook.com')
    });
});
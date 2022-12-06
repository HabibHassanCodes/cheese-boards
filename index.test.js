const {sequelize} = require("./db");
const {Cheese, User, Board} =require("./Models");

describe("cheese board tests", () => {
   
    beforeAll(async () => {
        await sequelize.sync({ force: true });
})


 test("can create a user", async () =>{
    const user = await User.create({name: "habib", email: "habibhassan@gmail.com"});
    expect(user.name).toBe("habib");
    expect(user.email).toBe("habibhassan@gmail.com")
 })
})
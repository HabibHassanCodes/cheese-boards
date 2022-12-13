const {sequelize} = require("./db");
const {Cheese, User, Board} =require("./Models");

describe("cheese board tests", () => {
   
    beforeAll(async () => {
        await sequelize.sync({ force: true });
})


 test("can create a user", async () =>{
    const user = await User.create({name: "tim", email: "habibhassan@gmail.com"});
    expect(user.name).toBe("tim");
    expect(user.email).toBe("habibhassan@gmail.com")
 })

 test("can create a cheese", async () => {
    const cheese = await Cheese.create({title:"chedder", description:"sharp"});
    expect(cheese.title).toBe("chedder");
    expect(cheese.description).toBe("sharp");
 })

 test("can create new board", async () =>{
    const board = await Board.create({type:"wooden", description: "brown", rating:5})
    expect(board.type).toBe("wooden");
    expect(board.description).toBe("brown");
    expect(board.rating).toBe(5)
})

test("user to board association ont to many", async() =>{
    const userHabib = await User.create({name:"habib", email:"habibhassan@yahoo.com"})
    const board = await Board.create({type:"metal", description: "silver", rating:3})
    const board2 = await Board.create({type:"glass", description: "clear", rating:0})

    await userHabib.addBoards([board,board2])
     const userHabibBoards = await userHabib.getBoards()

     expect(userHabibBoards.length).toBe(2)
})

test("board to cheese many to many association", async () => {
    const american = await Cheese.create({title:"american", description:"sharp"});
    const pepperjack = await Cheese.create({title:"pepperjack", description:"not sharp"});
    const wood = await Board.create({type:"wooden", description: "brown", rating:0})
    const glass = await Board.create({type:"glass", description: "clear", rating:0})

    await wood.addCheeses([american, pepperjack]);
    const woodenBoardCheese = await wood.getCheeses();

    await glass.addCheese(american);
    const cheeseAndBoards = await american.getBoards();

    expect(woodenBoardCheese[0].title).toBe("american");
    expect(woodenBoardCheese[1].description).toBe("not sharp")
    expect(cheeseAndBoards[0].type).toBe("wooden")
    expect(cheeseAndBoards[1].type).toBe("glass")

})
})
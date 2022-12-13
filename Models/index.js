const {Cheese} = require("./Cheese");
const {User} =require("./User");
const {Board} = require("./Board");

User.hasMany(Board);
Board.belongsTo(User);
Board.belongsToMany(Cheese,{ through: "board_cheese"});
Cheese.belongsToMany(Board,{ through: "board_cheese"});
module.exports = {
    User,
    Cheese,
    Board
}
const {Cheese} = require("./Cheese");
const {User} =require("./User");
const {Board} = require("./Board");

User.hasMany(Board);
Board.belongsTo(User);
module.exports = {
    User,
    Cheese,
    Board
}
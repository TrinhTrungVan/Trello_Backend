import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    data: Array,
});

const Board = mongoose.model("board", boardSchema);

export default Board;

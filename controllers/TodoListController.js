import TodoList from "../models/todoListModel.js";
import Todo from "../models/todoModel.js";
import Board from "../models/boardModel.js";

export const getSingleTodoList = async (req, res) => {
    const id = req.params.id;
    const todoList = await TodoList.findById(id);
    const todos = await Todo.find().where("_id").in(todoList.data).exec();
    const result = { _id: todoList._id, name: todoList.name, data: todos };
    res.json(result);
};

export const getAllTodoLists = async (req, res) => {
    const board = await Board.find({});
    const listId = board[0].data;
    const todoLists = await TodoList.find().where("_id").in(listId).exec();
    res.json(todoLists);
};

export const createTodoList = async (req, res) => {
    const nameList = req.body.nameList;
    const newTodoList = new TodoList({ name: nameList, data: [] });
    const board = await Board.find({});
    const list = board[0];
    await Board.findByIdAndUpdate({ _id: list._id }, { $push: { data: newTodoList._id.toString() } });
    newTodoList.save().then(() => res.send(JSON.stringify(newTodoList)));
};

export const deleteTodoList = async (req, res) => {
    const id = req.params.id;
    const deleteList = await TodoList.findById(id);
    const board = await Board.find({});
    const list = board[0];
    await Board.findByIdAndUpdate({ _id: list._id }, { $pull: { data: id } });
    await deleteList.remove().then(() => res.send(JSON.stringify(deleteList)));
};

export const updateTodoList = async (req, res) => {
    const id = req.params.id;
    const nameList = req.body.name;
    await TodoList.findByIdAndUpdate(id, { name: nameList });
    const updatedList = await TodoList.findById(id);
    res.send(JSON.stringify(updatedList));
};

export const updateDataList = async (req, res) => {
    const { fromList, targetList } = req.body;
    await TodoList.findByIdAndUpdate(fromList._id, { data: fromList.data });
    await TodoList.findByIdAndUpdate(targetList._id, { data: targetList.data });
};

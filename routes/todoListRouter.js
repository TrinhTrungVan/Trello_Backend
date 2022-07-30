import express from "express";
import { getAllTodoLists, getSingleTodoList, createTodoList, deleteTodoList, updateTodoList, updateDataList } from "../controllers/TodoListController.js";

const todoListRouter = express.Router();

todoListRouter.put("/update", updateDataList);
todoListRouter.delete("/:id", deleteTodoList);
todoListRouter.put("/:id", updateTodoList);
todoListRouter.post("/create", createTodoList);
todoListRouter.get("/:id", getSingleTodoList);
todoListRouter.get("/", getAllTodoLists);

export default todoListRouter;

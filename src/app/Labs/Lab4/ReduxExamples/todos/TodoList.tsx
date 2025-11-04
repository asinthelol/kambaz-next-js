'use client';

import { useState } from "react";
import { useSelector } from "react-redux";
import { addTodo, updateTodo, setTodo, deleteTodo } from "./todosReducer";
import { ListGroup, Button, FormControl, ListGroupItem } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

interface Todo {
  id: string;
  title: string;
}

interface RootState {
  todosReducer: { todos: Todo[]; todo: Todo };
}

export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
      <hr/>
    </div>
  );
}
import { rest } from 'msw';
import { TTodoItem } from '../todo';

import { data } from './data';

const todos: TTodoItem[] = [...data];

export const handlers = [
  rest.get('/api/todos', (_req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.delete('/api/todos/:id', (req, res, ctx) => {
    const { id } = req.params;

    const newTodos = [...todos].filter((todo: TTodoItem) => todo.id !== id);

    todos.length = 0;
    todos.push(...newTodos);

    return res(ctx.json({ success: true }));
  }),
  rest.put('/api/todos', (req, res, ctx) => {
    const body = req.body as TTodoItem;

    const newTodos = [...todos];

    newTodos.push(body);

    todos.length = 0;
    todos.push(...newTodos);

    return res(ctx.json(newTodos));
  }),
  rest.post('/api/todos', (req, res, ctx) => {
    const body = req.body as TTodoItem;

    const newTodos = [...todos];

    newTodos.push(body);

    todos.length = 0;
    todos.push(...newTodos);

    return res(ctx.json(newTodos));
  }),
];

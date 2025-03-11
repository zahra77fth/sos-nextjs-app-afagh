'use client';

import React, { useState, useEffect } from 'react';
import TaskList from '@/components/todo/TaskList';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Task } from '@/types/todo';

const TodosPage = () => {
    const [isClient, setIsClient] = useState(false);
    const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        setIsClient(true);
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:3001/todos');
            const data = await response.json();
            setTasks(data.map((task: Task) => ({
                ...task,
                createdAt: new Date(task.createdAt),
            })));
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async () => {
        if (newTask.trim() === '') return;

        const task: Task = {
            id: Date.now().toString(),
            title: newTask,
            completed: false,
            createdAt: new Date(),
        };

        try {
            const response = await fetch('http://localhost:3001/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });
            const data = await response.json();
            setTasks([...tasks, { ...data, createdAt: new Date(data.createdAt) }]);
            setNewTask('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const toggleComplete = async (id: string) => {
        const taskToUpdate = tasks.find((task) => task.id === id);
        if (!taskToUpdate) return;

        const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };

        try {
            const response = await fetch(`http://localhost:3001/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTask),
            });
            const data = await response.json();
            setTasks(tasks.map((task) => (task.id === id ? { ...data, createdAt: new Date(data.createdAt) } : task)));
        } catch (error) {
            console.error('Error toggling task:', error);
        }
    };

    const deleteTask = async (id: string) => {
        try {
            await fetch(`http://localhost:3001/todos/${id}`, {
                method: 'DELETE',
            });
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    useEffect(() => {
        if (isClient) {
            fetchTasks();
        }
    }, [isClient]);

    if (!isClient) {
        return null;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="flex mb-6">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="flex-grow p-3 border-2 border-gray-300 rounded-r-lg focus:outline-none focus:border-[#1158A7] transition-colors duration-300 placeholder-gray-400 text-gray-700"
                    placeholder="Add a new task..."
                    onKeyDown={(e) => e.key === 'Enter' && addTask()}
                />
                <button
                    onClick={addTask}
                    className="px-6 py-3 bg-[#1158A7] text-white font-semibold rounded-l-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                >
                    Add Task
                </button>
            </div>
            <TaskList
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
            />
        </div>
    );
};

export default TodosPage;
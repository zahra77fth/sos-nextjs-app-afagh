import TaskItem from './TaskItem';
import { Task } from '@/types/todo';

interface TaskListProps {
    tasks: Task[];
    toggleComplete: (id: string) => void;
    deleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, deleteTask }) => {
    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;
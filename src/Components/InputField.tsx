import React from 'react';
import "./styles.css";

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const inputField: React.FC<props> = ({todo, setTodo, handleAdd}) => {
    return (
    <form className="input" onSubmit={handleAdd}>
        <input 
            type="input" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task" 
            className="input__box"
        />
        <button className="input__submit" type="submit">
            Go!
        </button>
    </form>
    )
}

export default inputField
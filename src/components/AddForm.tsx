import React, { useState } from 'react';

const AddForm = () => {
    const [color, setColor] = useState<string>();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="add-form">
                <b>Add new color:</b>
                <input
                    className="input"
                    type="text"
                    onChange={(e) => setColor(e.target.value)}
                />
                <button>Add</button>
            </div>
        </form>
    );
}

export default AddForm;

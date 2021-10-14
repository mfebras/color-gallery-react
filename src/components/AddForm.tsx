import React, { useState, useContext } from 'react';
import { ColorContext } from '../contexts/ColorContext';
import { isHex } from '../utils/Helper';

const AddForm = () => {
    const { saveColor } = useContext(ColorContext);
    const [color, setColor] = useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isHex(color)) {
            saveColor(color);
        }
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

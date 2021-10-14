import React, { useEffect, useContext } from 'react';
import AddForm from './components/AddForm';
import ColorItem from './components/ColorItem';
import Filter from './components/Filter';
import { ColorContext } from './contexts/ColorContext';
import './App.scss';

const App = () => {
    const { colors } = useContext(ColorContext);

    return (
        <div className="app">
            <div className="container">
                <div>
                    <AddForm/>
                    <Filter/>
                </div>

                <div className="content">
                    { colors.map((item: Color, index: number) => (
                        <ColorItem
                            key={index}
                            color={item.name}
                            removeable={item.removeable}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default App;

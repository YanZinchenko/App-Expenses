//import React from 'react';
import Costs from './components/Costs/Costs';

const App = () => {
    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            amount: 999.99,
        },
        {
            date: new Date(2021, 11, 25),
            description: 'MacBook',
            amount: 1099.99,
        },
        {
            date: new Date(2021, 4, 1),
            description: 'Iphone',
            amount: 499.99,
        },
    ];

    // Old version React JSX
    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h1', {}, 'App'),
    //     React.createElement(Costs, { costs: costs })
    // );

    return (
        <div>
            <h1>App</h1>
            <Costs costs={costs} />
        </div>
    );
};

export default App;

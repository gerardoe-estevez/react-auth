import React from 'react';

const Home = (props: { name: string }) => {
    return (
        <div>
            {props.name ? 'Hi ' + props.name : 'You have not log in'}
        </div>
    );
};

export default Home;
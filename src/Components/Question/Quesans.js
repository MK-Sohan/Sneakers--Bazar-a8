import React from 'react';

const Quesans = () => {
    return (
        <div>
            <h2>What are the differences between props and state ?</h2>
            <p>The differences between props and state are ,We use props to <br />pass data from one component to another component,but we cant pass <br />state to any other component.It only work as a local data storage that is local to the component, That's why we can't pass state to another component</p>
        </div>
    );
};

export default Quesans;
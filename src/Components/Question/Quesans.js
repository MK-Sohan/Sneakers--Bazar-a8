import React from 'react';

const Quesans = () => {
    return (
        <div>

          
            <h1>What are the differences between props and state ?</h1>
            <p>The differences between props and state are ,We use props to <br />pass data from one component to another component,but we cant pass <br />state to any other component.It only work as a local data storage that is local to the component, That's why we can't pass state to another component</p>
            <div className="2ndques">
                <h1>How React Work?</h1>
                <p>Ans:What ever we write on react that is a pure java script code.React convert the <br />js code into a html code.Then react DOM inject the converted html code into main html page.And this whole process run without any reload.That's why react so fast.This is how react work.</p>
            </div>
        </div>

    );
};

export default Quesans;
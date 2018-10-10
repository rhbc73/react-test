import React from 'react'


const Person = (props) => {
    return (
        <div onClick={props.click}>
            <h3>My name is {props.name}, I'm {props.age} years old. {props.children} </h3>
            <input type='text' value = {props.name} onChange = {props.onnamechange}></input>
        </div>
    )
}


export default Person


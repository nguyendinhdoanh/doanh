import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [name, setName] =  useState('');
    const [address, setaddress] =  useState('Đông nai');
    const [age, setAge] =  useState('');

   const handleOnChangeInput = (event) => {
    setName(event.target.value)
        // this.setState({
        //     name: event.target.value
        // })
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit =(event)=>{
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random()*100)+1) + '-random',
            name: name,
            age: age
        });
    }

    return (
        <div>
            my name is {name} and I'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)} >
                <label>your name</label>
                <input type="text"
                    onChange={(event) =>handleOnChangeInput(event)}
                />
                <label>your age</label>
                <input type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )

}
export default AddUserInfor;
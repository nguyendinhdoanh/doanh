// class component
// function component

import React, { useState } from "react";
import Displayinfor from "./Displayinfor";
import AddUserInfor from "./AddUserInfor";


// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "doanh nguyen dinh", age: '30' },
//             { id: 2, name: "doanh nguyen", age: '21' },
//             { id: 3, name: "doanh", age: '18' }
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         //console.log(userObj)
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     render() {
//         return (
//             <>
//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br></br>
//                     <Displayinfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className="a">

//                 </div>
//             </>
//         )
//     }
// }

const MyComponent = (props) => {

    const [listUsers, setLisUsers] = useState(
        [
            { id: 1, name: "doanh nguyen dinh", age: '30' },
            { id: 2, name: "doanh nguyen", age: '21' },
            { id: 3, name: "doanh", age: '18' }
        ]
    )
    const handleAddNewUser = (userObj) => {
        //console.log(userObj)
        setLisUsers([userObj, ...listUsers])
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        // })
    }
    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setLisUsers(listUsersClone)
        // this.setState({
        //     listUsers: listUsersClone
        // })
    }
    return (
        <>
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br></br>
                <Displayinfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="a">

            </div>
        </>
    )
}
export default MyComponent;
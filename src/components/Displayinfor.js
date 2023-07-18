import React, { useEffect, useState } from "react";
import './Displayinfor.scss';

const Displayinfor = (props)=> {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    useEffect(
        () => {
        if(listUsers.length===0){
            alert("het r")
        }
        console.log("call xc me")
    },[listUsers]
    );
    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? 'hide list users' : 'show list users'}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 20 ? 'green' : 'red'}>
                                <div>
                                    <div>my name's {user.name}</div>
                                    <div>my age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>delete</button>
                                </div>
                            </div>
                        )
                    })}
                </>}
        </div>
    )
}
export default Displayinfor;
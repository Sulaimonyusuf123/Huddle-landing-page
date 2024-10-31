import React from "react";
import userItems from './data/mainData/mainData.json'


function New (){
    return (
    <div>
        {userItems.map(Item => (
            <div>
                <p>{Item.id}</p>
                <h1>{Item.title}</h1>
                <p>{Item.body}</p>
            </div>
        ))
        }
        </div>
    )
}

export default New;
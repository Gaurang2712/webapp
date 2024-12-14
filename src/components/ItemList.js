import React  from "react";


function ItemList({items}){
    return(
        <ol>
           {items.map((item, index)=>
           (
            <li key={index}> {item} </li>
           )
           )
           }
        </ol>
    );
}

export default ItemList;
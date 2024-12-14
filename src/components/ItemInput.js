import React from 'react';


function ItemInput({input ,handleInputChange,handleAddItem}){
    return(
       <div>
        <h2>Add Item</h2>
        <input type="text"
        placeholder="Enter item name"
        value={input}
        onChange={handleInputChange}/>
        <button onClick={handleAddItem}>Add</button>
       </div>
    );
}

export default ItemInput;
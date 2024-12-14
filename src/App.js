
import { useState } from 'react';
import ItemInput from './components/ItemInput';
import ItemList from  './components/ItemList';


function App() {

   const [input,setInput]=useState('');
   const [data,setDate]=useState([]);

   const handleInputChange =(e)=>{
    setInput(e.target.value);
   }

   const handleAddItem=(e)=>{
    setDate([...data,input]);
    setInput('');
   }
  return (
    <div className="App">
      <h1>Hello This Frist React App</h1>
      <ItemInput
       input={input} 
      handleAddItem={handleAddItem}
      handleInputChange={handleInputChange}
      />
      <ItemList items={data}/>
      
    </div>
  );
}

export default App;

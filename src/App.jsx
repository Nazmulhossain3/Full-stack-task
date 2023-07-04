
import { useState } from 'react';
import Data from './component/Data';
import './App.css'
import LeftChild from './component/LeftChild';
import RightChild from './component/RightChild';

function App() {
  const [selectedId, setSelectedId] = useState(3);
 

  

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const selectedProduct = Data.find(item => item.id === selectedId);
  console.log(selectedId)


  return (
    <div className='position-child'>
    <LeftChild data={Data} handleClick={handleClick} selectedId={selectedId} />
    <RightChild  product={selectedProduct} />
  </div>
  )
}

export default App

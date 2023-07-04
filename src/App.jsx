
import { useState } from 'react';
import Data from './component/Data';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
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
    <div className='d-flex bg-dark justify-content-center gap-4'>
    <LeftChild data={Data} handleClick={handleClick} selectedId={selectedId} />
    <RightChild  product={selectedProduct} />
  </div>
  )
}

export default App

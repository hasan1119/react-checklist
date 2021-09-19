import './App.css';
import {useState} from 'react'
const headingStyle ={
  color: 'black',
  textTransform: 'uppercase',
  textAlign:'center'
}
function App() {

  return (
    <Mobile></Mobile>
  );
}




function Mobile(){
  const [charge , setCharge] = useState(100);
  function decrease(){
    if(charge>0){
      const newCharge = charge - 10;
      setCharge(newCharge)
    }
  }
return(
  <div>
    <h2>Charge: {charge}</h2>
    <button onClick={decrease}>battery down</button>
  </div>
)
}







export default App;



// const Blog = (props)=>{
// return(
//   <article className='blog'>
//     <h2 style={headingStyle}>{props.heading}</h2>
//     <p style={{color:'blue',fontWeight:'bold',textAlign:'justify'}}> Author: {props.author}</p>
//   </article>
// )
// }

/* 

    <div style={{display:'flex', flexWrap:'wrap'}}>
      <Blog heading='Porimoni Hot news' author='Sefu da'></Blog>
      <Blog heading='Bappy vaiyer gf vege geche' author='Arif mahmud'></Blog>
      <Blog heading='Hero Alom new song hit' author='Shakib vai'></Blog>
     <Blog author='Hasan'/>
     <Blog></Blog>
    </div>

*/
/* 

<div>
  <article className='blog'>
    <h2 style={headingStyle}>Bangladesh</h2>
    <p style={{color:'blue',fontWeight:'bold',textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo harum magni quisquam perspiciatis corrupti pariatur, officiis qui maxime cumque id nisi officia? Quos rem deleniti laborum non perspiciatis quia labore.</p>
  </article>
</div>

*/
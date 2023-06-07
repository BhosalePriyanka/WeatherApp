
import './App.css';
import {Button, Form} from 'react-bootstrap'
import {useState} from 'react'


function App() {
  const[input,setInput] = useState({
    city:''
  })
  const[data,setData] = useState('')
  const handelChange = (e) =>{
    setInput({...input,[e.target.name]:e.target.value})

  }
  console.log(input)
  const handelSubmit = async(e)=>{ 
   
    const response = await fetch('http://localhost:4000/weather',{
      method:'POST',
      body:JSON.stringify(input),
      headers:{
        'Content-Type':'application/json',
      }
    })
const data = await response.json()
console.log(data)
setData(data)
setInput(' ')
    
  }



  return (
    <div className="App">
      <h1>Weather App</h1>
     <Form className='w-50 mx-auto'>
      <Form.Label>City Name</Form.Label>
      <Form.Control type = 'text' name = "city" value={input.city} onChange = {handelChange}/>
    
      <Button onClick={handelSubmit}>Submit</Button>
      <br/>
      { data ?? <h1>data</h1>}
      </Form>
    </div>
  );
}

export default App;

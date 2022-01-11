import './App.css';
import { Conteiner, Form } from './styled';
import Input from './ components/input';
import Card from './ components/card';
import { useState } from 'react';

interface Person {
  name:string;
  age:number;
  hobby:string;
}

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("");

  const [list, setList] = useState<Person[]>([]);

  const hamdleSubmit = (name:string, age:number, hobby:string) => {
    const newPerson = {name, age, hobby};
    setList([...list, newPerson]);
  }
  console.log(list);

  return <Conteiner>  
    <Form>
      <Input 
          plasseholder='Seu Nome' 
          label='Nome' 
          onChange={e => setName(e.target.value)}/>
      <Input 
          plasseholder='Sua indade' 
          label='Idade' 
          type="number" 
          onChange={e => setAge(Number(e.target.value))}/>
      <Input 
          plasseholder='Seu Hobby' 
          label='Hobby'
          onChange={e => setHobby(e.target.value)}/>
      <button onClick={() => hamdleSubmit(name, age, hobby)} >Eviar</button>
    </Form>  

    <Card list = {list}/>
  </Conteiner>
}

export default App;

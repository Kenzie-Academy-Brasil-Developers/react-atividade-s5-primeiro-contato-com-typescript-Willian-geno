import { Conteiner, Names, Ages, Habbys } from "./styled";

interface Person {
  name:string,
  age:number,
  hobby:string,
}

interface List {
  list: Person[];
}

const Card = ({list}:List) =>{

  console.log(list)
  return <Conteiner>
    <Names>
      <h3>Nomes</h3>
      <div>
      {list.map((item) =>{
        return <p>{item.name}</p>
      })}
      </div>
    </Names>
    <Ages>
      <h3>Idade</h3>
      <div >
        {list.map((item, index) => {
          return <p key = {index} >{item.age}</p>
        })}
      </div>
    </Ages>
    <Habbys>
      <h3>Hobby</h3>
      <div >
        {list.map((item, index) => {
          return <p key = {index} >{item.hobby}</p>
        })}
      </div>
    </Habbys>
  </Conteiner>
}

export default Card;
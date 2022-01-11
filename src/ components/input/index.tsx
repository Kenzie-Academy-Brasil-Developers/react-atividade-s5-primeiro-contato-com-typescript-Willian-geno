import { InputHTMLAttributes } from "react";
import { Conteiner } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  plasseholder: string;
  label?:string;
}

const Input = ({label, plasseholder,... rest}: InputProps) => {

  return <Conteiner>
      <label>{label}</label>
      <input placeholder={plasseholder} {...rest} />
  </Conteiner>
}

export default Input;
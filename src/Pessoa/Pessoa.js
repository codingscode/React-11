
import React from 'react';
import Radium from 'radium';
import './Pessoa.css'

const pessoa = (props) => {
   const estilo = {
    '@media (min-width: 500px)' : {
       width: '450px'
     }
   };
   
   return (
      <div className="Pessoa" style={estilo}>
         <p onClick={props.click}>Eu sou {props.nome}, Eu sou uma Pessoa e tenho {props.idade} anos !</p>
         <p>{props.children}</p>
         <input type='text' onChange={props.changed} value={props.nome}></input>
      </div>
   )
}

export default Radium(pessoa);

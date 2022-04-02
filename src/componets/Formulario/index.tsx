import React, { useState } from "react";
import { Itarefa } from "../../types/tarefas";
import { Botao } from "../Botao";
import style  from  './Formulario.module.scss'
import { v4 as uuid } from 'uuid'

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>

}
function Formulario ({setTarefas}: Props) {
  const [state, setState] = useState({
    tarefa: '',
    tempo: '00:00'
  })

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tare) => [
      ...tare, 
      {
        ...state,
        selecionado: false,
        completado: false,
        id: uuid()
      }
    ])
    setState({
      tarefa:"",
      tempo: '00:00'
    })
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label>
          Adicione um novo estudo
        </label>
        <input 
          type="text"
          name="tarefa"
          value={state.tarefa}
          onChange={eve => setState({...state, tarefa: eve.target.value})}
          id="tarefa"
          placeholder="o que você quer estudar"
        />
      </div>
      <div className={style.inputContainer}>
        <label>
          Tempo
        </label>
        <input 
            type="time"
            step="1"
            name="tempo"
            value={state.tempo}
            onChange={evento => setState({...state, tempo: evento.target.value})}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
      </div>
      <Botao type="submit">
        Adcionar
      </Botao>

    </form>
  )

}

class Formulario2 extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}> {
  state = {
    tarefa: '',
    tempo: '00:00'
  }
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((tare) => [
      ...tare, 
      {
        ...this.state,
        selecionado: false,
        completado: false,
        id: uuid()
      }
    ])
    this.setState({
      tarefa:"",
      tempo: '00:00'
    })

  }
  render(){
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label>
            Adicione um novo estudo
          </label>
          <input 
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={eve => this.setState({...this.state, tarefa: eve.target.value})}
            id="tarefa"
            placeholder="o que você quer estudar"
          />
        </div>
        <div className={style.inputContainer}>
          <label>
            Tempo
          </label>
          <input 
              type="time"
              step="1"
              name="tempo"
              value={this.state.tempo}
              onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
              id="tempo"
              min="00:00:00"
              max="01:30:00"
              required
            />
        </div>
        <Botao type="submit">
          Adcionar
        </Botao>

      </form>
    )
  }
}
export { Formulario }
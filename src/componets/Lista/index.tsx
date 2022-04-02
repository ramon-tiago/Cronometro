import React, { useState } from "react";
import { Itarefa } from "../../types/tarefas";
import { Item } from "./item";
import style  from  './Lista.module.scss'

interface Props {
  tarefas: Itarefa[],
  selecionaTarefa: (selecionaTarefa: Itarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {  
  return (
    <aside className={style.listaTarefas}>
      <h2 > Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item 
          {...item}
            selecionaTarefa={selecionaTarefa}
            key={item.id}
          />
        ))}  
      </ul>
    </aside>
  )
}

export { Lista }
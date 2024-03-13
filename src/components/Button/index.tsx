import React from "react";
import './style.scss'


export default class Button extends React.Component {
  render(): React.ReactNode {
    const isActive = false
    const styles = {
      backgroundColor: isActive ? "green" : "red"
    }
    return (
      <button className="botao">
        Botão
      </button>
    )
  }
}
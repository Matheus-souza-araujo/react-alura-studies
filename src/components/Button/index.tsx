import React from "react";

export default class Button extends React.Component {
  render(): React.ReactNode {
    const isActive = false
    const styles = {
      backgroundColor: isActive ? "green" : "red"
    }
    return (
      <button style={styles}>
        Botão
      </button>
    )
  }
}
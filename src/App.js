import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      errorClass: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({newTask: event.target.value})
    // alert(this.state.newTask)
  }

  handleClick(event) {
    const index = event.target.value - 1;
    // var task = this.state.tasks

    this.setState({
      tasks: this.state.tasks.map((task, i) =>
        i === index ? { id: task.id, name: task.name, done: !task.done } : task

        // alert(task[i].done)
      )
    })

    event.preventDefault()
  }

  handleSubmit(event) {
    if (this.state.newTask !== '') {
      this.setState({
        tasks: this.state.tasks.concat({id: this.state.tasks.length + 1, name: this.state.newTask, done: false}),
        newTask: '',
        errorClass: false
      });
    } else {
      this.setState({
        errorClass: true
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li value={task.id} key={task.id} onClick={this.handleClick} className={task.done ? "done" : null}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="new-task" className={this.state.errorClass ? "error" : null} placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.handleChange} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;

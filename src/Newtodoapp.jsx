import React from "react";
class Newtodoapp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputvalue: "",
      editing: false,
      currentid: "",
      currentValue: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.onAddTask = this.onAddTask.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.onEditTodo = this.onEditTodo.bind(this);
    this.onSubmitEditTodo = this.onSubmitEditTodo.bind(this);
    this.onToggleEdit = this.onToggleEdit.bind(this);
    this.onEditInputChange = this.onEditInputChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.checkedlist = this.checkedlist.bind(this);
    this.handleInputEnter = this.handleInputEnter.bind(this);
  }
  handleInput(e) {
    this.setState({ inputvalue: e.target.value });
  }

  onAddTask() {
    if (this.state.inputvalue !== "") {
      this.setState({
        inputvalue: "",
        todos: [
          ...this.state.todos,
          { name: this.state.inputvalue, id: new Date(), ischecked: false },
        ],
      });
    }
  }

  handleInputEnter(event) {
    if (event.key === "Enter" && this.state.inputvalue !== "") {
      this.setState({
        inputvalue: "",
        todos: [
          ...this.state.todos,
          { name: this.state.inputvalue, id: new Date(), ischecked: false },
        ],
      });
    }
  }

  onDeleteTask(item) {
    this.setState({
      todos: [...this.state.todos].filter((deleteid) => deleteid.id !== item),
      inputvalue: "",
    });
  }

  checkedlist(clickedcandidate) {
    const candidatetoupdate = this.state.todos.find(
      (c) => c.id === clickedcandidate.id
    );
    candidatetoupdate.ischecked = !clickedcandidate.ischecked;
    const updatedlist = [...this.state.todos];
    this.setState({ todos: updatedlist });
  }

  onEditTodo(id, newvalue) {
    this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.name = newvalue;
      }
    });
  }

  onSubmitEditTodo() {
    this.onEditTodo(this.state.currentid, this.state.currentValue);
    this.setState({
      editing: false,
    });
  }

  onToggleEdit(todo) {
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
  }

  onEditInputChange(e) {
    this.setState({ currentValue: e.target.value });
  }

  handleReset() {
    this.setState({
      todos: [],
      inputvalue: "",
      currentValue: "",
    });
  }

  render() {
    return (
      <>
        <h2>ToDo Updated list</h2>
        <div>
          {this.state.editing === false ? (
            <div>
              <input
                placeholder="type your task..."
                value={this.state.inputvalue}
                onChange={this.handleInput}
                onKeyDown={this.handleInputEnter}
              />
              <button onClick={this.onAddTask}>Add item</button>
              <button onClick={this.handleReset}>Reset</button>{" "}
            </div>
          ) : (
            <div>
              <input
                placeholder="type your task..."
                value={this.state.currentValue}
                name={this.state.currentValue}
                onChange={this.onEditInputChange}
              />
              <button onClick={this.onSubmitEditTodo}>Update Item</button>
              <button onClick={this.handleReset}>Reset</button>
            </div>
          )}

          <div>
            {this.state.todos.map(
              (todo) =>
                !todo.ischecked && (
                  <p key={todo.id}>
                    <input
                      type="checkbox"
                      onChange={() => this.checkedlist(todo)}
                      checked={todo.ischecked}
                    ></input>
                    {todo.name}
                    <button
                      disabled={this.state.ischecked}
                      onClick={() => this.onToggleEdit(todo)}
                    >
                      Edit
                    </button>
                    <button onClick={() => this.onDeleteTask(todo.id)}>
                      Remove
                    </button>
                  </p>
                )
            )}

            {this.state.todos.map(
              (tododata) =>
                tododata.ischecked && (
                  <p
                    style={{ textDecoration: "line-through", color: "#ccc" }}
                    key={tododata.id}
                  >
                    <input
                      type="checkbox"
                      onChange={() => this.checkedlist(tododata)}
                      checked={tododata.ischecked}
                    ></input>
                    {tododata.name}
                    <button
                      disabled={!this.state.ischecked}
                      onClick={() => this.onToggleEdit(tododata)}
                    >
                      Edit
                    </button>
                    <button onClick={() => this.onDeleteTask(tododata.id)}>
                      Remove
                    </button>
                  </p>
                )
            )}
          </div>
        </div>
      </>
    );
  }
}
export default Newtodoapp;

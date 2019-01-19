import React from "react"

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h5>Todo App</h5>

        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="new-todo">What needs to be done?</label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
              className="validate"
              type="text"
            />
          </div>
          <div className="input-field">
            <button className="btn blue">
              Add #{this.state.items.length + 1}
            </button>
          </div>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoApp;

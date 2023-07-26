import User from "./User";
import { Component } from "react";

import classes from "./Users.module.css";

class Users extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      showUsers: true,
    };

    console.log(this.props);
    this.toggleUsersHandler = this.toggleUsersHandler.bind(this);
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;

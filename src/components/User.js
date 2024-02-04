import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "--",
        location: "--",
        avatar_url: "",
        html_url: "",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.github.com/users/" + "rkchoudhury"
    );
    const responseJson = await response.json();
    this.setState({ userInfo: responseJson });
  }

  render() {
    const { name, location, avatar_url, html_url } = this.state.userInfo;

    // debugger;

    return (
      <div className="user-container">
        <img src={avatar_url} className="user-avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>
          Contact:{" "}
          <a href={html_url} target="_blank">
            {html_url}
          </a>
        </h3>
      </div>
    );
  }
}

export default User;

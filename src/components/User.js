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
      <div className="flex justify-center items-center flex-col p-6">
        <img src={avatar_url} className="w-[200px] rounded-[100px]" />
        <h2 className="my-2">Name: {name}</h2>
        <h3 className="my-2">Location: {location}</h3>
        <h3 className="my-2">
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

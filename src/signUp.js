import React from "react";

class signUp extends React.Component {
    render() {
        return (
            <form>
              <h1>Sign Up</h1>
              <div>
                <input type="text" name="username" placeholder="Username" />
                <label htmlFor="username">Set username</label>
              </div>
              <div>
                <input type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Set password</label>
              </div>
              <input type="submit" value="Sign Up" />
            </form>
          );
    }
}

export default signUp;
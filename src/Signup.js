import React, { Component } from 'react'

export class signup extends Component {
    render() {
        return (
            <div>
                <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="text" name="last" placeholder="last" />
          <label htmlFor="last">last</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input type="password" name="confirm-Password" placeholder="confirm-Password" />
          <label htmlFor="confirm-Password">confirm-Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
            </div>
        )
    }
}

export default signup

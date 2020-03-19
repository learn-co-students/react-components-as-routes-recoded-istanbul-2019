import React from 'react'

export default class SignUp extends React.Component {
        render() {
            return (
              <form>
                <h1>Sign Up</h1>
                <div>
                  <input type="text" name="username" placeholder="Username" />
                  <label htmlFor="username">Username</label>
                </div>
                <div>
                  <input type="email" name="Email" placeholder="Email" />
                  <label htmlFor="Emai">Email</label>
                </div>
                <div>
                  <input type="password" name="password" placeholder="Password" />
                  <label htmlFor="password">New Password</label>
                </div>
                <div>
                  <input type="password" name="password" placeholder="Re-Type Password" />
                  <label htmlFor="password">Re-Type Password</label>
                </div>
                <input type="submit" value="Sign Up" />
              </form>
            );
          }
        }
        

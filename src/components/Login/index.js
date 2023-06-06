import {Component} from 'react'
import Cookies from 'js-cookie'

class Login extends Component {
  onClickLogin = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
      })
      history.replace('/')
    }
  }

  render() {
    return (
      <>
        <h1>Please Login</h1>
        <button onClick={this.onClickLogin} type="button">
          Login with Sample Creds
        </button>
      </>
    )
  }
}
export default Login

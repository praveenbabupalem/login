import {Component} from 'react'
import Cookies from 'js-cookie'

class LogoutButton extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <button onClick={this.onClickLogout} type="button">
        Logout
      </button>
    )
  }
}
export default LogoutButton

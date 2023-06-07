import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

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

export default withRouter(LogoutButton)

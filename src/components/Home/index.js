import {Component} from 'react'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>Home Route</h1>
        <LogoutButton />
      </>
    )
  }
}
export default Home

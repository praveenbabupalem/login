import {Link, withRouter} from 'react-router-dom'

const Header = () => (
  <ul>
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/about">
      <li>About</li>
    </Link>
  </ul>
)
export default withRouter(Header)

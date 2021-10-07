import './styles/main.scss'
import Menu from './components/Menu'
import Payments from './Container/Payments'
import PaymentsConfirm from './Container/PaymentConfirm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="navbar-container">
          <Link className="white-color" to="/">
            Menu
          </Link>
          <Link className="white-color" to="/payments">
            Payment
          </Link>
          <Link className="white-color" to="/paymentconfirm">
            Payment-Confirm
          </Link>
        </div>
        <div className="body-container">
          <div className="left-container"></div>
          <div className="payment-container">
            <Switch>
              <Route exact path="/" component={Menu} />
              <Route exact path="/payments" component={Payments} />
              <Route exact path="/paymentconfirm" component={PaymentsConfirm} />
            </Switch>
          </div>
          <div className="right-container"></div>
        </div>
      </div>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Menu from './components/Menu'
import Payments from './container/Payment/Payments'
import PaymentsConfirm from './container/Payment/PaymentConfirm'
import InvoicePay from './container/Payment/InvoicePay'

import './styles/main.scss'

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="navbar-container">
          <Link className="white-color" to="/">
            Menu
          </Link>
          <Link className="white-color" to="/pay">
            Pay Invoice
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
              <Route exact path="/pay" component={InvoicePay} />
            </Switch>
          </div>
          <div className="right-container"></div>
        </div>
      </div>
    </Router>
  )
}

export default App

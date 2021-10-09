import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Menu from './components/Menu'
import Payments from './container/Payment/Payments'
import PaymentsConfirm from './container/Payment/PaymentConfirm'
import InvoicePay from './container/Payment/InvoicePay'

import './styles/main.scss'

function App() {
  return (
    <Router>
      <div className="main-container">
        <Menu />
        <div className="body-container">
          <div className="left-container"></div>
          <div className="payment-container">
            <Switch>
              <Route exact path="/" component={InvoicePay} />
              <Route exact path="/pay" component={InvoicePay} />
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

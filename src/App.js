import Menu from './components/Menu'
import InvoicePay from './container/InvoicePay'
import InvoicePaid from './container/InvoicePaid'

import './styles/main.scss'

function App() {
  return (
    <div className="App">
      <Menu />
      <InvoicePay />
      <InvoicePaid />
    </div>
  )
}

export default App

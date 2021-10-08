import React from 'react'
import Button from '../../components/Button'
import PrintIcon from '../../components/icons/PrintIcon'
const InvoicePay = ({ history }) => {
  return (
    <div>
      <h1>Invoices</h1>
      <h2>Pay your invoices</h2>
      <div className="invoice-container">
        <div className="invoice-container__details">
          <h5 className="invoiceState">Pending</h5>

          <p className="invoice">
            Invoice <span className="invoice-id">#122552</span>
          </p>
          <hr />
          <p className="total">
            Total: <span className="total-amount">$420</span>
          </p>
        </div>
        <div className="invoice-container__button">
          <div
            className="print-icon"
            onClick={() => {
              console.log('Print')
            }}
          >
            <PrintIcon></PrintIcon>
          </div>
          <Button size="medium" onClick={() => history.push('/payments')}>
            Pay now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InvoicePay

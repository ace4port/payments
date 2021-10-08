import React from 'react'
import Button from '../../components/Button'

const InvoicePay = ({ history }) => {
  return (
    <div>
      <h1>Invoices</h1>
      <h2>Pay your invoices</h2>

      <h5>Pending</h5>

      <p>invoice #122552</p>
      <p>Total: $420</p>

      <Button
        size="small"
        variant="outlined"
        onClick={() => console.log('Print')}
      >
        Print
      </Button>
      <Button size="medium" onClick={() => history.push('/payments')}>
        Pay now
      </Button>
    </div>
  )
}

export default InvoicePay

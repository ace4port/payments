import React from 'react'
import { useSelector } from 'react-redux'
import { Invoice } from './InvoicePay'

const PaymentConfirm = ({ history }) => {
  const invoice = useSelector((state) => state.payment.invoice)
  const selected = useSelector((state) => state.invoice.selectedInvoice)

  return (
    <div>
      <h1>Invoice Paid</h1>
      <h2>Pay your invoices</h2>
      {invoice !== null && (
        <Invoice history={history} invoice={invoice[selected - 1]} />
      )}
    </div>
  )
}

export default PaymentConfirm

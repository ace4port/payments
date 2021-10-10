import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInvoice } from '../../features/payment/InvoiceSlice'
import { Invoice } from './InvoicePay'

const PaymentConfirm = ({ history }) => {
  const dispatch = useDispatch()
  const invoice = useSelector((state) => state.invoice.invoice)
  const selected = useSelector((state) => state.invoice.selectedInvoice)

  useEffect(() => dispatch(getInvoice()), [dispatch])

  if (!selected) {
    history.push('/')
    return 'Invalid selection'
  }

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

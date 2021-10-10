import React, { useEffect } from 'react'

import Button from '../../components/Button'
import Loader from '../../components/Loader'
import PrintIcon from '../../components/icons/PrintIcon'
import { useDispatch, useSelector } from 'react-redux'
import { getInvoice } from '../../features/payment/InvoiceSlice'
import { selectInvoice } from '../../features/payment/InvoiceSlice'

const InvoicePay = ({ history }) => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(getInvoice()), [dispatch])

  const invoices = useSelector((state) => state.invoice.invoice)
  const loading = useSelector((state) => state.invoice.loading)
  const error = useSelector((state) => state.invoice.error)

  return (
    <div>
      <h1>Invoices</h1>
      <div className="invoice-container">
        {loading ? (
          <Loader />
        ) : (
          invoices.map((inv) => (
            <Invoice key={inv.id} invoice={inv} history={history} />
          ))
        )}
        {error && 'Could not fetch invoices'}
        <div>{error && <Loader />}</div>
      </div>
    </div>
  )
}

export default InvoicePay

export const Invoice = ({ invoice, history }) => {
  const dispatch = useDispatch()

  const handlePay = () => {
    dispatch(selectInvoice(invoice.id))
    history.push('/payments')
  }

  return (
    <div className="invoice-container__details">
      <p className="invoice" onClick={handlePay}>
        Invoice Ref<span className="invoice-id">{`#${invoice.id}`}</span>
      </p>
      <p className="total">
        Total: <span className="total-amount">{`$${invoice.amount}`}</span>
      </p>
      <h5
        className={`invoiceState ${
          invoice.status === 'Approved' ? 'approved' : 'rejected'
        }`}
      >{`${invoice.status}`}</h5>
      <div className="invoice-container__button">
        <div className="print-icon"></div>
        <Button size="small" onClick={handlePay}>
          Pay now
        </Button>
        <PrintIcon />
      </div>
    </div>
  )
}

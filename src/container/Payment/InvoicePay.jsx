import React, { useEffect } from 'react'
import Button from '../../components/Button'
import PrintIcon from '../../components/icons/PrintIcon'
import { useDispatch, useSelector } from 'react-redux'
import { getInvoice } from '../../features/payment/PaymentSlice'
import { selectInvoice } from '../../features/payment/InvoiceSlice'

const InvoicePay = ({ history }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getInvoice())
  }, [dispatch])
  const invoices = useSelector((state) => state.payment.invoice)
  const loading = useSelector((state) => state.payment.isLoading)

  return (
    <div>
      <h1>Invoices</h1>
      <h2>Pay your invoices</h2>
      <div className="invoice-container">
        {loading ? (
          <h2>Loading ...</h2>
        ) : (
          invoices.map((inv) => <Invoice invoice={inv} history={history} />)
        )}
      </div>
    </div>
  )
}

export default InvoicePay

export const Invoice = ({ invoice, history }) => {
  const dispatch = useDispatch()
  return (
    <div className="invoice-container__details">
      <p className="invoice">
        Invoice Ref<span className="invoice-id">{`#${invoice.id}`}</span>
      </p>
      <p className="total">
        Total: <span className="total-amount">{`$${invoice.amount}`}</span>
      </p>
      <h5
        className={`invoiceState ${
          invoice.status === 'approved' ? 'approved' : 'rejected'
        }`}
      >{`${invoice.status}`}</h5>
      <div className="invoice-container__button">
        <div className="print-icon"></div>
        <Button
          size="small"
          onClick={() => {
            dispatch(selectInvoice(invoice.id))
            history.push('/payments')
          }}
        >
          Pay now
        </Button>
        <PrintIcon />
      </div>
    </div>
  )
}

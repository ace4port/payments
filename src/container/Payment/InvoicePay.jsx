import React, { useEffect } from 'react'
import Button from '../../components/Button'
import PrintIcon from '../../components/icons/PrintIcon'
import { useDispatch, useSelector } from 'react-redux'
import { getInvoice } from '../../features/payment/PaymentSlice'
const InvoicePay = ({ history }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getInvoice())
  }, [dispatch])
  const invoice = useSelector((state) => state.payment.invoice)
  const status = useSelector((state) => state.payment.paymentSuccess)

  const handlePrint = () => {
    console.log('print')
  }
  return (
    <div>
      <h1>Invoices</h1>
      <h2>Pay your invoices</h2>
      <div className="invoice-container">
        {invoice !== null ? (
          <div className="invoice-container__details">
            <h5
              className={`invoiceState ${status && 'approved'}`}
            >{`${invoice[0].status}`}</h5>

            <p className="invoice">
              Invoice <span className="invoice-id">{`#${invoice[0].id}`}</span>
            </p>
            <hr />
            <p className="total">
              Total:{' '}
              <span className="total-amount">{`$${invoice[0].amount}`}</span>
            </p>
          </div>
        ) : (
          ''
        )}
        <div className="invoice-container__button">
          <div className="print-icon" onClick={handlePrint}>
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

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInvoice } from '../../features/payment/PaymentSlice'
const PaymentConfirm = () => {
  const dispatch = useDispatch()
  const invoice = useSelector((state) => state.payment.invoice)
  const status = useSelector((state) => state.payment.paymentSuccess)
  useEffect(() => {
    dispatch(getInvoice())
  }, [dispatch])
  return (
    <div>
      <h1>Invoice Paid</h1>
      <h2>Pay your invoices</h2>
      {invoice !== null && (
        <div className="invoice-container__details">
          <h5
            className={`invoiceState ${status && 'approved'}`}
          >{`${invoice[0].status}`}</h5>

          <p>invoice #{invoice[0].id}</p>
          <p>Total: ${invoice[0].amount}</p>
        </div>
      )}
    </div>
  )
}

export default PaymentConfirm

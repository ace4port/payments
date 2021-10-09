import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import {
  init,
  payWithCard,
  payWithGofaaa,
} from '../../features/payment/PaymentSlice'
import { useSelector } from 'react-redux'

const Payments = ({ history }) => {
  const dispatch = useDispatch()
  const paymentSuccess = useSelector((state) => state.payment.success)
  const paymentFail = useSelector((state) => state.payment.error)
  const errorMsg = useSelector((state) => state.payment.msg)
  const loading = useSelector((state) => state.payment.isLoading)
  paymentSuccess && setTimeout(() => history.push('/paymentConfirm'), 2000)

  useEffect(() => {
    return () => {
      dispatch(init())
    }
  }, [dispatch])

  return (
    <div>
      <h1>Make Invoice payment</h1>
      <CardPay />
      <Wallet />

      {loading && <h3 className="errorMessage">Loading ...</h3>}
      {paymentFail && <h3 className="errorMessage">Error {errorMsg}</h3>}
      {paymentSuccess && <h3 className="errorMessage">{errorMsg}</h3>}
    </div>
  )
}

export default Payments

const CardPay = () => {
  const dispatch = useDispatch()

  const [collapsed, setCollapsed] = useState(false)
  const [formData, setFormData] = useState({
    cardholder_name: '',
    card_no: '',
    expiry_date: '',
    cvv: 'XXX',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const finalData = {
      ...formData,
      expiry_date: `${new Date(formData.expiry_date).getMonth() + 1}/${new Date(
        formData.expiry_date
      ).getFullYear()}`,
      invoice_id: 1,
    }
    dispatch(payWithCard(finalData))
    console.log('You have submitted this data', formData)
  }

  return (
    <div className="collapse">
      <button
        className={`collapse__btn ${collapsed ? 'active' : ''}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        Pay with Card
      </button>
      <form
        onSubmit={handleSubmit}
        className={`collapse__content ${collapsed ? 'expand' : ''}`}
      >
        <input
          className="input"
          type="text"
          name="cardholder_name"
          placeholder="Card holder name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <input
          className="input"
          type="text"
          placeholder="Card number"
          name="card_no"
          value={formData.number}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value
                .replace(/[^\dA-Z]/g, '')
                .replace(/(.{4})/g, '$1 ')
                .trim(),
            })
          }
        />
        <input
          className="input"
          type="month"
          placeholder="Expiry date"
          value={formData.expiry}
          name="expiry_date"
          min="2021-10"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <input
          className="input"
          type="password"
          placeholder="CVV"
          name="cvv"
          maxLength={3}
          value={formData.cvv}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <Button type="submit" variant="primary" size="medium">
          Pay now
        </Button>
      </form>
      <hr className="collapse__seperator" />
    </div>
  )
}

const Wallet = () => {
  const dispatch = useDispatch()
  const selected_id = useSelector((state) => state.invoice.selectedInvoice)
  const [collapsed, setCollapsed] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' })

  const hanldePayWithGofaa = (e) => {
    e.preventDefault()
    const finalData = { invoice_id: selected_id, ...formData }
    dispatch(payWithGofaaa(finalData))
  }
  return (
    <div className="collapse">
      <button
        className={`collapse__btn ${collapsed ? 'active' : ''}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        Pay with GoFaa Wallet
      </button>

      <div className={`collapse__content ${collapsed ? 'expand' : ''}`}>
        <p>Balance: $2500</p>

        <input
          className="input"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.pasword}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />

        <Button
          type="submit"
          onClick={hanldePayWithGofaa}
          variant="primary"
          size="medium"
        >
          Pay now
        </Button>
      </div>
      <hr className="collapse__seperator" />
    </div>
  )
}

import React, { useState } from 'react'
import Button from '../components/Button'

const Payments = () => {
  return (
    <div>
      <h1>Make Invoice payment</h1>
      <CardPay />
      <Wallet />
    </div>
  )
}

export default Payments

const CardPay = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: 'XXX',
  })
  const handleSubmit = (e) => {
    console.log('You have submitted this data', formData)
  }
  return (
    <form onSubmit={handleSubmit} className="collapse">
      <button
        className={`collapse__btn ${collapsed ? 'active' : ''}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        Pay with Card
      </button>
      <div className={`collapse__content ${collapsed ? 'expand' : ''}`}>
        <input
          className="input"
          type="text"
          name="name"
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
          name="number"
          value={formData.number}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <input
          className="input"
          type="date"
          placeholder="Expiry date"
          value={formData.expiry}
          name="expiry"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <input
          className="input"
          type="text"
          placeholder="CVV"
          name="cvv"
          value={formData.cvv}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
        <Button type="submit" variant="primary" size="medium">
          Pay now
        </Button>
      </div>
      <hr className="collapse__seperator" />
    </form>
  )
}

const Wallet = () => {
  const [collapsed, setCollapsed] = useState(false)
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
        <Button variant="primary" size="medium">
          Pay now
        </Button>
      </div>
      <hr className="collapse__seperator" />
    </div>
  )
}

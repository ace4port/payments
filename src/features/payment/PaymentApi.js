import axios from 'axios'

let url = 'http://4507-49-244-15-6.ngrok.io/api'

export const getInvoices = async () => await axios.get(`${url}/invoice/`)

export const getCard = async () => await axios.get(`${url}/card/`)

export const payWithCard = async (data) =>
  await axios.post(`${url}/pay/card/`, data)

export const payWithGofaaa = async (data) =>
  await axios.post(`${url}/pay/user/`, data)

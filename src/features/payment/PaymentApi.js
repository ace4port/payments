import axios from 'axios'

let url = 'https://c4da-49-244-37-54.ngrok.io/api'

export const getInvoices = async () => await axios.get(`${url}/invoice/`)

export const getCard = async () => await axios.get(`${url}/card/`)

export const payWithCard = async (data) =>
  await axios.post(`${url}/pay/card/`, data)

export const payWithGofaaa = async (data) =>
  await axios.post(`${url}/pay/user/`, data)

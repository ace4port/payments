import axios from 'axios'

let url = 'http://a4e1-49-244-28-248.ngrok.io/api'

export const getInvoices = async () => await axios.get(`${url}/invoice/`)

export const getCard = async () => await axios.get(`${url}/card/`)

export const payWithCard = async (data) => {
  let response = await axios.post(`${url}/pay/card/`, data)
  return response
}

export const payWithGofaaa = async (data) =>
  await axios.post(`${url}/pay/user/`, data)

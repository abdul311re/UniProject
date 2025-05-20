import Axios from 'axios'
// eslint-disable-next-line no-undef

const POST = async (route, formData) => {
  var result = await Axios.post(process.env.REACT_APP_API_URL+route, formData)
  return result.data
}

export { POST }

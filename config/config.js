export const version = '1.0.17'
export const API_VERSION = '2.3.19'
export let API_URL = ''
if (process.env.NODE_ENV === 'production') {
    API_URL = 'https://newwarroom.paiduayapp.com/api/'
} else {
    API_URL = 'http://localhost:5000/'
}
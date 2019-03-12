export const version = '1.0.17'

export let API_URL = ''
if (process.env.NODE_ENV === 'production') {
    API_URL = 'https://newwarroom.paiduayapp.com/api/'
} else {
    API_URL = 'http://localhost:7000/'
}
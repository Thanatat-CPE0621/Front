import axios from 'axios'
import isAuth from '@/middleware/isAuth'

//  **************
//  Version Config 
//  **************
const UI_VERSION = '2.0.1'
const API_VERSION = '3.0.1'

//  **************
//  baseUrl
//  **************
let API_URL = 'http://localhost:7000/'
if (process.env.NODE_ENV === 'production') {
    API_URL = 'https://newwarroom.paiduayapp.com/api/'
}

//  **************
//  API Service
//  **************
const apiService = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': 'Basic JOl14hhlf0ia0W1fo4tlBZIBPv1WNuYtnSfD6oPF2piw8HYXuGokuTvA97PX24eWh9cgJrOvBC6mE1QgNyNbjEWQnAqF4MgtLRClLO644h4NtEo50W2MtNWuhex5JHC8',
    },
    credentials: false,
    useCredentails: false,
    withCredentials: false,
})




export { apiService, UI_VERSION, API_VERSION, isAuth }
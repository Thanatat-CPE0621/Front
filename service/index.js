
import axios from 'axios'

// Config api url 
const API_URL = 'https://newwarroom.paiduayapp.com/api/'

if (process.browser) {
    let data = JSON.parse(localStorage.getItem('user_data'))
    if (data) {
        axios.defaults.headers.common['userToken'] = data.user.userToken;
    }
}

export const apiService = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': 'Basic JOl14hhlf0ia0W1fo4tlBZIBPv1WNuYtnSfD6oPF2piw8HYXuGokuTvA97PX24eWh9cgJrOvBC6mE1QgNyNbjEWQnAqF4MgtLRClLO644h4NtEo50W2MtNWuhex5JHC8',
    }
})


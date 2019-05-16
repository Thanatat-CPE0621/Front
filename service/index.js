
import axios from 'axios'
import { API_URL } from "@/config/config";
import { state } from '@/store/user'

const apiService = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': 'Basic JOl14hhlf0ia0W1fo4tlBZIBPv1WNuYtnSfD6oPF2piw8HYXuGokuTvA97PX24eWh9cgJrOvBC6mE1QgNyNbjEWQnAqF4MgtLRClLO644h4NtEo50W2MtNWuhex5JHC8',
    },
    credentials: true,
    useCredentails: true,
    withCredentials: false,

})
if (process.browser) {
    window.onNuxtReady(({ $store }) => {
        apiService.interceptors.request.use(
            function (config) {
                const token = $store.state.user.token;
                if (token) config.headers.userToken = token;
                return config;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
    })
}



export default apiService
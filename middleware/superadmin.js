import axios from 'axios'
export default function ({ store, redirect }) {
    axios.interceptors.request.use(
        config => {
            if (token) {
                config.headers.userToken = store.state.user.token;
            }
            return config;
        },
        error => Promise.reject(error)
    );

    if (!store.state.user.isLogin) {
        return redirect('/login')
    } else {
        if (!store.state.user.userData.role.id === 52) {
            return redirect('/login')
        }
    }

}
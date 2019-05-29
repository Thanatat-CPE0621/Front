export default function isAuth() {
    let token = JSON.parse(localStorage.getItem('user_data'))
    if (token && token.user) {
        return { userToken: token.user.user_token };
    } else {
        return {};
    }
}
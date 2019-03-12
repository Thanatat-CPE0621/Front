export const state = () => ({
    userData: [],
    isLogin: false,
    token: null
})
export const mutations = {
    setUserData(state, payload) {
        state.userData = payload.user
        state.isLogin = payload.isLogin
        state.token = payload.token
    },
}

export const state = () => ({
    userData: {}
})
export const mutations = {
    setUserData(state, payload) {
        state.userData = payload.user,
        state.isLogin = payload.isLogin
    }
}

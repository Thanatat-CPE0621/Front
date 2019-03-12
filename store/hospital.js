export const state = () => ({
    hospitals: [],
    info: []
})
export const mutations = {
    getHospitals(state, payload) {
        state.hospitals = payload.hospitals
    },
    getHospitalInfo(state, payload) {
        state.info = payload.info
    },
    clearState(state, payload) {
        state.hospitals = payload
    }
}


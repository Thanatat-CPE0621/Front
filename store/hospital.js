export const state = () => ({
    hospitals: [],
    hospital_id:null,
    info: []
})
export const mutations = {
    getHospitals(state, payload) {
        state.hospitals = payload.hospitals
    },
    getHospitalID(state, payload) {
        state.hospital_id = payload
    },
    getHospitalInfo(state, payload) {
        state.info = payload.info
    },
    clearState(state, payload) {
        state.hospitals = payload
    }
}


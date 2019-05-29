export const state = () => ({
    stations: [],
    station_info: null,
    station_id: null
})
export const mutations = {
    getStations(state, payload) {
        state.stations = payload.stations
    },
    getStationInfo(state, payload) {
        state.station_info = payload.info
    },
    clearState(state, payload) {
        state.stations = payload
    },
    getStationID(state, payload) {
        state.station_id = payload
    }
}


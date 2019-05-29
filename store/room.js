export const state = () => ({
    rooms: [],
    room_info: null,
    room_id: null
})
export const mutations = {
    getRooms(state, payload) {
        state.rooms = payload.rooms
    },
    getRoomInfo(state, payload) {
        state.room_info = payload.info
    },
    clearState(state, payload) {
        state.rooms = payload
    },
    getRoomID(state, payload) {
        state.room_id = payload
    }
}


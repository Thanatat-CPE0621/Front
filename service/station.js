import { apiService, isAuth } from '@/config/config'
export default {
    getHighestWaitingTimeQueue: async (sID) => {
        try {
            let res = await apiService.get(`/station/highestWaitingTimeQueue/${sID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    checkStationCode: async (sCode) => {
        try {
            let res = await apiService.get(`/station/check/${sCode}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    checkStationName: async (name, hID) => {
        let params = {
            hospitalId: hID,
            name: name
        }
        try {
            let res = await apiService.get(`/station/checkStation`, { params, headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getRoomInStation: async (sID) => {
        try {
            let res = await apiService.get(`/station/rooms/${sID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getRoomInStationWithBrief: async (sID) => {
        try {
            let res = await apiService.get(`/station/rooms/${sID}/withQueue`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    //
    // ────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   ::::::   S U P E R   A D M I N   S E C T I O N : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────────────────
    //
    addStation: async (data) => {
        try {
            let res = await apiService.post(`/station/add`, data, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    editStation: async (sID, data) => {
        try {
            let res = await apiService.post(`/station/edit/${sID}`, data, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    deleteStation: async (sID) => {
        try {
            let res = await apiService.get(`/station/delete/${sID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getStationInfo: async (sID) => {
        try {
            let res = await apiService.get(`/station/info/${sID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    reorderStation: async (data) => {
        try {
            let res = await apiService.post(`/station/reorder`, data, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getStationByHospital: async (hID) => {
        try {
            let res = await apiService.get(`/station/multistation/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },






}

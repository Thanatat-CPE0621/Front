import { apiService } from '@/config/config'
export default {
    // public access
    staffLogin: async (data) => {
        try {
            let res = await apiService.post(`/staff/login`, data)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    // private access
    getAllHospitalLis: async () => {
        try {
            let res = await apiService.get(`/staff/`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getAdminList: async () => {
        try {
            let res = await apiService.get(`/staff/admins`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    checkIfUsernameExist: async (username, sID) => {
        try {
            let res = await apiService.get(`/staff/check/${username}/station/${sID}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getStaffRoleList: async () => {
        try {
            let res = await apiService.get(`/staff/roles`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getUserByStation: async (sID) => {
        try {
            let res = await apiService.get(`/staff/multistation/station/${sID}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getUserByRoom: async (sID) => {
        try {
            let res = await apiService.get(`/staff/multistation/room/${sID}`)
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
    getStaffInfomation: async (staffID) => {
        try {
            let res = await apiService.get(`/staff/${staffID}`)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    createStaff: async (data) => {
        try {
            let res = await apiService.post(`/staff/create`, data)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    editStaff: async (staffID, data) => {
        try {
            let res = await apiService.post(`/staff/${staffID}`, data)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    uploadImage: async (data) => {
        try {
            let res = await apiService.post(`/staff/upload/image`, data)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    reorderStaff: async (data) => {
        try {
            let res = await apiService.post(`/staff/reorder`, data)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
}
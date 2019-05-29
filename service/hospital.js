import { apiService, isAuth } from '@/config/config'
export default {
    getAllHospitalList: async () => {
        try {
            let res = await apiService.get(`/hospital/`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getStationInHospital: async  hID => {
        try {
            let res = await apiService.get(`/hospital/station/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getHospitalQueue: async hID => {
        try {
            let res = await apiService.get(`/hospital/queue/day/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getWeeklyHospitalQueue: async hID => {
        try {
            let res = await apiService.get(`/hospital/queue/weekly/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getMonthlyHospitalQueue: async hID => {
        try {
            let res = await apiService.get(`/hospital/queue/monthly/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getYearlyHospitalQueue: async hID => {
        try {
            let res = await apiService.get(`/hospital/queue/yearly/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getHospitalQueueDuringTheDay: async hID => {
        try {
            let res = await apiService.get(`/hospital/queue/during/day/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getHospitalAllAverageQueueTime: async hID => {
        try {
            let res = await apiService.get(`/hospital/queue/avg/all/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getHospitalAverageQueueTime: async hID => {
        try {
            let res = await apiService.get(`/hospital/queue/avg/day/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getHospitalQueueInDateRange: async hID => {
        try {
            let res = await apiService.get(`/hospital/queue/range/day/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getQueuePeriodInMonth: async hID => {
        try {
            let res = await apiService.get(`/hospital/queue/period/month/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getQueuePeriodInWeek: async hID => {
        try {
            let res = await apiService.get(`/hospital/queue/period/week/${hID}`, { headers: isAuth() })
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
    getAllHospitalListforReorder: async () => {
        try {
            let res = await apiService.get(`/hospital/list/reorder`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getHospitalInfomation: async hID => {
        try {
            let res = await apiService.get(`/hospital/info/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    checkHospitalNameAvailable: async hName => {
        try {
            let res = await apiService.get(`/hospital/check/name?name=${hName}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getAllRoomInHospital: async hID => {
        try {
            let res = await apiService.get(`/hospital/room/all/${hID}`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    createNewHospital: async data => {
        try {
            let res = await apiService.post(`/hospital/add`, data, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    editHospitalInfo: async (hID, data) => {
        try {
            let res = await apiService.post(`/hospital/edit/${hID}`, data, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    reorderHostpital: async data => {
        try {
            let res = await apiService.post(`/hospital/reorder`, data, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    }





}

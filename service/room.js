import { apiService, isAuth } from '@/config/config'

export default {
    getQueueNumberTypesList: async () => {
        try {
            let res = await apiService.get(`/queue/number/type`, { headers: isAuth() })
            return res.data
        } catch (error) {
            console.log(error)
        }
    },

}
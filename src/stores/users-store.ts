import {defineStore} from 'pinia'
import axios from "axios";

export const useUserStore = defineStore('users', {
    state: () => ({
        users: []
    }),

    actions: {
        async getUsers() {
            const data = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5')
            console.log(data)
        }
    }
})

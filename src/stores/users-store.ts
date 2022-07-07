import {defineStore} from 'pinia'
import axios from "axios";
import type {IUser} from "@/types/user";

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1'

type IUser = {
    id: string,
    name: string,
    email: string,
    phone: string,
    position: string,
    position_id: string,
    registration_timestamp: number,
    photo: string,
}

interface IState {
    users: IUser[],
    page: number
    totalPages: number | null,
    isLastPage: boolean,
}

export const useUserStore = defineStore('users', {
    state: () => ({
        users: [],
        page: 1,
        totalPages: null,
        isLastPage: false,
    } as IState),

    actions: {
        async getUsers() {
            try {
                if (this.totalPages && this.totalPages < this.page) {
                    return
                }

                const response = await axios.get(`users?page=${this.page}&count=6`)

                this.page++
                this.users.push(...response.data.users)
                this.totalPages = response.data.total_pages

                if (this.totalPages && this.totalPages + 1 === this.page) {
                    this.isLastPage = true
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})

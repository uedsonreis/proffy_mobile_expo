import axios, { AxiosInstance } from 'axios'

class ApiService {

    private readonly api = axios.create({ baseURL: 'http://192.168.0.25:3333' })

    public async getConnections() {
        const response = await this.api.get('connections')
        return response.data
    }

    public async getClasses(filters?: any) {
        const response = await this.api.get('classes', { params: { ...filters } })
        return response.data
    }

    public async createNewConnection(userId: number) {
        const response = await this.api.post('connections', { userId })
        return response.data
    }

}

export default new ApiService()
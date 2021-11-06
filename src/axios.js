import axios from "axios"

export const customAxios = axios.create({
    baseURL: "https://freecurrencyapi.net/api/v2",
    params: {
        apikey: "e4c23da0-3b26-11ec-b946-afe9794a701d"
    }
})

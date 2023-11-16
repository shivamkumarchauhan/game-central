import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f92503c501a64c09b2cb0ce06f776d93'
    }
})
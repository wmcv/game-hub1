import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '9e909f66144a4f23b9f1c4edae3fdb67'
    }
})
import axios from "axios";

export const axiosWithAuth = () => {

    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            authorization: token,
        },
        // TODO: Update with baseURl for our APi
        // baseURL: "http://localhost:5000",
    });
};
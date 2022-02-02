import axios from "axios";
axios.interceptors.request.use(function (config) {
    config.headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json'
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
export const userLogin = formData => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await  axios.post("/auth/login",formData);
            resolve(response);
        }catch ({response}) {
            reject(response)
        }
    })

    /*return axios.post("/auth/login",formData)
                .then( response => {return response})
                .catch( error => {return error});*/

}
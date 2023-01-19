import axios from 'axios';

const API_PATH = 'https://63c424bef0028bf85fa39dd3.mockapi.io/api/v1'

export const get = (apiEndPoint) => {
    return axios.get(API_PATH + apiEndPoint).then((response) => {
        return response
    })
}

export const post = (apiEndPoint, payload) => {
    return axios.post(API_PATH + apiEndPoint, payload).then((response) => {
        return response
    })
}
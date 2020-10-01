import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production' ?
    (baseURL = 'here should be your production endpoint') :
    (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });


export const test = async() => {
    return await service.get("/")
}

export const signup = async user => {
    return await service.post("/signup", user)
}

export const login = async user => {
    return await service.post("/login/", user)
}

export const logOut = async() => {
    return await service.get("/logout")
}

export const getProfile = async() => {
    return await service.get("/profile")
}

export const getFragment = async fragmentId => {
    return await service.get(`/fragments/${fragmentId}`)
}

export const getFragments = async userId => {
    return await service.post("/fragmentsFetch", userId)
}

//====MEANING CLOUD
export const getSummarize = async values => {
    return await service.post('/summarize', values)
}
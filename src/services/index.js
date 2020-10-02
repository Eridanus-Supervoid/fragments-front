import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production' ?
    (baseURL = '/') :
    (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });


export const test = async() => {
    return await service.get("/")
}

export const signup = async user => {
    return await service.post("/auth/signup", user)
}

export const login = async user => {
    return await service.post("/auth/login/", user)
}

export const logOut = async() => {
    return await service.get("/auth/logout")
}

export const getProfile = async() => {
    return await service.get("/auth/profile")
}

export const getFragment = async fragmentId => {
    return await service.get(`/api/fragments/${fragmentId}`)
}

export const getFragments = async userId => {
    return await service.post("/api/fragmentsFetch", userId)
}

export const createNote = async values => {
    return await service.post("/api/notes", values)
}


export const getSummarize = async values => {
    return await service.post('/api/summarize', values)
}
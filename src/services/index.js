import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production' ?
    (baseURL = 'here should be your production endpoint') :
    (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });


// const cognitiveService = axios.create({
//     baseURL: 'url',
//     headers: {"Content-type":"application/ssml+xml", "X-Microsoft-OutputFormat":"audio-16khz-32kbitrate-mono-mp3",}
// })


// export const textoVoz = async values => {
//     return await cognitiveService.post()
// }


const meaningCloud = axios.create({
    //TODO:Cambiar key 
    baseURL: 'https://api.meaningcloud.com/',
    // withCredentials: false,
    //headers: { "Access-Control-Allow-Origin": "*" }
});

export const resumen = async values => {
    const { sentences, txt } = values

    return await meaningCloud.post(`summarization-1.0?key=8391747ce1b0d0b1525a752080b21693&sentences=${sentences}`, {
        txt: `${txt}`,
    })
}




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




// axios({
//     method: 'post',
//     url: '/login',
//     data: {
//       firstName: 'Finn',
//       lastName: 'Williams'
//     },
//     config: {

//     }
//   });


//   axios.post('/login', {
//     firstName: 'Finn',
//     lastName: 'Williams'
//   })
//   .then((response) => {
//     console.log(response);
//   }, (error) => {
//     console.log(error);
//   });
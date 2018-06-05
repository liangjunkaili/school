import axios from 'axios'
import Qs from 'qs'

axios.interceptors.request.use(res =>{
console.log(res)
},err =>{
    console.log(err)
})

axios.interceptors.response.use(res =>{

},err =>{

})

const formUrlencodedOptions = {
    transformRequest(data) {
        return Qs.stringify(data)
    },
    transformResponse:[function(data){
        return Qs.stringify(data)
    }
    ],
    params:{
        uid:'111111'
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
}

axios.defaults.headers.uid = ''

export const login = (params) => {
    return axios.post('/zytb/login',params,formUrlencodedOptions)
}
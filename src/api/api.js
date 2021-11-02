import axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "d5818509-cae6-443f-9521-0f4307626a9d"
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => {
          return res.data
      })
  },
  unFollowUser(id){
    return instance.delete(`follow/${id}`)
      .then(res => {
        return res.data
      })
  },
  followUser(id){
    return instance.post(`follow/${id}`)
      .then(res => {
        return res.data
      })
  }
}


export const profileAPI = {
  getUsers(userId){
    return instance.get(`profile/${userId}`)
    .then(res => {
      return res.data
    })
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status){
    return instance.put(`profile/status`, {
      status
    })
  },
  savePhoto(photo){
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile){
    return instance.put(`profile`, profile)
  }
}

export const headerAPI = {
  getAuth(){
    return instance.get(`auth/me`)
      .then(res => {
        return res.data
      })
  },
  login(email, password, rememberMe = false, captcha = null){
    return instance.post(`auth/login`, { email, password, rememberMe, captcha })
  },
  logout(){
    return instance.delete(`auth/login`)
  }
}

export const securityAPI = {
  getCaptchaURL(){
    return instance.get(`security/get-captcha-url`)
  },
 
}
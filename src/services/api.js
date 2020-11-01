import axios from 'axios'

export default {
  auth: {
    getProfile: () => axios.get('/api/admin'),
    logout: () => axios.post('/api/admin/logout'),
    adminLogin: data => axios.post('/api/admin/login', data),
    adminVerifyDevice: data => axios.post('/api/admin/device/verify', data),
    adminResendEmailConfirm: data => axios.put('/api/admin/device/resend_code', data),
  },
  forgotPassword: {
    sendLinkEmail: email => axios.post('/api/admin/forgot_password/email', email),
    changePassword: password => axios.put('/api/admin/forgot_password/reset', password),
    checkToken: data => axios.post('/api/admin/forgot_password/token', data),
  },
  shipperManagment: {
    getShippers: (data, perPage = 10, page) => axios.post(`/api/admin/management/shippers/get?per_page=${perPage}&current_page=${page}`, data),
    blockUser: data => axios.post('/api/admin/management/shippers/block', data),
    // search: (value, status, perPage = 10, page) => axios.get(`/api/admin/management/shippers/search?value=${value}&per_page=${perPage}&current_page=${page}`),
  },
  carrierManagement: {
    // search: (value, status, perPage = 10, page) => axios.get(`/api/admin/management/carriers/search?value=${value}&per_page=${perPage}&current_page=${page}`),
    getFile: id => axios.get(`/api/admin/management/documents/${id}`),
    blockUser: data => axios.post('/api/admin/management/carriers/block', data),
    getProfile: id => axios.get(`/api/admin/management/carriers/profile/${id}`),
    getReviews: (id, page, perPage = 3) => axios.post(`/api/admin/management/carriers/reviews/${id}?per_page=${perPage}&current_page=${page}`),
    getCarriers: (data, perPage = 10, page) => axios.post(`/api/admin/management/carriers/get?per_page=${perPage}&current_page=${page}`, data),
    rejectVerify: data => axios.put(`/api/admin/management/carriers/make`, data),
  },
  shipperProfile: {
    getShipperById: id => axios.get(`/api/admin/management/shippers/profile/${id}`),
    getReviewsShipper: (id,page) => axios.post(`/api/admin/management/shippers/reviews/${id}?current_page=${page}&per_page=3`),
  },
  timeSettings: {
    getValueOfParams: type => axios.get(`/api/admin/time/${type}`),
    updateBookTime: params => axios.post('/api/admin/time/', params),
  },
  LoadTruckManagement: {
    getChat: disputeId => axios.get(`/api/admin/chats/disputes/${disputeId}`),
    getFile: id => axios.get(`/api/admin/management/documents/${id}`),
    getLoads: data => axios.post(`/api/admin/management/loads`, data),
    getTrucks: data => axios.post(`/api/admin/management/trucks`, data),
    deleteLoad: data => axios.post(`/api/admin/management/loads/delete`, data),
    deleteTruck: data => axios.post(`/api/admin/management/trucks/delete`, data),
    restoreRating: data => axios.post(`/api/admin/management/refreshRaiting`, data),
    resolveDispute: disputeId => axios.delete(`/api/admin/chats/disputes/${disputeId}`),
  },
  settings:{
    enableTwoFactor: data => axios.post ('/api/admin/2fa/enable',data),
    disabledTwoFactor: data => axios.post('/api/admin/2fa/disable',data),
    generateSecretKey: () => axios.get('/api/admin/2fa/generate_secret_key'),
    changePassword: pass => axios.put('/api/admin/settings/changePassword',pass),
  },
  LoadTruckProfile: {
    getLoad: id => axios.get(`/api/admin/management/loads/${id}`),
    getTruck: id => axios.get(`/api/admin/management/trucks/${id}`)
  },
}

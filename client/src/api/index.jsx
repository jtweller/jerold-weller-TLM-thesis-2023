// client side api routes
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3330/api',
})

export const getAllTickets = () => api.get(`/tickets`)
export const getTicketById = () => (id) => api.get(`/ticket/${id}`)
export const claimTicketById = (id, payload) => api.put(`/ticket/claim/${id}`, payload)
export const closeTicketById = (id, payload) => api.put(`/ticket/close/${id}`, payload)
export const deleteTicketById = id => api.delete(`/ticket/${id}`)

/*   User register   */
export const handleRegister = async newUser => {
    console.log('Sending form to api', newUser);
    const res = await api.post('/register', newUser);
    return res;
}

/*   User login   */
export const handleLogin = async user => {
    console.log('Logging in user', user);
    const res = await api.post('/login', user)
    return res;
}

/* User information */
export const userInfo = async () => {
    console.log('Getting user info');
    const token = window.localStorage.getItem('api_token')
    const res = await api.get(`/user`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res;
}

const apis = {
    getAllTickets,
    getTicketById,
    claimTicketById,
    closeTicketById,
    deleteTicketById,
    handleRegister,
    handleLogin
}

export default apis
import axios from 'axios'

const API_URL = '/api/tickets/'

// Create New Ticket
const createTicket = async (ticketData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, ticketData, config)

    return response.data
}

// Get User Tickets
const getTickets = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Get User Ticket
const getTicket = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(API_URL + ticketId, config)

    return response.data
}

// CLOSE User Ticket
const closeTicket = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.put(API_URL + ticketId, { status: 'closed' }, config)

    return response.data
}

const ticketService = {
    createTicket,
    getTickets,
    getTicket,
    closeTicket
}

export default ticketService
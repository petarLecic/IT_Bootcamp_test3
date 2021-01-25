import axios from 'axios'

const BASE_URL = 'https://api.spacexdata.com/v4'
const COMPANY = '/company'
const STARLINK = '/starlink'
const NEXT_LAUNCH = '/launches/next'
const ROCKETS = '/rockets'

export const getCompanyInfo = () => axios.get(`${BASE_URL}${COMPANY}`)
export const getStarlinks = () => axios.get(`${BASE_URL}${STARLINK}`)
export const getNextLaunch = () => axios.get(`${BASE_URL}${NEXT_LAUNCH}`)
export const getRockets = () => axios.get(`${BASE_URL}${ROCKETS}`)
const SPACEX_API = 'https://api.spacexdata.com/v3';
const LAUNCHES_PAST = '/launches/past';
const LAUNCHES_UPCOMING = '/launches/upcoming';
const COMPANY_INFO = '/info';
const ROADSTER_INFO = '/roadster'

export function getPastLaunches () {
    return fetch(`${SPACEX_API}${LAUNCHES_PAST}`)
    .then(res => res.json())
}
export function getUpcomingLaunches () {
    return fetch(`${SPACEX_API}${LAUNCHES_UPCOMING}`)
    .then(res => res.json())
}
export function getCompanyInfo () {
    return fetch(`${SPACEX_API}${COMPANY_INFO}`)
    .then(res => res.json())
}

export function getRoadsterInfo () {
    return fetch(`${SPACEX_API}${ROADSTER_INFO}`)
    .then(res => res.json())
}
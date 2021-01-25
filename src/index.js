import Select from "./components/Select"
import Starlinks from "./components/Starlinks"
import { getCompanyInfo, getStarlinks, getNextLaunch, getRockets } from "./service"

const header = document.querySelector('header')
const main = document.querySelector('main')
const divSelect = document.getElementById('select-version')
const btnNext = document.getElementById('next-launch')
btnNext.addEventListener('click', nextLaunch)

let starlinks = []
let showStarlinks = []

getCompanyInfo().then(res => {
    generateHeader(res.data)
})

getStarlinks().then(res => {
    starlinks = res.data
    generateSelect(starlinks)
    showStarlinks = starlinks
    main.append(...Starlinks(showStarlinks))
})

function generateHeader(info) {
    const h1Name = document.createElement('h1')
    h1Name.textContent = info.name
    const h2Year = document.createElement('h2')
    h2Year.textContent = info.founded
    const h2Location = document.createElement('h2')
    h2Location.textContent = `${info.headquarters.address}, ${info.headquarters.city}, ${info.headquarters.state}`
    const hr = document.createElement('hr')

    header.append(h1Name, h2Year, h2Location, hr)
}

function generateSelect(starlinks) {
    const versions = starlinks.map(starlink => starlink.version)
    const select = Select(versions)
    divSelect.appendChild(select)

    select.addEventListener('change', e => {
        showStarlinks = starlinks.filter(starlink => starlink.version == e.target.value)
        main.innerHTML = ''
        main.append(...Starlinks(showStarlinks))
    })
}

function nextLaunch() {
    getNextLaunch().then(res =>{
        main.innerHTML = ''
        const imgNext = document.createElement('img')
        imgNext.src = res.data.links.patch.small
        const pName = document.createElement('p')
        pName.textContent = res.data.name
        main.append(imgNext, pName)
        const rocketID = res.data.rocket
        getRockets().then(res => {
            const rocket = res.data.find(rocket => rocketID == rocket.id)
            const imgRocket = document.createElement('img')
            imgRocket.src = rocket.flickr_images[0]
            imgRocket.width = '300'
            const pRocketName = document.createElement('p')
            pRocketName.textContent = rocket.name
            main.append(imgRocket, pRocketName)
        })
    })
}
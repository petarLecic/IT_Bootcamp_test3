const Starlink = starlink => {
    const divStarlink = document.createElement('div')
    
    const pTLE = document.createElement('p')
    pTLE.textContent = starlink.spaceTrack.TLE_LINE0
    const pVersion = document.createElement('p')
    pVersion.textContent = starlink.version
    divStarlink.append(pTLE, pVersion)

    return divStarlink
}

export default Starlink
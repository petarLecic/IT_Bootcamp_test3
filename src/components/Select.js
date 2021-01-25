const Select = options => {
    const versions = new Set(options)
    const select = document.createElement('select')
    versions.forEach(version => {
        const opt = document.createElement('option')
        opt.value = version
        opt.textContent = version

        select.appendChild(opt)
    })
    return select
}

export default Select
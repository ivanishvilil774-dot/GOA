
const form = document.querySelector("form")
const namedisplay = document.getElementById("p1")
const facebooklistdisp = document.getElementById("p2")
const emaildisp = document.getElementById("p3")
const passworddisp = document.getElementById("p4")


form.addEventListener("submit", e => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const facebooklink = document.getElementById("facebookLink").value
    const password = document.getElementById("password").value

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("facebooklink", facebooklink)
    localStorage.setItem("password", password)

    namedisplay.textContent = `Name: ${localStorage.getItem("name")}`
    facebooklistdisp.textContent = `facebooklist: ${localStorage.getItem("facebooklink")}`
    emaildisp.textContent = `email: ${localStorage.getItem("email")}`
    passworddisp.textContent = `password: ${localStorage.getItem("password")}`

    
})
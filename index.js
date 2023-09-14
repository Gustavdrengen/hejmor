const textArea = document.getElementById("text")
const imageArea = document.getElementById("image")
const optionsDiv = document.getElementById("options")

function loadFile(file) {
    if (file == "fisk3") {
        if (prompt("Intast kodeord").toUpperCase() != "KOBEN") {
            file = "intro2"
        }
    }
    let http = new XMLHttpRequest()

    http.open( "GET", "./adventure/" + file + ".txt", false)
    http.send(null)

    let response = http.responseText.split("---")
    let image = response[0].trim()
    let text = response[1].trim()
    let options = response[2].trim().split("\n")

    textArea.innerHTML = text
    imageArea.src = "./images/"+image

    optionsDiv.innerHTML = ""
    options.forEach((option, i) => {
        option = option.split("-")
        optionsDiv.innerHTML += `<button onclick="loadFile('${option[1].trim()}')">${option[0].trim()}</button>`
    })

}
loadFile("intro")
var inputTxt = document.querySelector("#text-input")
var outputTxt = document.querySelector("#text-output")
var btn = document.querySelector("#the-button")
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"

function errorHandler(error){
  alert("Oops Champ! Something's wrong come back later or try to refresh the page", error)
}

function translateMe(){
  var textinput = inputTxt.value
  console.log("input text", textinput)
  var url  = `${serverURL}?text=${textinput}`
  console.log(url)
  fetch(url).then(data=>data.json()).then(json=>outputTxt.innerText = json.contents.translated).catch(errorHandler)
  // .then(data=>data.json()).then(console.log(json))
}

btn.addEventListener("click", translateMe)
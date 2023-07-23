// contentscript

document.getElementsByTagName('input')[0].value = 'the code works'

let sample = function () {
  let time = new Date()
  document.getElementsByTagName('input')[0].value = `Time ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}  `
}

setInterval(sample, 1000)

console.log(new Date())
console.log("Page fully loaded", 'outside');
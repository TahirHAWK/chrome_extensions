console.log('kittens of the world, unite as one!!')

let filenames = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
     
]

let imgs = document.getElementsByTagName('img')

for(imgElt of imgs){
    let r = Math.floor(Math.random() * filenames.length)
    let file = 'images/' + filenames[r]
    let url = chrome.extension.getUrl(file)
    imgElt.src = url
    console.log(url, r)
}

document.addEventListener('submit', (e)=>{
    console.log("you submitted something....!!!!", e)
})

 
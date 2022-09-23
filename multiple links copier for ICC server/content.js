// document.getElementsByClassName('dropdown-menu')[5].getElementsByTagName('a')[0].href

// lets print the download links on the console first


function copyToClipBoard(TextToCopy){
    let copyPromise = new Promise((resolve, reject)=>{
            navigator.clipboard.writeText(TextToCopy).then((res)=>{
        console.log("copied to clipboard")
        resolve()
    }).catch(()=>{
        console.log("cannot copy text, sorry!!")
        reject()
    })
    })
    return copyPromise

}


function getAllEpisodeLinks(){
    let getAllEpisodeLinksPromise = new Promise((resolve, reject)=>{
        let downloadButton = document.getElementsByClassName('dropdown-menu')[5]

        let downloadArray = downloadButton.getElementsByTagName('a')

        console.log(downloadArray.length, '<<-- length of the array')

        let linksForClipBoard = ""


        for(i=0;i<downloadArray.length;i++){
            linksForClipBoard = linksForClipBoard + downloadArray[i].href + "\n"
        }

        

        console.log(linksForClipBoard, '<<-- length of the array')
        resolve(linksForClipBoard) 
    })
    return getAllEpisodeLinksPromise

}


getAllEpisodeLinks().then((linkTexts)=>{
    copyToClipBoard(linkTexts).then(()=>{
        console.log('copied')
    }).catch(()=>{
        console.log('sorry, cannot copy')
    })
})
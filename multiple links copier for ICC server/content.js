

// document.getElementsByClassName('dropdown-menu')[5].getElementsByTagName('a')[0].href

// lets print the download links on the console first


// function copyToClipBoard(TextToCopy){
//     let copyPromise = new Promise((resolve, reject)=>{
//             navigator.clipboard.writeText(TextToCopy).then((res)=>{
//         console.log("copied to clipboard")
//         resolve()
//     }).catch(()=>{
//         console.log("cannot copy text, sorry!!")
//         reject()
//     })
//     })
//     return copyPromise

// }


function unsecuredCopyToClipboard(text, callback) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      console.log('copy done')
      callback()
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);


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

        

        console.log(linksForClipBoard, '<<-- download links here')
        // resolve(linksForClipBoard) 
        // navigator.clipboard.writeText(linksForClipBoard).then(res=>{
        //     console.log(res, "Input data copied to clipboard successfully");
        //     resolve(linksForClipBoard) 
        // }).catch(()=>{
        //     console.log('cannot copy')
        //     reject('cannot copy')
        // })
        unsecuredCopyToClipboard(linksForClipBoard, function(){
            console.log('done copy')
                resolve()
            
        })

    })
    return getAllEpisodeLinksPromise

}



getAllEpisodeLinks().then((res)=>{
    console.log(res, 'after copy')
}).catch((error)=>{
    console.log(error, 'cannot copy it')
})
// .then((linkTexts)=>{
//     copyToClipBoard(linkTexts).then(()=>{
//         console.log('copied')
//     }).catch(()=>{
//         console.log('sorry, cannot copy')
//     })


// })
// getAllEpisodeLinks().then((linkTexts)=>{
//     copyToClipBoard(linkTexts).then(()=>{
//         console.log('copied')
//     }).catch(()=>{
//         console.log('sorry, cannot copy')
//     })
// })

// lets print the download links on the console first





function getAllEpisodeLinks(){
        let downloadButton = document.getElementsByClassName('dropdown-menu')[5]

        let downloadArray = downloadButton.getElementsByTagName('a')

        console.log(downloadArray.length, '<<-- length of the array')

        let linksForClipBoard = ""
        let downloadLinksArray = []


        for(i=0;i<downloadArray.length;i++){
            linksForClipBoard = linksForClipBoard + downloadArray[i].href + "\n"
            downloadLinksArray.push(downloadArray[i].href)
        }

        

        console.log(linksForClipBoard, '<<-- download links here')

        return downloadLinksArray
}







  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log(message.data)
    if(message.data == 'copy-links'){
        sendResponse(getAllEpisodeLinks())
    } else{
        console.log('failed to send data to popup.')
    }
  });


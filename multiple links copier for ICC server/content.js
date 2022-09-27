
// lets print the download links on the console first





function getAllEpisodeLinks(){
        let downloadButton = document.getElementsByClassName('dropdown-menu')[5]

        let downloadArray = downloadButton.getElementsByTagName('a')

        console.log(downloadArray.length, '<<-- length of the array')

        let linksForClipBoard = ""


        for(i=0;i<downloadArray.length;i++){
            linksForClipBoard = linksForClipBoard + downloadArray[i].href + "\n"
        }

        

        console.log(linksForClipBoard, '<<-- download links here')


}



getAllEpisodeLinks()





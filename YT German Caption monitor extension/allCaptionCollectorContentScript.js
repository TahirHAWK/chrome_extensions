// After clicking on 'Collect words to use from current tab'
// This script does not use the background script
let allWords = []

function extractUniqueWords(input) {
    let words;
    
    if (typeof input === 'string') {
      words = input.toLowerCase().split(/\W+/);
    } else if (Array.isArray(input)) {
      words = input.map(item => item.toLowerCase());
    } else {
      throw new Error('Input must be a string or an array.');
    }
    
    const uniqueWords = [...new Set(words)];
    return uniqueWords;
  }
  
  
  // this function would extract words only out of a string, while excluding all special characters and spaces and return them as an array
function extractWords(str) {
    // Remove special characters and numbers
    const cleanedStr = str.replace(/[^\p{L}\s]/gu, '');
  
    // Split the cleaned string into an array of words
    const words = cleanedStr.split(/\s+/).filter(word => word !== '');
  
    return words;
  }

function extractChannelLogo(){
  let imageSources = []
  let images = document.getElementsByTagName('img')

  for(i=0; i<images.length; i++){
    if(images[i].src.includes('yt3.ggpht.com')){
        imageSources.push(images[i].src)
    }
}
  return imageSources[1]
}




// listen for requests from the popup js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
   
    // must declare these inside in order to work
    let channelLogoLink = extractChannelLogo()
    let channelName = document.getElementsByClassName('yt-simple-endpoint style-scope yt-formatted-string')[0].innerText
    let channelLink = document.getElementsByClassName('yt-simple-endpoint style-scope yt-formatted-string')[0].href
    let videoTitle =document.getElementsByTagName('h1')[1].innerText
    let getCaptionLanguageType = document.getElementById('label-text')
    let allCaptionsTab = document.getElementById('segments-container')
    let captionTabExists = !!document.querySelectorAll('ytd-transcript-segment-renderer').length
    let allCaptions = ''
    let videoDetails = {}
    // get all youtube captions of that video
    if(request.message == "request all yt captions" && captionTabExists && getCaptionLanguageType.innerText.includes('German')){
            console.log('detected german successfully..')
             allCaptions = allCaptionsTab.innerText  
            allWords = extractUniqueWords(extractWords(allCaptions)).sort()
            console.log(extractWords(allCaptions).length, extractUniqueWords(allCaptions).length, extractUniqueWords(extractWords(allCaptions)).length)
            // make the object of the video details
            videoDetails = { title: videoTitle.trim(), channel: channelName.trim(), url: window.location.href.trim(), channelUrl: channelLink.trim(), captionWords: allWords, channelLogoLink: channelLogoLink}
            sendResponse(videoDetails);
    } else{
      console.log('Some problems occured:', captionTabExists, request.message == "request all yt captions")
      // send a message as an error and check on the popup script 
      sendResponse('problem')
    }
    

    // Send the response back to the popup.js script
  });

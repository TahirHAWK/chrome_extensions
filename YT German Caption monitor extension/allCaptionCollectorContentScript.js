let allWords = []

// this function would extract unique words only out of a string or array and return them as an array
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


// listen for requests from the popup js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // must declare these inside in order to work
    let getCaptionLanguageType = document.getElementById('label-text')
    let allCaptionsTab = document.querySelectorAll('ytd-transcript-segment-renderer')
    console.log('Message from popup:', request.message == "request all yt captions");
    let allCaptions = ''
    // get all youtube captions of that video
    if(request.message == "request all yt captions" ){
        if(getCaptionLanguageType.innerText.includes('German')){
            console.log('detected german successfully..')
            for(i=0; i<allCaptionsTab.length; i++){
                allCaptions = allCaptions + allCaptionsTab[i].innerText
            }
            allWords = extractUniqueWords(extractWords(allCaptions))
            console.log(extractWords(allCaptions).length, extractUniqueWords(allCaptions).length,extractUniqueWords(extractWords(allCaptions)).length)
            sendResponse(allWords);

        }
    }
    

    // Send the response back to the popup.js script
  });

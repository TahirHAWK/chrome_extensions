// declaration section
let rawCaptions = []
let desiredCaptions = []



// checking if the video is playing or in pause mode, if in pause, no further calculations would be done
function checkPlayStatus(){
    // check if the caption button is activated or not
    let subtitlesButtonStatus = document.getElementsByClassName('ytp-subtitles-button')[0].getAttribute('aria-pressed')
    // check if the caption language selected is german or not
    let captionLanguageCheck = document.getElementById('label-text').innerText
    let getPlayStatus = document.getElementsByClassName('ytp-play-button')[0].getAttribute('data-title-no-tooltip');
    if(getPlayStatus == 'Play'){
        return false
    } else if(getPlayStatus == 'Pause' && subtitlesButtonStatus == 'true' && captionLanguageCheck.includes('German')){
        return true
    } 
}

// here the caption is being replaced so that the video can be seen fullscreen
function placeCaption(caption){
    let captionHolder = document.getElementsByClassName('ytp-caption-segment')
    if(captionHolder.length !== 0){
        captionHolder[0].innerText = caption
        captionHolder[1].innerText = ''
    }
}

// this function will collect captions from youtube caption segment
function collectCaption(){
    let fullCaption = ''
    let captionHolder = document.getElementsByClassName('ytp-caption-segment')
    if(captionHolder.length !== 0){
        for(i=0; i<captionHolder.length; i++){
           fullCaption = fullCaption + ' ' +  captionHolder[i].innerText 
        }
    }
    return fullCaption.trim()
}

// sendItToBackground, this function send the parameter whatever it is passed to the background script for further processing
function sendItToBackground(caption){
    // write the code to send it to background
    chrome.runtime.sendMessage({message: caption}, (response)=>{
        // the response would be the translated array
        rawCaptions.push(caption)
        desiredCaptions.push(response.message)
        console.log('response from background:', response.message )
        placeCaption(response.message)
    })
}


// checkRawCaptions , in this the parameter will be checked accross all array elements of rawCaptions, if the same one is found, then the same index number of rawCaptions, will contain the translated caption in the desired captions array
function checkRawCaptions(activeCaption){
    let captionLocationInArray = 0
    if(!activeCaption){
        console.log('just an empty string.')
    } else if(desiredCaptions.includes(activeCaption) || rawCaptions.includes(activeCaption)){
        console.log(' caption exists, dont sent to background.', desiredCaptions.includes(activeCaption), rawCaptions.includes(activeCaption), desiredCaptions, rawCaptions)
        if(desiredCaptions.includes(activeCaption)){
            captionLocationInArray = desiredCaptions.indexOf(activeCaption)
            placeCaption(desiredCaptions[captionLocationInArray])
        } else if(rawCaptions.includes(activeCaption)){
            captionLocationInArray = rawCaptions.indexOf(activeCaption)
            placeCaption(desiredCaptions[captionLocationInArray])
        }
    } else{
        sendItToBackground(activeCaption)
    }
}
 
// get the element where the caption is located
// this is where the caption is located, but in order for this code to work, the user must open the captions tab manually

function captionTraverser(){
    // it will only run if the video is playing
    if(checkPlayStatus()){
        checkRawCaptions(collectCaption())
    } else{
        console.log('Currently in pause/caption is off, press play/activate captions to continue or set the caption language to German.')
    }
}

// need this method for the future use....

// function captionTraverser(){
//     console.log('from caption traverser: ' ,rawCaptions, desiredCaptions)
//     let getCaptionLanguageType = document.getElementById('label-text')
//     let allCaptionsTab = document.querySelectorAll('ytd-transcript-segment-renderer')
//     // check if the language selected is German or not
//     if(getCaptionLanguageType.innerText.includes('German')){
//         // traverse each node where the text is located
//         for(i = 0; i< allCaptionsTab.length; i++){
//             // locating the active tab
//             if(allCaptionsTab[i].classList.contains('active')){
//                 let activeCaption = allCaptionsTab[i].innerText
//                 checkRawCaptions(activeCaption)            
//             }
//         }
//     }
// }

// execution section
// setTimeout()
setInterval(captionTraverser, 1000)







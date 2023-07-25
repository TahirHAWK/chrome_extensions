// plan: 
// 1. make an array where the raw active caption would be pushed, and before pushing, it would be checked if the raw caption already exists or not

// 2. if the raw caption already exists, then another array, which is the collection of responses from the background script, where the desired translated output will be kept in the same indexes which would be easier to find and show as output
// 3. if it doesn't exists, then the raw caption would be sent to the background script, which will make it a words array from sentence, then search it in the german words list and return the modified array/string as response to content script.
// 4. save the response in the same index as the raw string captions so that both can be found easily in two different arrays, even if it is called multiple times, the same function wouldn't require same calculations multiple times

// declaration section
let rawCaptions = []
let desiredCaptions = []

// checking if the video is playing or in pause mode, if in pause, no further calculations would be done
function checkPlayStatus(){
    let getPlayStatus = document.getElementsByClassName('ytp-play-button')[0].getAttribute('data-title-no-tooltip');
    if(getPlayStatus == 'Play'){
        return false
    } else if(getPlayStatus == 'Pause'){
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
        console.log('Currently in pause, press play to continue.')
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
setInterval(captionTraverser, 1000)







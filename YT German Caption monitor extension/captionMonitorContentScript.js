// universal declaration section
let processedCaptions = {}
let lastExecutedCaptionTraverser = new Date()
const CAPTION_TRAVERSER_INTERVAL_TIME = 1000
let captionTraverserIntervalID = null


// this function replace whitespace with underscores of a sentence
function replaceSpacesWithUnderscores(sentence) {
    return sentence.replace(/[^a-zA-Z0-9\u00C0-\u00FF]/g, '_');
  }
 

// checking if the video is playing or in pause mode, if in pause, no further calculations would be done
function checkPlayStatus(){
    // check if the caption button is activated or not
    let subtitlesButtonStatus = document.getElementsByClassName('ytp-subtitles-button')[0].getAttribute('aria-pressed')
    // check if the caption language selected is german or not
    // this only shows after clicking on 'Show transcript'
    let captionLanguageCheck = document.getElementById('label-text').innerText
    // this is after clicking the gear icon in a running video, and see if the subtitles is selected to german or not, but it won't show if the gear icon is pressed at least once
    // let captionLanguageCheck = document.getElementsByClassName('ytp-menuitem')[2].innerText

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


function sendItToBackground(caption){
    // write the code to send it to background
    chrome.runtime.sendMessage({message: caption}, (response)=>{
        // the response would be the translated array
       
        processedCaptions[replaceSpacesWithUnderscores(caption)] = response.message
        console.log('response from background:', processedCaptions )
        placeCaption(response.message)
    })
}




function checkRawCaptions(activeCaption){
    if(!activeCaption){
        console.log('just an empty string.')
    } else if(Object.values(processedCaptions).includes(activeCaption)){
        placeCaption(activeCaption)
    } else if(processedCaptions[replaceSpacesWithUnderscores(activeCaption)] != undefined || processedCaptions[replaceSpacesWithUnderscores(activeCaption)] != null){
        console.log(' caption exists, dont sent to background.', Object.keys(processedCaptions).length)
   
            placeCaption(processedCaptions[replaceSpacesWithUnderscores(activeCaption)])
    } else{
        sendItToBackground(activeCaption)
    }
}
 
// get the element where the caption is located
// this is where the caption is located, but in order for this code to work, the user must open the captions tab manually

function captionTraverser(){
    // it will only run if the video is playing
    lastExecutedCaptionTraverser = new Date()
    if(checkPlayStatus()){
        checkRawCaptions(collectCaption())
    } else{
        console.log('Currently in pause/caption is off, press play/activate captions to continue or set the caption language to German.')

    }
}

// need this method for the future use....
// can use the active tab transcript somewhere else
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

function intervalIDSwitch(IntervalID){
    if(IntervalID == null){
                     
        IntervalID = setInterval(captionTraverser, CAPTION_TRAVERSER_INTERVAL_TIME)
        } else if(IntervalID !== null){
                     
            clearInterval(IntervalID)
            
            }
}

// execution section
 captionTraverserIntervalID = setInterval(captionTraverser, CAPTION_TRAVERSER_INTERVAL_TIME)
 
//  pressing w can trigger the captionTraverser on or off without refreshing the page, make sure to keep track of the intervalID to shut it down if necessary
 window.addEventListener('keydown', function(event) {
     if (event.key.toLowerCase() == 'w') {
         let now = new Date()
         console.log('w key pressed', captionTraverserIntervalID);
         // checking if the site we are on is youtube or not
         if(window.location.href.includes('youtube.com/watch')){
             //   declaring the function after loading first time
            let difference = now.getTime() - lastExecutedCaptionTraverser.getTime()
            console.log(difference ,CAPTION_TRAVERSER_INTERVAL_TIME + 500)
            if(difference > CAPTION_TRAVERSER_INTERVAL_TIME + 500){
                // turning it on
                if(captionTraverserIntervalID == null){
                     
                    captionTraverserIntervalID = setInterval(captionTraverser, CAPTION_TRAVERSER_INTERVAL_TIME)
                    } else if(captionTraverserIntervalID !== null){
                                 
                        clearInterval(captionTraverserIntervalID)
                        captionTraverserIntervalID = null
                        
                        }
                console.log('more than thousand: Probably off:', captionTraverserIntervalID)

        } else{
            // turning it off
            if(captionTraverserIntervalID == null){
                     
                captionTraverserIntervalID = setInterval(captionTraverser, CAPTION_TRAVERSER_INTERVAL_TIME)
                } else if(captionTraverserIntervalID !== null){
                             
                    clearInterval(captionTraverserIntervalID)
                    captionTraverserIntervalID = null
                    
                    }
            console.log('less than thousand: probably on:', captionTraverserIntervalID)
            
        }
    }
    }
   });









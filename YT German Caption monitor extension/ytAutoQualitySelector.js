// automatically selects 480p as default quality
let lastURL = [window.location.href]

function clickPromise(element) {
  return new Promise((resolve) => {
   if (!element) {
     console.error('Element not found');
     return;
   }
   setTimeout(() => {
     element.click();
     resolve();
   }, 100);
  });
 }
  
 

// .getAttribute('aria-expanded'), || qualityButtons[i].innerText.includes('720')
// declaration of different functions

// open the 'show transcript' section
function openShowTranscriptSection(){
  // new transcript button exposer

    return new Promise((resolve, reject)=>{
      console.log('Inside the openShowTranscriptSection')
      let clickOnMore = document.getElementsByTagName('tp-yt-paper-button')[2]
      clickPromise(clickOnMore).then(() => {
      console.log('clicked on more')
      setTimeout(()=>{
        // click on the 'show transcript' button
        let showTranscriptButton = document.getElementsByTagName('ytd-button-renderer')[4]
        clickPromise(showTranscriptButton).then(()=>{
          console.log('clicked on show transcript')
          resolve()
        })
      }, 250)
    }).catch(()=>{
      console.log('Didnt work : the click promise')
      reject()
    })

  })
}

// this functions chooses the 480p option out of the other video qualities
function select720p(){
  let qualityButtons = document.getElementsByClassName('ytp-menuitem-label')
  for(i=0; i<qualityButtons.length; i++){
      if(qualityButtons[i].innerText.includes('720') ){
        clickPromise(qualityButtons[i]).then(()=>{
          i = qualityButtons.length
          console.log('selected 720p using clickPromise.')
        })
      }
  }

}

// check if the settings button is previously clicked or not
function checkSettingsButtonClickStatus(){
  if(document.getElementsByClassName('ytp-button ytp-settings-button')[0].getAttribute('aria-expanded') == 'true'){
    document.getElementsByClassName('ytp-button ytp-settings-button')[0].click()
  }
}

// sets the video quality to 480p
function set720p(){
  clickPromise(document.getElementsByClassName('ytp-button ytp-settings-button')[0]).then(()=>{
    console.log('successfully clicked on settings button')
    setTimeout(clickPromise(document.getElementsByClassName('ytp-menu-label-secondary')[0])
    .then(()=>{
      
      console.log('successfully clicked on quality button')
      setTimeout(select720p, 1000)
    }
    ), 100)
  
  })
}

function checkIfVideoLinkChanged(e){
  if(window.location.href !== lastURL[0]){
    lastURL.pop()
    lastURL.push(window.location.href)
    checkSettingsButtonClickStatus()
    setTimeout(set720p, 350)
    setTimeout(openShowTranscriptSection, 3000)
  } else{
    return false
  }
}




// calling of the functions
// global area, only works if the url is from youtube


window.addEventListener('keydown', function(event) {

  if (event.key.toLowerCase() == 'q') {
   console.log('Q key pressed');
   // checking if the site we are on is youtube or not
   if(window.location.href.includes('youtube.com/watch')){
    //   declaring the function after loading first time
    setTimeout(set720p, 1000)
    setTimeout(openShowTranscriptSection, 3000)
    setInterval(checkIfVideoLinkChanged, 10*1000);
  }
  }

 });




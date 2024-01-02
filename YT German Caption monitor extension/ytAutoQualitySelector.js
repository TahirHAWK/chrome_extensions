// automatically selects 480p as default quality
let lastURL = [window.location.href]

// .getAttribute('aria-expanded'), || qualityButtons[i].innerText.includes('720')
// declaration of different functions

// open the 'show transcript' section
function openShowTranscriptSection(){
  // old transcript button exposer

  // return new Promise((resolve, reject)=>{
  //   let moreOptions = document.getElementsByClassName('yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-button ')[1]
  //   moreOptions.click()
  //   setTimeout(()=>{
  //     // click on the 'show transcript' button
  //     document.getElementsByTagName('ytd-menu-service-item-renderer')[3].click()
  //     resolve()
  //   }, 250)
  // })


  // new transcript button exposer

    return new Promise((resolve, reject)=>{
    let clickOnMore = document.getElementsByTagName('tp-yt-paper-button')[2]
    clickOnMore.click()
    console.log('clicked on more')

    setTimeout(()=>{
      // click on the 'show transcript' button
      document.getElementsByTagName('ytd-button-renderer')[4].click()
      console.log('clicked on show transcript')
      resolve()
    }, 250)
  })
}

// this functions chooses the 480p option out of the other video qualities
function select720p(){
  let qualityButtons = document.getElementsByClassName('ytp-menuitem-label')
  for(i=0; i<qualityButtons.length; i++){
      if(qualityButtons[i].innerText.includes('720') ){
        qualityButtons[i].click()
        i = qualityButtons.length
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
  document.getElementsByClassName('ytp-button ytp-settings-button')[0].click()
  document.getElementsByClassName('ytp-menu-label-secondary')[0].click()
  setTimeout(select720p, 1000)
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
if(window.location.href.includes('youtube.com/watch')){
  // checking if the site we are on is youtube or not
  

    setTimeout(set720p, 1000)
    setTimeout(openShowTranscriptSection, 3000)
    setInterval(checkIfVideoLinkChanged, 10*1000);
    //   declaring the function after loading first time
    

}




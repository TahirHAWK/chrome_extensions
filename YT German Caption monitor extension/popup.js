
// After clicking on 'Collect words to use from current tab'
// keeping the value of the previous button heading/value
let buttonTempValueHolder = []
let buttonSwitch = function(button, status){
	if(status == 'disable'){
		button.setAttribute('disabled', 'true') 
		buttonTempValueHolder.push(button.innerText)
		button.innerText = 'Please wait...'
	} else if(status == 'enable'){
		button.disabled = false
		button.innerText = buttonTempValueHolder[0]
	} else{
		button.innerText = 'Check if German Transcript is shown or not.'
	}
}

// fetch all captions for youtube
let fetchAllCaptionButton = document.getElementById('yt-fetch-all-captions')
fetchAllCaptionButton.addEventListener('click', ()=>{
	// make the button disabled
	let fetchAllCaptionButtonValueTemp = fetchAllCaptionButton.innerText
	buttonSwitch(fetchAllCaptionButton, 'disable')
	
	
	
	// send request to contentscript to grab the data
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		const tabId = tabs[0].id;
		chrome.tabs.sendMessage(tabId, { message: 'request all yt captions' }, function (fetchedWords) {
			// setup axios and send the response to node server for translation using api.
			if(typeof(fetchedWords) == 'object' && !!fetchedWords.captionWords.length){
				console.log(fetchedWords.captionWords.length, !!fetchedWords.captionWords.length, 'length of fetched words')
				axios.post('http://localhost:3000/translateToEnglish', fetchedWords).then((res) =>{
				console.log(res.data)
				// this is where the automated translated code will go


				// restoring the button value
				buttonSwitch(fetchAllCaptionButton, 'enable')
				}).catch(error => {
					// Handle errors
					console.error(error);
				})
			} else{
				buttonSwitch(fetchAllCaptionButton, '')
			}

		});
	  });

})


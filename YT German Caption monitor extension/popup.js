

// fetch all captions for youtube
let fetchAllCaptionButton = document.getElementById('yt-fetch-all-captions')
fetchAllCaptionButton.addEventListener('click', ()=>{
	// make the button disabled
	fetchAllCaptionButton.setAttribute('disabled', 'true')
	fetchAllCaptionButton.innerText = 'Please wait...'

	// send request to contentscript to grab the data
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		const tabId = tabs[0].id;
		chrome.tabs.sendMessage(tabId, { message: 'request all yt captions' }, function (response) {
			// setup axios and send the response to node server for translation using api.
		  console.log(response);
		});
	  });

})
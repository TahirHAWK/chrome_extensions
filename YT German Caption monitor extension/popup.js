// popup.js
const url = 'https://word-translation-word-to-word.p.rapidapi.com/translatewordtoword';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'ba1a7f5c75mshbcedc7b3b03e1e6p19097bjsn46db42b0db40',
		'X-RapidAPI-Host': 'word-translation-word-to-word.p.rapidapi.com'
	},
	body: new URLSearchParams({
		word: 'Mutter',
		fromlanguage: 'German',
		tolanguage: 'English'
	})
};

async function fetchMeaning(){
 try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result, result.data);
} catch (error) {
	console.error(error);
}   
}

fetchMeaning()

// Empty popup script for Manifest V3

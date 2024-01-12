//IGQWRNN29jYTlrbmRZATlNHVXE2cVNSMWd3UVdKeFJ4RlJQa0RUN015azBPZA3A3WERvdW1XNzR3YzhhU3cxanNvaUdPcEJJV2JodUpqbzl5VjFYRi1sNDRUd0hfdkh6Q1VKOWRoZAzBseEdvNUtIS0YtRktJWDliSmMZD
import fetch from 'node-fetch';

const url = 'https://instagram130.p.rapidapi.com/account-feed?username=digiallpa';
const options = {
	method: 'GET',
    mode : 'cors',
    credentials: 'same-origin',
	headers: {
		'X-RapidAPI-Key': 'IGQWRNN29jYTlrbmRZATlNHVXE2cVNSMWd3UVdKeFJ4RlJQa0RUN015azBPZA3A3WERvdW1XNzR3YzhhU3cxanNvaUdPcEJJV2JodUpqbzl5VjFYRi1sNDRUd0hfdkh6Q1VKOWRoZAzBseEdvNUtIS0YtRktJWDliSmMZD',
		'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
	}
};


async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    console.log(data);
    return data;
}
fetchData(url);


import fetch from 'node-fetch';

const url = 'https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=IGQWRQQl95azJXRnUtUS1HMVVzQnA1LXFVZAHpYMXZAlUFRWWjFDMHhsYWZAGY2g3NkNhX190MVVQQjlWV1E5TFpvMGxVeDlTVTJWQzA3d3U4dDdzNkpIWmlUSWJ1TGltdGljOFlNQjhiOEpHSTYydllHRGd5RWVKaDQZD';



async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data);
    return data;
}
fetchData(url);
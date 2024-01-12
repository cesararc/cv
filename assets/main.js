const content = null||document.getElementById('content');
const token = "IGQWRQV3dwMDhJWmVjSkdKTmYtbmRrOWpkeTBwTnZAFSHRZAb1Vaa29SR29POHdyZAnUtMkJUZAURvV242YWpSX3dJVXRCLTFIbG1xS1h4eG9PdHp0ckJ2aHpSQU05RnZAYa1lxNl9uTDdUYTQ1dkVsMXhMQmFFaVdpc3MZD"
const url = 'https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp,permalink,caption&access_token='+token;
const options = {
	method: 'GET',
    mode : 'cors',
    credentials: 'same-origin',
	headers: {
		'X-RapidAPI-Key': '56c9cf20dcmsh7aab12fd16fbe57p17cf2fjsn3694e19ac2d3',
		'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
	}
};


async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data);
    return data;
}

(async()=>{try{
    const posts = await fetchData(url);
    let view=`
    ${posts.data.map(post=>`
      <div class="group relative">
      <a href="${post.permalink}"><div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          
          ${post.media_type === 'VIDEO'
          ? `<video src="${post.media_url}" alt="Video" class="w-full" autoplay muted loop></video>`
          : `<img src="${post.media_url}" alt="Image" class="w-full">`
        }
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${post.caption}
          </h3>
        </div>
        </a>
      </div>
    `).slice(0,8).join('')}

    `;
    content.innerHTML = view;
    }catch (error) {
        console.log(error);
    }
})();

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

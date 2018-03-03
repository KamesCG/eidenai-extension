import parse from 'url-parse'

window.chrome.extension.onMessage.addListener(function(message, sender) {
    if(typeof message == 'string'){
      window.chrome.browserAction.setBadgeBackgroundColor({
          color: '#15003e'
      });
      window.chrome.browserAction.setBadgeText({text: message});
    }
});

window.chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        for (var key in request) {
         localStorage[key] = request[key];
        }      
    }
);


function RequestOnComplete(data) {
    console.log(data)
}

// window.chrome.webRequest.onBeforeSendHeaders.addListener(
//     function(details) {
//       console.log(details)
//     },
//     {urls: ["<all_urls>"]},
//     ["requestHeaders"]);

let chasquiWatch = false;
// Chasqui Watch
// To initialize the IPFS observer we wait for a chasqui response

const chasqui = "chasqui.uport.me"
const ipfs = "ipfs.infura.io"
const ipfsLimit = 6
let ipfsTotal = 0
    
window.chrome.webRequest.onCompleted.addListener(
    function(details) {
        if (details.url) {
            const urlParsed = parse(details.url, {})
            if(urlParsed.hostname === chasqui) {
                chasquiWatch = true
            }
        }

        if(chasquiWatch) {
            const urlParsed = parse(details.url, {})
            if(urlParsed.hostname === ipfs) {
                ipfsTotal++
                if(ipfsTotal == ipfsLimit) chasquiWatch = false
                console.log(details.url)
                fetch(details.url, {
                    headers: {
                    'accept': 'application/json'
                    }
                })
                .then(res => {
                if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));
                    console.log(res)
                    return res.json(); // parse json body
                })
                .then(data => {
                    console.log(data);
                    if(data.publicKey) {
                        localStorage.setItem(data.publicKey, JSON.stringify(data));
                        console.log(localStorage)
                    }
                })
                .catch(err => console.error(err));
            }
        }
            
      // if(details.url == 'https://chasqui.uport.me/api/v1/topic/A3ZNnLOWWuewXC7r' ) {
      //     console.log('match person')
      //   fetch('https://ipfs.infura.io/ipfs/QmUyRjAc8aRq6WeDAyDDMZcyWBWRvPMnY4izhTskyoyDik', {
      //       headers: {
      //         'accept': 'application/json'
      //       }
      //     })
      //       .then(res => {
      //         if (!res.ok) return Promise.reject(new Error(`HTTP Error ${res.status}`));
      //           console.log(res)
      //         return res.json(); // parse json body
      //       })
      //       .then(data => {
      //         // do stuff with data from parsed json response body
      //         console.log(data);
      //         console.log(data.body);
      //       })
      //       .catch(err => console.error(err));
      // }

    },
    {urls: ["<all_urls>"]},
    ["responseHeaders"]);


// window.chrome.devtools.network.onRequestFinished.addListener(
//         function(request) {
//           console.log(request)
//         }
//     );
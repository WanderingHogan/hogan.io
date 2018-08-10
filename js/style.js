let setStyle = () => {
    // dynamically set tiles to 1/3 page witdh
    let theClass = document.getElementsByClassName('masonry-list')
    const tileSize = Math.max(document.documentElement.clientWidth);

    // only do this if tilesize is over 600px to honor media query
    if (tileSize > 650) {
        theClass[0].style.width = `${tileSize}px`
    } else {
        theClass[0].style.height = `auto`
        theClass[0].style.width = `100%`
    }

};

let getCurrentIPFSHash = (domain) => {
	let currentIPFSHash;
    domain = domain || window.location.hostname;
    if (domain !== 'localhost') {
    	
        fetch(`https://dns-api.org/TXT/${domain}`) // Call the fetch function passing the url of the API as a parameter
            .then(function(d) {
                return d.json()
            })
            .then(function(e) {
                if (e.length > 0) {
                    e.forEach((data) => {
                        if (data.value.includes('dnslink=/ipfs/')) {
                            currentIPFSHash = data.value.split('/ipfs/')[1];
                            // return currentIPFSHash;
                            let changeClass = document.getElementById("currentHash");
                            changeClass.innerHTML = currentIPFSHash;
                        }
                    })

                }
            });
    }
    
}
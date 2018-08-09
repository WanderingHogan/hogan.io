let setStyle = () => {
    // dynamically set tiles to 1/3 page witdh
    let theClass = document.getElementsByClassName('masonry-list')
    const tileSize = Math.max(document.documentElement.clientWidth);

    // only do this if tilesize is over 600px to honor media query
    if (tileSize > 650) {
        theClass[0].style.width = `${tileSize}px`
    }
    else {
        theClass[0].style.height = `auto`
        theClass[0].style.width = `100%`
    }

    // set footer location
    // let height = document.getElementsByClassName('masonry-list')
    // console.log(height)

};
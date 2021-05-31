import React, { useState } from "react";


const handleResize = (size) => {
    console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    console.log('Width: '+ window.innerWidth)
    console.log(typeof(window.innerWidth))

    // const [xsDisplay,setXSDisplay] = useState("none")
    // const [smDisplay,setSMDisplay] = useState("none")
    // const [mdDisplay,setMDDisplay] = useState("none")
    // const [lgDisplay,setLGDisplay] = useState("none")
    // const [mobileDisplay, setMobileDisplay] = useState("none")
    // const [desktopDisplay, setDesktopDisplay] = useState("none")

    // Mobile, Desktop, xs, sm, md, lg
    let displays = ['','','','','','','']


    if(window.innerWidth <= 576){
        displays[1] = 'none'
        displays[3] = 'none'
        displays[4] = 'none'
        displays[5] = 'none'
    //   setMobileDisplay('')
    //   setDesktopDisplay('none')
    //   setXSDisplay('')
    //   setSMDisplay('none')
    //   setMDDisplay('none')
    //   setLGDisplay('none')
    } else if ( window.innerWidth >= 576 && window.innerWidth <=767) {
        displays[1] = 'none'
        displays[2] = 'none'
        displays[4] = 'none'
        displays[5] = 'none'
    //   setMobileDisplay('')
    //   setDesktopDisplay('none')
    //   setXSDisplay('none')
    //   setSMDisplay('')
    //   setMDDisplay('none')
    //   setLGDisplay('none')
    } else if ( window.innerWidth >= 767 && window.innerWidth <= 992) {
        displays[0] = 'none'
        displays[2] = 'none'
        displays[3] = 'none'
        displays[5] = 'none'
    //   setMobileDisplay('none')
    //   setDesktopDisplay('')
    //   setXSDisplay('none')
    //   setSMDisplay('none')
    //   setMDDisplay('')
    //   setLGDisplay('none')
    } else if (window.innerWidth >= 992) {
        displays[0] = 'none'
        displays[2] = 'none'
        displays[3] = 'none'
        displays[4] = 'none'
    //   setMobileDisplay('none')
    //   setDesktopDisplay('')
    //   setXSDisplay('none')
    //   setSMDisplay('none')
    //   setMDDisplay('none')
    //   setLGDisplay('')
    }

    

    // switch("desktop"){
    //     case "mobile":
    //         return mobileDisplay;
    //     case "desktop":
    //         return desktopDisplay;
    //     case "xs":
    //         return xsDisplay
    //     case "sm":
    //         return smDisplay
    //     case "md":
    //         return mdDisplay
    //     case "lg":
    //         return lgDisplay
            
    // }
    for (let i = 0; i < displays.length; i++ ){
        console.log(displays[i])
    }

    return displays
  }

export default handleResize;
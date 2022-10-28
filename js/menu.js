

const icon1 = document.getElementById('baropen')
const icon3 = document.getElementById('xclosed')
const icon2 = document.getElementById('actionnav')



    function displaymymenu(){

        icon2.style.transition="1s"
        icon2.style.opacity="100%"
        icon2.style.transform="translateY(0px)"

        icon1.style.display="none"

        icon3.style.display="inline"
  
        LottieInteractivity.create({
            player: "#firstLottie",
            mode:'chain',
            actions: [
                {
                    visibility:[0, 1],
                    type: "play",
                    state:'autoplay',
                    frames: [0, 90],
                    count: 1,
                    speed:2.5,
                }
            ]
        });
        
    }

    function hidemenu(){


        icon2.style.opacity="0%"
        icon2.style.transform="translateY(-500px)"

        icon3.style.display="none"

        icon1.style.display="inline"
        
        LottieInteractivity.create({
            player: "#firstLottie",
            mode:'chain',
            actions: [
                {
                    visibility:[0, 1],
                    type: "play",
                    state:'autoplay',
                    frames: [80, 0],
                    count: 1,
                    speed: 2.5,
                }
            ]
        });
    }



icon1.onclick=displaymymenu

icon3.onclick=hidemenu
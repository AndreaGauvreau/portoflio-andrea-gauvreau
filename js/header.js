

        let display1= document.getElementById('angleclose')
        
        let hide1= document.getElementById('baropen')
        
        function displayeleveb(){
            
            
        document.getElementById('body1').style.padding='0px 0px 0px 280px'
        document.getElementById('body1').style.transition='1s'
        document.getElementById('body1').style.animationDelay = "1s";

        
        document.getElementById('header1').style.width='280px'
        document.getElementById('header1').style.animationDelay = "1s";        
        document.getElementById('header1').style.transition='1s'
        
        document.getElementById('angleclose').style.left='240px'
        document.getElementById('angleclose').style.transition='0.5s'
        document.getElementById('angleclose').style.animationDelay = "1s";

        
        document.getElementById('baropen').style.left='-60px'
        document.getElementById('baropen').style.transition='0.5s'
        
        
        document.getElementById('nav1').style.transform='translateX(-25px)'
        document.getElementById('nav1').style.transition='0.2s'
        
        
        document.getElementById('nav3').style.transform='translateX(-25px)'
        document.getElementById('nav3').style.transition='0.9s'
        
        
        document.getElementById('nav2').style.transform='translateX(-25px)'
        document.getElementById('nav2').style.transition='0.5s'




        
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
        
        function displayhideb(){
        
        document.getElementById('body1').style.padding='0px 0px 0px 100px'
        document.getElementById('body1').style.transition='1s'
                    
        document.getElementById('header1').style.width='120px'
        
        document.getElementById('header1').style.transition='1s'
        
        document.getElementById('angleclose').style.left='0px'
        document.getElementById('angleclose').style.transition='0.5s'
        
        document.getElementById('baropen').style.left='40px'
        document.getElementById('baropen').style.transition='0.5s'
        
        document.getElementById('nav1').style.transform='translateX(-200px)'
        document.getElementById('nav1').style.transition='0.2s'
        
        document.getElementById('nav3').style.transform='translateX(-200px)'
        document.getElementById('nav3').style.transition='0.9s'
        
        
        document.getElementById('nav2').style.transform='translateX(-200px)'
        document.getElementById('nav2').style.transition='0.5s'



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
        
        display1.onclick=displayhideb  
        
        hide1.onclick=displayeleveb
        




      

 window.addEventListener("load",()=>{
   
  anime.timeline()
        .add({
            targets:'.nav-left,.nav-right',
            translateY:[-50,0],
             opacity:[0,1],
             duration:800,
             easing:'easeOutExpo',
             delay:anime.stagger(150),
        })
         
        .add({
          targets:'.main-content',
          translateY:[30,0],
          opacity:[0,1],
          duration:1000,
          easing:'easeOutExpo'
         },'-=400')

         

          .add({
           targets:".description-wrapper",
           translateY:[20,0],
           opacity:[0,1],
           duration:900,
           easing:'easeOutExpo'
        },'-=500')

         .add({
           targets:'.algorithm_button button',
           scale:[0.8,1],
           opacity:[0,1],
           easing:'easeOutBack',
           delay:anime.stagger(150),
           
          },'-=600')

          .add({
            targets:".bar-container .bar",
            height:[0,(el)=>el.style.height],
            opacity:[0,1],
            easing:'easeOutElastic(1,.8)',
            duration:900,
            delay:anime.stagger(100),

          },'-=300')

          .add({
               targets:".bar-label",
               translateY:[15,0],
               opacity:[0,1],
               duration:200,
               easing:'easeOutExpo'

          },'-=200')

          .add({
            targets:".footer",
            opacity:[0,1],
            duration:800,
            easing:"linear"


          },'-=500');
        
 });

 anime({
  targets: '.start-button.active',
  scale: [1, 1.1],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  duration: 600
});

anime({
  targets: '.code-container',
  height: [0, 'auto'],
  opacity: [0, 1],
  duration: 500,
  easing: 'easeOutQuad'
});
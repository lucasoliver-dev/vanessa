// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})

function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
     startAnimation();
}
function startAnimation() {  
     //document.querySelector("#mainContent").style.opacity = 1;
     if(defaultValues.trigger == "laptop") {
          gsap.set("#frame1Image2-wrapper", {display: "none"});
          gsap.set(["#frame1Image4-wrapper","#frame1Image5-wrapper"], {display: "block"});
          gsap.set(["#frame1Image2-wrapper","#frame1Image3-wrapper","#device-bg"], {display: "none"});
     }
     if(defaultValues.trigger == "layout-3") {
          gsap.set(["#frame1Image2-wrapper","#frame1Image3-wrapper","#device-bg"], {display: "none"});
          gsap.set("#baseImage-wrapper", {display: "block"});
     }
     if(defaultValues.trigger2 == "app-widgets") { 
          gsap.set("#cta-wrapper", {display: "none"});
          gsap.set("#app-wrapper", {display: "block"});
     }
     var tl = gsap.timeline({onStart: function(){
          gsap.to("#frame1Image3",{repeat:-1,x:-23384.27,ease:SteppedEase.config(131), duration: 4, delay: 1});
          gsap.to("#baseImage",{repeat:-1,x:-14700,ease:SteppedEase.config(49), duration: 4, delay: 1});
     },onComplete: animationEnd});

     tl.set("#mainContent", {opacity: 1})
       .to("#cta-wrapper", {scale: 1.1, duration: 0.15, yoyo: true, repeat: 3},'+=1.5')
       .to("#cta-wrapper", {scale: 1.1, duration: 0.15, yoyo: true, repeat: 3},'+=1.5');
       
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}
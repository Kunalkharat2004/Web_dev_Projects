let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(event){
    cursor.style.left=event.x+"px";
    cursor.style.top= event.y+"px";
    cursorBlur.style.left = event.x - 200+"px";
    cursorBlur.style.top = event.y - 200+"px";
});
gsap.to("#nav",{
    backgroundColor:"#000",
    duration : 0.5,
    height : "110px",
    scrollTrigger:{
        trigger:"#nav",
         scroller:"body",
         markers: true,
         start:"top -10%",
         end:"top -11%",
         scrub:0.8

    }  
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -1%",
        end: "top -80%",
        scrub:2

    }
})

function show() {


  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),

    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });





  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

show();


gsap.from("#sub-text", {
  opacity: 0,
  y : 40,
  stagger : .1,
})

var menu = document.querySelector("#menu");

var full = document.querySelector("#fullscreen");

var nav = document.querySelector("#nav h3");
var line1 = document.querySelector("#line1");
var line2 = document.querySelector("#line2");


var clickCounter = 1;

menu.addEventListener("click", function () {
  if (clickCounter === 1) {

    full.style.transform = `translateY(0%)`;

    nav.style.color = "#232025"
    line1.style.backgroundColor = "#232025"
    line1.style.width = `30px`
    line2.style.backgroundColor = "#232025"
    line2.style.width = `30px`

    line1.style.transform = `rotate(-45deg) translate(-3px, 2px)`
    line2.style.transform = `rotate(45deg) translate(-4px, -4px)`

    gsap.from("#fullscreen>h1", {
      y: -40
    })
    gsap.from("#fullscreen>h2", {
      y: -40
    })
    gsap.from("#fullscreen>h3", {
      y: -40
    })
    clickCounter = 0;
  } else {
    full.style.transform = `translateY(-100%)`;

    nav.style.color = "#D5CDC4"

    line1.style.backgroundColor = "#D5CDC4"

    line2.style.backgroundColor = "#D5CDC4"
    line1.style.transform = `initial`
    line2.style.transform = `initial`

    line2.style.width = `20px`
    clickCounter = 1;
  }

})

var link = document.querySelectorAll('.link');
var linkHoverReveal = document.querySelectorAll('.hover-reveal');
var linkImages = document.querySelectorAll('.hidden-img');
var hiddenArrow = document.querySelectorAll('.hidden-arrow');



for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('mouseenter', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    hiddenArrow[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(15deg)`;
    linkImages[i].style.transform = 'scale(1.1)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })

  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    hiddenArrow[i].style.opacity = 0;

    linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
  })
}





gsap.from("#main-text", {
  opacity: 0,
  duration: 2,
  onstart: function () {
    $("#main-text").textillate({ in: { effect: 'fadeInUp' } });
  }
})

gsap.from("#sub-text>h3", {
  opacity: 0,
  duration:1,
  stagger:.1
})
gsap.from("#sub2-text>h4", {
  opacity: 0,
  duration:1,
  stagger:.1
})

gsap.to("#page1-img", {
  duration: 1,
  scale: 1.2,
  scrollTrigger: {
    trigger: "#page1-img",
    scroller: "#main",
    scrub: true,

  },

})
gsap.from("#page2>h1", {
  opacity: 0,
  y: 40,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2>h1",
    scroller: "#main",
    scrub : true,
  }
})


var rightjayega = document.querySelectorAll(".right-jayega");
var leftjayega = document.querySelectorAll(".left-jayega");


for (let i = 0; i < rightjayega.length; i++) {


  gsap.to(rightjayega[i], {

    scrollTrigger: {

      trigger: rightjayega[i],
      scroller: '#main',
      scrub:true,
    },

    x:'30%'



  })

}



for (let i = 0; i < leftjayega.length; i++) {


  gsap.to(leftjayega[i], {

    scrollTrigger: {

      trigger: leftjayega[i],
      scroller: '#main',
      scrub:true,
    },

    x:'-30%'



  })

}

gsap.from("#line",{
  opacity: 0,
  x: -100,
  stagger : .1,
  scrollTrigger: {
    trigger : "#line",
    scroller: '#main',
    scrub:true,
  },
})

gsap.from("#page3>h6",{
  opacity: 0,
  y : 80,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page3>h6",
    scroller : '#main',
    scrub : true
  }

})


gsap.from("#Mango",{
  opacity : 0,
  y : 40,
  stagger : .1,
  scrollTrigger: {
    trigger : "#Mango",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#banana",{
  opacity : 0,
    y : 40,
  stagger : .1,
  scrollTrigger: {
    trigger : "#banana",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#pineapple",{
  opacity : 0,
  y : 40,
  stagger : .1,
  scrollTrigger: {
    trigger : "#pineapple",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#pitahaya",{
  opacity : 0,
  y : 40,
  stagger : .1,
  scrollTrigger: {
    trigger : "#pitahaya",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#variety",{
  opacity : 0,
  y : 60,
  stagger : .1,
  scrollTrigger: {
    trigger : "#variety",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#page4>h1",{
  opacity: 0,
  y : 80,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page4>h1",
    scroller : '#main',
    scrub : true
  }

})
gsap.from("#pageline1",{
  opacity: 0,
  x: -100,
  stagger : .1,
  scrollTrigger: {
    trigger : "#pageline1",
    scroller: '#main',
    scrub:true,
  },
})

gsap.from("#pagemid",{
  opacity: 0,
  y : 40,
  stagger : .1,
  scrollTrigger: {
    trigger : "#pagemid",
    scroller: '#main',
    scrub:true,
  }
})

gsap.from("#pageline2",{
  opacity: 0,
  x: -100,
  stagger : .1,
  scrollTrigger: {
    trigger : "#pageline2",
    scroller: '#main',
    scrub:true,
  },

})

gsap.from("#page5>h1",{
  opacity: 0,
  y : 80,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page5>h1",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#page5>h2",{
  opacity: 0,
  y : 80,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page5>h2",
    scroller : '#main',
    scrub : true
  }
})
function smileyAnimation() {

  gsap.to("#smiley", {


    rotate: '360deg',
    repeat: '-1',

    duration: 3,
    ease: "none",

  })
}

smileyAnimation();

gsap.from("#page7>h1",{
  opacity: 0,
  y : 40,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page7>h1",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#page9>h1",{
  opacity: 0,
  y : 40,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page9>h1",
    scroller : '#main',
    scrub : true
  }
})

function ImageShowOnHover() {
  var yes = document.querySelector('#yes>h2');
  var YesImg = document.querySelector('#yes-img');

  var no = document.querySelector('#no>h2');
  var NoImg = document.querySelector('#no-img');


  yes.addEventListener('mousemove', function (dets) {

    YesImg.style.opacity = '1';
    YesImg.style.transform = `translate(-50%,-100% )`;
    YesImg.style.left = dets.clientX + "px";
    YesImg.style.top = dets.clientY + "px";

  })

  yes.addEventListener('mouseleave', function (dets) {

    YesImg.style.opacity = '0';
  })

  no.addEventListener('mousemove', function (dets) {

    NoImg.style.opacity = '1';
    NoImg.style.transform = `translate(-230%, -100% )`;
    NoImg.style.left = dets.clientX + "px";
    NoImg.style.top = dets.clientY + "px";

  })

  no.addEventListener('mouseleave', function (dets) {

    NoImg.style.opacity = '0';
  })


}
ImageShowOnHover() 
gsap.from("#page10>h1",{
  opacity: 0,
  y : 40,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page10>h1",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#page11img-1",{
  opacity: 0,
  y : 40,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page11img-1",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#page11img-2",{
  opacity: 0,
  y : 60,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page11img-2",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#page11img-3",{
  opacity: 0,
  y : 80,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page11img-3",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#page11img-4",{
  opacity: 0,
  y : 100,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page11img-4",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#page11img-5",{
  opacity: 0,
  y : 120,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page11img-5",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#page11img-6",{
  opacity: 0,
  y : 140,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page11img-6",
    scroller : '#main',
    scrub : true
  }
})


gsap.from("#page11img-7",{
  opacity: 0,
  y : 160,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page11img-7",
    scroller : '#main',
    scrub : true
  }
})

gsap.from("#page11img-8",{
  opacity: 0,
  y : 180,
  stagger : .1,
  scrollTrigger: {
    trigger : "#page11img-8",
    scroller : '#main',
    scrub : true
  }
})


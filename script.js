function csrEffect1() {
  var page1Cnt = document.querySelector("#page1-cnt");
  var cursor = document.querySelector("#cursor");

  page1Cnt.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Cnt.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Cnt.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
csrEffect1();


function page2Animation() {
  gsap.from("#elem2 h1", {
    y: 140,
    stagger: 0.5,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 50%",
      end: "top 37%",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.from("#elem1 h2", {
    y: 70,
    stagger: 1,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 45%",
      end: "top 33%",
    //   markers: true,
      scrub: 2,
    },
  });
}
page2Animation();


function page3(){
gsap.from("#page3-cnt h2", {
    y: 120,
    stagger: 0.5,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 50%",
      end: "top 37%",
    //   markers: true,
      scrub: 4,
    },
  });
}
page3();


function page3N5Animation() {
    gsap.from("#pageN-elem h2", {
      y: 120,
      stagger: 1,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#page3N5",
        scroller: "body",
        start: "top 80%",
        end: "top 67%",
        // markers: true,
        scrub: 4,
      },
    });
  
    gsap.from("#pageN-elem2 h1", {
      y: 120,
      stagger: 1,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#page3N5",
        scroller: "body",
        start: "top 80%",
        end: "top 72%",
        // markers: true,
        scrub: 4,
      },
    });
  }
page3N5Animation();



var tl = gsap.timeline();

tl.from("#loader h3", {
  x: 45,
  duration: 1,
  opacity: 0,
  stagger: 0.1,
});

tl.to("#loader h3", {
  opacity: 0,
  x: -45,
  duration: 1,
  stagger: 0.1,
});

tl.to("#loader", {
  display: "none",
});

function swiperJs() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
swiperJs();
 

function page6Animation(){
    gsap.from("#page6-elem2 h1", {
        y: -100,
        stagger: 1,
        opacity:0,
        duration: 1,
        scrollTrigger: {
          trigger: "#page6",
          scroller: "body",
          start: "top 60%",
          end: "top 40%",
        //   markers: true,
          scrub: 3,
        },
      });
}
page6Animation();


gsap.from("#elem2 h1", {
    y: 140,
    stagger: 0.5,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 50%",
      end: "top 37%",
      // markers: true,
      scrub: 2,
    },
  });

//........................................................................

function page7Animation(){

  gsap.from("#elem-left h2, #btn,#elem-right1 h4,#elem-right2 h4", {
    y: -100,
    stagger: 1,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "body",
      start: "top 80%",
      end: "top 70%",
    //   markers: true,
      scrub: 3,
    },
  });


  gsap.from("#page7-elem2-left h4,#page7-elem2-right h4", {
    y: -100,
    stagger: 1,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "body",
      start: "top 40%",
      end: "top 27%",
      // markers: true,
      scrub: 3,
    },
  });
  

  gsap.from("#page7-elem3 h1", {
    y: -120,
    stagger: 2,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "body",
      start: "top 7%",
      end: "top 1%",
      // markers: true,
      scrub: 3,
    },
  });
}

page7Animation();
  
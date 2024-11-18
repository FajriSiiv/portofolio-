import gsap from "gsap";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");

  if (bannerOne) {
    const tl = gsap.timeline();

    tl.set([bannerTwo, bannerOne], {
      xPercent: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    }).to([bannerTwo, bannerOne], {
      xPercent: 100,
      clipPath: " polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
      // delay: 0.,
      duration: 1,
      stagger: 0.3,
    });
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");

  if (bannerOne) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo], {
      xPercent: -100,
      clipPath: " polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
    }).to([bannerOne, bannerTwo], {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      xPercent: 0,
      duration: 1,
      stagger: 0.3,
      onComplete: () => {
        router(href);
      },
    });
  }
};

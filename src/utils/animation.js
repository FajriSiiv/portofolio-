import gsap from "gsap";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  console.log("Animating page in...");
  if (bannerOne) {
    const tl = gsap.timeline();

    tl.set(bannerOne, {
      yPercent: 0,
    }).to(bannerOne, {
      yPercent: -100,
      delay: 0.5,
      duration: 0.3,
    });
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");
  console.log("Animating page out...");
  if (bannerOne) {
    const tl = gsap.timeline();

    tl.set(bannerOne, {
      yPercent: 100,
    }).to(bannerOne, {
      yPercent: 0,
      duration: 0.3,
      onComplete: () => {
        router(href);
      },
    });
  }
};

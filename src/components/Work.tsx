import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    number: "01",
    title: "BookConsumers - Bookstore App",
    category: "Full-Stack Web Development",
    tools: "React.js, Node.js, Express.js, MongoDB",
    image: "/images/bookconsumers.webp",
    link: "https://github.com/krishna-mw-dev",
  },
  {
    number: "02",
    title: "God-Themed E-Commerce",
    category: "E-Commerce Development",
    tools: "React.js, Node.js, Express.js, MongoDB",
    image: "/images/ecommerce.webp",
    link: "https://github.com/krishna-mw-dev",
  },
  {
    number: "03",
    title: "3D Portfolio Website",
    category: "Frontend Development",
    tools: "React 19, Three.js, GSAP, Motion, OGL",
    image: "/images/portfolio.webp",
    link: "https://github.com/krishna-mw-dev",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName(
        "work-box"
      ) as HTMLCollectionOf<HTMLElement>;

      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();
      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();
    window.addEventListener("resize", setTranslateX);

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
      window.removeEventListener("resize", setTranslateX);
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.number}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
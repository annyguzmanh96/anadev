import { useEffect } from "react";

import PageHeader from "../../components/main/PageHeader";
import Footer from "../../components/main/Footer";
import MyProjects from "../../components/main/MyProjects";
import MySkills from "../../components/main/MySkills";

export default function Me() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    for (let i = 0; i < revealElements.length; i++) {
      const element = revealElements[i];
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPosition < windowHeight - 100) {
        element.classList.add("reveal");
      }
    }
  }

  return (
    <div>
      <PageHeader />
      <MySkills />
      <MyProjects />
      <Footer />
    </div>
  );
}

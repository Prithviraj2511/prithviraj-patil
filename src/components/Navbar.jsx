import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

function Navbar({ navOpen }) {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const [activeSection, setActiveSection] = useState("#home");
  const isScrolling = useRef(false); // Track if smooth scrolling is in progress

  // Initialize the active box position
  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  // Update the active box position when the active section changes
  const updateActiveBox = () => {
    const activeLink = document.querySelector(`a[href="${activeSection}"]`);
    if (activeLink && activeBox.current) {
      lastActiveLink.current?.classList.remove("active");
      activeLink.classList.add("active");
      lastActiveLink.current = activeLink;

      activeBox.current.style.top = activeLink.offsetTop + "px";
      activeBox.current.style.left = activeLink.offsetLeft + "px";
      activeBox.current.style.width = activeLink.offsetWidth + "px";
      activeBox.current.style.height = activeLink.offsetHeight + "px";
    }
  };

  // Initialize the active box on mount and update it on resize
  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  // Set up the Intersection Observer to track sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30px 0px -30px 0px", // Adjust this to make the observer more sensitive
      threshold: 0.2, // Lower threshold to detect smaller intersections
    };

    const observerCallback = (entries) => {
      if (isScrolling.current) return; // Skip updates during smooth scrolling

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
          // Update the URL without causing a page reload
          window.history.replaceState(null, "", `#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each section
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Update the active box whenever the active section changes
  useEffect(updateActiveBox, [activeSection]);

  // Handle link clicks
  const handleLinkClick = (e, link) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Set scrolling state to true
    isScrolling.current = true;

    // Smooth scroll to the section
    document.querySelector(link).scrollIntoView({ behavior: "smooth" });

    // Update the URL using the History API
    window.history.pushState(null, "", link);

    // Update the active section and active box after scrolling is complete
    setTimeout(() => {
      setActiveSection(link);
      updateActiveBox();
      isScrolling.current = false; // Reset scrolling state
    }, 500); // Adjust the timeout to match the smooth scroll duration
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: `nav-link ${activeSection === "#home" ? "active" : ""}`,
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: `nav-link ${activeSection === "#about" ? "active" : ""}`,
    },
    {
      label: "Skills",
      link: "#skills",
      className: `nav-link ${activeSection === "#skills" ? "active" : ""}`,
    },
    {
      label: "Career",
      link: "#career",
      className: `nav-link ${activeSection === "#career" ? "active" : ""}`,
    },
    {
      label: "Projects",
      link: "#project",
      className: `nav-link ${activeSection === "#project" ? "active" : ""}`,
    },
    {
      label: "Contact",
      link: "#contact",
      className: `nav-link nav-hide ${
        activeSection === "#contact" ? "active" : ""
      }`,
    },
  ];

  return (
    <nav
      className={
        "navbar " +
        (navOpen ? "active" : "") +
        " transition-[opacity, transform, filter]"
      }
    >
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={(e) => handleLinkClick(e, link)}
        >
          {label}
        </a>
      ))}
      <div className="active-box transition-[top, left]" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;

import "./About.css";

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div className="about-main">
          <h2 className="section-title">About me</h2>

          <p className="about-text">
            I'm a final-year Bca (computer application) student at SHEAT College of
            Engineering, Varanasi. I enjoy turning ideas into working websites,
            and I've spent the last year building projects with the MERN stack.
          </p>

          <a
            href="#"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>

        <ul className="about-facts">
          <li>
            <span className="fact-label">Location</span>
            <span>Varanasi, India</span>
          </li>

          <li>
            <span className="fact-label">Email</span>
            <a href="mailto:vishaldsingh2000@gmail.com">vishaldsingh2000@gmail.com</a>
          </li>

          <li>
            <span className="fact-label">GitHub</span>
            <a
              href="https://github.com/vishal18singh"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Vishal Singh
            </a>
          </li>

          <li>
            <span className="fact-label">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/vishal-singh-01b982412/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/vishal-singh-01b982412//Vishal Singh
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
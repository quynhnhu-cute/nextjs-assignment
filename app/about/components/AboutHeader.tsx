import aboutBackground from "@/images/about-bg.jpg";
const AboutHeader = () => {
  return (
    <header
      className="intro-header"
      style={{ backgroundImage: `url(${aboutBackground.src})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="page-heading">
              <h1>About Me</h1>
              <hr className="small" />
              <span className="subheading">This is what I do.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;

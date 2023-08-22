import "./about-text.css";

const AboutText = (props) => {
  return <p className="about-text" style={{color:"red"}}>
            {props.children}
          </p>;
};


export default AboutText;

/* eslint-disable react/no-unescaped-entities */
import images from "../images/Avatar.png";


export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={images} alt="Photo of James"></img>
      <p>
        Hey there I'm James Ehteshami! I am a full stack computer programmer
        with a passion for building innovative and user-friendly web
        applications. With the completion of the UCSD Full-Stack Bootcmap, I
        have a strong foundation in both front-end and back-end development. I
        am proficient in languages such as JavaScript, HTML/CSS, and have
        expertise in frameworks like React and Node.js. I am also proficient in
        MonogDB and Express. I have a track record of successfully delivering
        projects that met grading requirements and exceeded their expectations.
        I thrive in collaborative environments and enjoy working with
        cross-functional teams to solve complex problems. I am always eager to
        learn and stay updated with the latest technologies and industry trends.
        Apart from coding, I also enjoy playing guitar and exploring the outdoors.
        Let's connect and discuss how I can contribute to your
        team and help create exceptional digital experiences.
      </p>
    </div>
  );
}
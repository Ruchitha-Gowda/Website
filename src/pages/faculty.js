import React from "react";
import "./faculty.css";

const faculty = [
  {
    name: "SHAHID",
    title: "Founder",
    image: "https://as2.ftcdn.net/v2/jpg/06/51/07/57/1000_F_651075792_fY3RNfDC3P3nGLAKUAk8B3w4vFBUO24Q.jpg",
    linkedin: "https://www.linkedin.com/in/nandu-krishnamurthy-26399330b"
  },

  {
    name: "RAJESH",
    title: "HR Manager",
    image: "https://as1.ftcdn.net/v2/jpg/12/62/10/50/1000_F_1262105067_GMenFpJOGjx1bHIrLJHo4nuIZ83KoQMk.jpg",
    linkedin: "https://www.linkedin.com/in/nandu-krishnamurthy-26399330b"
  },
  {
    name: "ZUBAIR",
    title: "CEO",
    image: "https://static.toiimg.com/thumb/width-400,resizemode-4,msid-88902691/88902691.jpg",
    linkedin: "https://www.linkedin.com/in/nandu-krishnamurthy-26399330b"
  },

  {
    name: "FAHIM",
    title: "CHAIRMAN",
    image: "https://static.vecteezy.com/system/resources/thumbnails/059/889/747/small/flat-illustration-of-a-young-happy-indian-business-executive-smiling-professional-teacher-and-entrepreneur-in-office-headshot-portrait-realistic-set-photo.jpg",
    linkedin: "https://www.linkedin.com/in/nandu-krishnamurthy-26399330b"
  },

  {
    name: "JYOTHI",
    title: "TEAM LEAD",
    image: "https://www.uab.edu/business/home/images/photos/people/faculty/Parul_Manocha_600x450.jpg",
    linkedin: "https://www.linkedin.com/in/nandu-krishnamurthy-26399330b"
  },

  {
    name: "RAJATHA",
    title: "FINANCE MANAGER",
    image: "https://www.cheggindia.com/wp-content/uploads/2023/07/EO-37175-women-enterpreneurs-in-india-v5-1024x683.png",
    linkedin: "https://www.linkedin.com/in/nandu-krishnamurthy-26399330b"
  },

  {
    name: "RAVI",
    title: "PROJECT MANAGER",
    image: "https://as2.ftcdn.net/v2/jpg/06/36/46/45/1000_F_636464567_rTteiuRZHlq92RvbV25PmqAWwqHxb1Yb.jpg",
    linkedin: "https://www.linkedin.com/in/nandu-krishnamurthy-26399330b"
  },

  {
    name: "VIJAY",
    title: "VICE PRESIDENT",
    image: "https://as2.ftcdn.net/v2/jpg/15/34/11/09/1000_F_1534110931_YJQpe1gdhNzXFmkWxGbG06PlTfAffPFD.jpg",
    linkedin: "https://www.linkedin.com/in/nandu-krishnamurthy-26399330b"
  },

];

const Faculty = () => {
  return (
    <div className="faculty">
      <div className="faculty-section">
        <h2 className="faculty-title">OUR FACULTY AND MENTORS</h2>
        <p className="faculty-subtitle">Credibly innovate granular internal or organic sources </p>

        <div className="faculty-cards">
          {faculty.map((member, index) => (

            <div className="faculty-card" key={index}>
              <img src={member.image} alt={member.name} className="faculty-img" />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <button className="linkedin-plain-btn">LinkedIn Profile</button>
              </a>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Faculty;



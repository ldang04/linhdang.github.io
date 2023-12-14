import './components.css'; 
import React from 'react'; 
import {Link} from 'react-router-dom'; 

import Header from './Header'; 

const About = () => {
    return (
        <div className="large-window about">
            <div className="window-header">
                <h2><Link to="/" className="ld-link">Linh Dang</Link> <span className="arrow-text">&gt;&gt; About</span></h2>
                <Header />
            </div>

            <div className="about-window">
                
                <div className="about-left">
                    <div className="center-img">
                        <img className="headshot" src="../assets/headshot.png" alt="headshot"/>
                    </div>

                    {/* <div className="link-container">
                        <Link to="https://www.linkedin.com/in/diem-linh-dang-3b7229213/">
                            <img src="../assets/linkedinsymbol.png" alt="linkedin symbol" />
                        </Link>

                        <Link to="https://github.com/ldang04">
                            <img src="../assets/githubsymbol.png" alt="github symbol"/>
                        </Link>
                    </div> */}

                    <p>Email: dd3212@columbia.edu</p>

                </div>

                <div className="about-right">
                    <p>Hello! I’m Linh— a first-year student at <Link to="https://www.columbia.edu/" className="blue-underline unstyled-a">Columbia University</Link> pursuing a double major in computer science and philosophy. <br /> <br /> As an aspiring product manager / designer, I love all things related to entrepreneurship, software engineering, and UI/UX. I’m passionate about exploring the intersection between business, technology, and society and am enthusiastic about gaining more hands-on experience! <br /> <br /> I’m also a recent graduate of Phillips Academy in Andover, Massachusetts, where I was deeply involved with the <Link to="https://en.wikipedia-on-ipfs.org/wiki/The_Philomathean_Society_(Phillips_Academy)" className="red-underline unstyled-a">Philomathean Society</Link>, Public Forum Debate club, and various community engagement programs. In my free time, I love creative journaling, <Link to="https://www.youtube.com/watch?v=fTRe1RPRr1A&t=193s" className="green-underline unstyled-a">~philosophizing</Link> , and running a <Link to="https://www.instagram.com/crochetedlines/" className="orange-underline unstyled-a">public crochet account</Link> <br /> <br /> View my <Link to="https://docs.google.com/document/d/1skdxXlAGNm5yGmMDdG8loVhrRDKCJuhb/edit?usp=sharing&ouid=117939066772908887385&rtpof=true&sd=true" className="purple-underline unstyled-a">most recent CV here</Link>, and feel free to take a look around my website!</p>
                </div>

            </div>
        </div>
    )
}

export default About; 
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
    const [activeTab, setActiveTab] = useState('skills');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [messg, setMessg] = useState('');
    const openTab = (activeTab) => {
        setActiveTab(activeTab);
    };
    const sideMenuRef = useRef(null);
    const openSideBar = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.right = "0px";
        }
    }
    const closeSideBar = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.right = "-200px";
        }
    }

    const formRef = useRef(null);

    useEffect(() => {
        const form = formRef.current;
        if (form) {
            const handleSubmit = (e) => {
                e.preventDefault();

                
                const scriptURL = 'https://script.google.com/macros/s/AKfycbxFwLV29GQYgoKXsdnnbmQrHYJN9k6wp5wKDoScNhVkqBjV7_mqBHVsaQlPm9kw4xc5/exec';

                fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form)
                })
                .then(response => {
                    console.log('Success!', response);
                    setName('');
                    setEmail('');
                    setMessg('');
                    alert('Successfully submitted!')
                })
                .catch(error => console.error('Error!', error.message));
            };

            form.addEventListener('submit', handleSubmit);

            // Cleanup 
            return () => {
                form.removeEventListener('submit', handleSubmit);
            };
        }
    }, []);
    return (
        <>
            <div id="header">
                <div className="container">
                    <nav>
                        <img src="images/logo1.png" alt='logo' className='logo' />
                        <ul ref={sideMenuRef}>
                            <li><a href="#header">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <i className='fas fa-times' onClick={() => { closeSideBar() }}></i>
                        </ul>
                        <i className='fas fa-bars' onClick={() => { openSideBar() }}></i>
                    </nav>
                    <div className="header-text">
                        <p>React. DotNet. Devops.</p>
                        <h1>Hi, I am <span>Vaibhav</span> </h1>
                    </div>
                </div>
            </div>
            {/*****About*****/}
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src="images/user.png" alt="" srcSet="" />
                        </div>
                        <div className="about-col-2">
                            <h1 className="sub-title">About me</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, autem debitis adipisci quia dicta soluta nisi. Explicabo esse, dicta perspiciatis iure atque laboriosam, at assumenda hic, sapiente voluptatem aliquam quidem!</p>
                            <div className="tab-titles">
                                <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => { openTab('skills') }}>Skills</p>
                                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => { openTab('education') }}>Education</p>
                                <p className={`tab-links ${activeTab === 'expericence' ? 'active-link' : ''}`} onClick={() => { openTab('expericence') }}>Experience</p>
                            </div>
                            <div className={`tab-content ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                                <ul>
                                    <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
                                    <li><span>React</span><br />Designing React Web Appplications</li>
                                    <li><span>DotNet</span><br />Webforms and information Systems</li>
                                </ul>
                            </div>
                            <div className={`tab-content ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                                <ul>
                                    <li><span>2018 - 2022</span><br />Bachelors from Thapar Institute of Engineering and Technology in Computer Engineering</li>
                                    <li><span>2018</span><br />12th from Royal Academy Jaipur</li>
                                    <li><span>DotNet</span><br />10th from Dr. K.N. Modi School</li>
                                </ul>
                            </div>
                            <div className={`tab-content ${activeTab === 'expericence' ? 'active-tab' : ''}`} id="experience">
                                <ul>
                                    <li><span>Current</span><br />Fullstack software developer at ASMI Global Softwares, Jaipur</li>
                                    <li><span>2023</span><br />Full time Framework Engineer at Qauntiphi Analytics, Mumbai</li>
                                    <li><span>2022</span><br />Intern at Qauntiphi Analytics, Mumbai</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/******Services******/}
            <div id="services">
                <div className="container">
                    <h1 className="sub-title">My services</h1>
                    <div className="services-list">
                        <div>
                            <i className="fa-solid fa-code"></i>
                            <h2>Web development</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptatem saepe libero maxime mollitia architecto possimus nostrum expedita!</p>
                            <a href="m">Learn more</a>
                        </div>
                        <div>
                            <i className="fa-solid fa-server"></i>
                            <h2>Backened</h2>
                            <p>Lorem ipsum, dolor sit ibero, amet. Porro illo mollitia veniam ducimus quod asperiores eligendi voluptas quisquam!adipisicing elit. Lorem ipsum dolor sit amet. Itaque voluptatem saepe libero maxime mollitia architecto possimus nostrum expedita!</p>
                            <a href="m">Learn more</a>
                        </div>
                        <div>
                            <i className="fa-solid fa-database"></i>
                            <h2>Database</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptatem saepe libero maxime mollitia architecto possimus nostrum expedita!</p>
                            <a href="m">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio">
                <div className="container">
                    <h1 className="sub-title">My work</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src="images/work-1.png" alt="work" />
                            <div className="layer">
                                <h3>Hostel Management</h3>
                                <p>This app Connects you to the talented people around the world. Download it from the play store.</p>
                                <a href="m"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="images/work-2.png" alt="work" />
                            <div className="layer">
                                <h3>Weather app</h3>
                                <p>This was made using open weather API and using React JS. Using dynamic icons and se</p>
                                <a href="m"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="images/work-3.png" alt="work" />
                            <div className="layer">
                                <h3>Tindog</h3>
                                <p>This is design oriented page developed with only HTML, JavaScript and CSS with flexbox and bootstrap.</p>
                                <a href="m"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="m" className='btn'>See more</a>
                </div>
            </div>
            {/***** contact ****/}
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className='sub-title'>Contact Me</h1>
                            <p><i className="fa-solid fa-square-envelope"></i>vaibhavkumawat70@gmail.com</p>
                            <p><i className="fa-solid fa-square-phone"></i>8544985455</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/vaibhav-kumawat-1710a3193/"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://github.com/vaibhav70/"><i className="fa-brands fa-square-github"></i></a>
                                <a href="https://www.instagram.com/vaibhav.dng"><i className="fa-brands fa-square-instagram"></i></a>
                            </div>
                            <a href="files/VaibhavSDE.pdf" download className='btn btn2'>Download CV</a>
                        </div>
                        <div className="contact-right">
                            <form ref={formRef} id="submit-to-google-sheet">
                                <input value={name} onChange={(event) => {setName(event.target.value)}} type="text" name='Name' placeholder='Your name' required />
                                <input value={email} onChange={(event) => {setEmail(event.target.value)}} type="email" name='Email' placeholder='Your email' required />
                                <textarea value={messg} onChange={(event) => {setMessg(event.target.value)}} name="Message" rows='6' placeholder='Your message'></textarea>
                                <button type='submit' className='btn btn2'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © Vaibhav. Made with <i className="fa-solid fa-heart"></i> by Vaibhav Kumawat</p>
            </div>
        </>
    );
}

export default App;

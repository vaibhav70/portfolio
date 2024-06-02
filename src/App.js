import './App.css';
import React, {useState} from 'react';

function App() {
  const[activeTab, setActiveTab] = useState('skills');
  const openTab = (activeTab) => {
    setActiveTab(activeTab);
  }
  return (
    <>
      <div id="header">
        <div className="container">
            <nav>
                <img src="images/logo1.png" alt='logo' className='logo' />
                <ul>
                    <li><a href="m">Home</a></li>
                    <li><a href="m">About</a></li>
                    <li><a href="m">Services</a></li>
                    <li><a href="m">Portfolio</a></li>
                    <li><a href="m">Contact</a></li>
                </ul>
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
                      <img src="images/user.png" alt="" srcSet=""/>
                  </div>
                  <div className="about-col-2">
                      <h1 className="sub-title">About me</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, autem debitis adipisci quia dicta soluta nisi. Explicabo esse, dicta perspiciatis iure atque laboriosam, at assumenda hic, sapiente voluptatem aliquam quidem!</p>
                      <div className="tab-titles">
                          <p className={`tab-links ${activeTab === 'skills'? 'active-link':''}`} onClick={() => {openTab('skills')}}>Skills</p>
                          <p className={`tab-links ${activeTab === 'education'? 'active-link':''}`} onClick={() => {openTab('education')}}>Education</p>
                          <p className={`tab-links ${activeTab === 'expericence'? 'active-link':''}`} onClick={() => {openTab('expericence')}}>Experience</p>
                      </div>
                      <div className={`tab-content ${activeTab === 'skills'? 'active-tab':''}`} id="skills">
                          <ul>
                              <li><span>UI/UX</span><br/>Designing Web/App interfaces</li>
                              <li><span>React</span><br/>Designing React Web Appplications</li>
                              <li><span>DotNet</span><br/>Webforms and information Systems</li>
                          </ul>
                      </div>
                      <div className={`tab-content ${activeTab === 'education'? 'active-tab':''}`} id="education">
                          <ul>
                              <li><span>2018 - 2022</span><br/>Bachelors from Thapar Institute of Engineering and Technology in Computer Engineering</li>
                              <li><span>2018</span><br/>12th from Royal Academy Jaipur</li>
                              <li><span>DotNet</span><br/>10th from Dr. K.N. Modi School</li>
                          </ul>
                      </div>
                      <div className={`tab-content ${activeTab === 'expericence'? 'active-tab':''}`} id="experience">
                          <ul>
                              <li><span>Current</span><br/>Fullstack software developer at ASMI Global Softwares, Jaipur</li>
                              <li><span>2023</span><br/>Full time Framework Engineer at Qauntiphi Analytics, Mumbai</li>
                              <li><span>2022</span><br/>Intern at Qauntiphi Analytics, Mumbai</li>
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
                        <h3>Social media app</h3>
                        <p>This app Connects you to the talented people around the world. Download it from the play store.</p>
                        <a href="m"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src="images/work-2.png" alt="work" />
                </div>
                <div className="work">
                    <img src="images/work-3.png" alt="work" />
                </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default App;

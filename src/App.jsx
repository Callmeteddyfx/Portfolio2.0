import './App.css'
import myProfile from './assets/gradpic (1) (2).jpeg';
import { useEffect, useState, useRef } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const profile_iconsize = 25;

/* Project descriptions */
const item1_info = `A simple and user-friendly calculator app for quick and accurate basic calculations, including addition, subtraction, multiplication, and division. Perfect for everyday math needs.`
const item2_info = `Shot Master is a basketball shot tracking app designed to help players improve accuracy and consistency through structured tracking and analysis.\n\nFeatures:\n✅ 100-Shot Challenge: Test your consistency by logging makes and misses.\n✅ Detailed Statistics: Get insights into your shooting percentage, trends, and progress over time.\n✅ Clean & Simple Interface: Easily log shots with a tap and review your stats at a glance.`;


/* Project Images */
import itemimg_1 from "./assets/basiccal.png";
import itemimg_2 from "./assets/shotmaster100 .png";


function FadeInSection({ children }) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
}

function Header(){
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <>
    <header>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
      {darkMode ? <MdLightMode size={profile_iconsize} color='#FFF'/> : <MdOutlineDarkMode size={profile_iconsize} />}
    </button>
    </header>
    </>
  )
} 

function Profile(){
return (  
<>
 <section id="profile">
      <div className="section__pic-container">
        <img id="profileimg" src={myProfile} alt="David profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">David <br></br> Egbuawa</h1>
        </div>
        <div className='icon_div'>
      <SiBuymeacoffee size={profile_iconsize} color="rgb(85, 85, 85)" id='icon' onClick={() => window.open("https://coff.ee/callmeteddy", "_blank")}/>
      <IoLogoLinkedin size={profile_iconsize} color="rgb(85, 85, 85)" id='icon'onClick={() => window.open("https://www.linkedin.com/in/david-egbuawa-14a396339/", "_blank")}/>
      <FiGithub size={profile_iconsize} color="rgb(85, 85, 85)" id='icon' onClick={() => window.open("https://github.com/Callmeteddyfx", "_blank")}/>
        </div>
        </section>
  </>
  )
}

function Item1(){
  return(
    <>
    <div className='item_div'>
    <img src= {itemimg_1} alt='project_1' className='itemimg'></img>
    <div className='div_divider'>
    <div className='text'>
    <h2 className='item_title'>Calculator</h2>
    <p className='item_info'>{item1_info}</p>
    </div>
   <div className='item_btns'>
    <button className='livedemo_btn' onClick={() => window.open ( "https://callmeteddyfx.github.io/BasicCalculator/", "_blank")}>Live Demo</button>
    <button className='githubrepo_btn' onClick={() => window.open ( "https://github.com/Callmeteddyfx/BasicCalculator.git", "_blank")}>Github Repo</button>
        </div> 
      </div>
    </div>
    </>
  )
}

function Item2(){
  return(
    <>
    <div className='item_div'>
    <img src= {itemimg_2} alt='project_1' className='itemimg'></img>
    <div className='div_divider'>
    <div className='text'>
    <h2 className='item_title'>ShotMaster</h2>
    <p className='item_info'>{item2_info}</p>
    </div>
   <div className='item_btns'>
    <button className='livedemo_btn' onClick={() => window.open ( "https://callmeteddyfx.github.io/ShotMaster100_v1/", "_blank")}>Live Demo</button>
    <button className='githubrepo_btn' onClick={() => window.open ( "https://github.com/Callmeteddyfx/ShotMaster100_v1.git", "_blank")}>Github Repo</button>
        </div> 
      </div>
    </div>
    </>
  )
}

function Item3(){
  return(
    <>
    <div className='more'>
      <h1>More</h1>
      </div>
    </>
  )
}


function Projects(){
 return(
 <>
 <section className='projects'>
    <div>
      <p>Check out my</p>
      <h1 id='projects'>Projects</h1>
    </div>
      <Swiper
      /* autoHeight={true} */
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      modules={[Autoplay, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      speed={1200}
      navigation
       autoplay={{
    delay: 2300,
    disableOnInteraction: true, // continues autoplay after user swipes
    loop: true,
  }}
      pagination={{ clickable: true }
    }
    >
      <SwiperSlide><Item1 /></SwiperSlide>
      <SwiperSlide><Item2 /></SwiperSlide>
      <SwiperSlide><Item3 /></SwiperSlide>
    </Swiper>
      </section>
 </>
 )
}


function App() {
  return (
    <>
  <Header />
  <main>
    <FadeInSection><Profile /></FadeInSection>
     <FadeInSection><Projects /></FadeInSection>
  </main>
    </>
)
}

export default App

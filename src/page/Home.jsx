import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Logo from '../assets/images/svg/logo.svg';
import Menu from '../assets/images/svg/menu.svg';
import dropdownSvg from '../assets/images/svg/dropdown.svg';
import ExpandImg from '../assets/images/home-page/expand-img.jpg';
import ExpandImg2 from '../assets/images/home-page/expand-img2.jpg';
import ExpandImg3 from '../assets/images/home-page/expand-img3.jpg';
import ExpandImg4 from '../assets/images/home-page/expand-img4.jpg';
import SliderImg1 from '../assets/images/slider-images/slider-img1.jpg';
import SliderImg2 from '../assets/images/slider-images/slider-img2.jpg';
import SliderImg3 from '../assets/images/slider-images/slider-img3.jpg';
import SliderImg4 from '../assets/images/slider-images/slider-img4.jpg';
import SliderImg5 from '../assets/images/slider-images/slider-img5.jpg';
import SliderImg6 from '../assets/images/slider-images/slider-img6.jpg';
import InSliderArrow from '../assets/images/svg/inSliderArrow.svg';
import SliderPopImg1 from '../assets/images/slider-images/slider-pop-img1.jpg';
import SliderPopImg2 from '../assets/images/slider-images/slider-pop-img2.jpg';
import SliderPopImg3 from '../assets/images/slider-images/slider-pop-img3.jpg';
import SliderPopImg4 from '../assets/images/slider-images/slider-pop-img4.jpg';
import SliderPopImg5 from '../assets/images/slider-images/slider-pop-img5.jpg';
import SliderPopImg6 from '../assets/images/slider-images/slider-pop-img6.jpg';
import SliderPop2Img1 from '../assets/images/slider-images/slider-pop2-img1.jpg';
import SliderPop2Img2 from '../assets/images/slider-images/slider-pop2-img2.jpg';
import SliderPop2Img3 from '../assets/images/slider-images/slider-pop2-img3.jpg';
import SliderPop2Img4 from '../assets/images/slider-images/slider-pop2-img4.jpg';
import SliderPop2Img5 from '../assets/images/slider-images/slider-pop2-img5.jpg';
import SliderPop2Img6 from '../assets/images/slider-images/slider-pop2-img6.jpg';
import SliderPop3Img1 from '../assets/images/slider-images/slider-pop3-img1.jpg';
import SliderPop3Img2 from '../assets/images/slider-images/slider-pop3-img2.jpg';
import SliderPop3Img3 from '../assets/images/slider-images/slider-pop3-img3.jpg';
import SliderPop3Img4 from '../assets/images/slider-images/slider-pop3-img4.jpg';
import SliderPop3Img5 from '../assets/images/slider-images/slider-pop3-img5.jpg';
import SliderPop3Img6 from '../assets/images/slider-images/slider-pop3-img6.jpg';
import SliderPop4Img1 from '../assets/images/slider-images/slider-pop4-img1.jpg';
import SliderPop4Img2 from '../assets/images/slider-images/slider-pop4-img2.jpg';
import SliderPop4Img3 from '../assets/images/slider-images/slider-pop4-img3.jpg';
import SliderPop4Img4 from '../assets/images/slider-images/slider-pop4-img4.jpg';
import SliderPop4Img5 from '../assets/images/slider-images/slider-pop4-img5.jpg';
import SliderPop4Img6 from '../assets/images/slider-images/slider-pop4-img6.jpg';
import SliderPop5Img1 from '../assets/images/slider-images/slider-pop5-img1.jpg';
import SliderPop5Img2 from '../assets/images/slider-images/slider-pop5-img2.jpg';
import SliderPop5Img3 from '../assets/images/slider-images/slider-pop5-img3.jpg';
import SliderPop5Img4 from '../assets/images/slider-images/slider-pop5-img4.jpg';
import SliderPop5Img5 from '../assets/images/slider-images/slider-pop5-img5.jpg';
import SliderPop5Img6 from '../assets/images/slider-images/slider-pop5-img6.jpg';
import SliderPop6Img1 from '../assets/images/slider-images/slider-pop6-img1.jpg';
import SliderPop6Img2 from '../assets/images/slider-images/slider-pop6-img2.jpg';
import SliderPop6Img3 from '../assets/images/slider-images/slider-pop6-img3.jpg';
import SliderPop6Img4 from '../assets/images/slider-images/slider-pop6-img4.jpg';
import SliderPop6Img5 from '../assets/images/slider-images/slider-pop6-img5.jpg';
import SliderPop6Img6 from '../assets/images/slider-images/slider-pop6-img6.jpg';
import Disc1 from '../assets/images/home-page/disc1.jpg';
import Disc2 from '../assets/images/home-page/disc2.jpg';
import Disc3 from '../assets/images/home-page/disc3.jpg';
import Disc4 from '../assets/images/home-page/disc4.jpg';
import VariousSvg from '../assets/images/svg/various.svg';
import ResolutionSvg from '../assets/images/svg/resolution.svg';
import WatermarkSvg from '../assets/images/svg/watermark.svg';
import ReuseSvg from '../assets/images/svg/reuse.svg';
import CreatSvg from '../assets/images/svg/creat.svg';
import InstantSvg from '../assets/images/svg/instant.svg';
import ArrowBarBoth from '../assets/images/svg/arrow-bar-both.svg'
import sunIconLight from '../assets/images/svg/sun-light.svg';
import sunIconDark from '../assets/images/svg/sun-dark.svg';
import { useDarkMode } from '../component/DarkModeContext';
import Possibilities from '../component/Possibilities';
import Millions from '../component/Millions';
import Marquee from '../component/Marquee';
import Blog from '../component/Blog';
import Footer from '../component/Footer';
import Scanner from '../component/Scanner';
import { generateAIResponse } from '../api/ai';


const Home = () => {
    /*------------- Section wise Active Menu ---------------------*/
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            // Get all sections that correspond to nav links
            const sections = document.querySelectorAll('.nav-links .a-link[href^="#"]');

            sections.forEach(link => {
                const sectionId = link.getAttribute('href');
                const section = document.querySelector(sectionId);

                if (section) {
                    const sectionOffset = section.offsetTop - 50; 
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionOffset &&
                        scrollPosition < sectionOffset + sectionHeight) {
                        setActiveLink(sectionId);
                    }
                }
            });
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /*------------------------------------- Whole Page Scrolling Animation -------------------------------------*/
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ isIntersecting, target }) => {
                target.classList.toggle('show', isIntersecting);
            });
        });

        const elements = document.querySelectorAll(
            '.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down'
        );

        elements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    /*------------------------------------- Sticky Header -------------------------------------*/
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const header = document.getElementById('top-header');
            const navbar = document.getElementById('top-navbar');

            if (scrollPosition >= 20) {
                header?.classList.add('fixed');
                navbar?.classList.add('fixed');
            } else {
                header?.classList.remove('fixed');
                navbar?.classList.remove('fixed');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /*------------------------------------- Toggle Menu -------------------------------------*/
    useEffect(() => {
        const toggleMenu = () => {
            const navLinks = document.querySelector('.nav-links-mn');
            const overlay = document.querySelector('.overlaytoggle');
            if (!navLinks || !overlay) return;

            const isActive = navLinks.classList.contains('active');
            if (isActive) {
                navLinks.classList.add('closing');
                overlay.classList.remove('active');
                setTimeout(() => {
                    navLinks.classList.remove('active', 'closing');
                }, 300);
            } else {
                navLinks.classList.remove('closing');
                navLinks.classList.add('active');
                overlay.classList.add('active');
            }
        };

        const menuLinks = document.querySelectorAll('.a-link');
        menuLinks.forEach(link => link.addEventListener('click', toggleMenu));

        const overlay = document.querySelector('.overlaytoggle');
        const menuIcon = document.querySelector('.menu-icon');
        const navLinks = document.querySelector('.nav-links-mn');

        const handleOutsideClick = (event) => {
            if (
                navLinks &&
                !navLinks.contains(event.target) &&
                !menuIcon?.contains(event.target) &&
                overlay?.classList.contains('active')
            ) {
                toggleMenu();
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            menuLinks.forEach(link => link.removeEventListener('click', toggleMenu));
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleMenuClick = () => {
        const navLinks = document.querySelector('.nav-links-mn');
        const overlay = document.querySelector('.overlaytoggle');
        if (!navLinks || !overlay) return;

        const isActive = navLinks.classList.contains('active');
        if (isActive) {
            navLinks.classList.add('closing');
            overlay.classList.remove('active');
            setTimeout(() => {
                navLinks.classList.remove('active', 'closing');
            }, 300);
        } else {
            navLinks.classList.remove('closing');
            navLinks.classList.add('active');
            overlay.classList.add('active');
        }
    };

    /*------------------------------------- Typing Text input -------------------------------------*/
    const inputRef = useRef(null);
    useEffect(() => {
        const phrases = [
            "Describe what you want to see",
            "Example: A sunset over mountains",
            "Example: A cute puppy playing",
            "Example: Futuristic cityscape"
        ];
        let currentPhrase = 0;
        let currentLetter = 0;
        let isDeleting = false;
        const typingSpeed = 100;

        const typeWriter = () => {
            if (!inputRef.current) return;
            const currentText = phrases[currentPhrase];
            inputRef.current.placeholder = currentText.substring(0, currentLetter);

            if (!isDeleting && currentLetter < currentText.length) {
                currentLetter++;
                setTimeout(typeWriter, typingSpeed);
            } else if (isDeleting && currentLetter > 0) {
                currentLetter--;
                setTimeout(typeWriter, typingSpeed / 2);
            } else {
                isDeleting = !isDeleting;
                if (!isDeleting) currentPhrase = (currentPhrase + 1) % phrases.length;
                setTimeout(typeWriter, typingSpeed);
            }
        };

        const startTyping = setTimeout(typeWriter, 1000);
        return () => clearTimeout(startTyping);
    }, []);

    /*------------------------------------- input Drop down -------------------------------------*/
    const [isActive, setIsActive] = useState(false);
    const [selectedValue, setSelectedValue] = useState('No style');
    const dropdownRef = useRef(null);
    const options = [
        'Photo', '3D', 'Comic', 'IIIustration',
        'Cartoon Fun', 'Comic', 'Dark', 'Watercolor'
    ];

    const toggleDropdown = () => setIsActive(prev => !prev);
    const handleOptionClick = (value) => {
        setSelectedValue(value);
        setIsActive(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    /*------------------------------------- Expand img Slider -------------------------------------*/
    const imageSlider = {
        dots: false,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1,
    };

    /*------------- Create your design Section ---------------------*/
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        speed: 500,
        responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 3 } },
            { breakpoint: 900, settings: { slidesToShow: 2 } },
            { breakpoint: 575, settings: { slidesToShow: 1 } }
        ]
    };

    /*------------- Custom Cursor ---------------------*/
    useEffect(() => {
        const cursor = document.createElement("div");
        cursor.classList.add("custom-cursor");

        const arrowImg = document.createElement("img");
        arrowImg.src = ArrowBarBoth;
        arrowImg.classList.add("cursor-arrow");

        cursor.appendChild(arrowImg);
        document.body.appendChild(cursor);

        const suggBoxes = document.querySelectorAll(".cursor");

        const showCursor = () => (cursor.style.display = "block");
        const hideCursor = () => (cursor.style.display = "none");
        const moveCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        suggBoxes.forEach((box) => {
            box.addEventListener("mouseenter", showCursor);
            box.addEventListener("mouseleave", hideCursor);
            box.addEventListener("mousemove", moveCursor);
        });

        return () => {
            suggBoxes.forEach((box) => {
                box.removeEventListener("mouseenter", showCursor);
                box.removeEventListener("mouseleave", hideCursor);
                box.removeEventListener("mousemove", moveCursor);
            });
            document.body.removeChild(cursor);
        };
    }, []);


    /*------------- Bottom To Top Button ---------------------*/
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.pageYOffset > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    /*------------- Dark Light Mode ---------------------*/
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    
    /*------------- Dark Light Mode ---------------------*/
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateAIResponse({ input });
      setOutput(result.output || 'No output received');
    } catch (err) {
      setOutput('Error occurred');
    } finally {
      setLoading(false);
    }
  };

    return (
        <>
            {/* <!-- ====================================== Header ===================================== --> */}
            <div className="overlaytoggle"></div>
            <header id="top-navbar" className="top-navbar">
                <div className="container">
                    <nav>
                        <Link to="/" className="logo">
                            <img src={Logo} alt="logo" />
                            <p>Geralt AI</p>
                        </Link>
                        <div className="nav-links-mn">
                            <ul className="nav-links">
                                <li className="d-flex justify-content-center w-100">
                                    <Link to="/" className="logo side-menu-logo">
                                        <img src={Logo} alt="logo" />
                                        <p>Geralt AI</p>
                                    </Link>
                                </li>
                                <li>
                                    <a className={`a-link ${activeLink === '#explore' ? 'active' : ''}`} href="#explore">
                                        Explore
                                    </a>
                                </li>
                                <li>
                                    <a className={`a-link ${activeLink === '#category' ? 'active' : ''}`} href="#category">
                                        Category
                                    </a>
                                </li>
                                <li>
                                    <a className={`a-link ${activeLink === '#discover' ? 'active' : ''}`} href="#discover">
                                        Discover
                                    </a>
                                </li>
                                <li>
                                    <a className={`a-link ${activeLink === '#features' ? 'active' : ''}`} href="#features">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a className={`a-link ${activeLink === '#testimonials' ? 'active' : ''}`} href="#testimonials">
                                        Testimonials
                                    </a>
                                </li>
                                <li>
                                    <a className={`a-link ${activeLink === '#pricing' ? 'active' : ''}`} href="#pricing">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a className={`a-link ${activeLink === '#faq' ? 'active' : ''}`} href="#faq">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a className={`a-link ${activeLink === '#blogs' ? 'active' : ''}`} href="#blogs">
                                        Blogs
                                    </a>
                                </li>
                            </ul>
                            <div className="header-buttons-main">
                                <Link to="/SliderForm" className="login-btn">Login</Link>
                                <Link to="/SliderForm" className="signUp-btn">Sign Up</Link>
                            </div>
                        </div>
                        {/* <!-- =================== Dark Light Mode Toggle ====================== --> */}
                        <div className="dso-flex">
                            <div className="icon-container" onClick={toggleDarkMode}>
                                <img src={sunIconLight} className={`icon ${isDarkMode ? 'hidden' : ''}`} alt="Light mode" />
                                <img src={sunIconDark} className={`icon ${!isDarkMode ? 'hidden' : ''}`} alt="Dark mode" />
                            </div>
                            <div className="menu-icon" onClick={handleMenuClick}>
                                <img src={Menu} alt="menu" />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* <!-- ====================================== Background Lines ===================================== --> */}
            <div className="grid-lines">
                <div className="grid-line-1"></div>
                <div className="grid-line-2"></div>
                <div className="grid-line-3"></div>
                <div className="grid-line-4"></div>
                <div className="grid-line-5"></div>
            </div>
            {/* <!-- ====================================== Section One ===================================== --> */}
            <section className="section-one overflow-hidden" id="explore">
                <div className="container">
                    <h1 className="imgGenerator ai-img-get-text fade_down">AI <span>Image Generator</span></h1>
                    <p className="bring fade_down">Bring your ideas to life with Generate image, the text to image generator in
                        Geralt AI. You can generate images quickly and easily, now with higher quality, more detail and improved
                        lighting and colour.</p>
                    <div className="inputGenerate" id="inputGenerate">
                        <input
                            className="img-gner"
                            type="text"
                            placeholder="Describe what you want to see"
                            name="Generate"
                            autoComplete="off"
                            ref={inputRef}
                        />
                        <div className="butn-drop-down-main">
                            <div className={`custom-dropdown ${isActive ? 'active' : ''}`}
                                ref={dropdownRef}
                            >
                                <input
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    autoComplete="off"
                                    readOnly
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="No style"
                                />
                                <span className="dropdown-arrow">
                                    <img src={dropdownSvg} alt="dropdown" />
                                </span>
                                {isActive && (
                                    <div className="dropdown-options">
                                        {options.map((option, index) => (
                                            <div
                                                key={index}
                                                className="dropdown-option"
                                                data-value={option}
                                                onClick={() => handleOptionClick(option)}
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button onClick={handleGenerate} className="generateImage"> {loading ? 'Generating...' : 'Generate a image'}</button>
                        </div>
                    </div>
                    <h2 className="noInspi">No Inspiration? Try this: <Link to="#">Baby hedgehog wearing a flower crown in a
                        garden</Link>
                    </h2>
                </div>
                <div className="expand-img-main image-slider">
                    <Slider {...imageSlider}>
                        <img className="expand-img" src={ExpandImg} alt="expand-img" />
                        <img className="expand-img" src={ExpandImg2} alt="expand-img2" />
                        <img className="expand-img" src={ExpandImg3} alt="expand-img3" />
                        <img className="expand-img" src={ExpandImg4} alt="expand-img4" />
                    </Slider>
                </div>
            </section>
            {/* <!-- ====================================== Section Two ===================================== --> */}
            <Possibilities />
            {/* <!-- ====================================== Section Three ===================================== --> */}
            <section className="section-three pt-0" id="category">
                <div className="container">
                    <h2 className="xplore fade_down">Create your design, <span>Whatever Your Purpose</span></h2>
                    <h3 className="stunnii fade_down">Start with a prompt or just a blank canvas. However you begin, the end result
                        is your design.</h3>
                </div>
                <div className="creative-design-slider cursor">
                    <Slider {...settings}>
                        <div className="slider-box-main border-end-0" data-bs-toggle="modal" data-bs-target="#characterDesign">
                            <img className="slider-img" src={SliderImg1} alt="slider-img1" />
                            <p className="character">Character Design</p>
                            <p className="characterText">Fun and expressive character design for cartoons and animation.</p>
                            <Link to="#" className="buildd">Build design now
                                <img src={InSliderArrow} alt="inSliderArrow" />
                            </Link>
                        </div>
                        <div className="slider-box-main border-end-0" data-bs-toggle="modal" data-bs-target="#fashionBeauty">
                            <img className="slider-img" src={SliderImg2} alt="slider-img2" />
                            <p className="character">Fashion & Beauty</p>
                            <p className="characterText">Offering entertaining options such as personal portraits and avatars.</p>
                            <Link to="#" className="buildd">Build design now
                                <img src={InSliderArrow} alt="inSliderArrow" />
                            </Link>
                        </div>
                        <div className="slider-box-main border-end-0" data-bs-toggle="modal" data-bs-target="#gameAssets">
                            <img className="slider-img" src={SliderImg3} alt="slider-img3" />
                            <p className="character">Game Assets</p>
                            <p className="characterText">Designing high-quality game assets for immersive experience.</p>
                            <Link to="#" className="buildd">Build design now
                                <img src={InSliderArrow} alt="inSliderArrow" />
                            </Link>
                        </div>
                        <div className="slider-box-main border-end-0" data-bs-toggle="modal" data-bs-target="#marketingAdvertising">
                            <img className="slider-img" src={SliderImg4} alt="slider-img4" />
                            <p className="character">Marketing & Advertising</p>
                            <p className="characterText">Meeting the needs of both marketing and advertising design.</p>
                            <Link to="#" className="buildd">Build design now
                                <img src={InSliderArrow} alt="inSliderArrow" />
                            </Link>
                        </div>
                        <div className="slider-box-main border-end-0" data-bs-toggle="modal" data-bs-target="#contentCreation">
                            <img className="slider-img" src={SliderImg5} alt="slider-img5" />
                            <p className="character">Content Creation</p>
                            <p className="characterText">Serving the demands of all kinds of social media creators.</p>
                            <Link to="#" className="buildd">Build design now
                                <img src={InSliderArrow} alt="inSliderArrow" />
                            </Link>
                        </div>
                        <div className="slider-box-main border-end-0" data-bs-toggle="modal" data-bs-target="#productPhotography">
                            <img className="slider-img" src={SliderImg6} alt="slider-img6" />
                            <p className="character">Product Photography</p>
                            <p className="characterText">Supplying services for design of product images.</p>
                            <Link to="#" className="buildd">Build design now
                                <img src={InSliderArrow} alt="inSliderArrow" />
                            </Link>
                        </div>
                    </Slider>
                </div>
                {/* <!-- Character Design Modal --> */}
                <div className="modal fade" id="characterDesign" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h2 className="liqua cgsq">Character Design</h2>
                                <p className="sodales pb-0">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
                                    eget
                                    viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin,
                                    ipsum eget blandit pulvinar. Integer tincidunt. Cras dapibus. Vivamus elementum semper
                                    nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                    eleifend ac, enim.</p>
                                <div className="masonry-grid-pop">
                                    <img src={SliderPopImg1} alt="slider-pop-img1" />
                                    <img src={SliderPopImg2} alt="slider-pop-img2" />
                                    <img src={SliderPopImg3} alt="slider-pop-img3" />
                                    <img src={SliderPopImg4} alt="slider-pop-img4" />
                                    <img src={SliderPopImg5} alt="slider-pop-img5" />
                                    <img src={SliderPopImg6} alt="slider-pop-img6" />
                                </div>
                                <p className="sodales">Vitae ipsum accumsan iaculis elementum. Lorem sed et fusce risus malesuada
                                    eu cras. Semper molestie elementum magna ullamcorper dui eget dolor nibh bibendum. Eu hac
                                    amet elit netus feugiat consectetur at. Felis habitant posuere neque libero. Placerat quam
                                    eget sollicitudin faucibus id ut a id est. Elit quam nullam luctus sed aliquam sed
                                    viverra.
                                </p>
                                <p className="sodales">Aenean et egestas nulla. Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Fusce gravida, ligula non molestie tristique,
                                    justo elit blandit risus, blandit maximus augue magna accumsan ante. Duis id mi tristique,
                                    pulvinar neque at, lobortis tortor.</p>
                                <div className="pop-img-gen-btn">
                                    <a href="index.html" className="generateImage pop-generateImage">Generate a image</a>
                                    <button className="generateImage close-grn" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Fashion & Beauty Modal --> */}
                <div className="modal fade" id="fashionBeauty" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h2 className="liqua cgsq">Fashion & Beauty</h2>
                                <p className="sodales pb-0">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
                                    eget
                                    viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin,
                                    ipsum eget blandit pulvinar. Integer tincidunt. Cras dapibus. Vivamus elementum semper
                                    nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                    eleifend ac, enim.</p>
                                <div className="masonry-grid-pop">
                                    <img src={SliderPop2Img1} alt="slider-pop-img1" />
                                    <img src={SliderPop2Img2} alt="slider-pop-img2" />
                                    <img src={SliderPop2Img3} alt="slider-pop-img3" />
                                    <img src={SliderPop2Img4} alt="slider-pop-img4" />
                                    <img src={SliderPop2Img5} alt="slider-pop-img5" />
                                    <img src={SliderPop2Img6} alt="slider-pop-img6" />
                                </div>
                                <p className="sodales">Vitae ipsum accumsan iaculis elementum. Lorem sed et fusce risus malesuada
                                    eu cras. Semper molestie elementum magna ullamcorper dui eget dolor nibh bibendum. Eu hac
                                    amet elit netus feugiat consectetur at. Felis habitant posuere neque libero. Placerat quam
                                    eget sollicitudin faucibus id ut a id est. Elit quam nullam luctus sed aliquam sed
                                    viverra.
                                </p>
                                <p className="sodales">Aenean et egestas nulla. Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Fusce gravida, ligula non molestie tristique,
                                    justo elit blandit risus, blandit maximus augue magna accumsan ante. Duis id mi tristique,
                                    pulvinar neque at, lobortis tortor.</p>
                                <div className="pop-img-gen-btn">
                                    <a href="index.html" className="generateImage pop-generateImage">Generate a image</a>
                                    <button className="generateImage close-grn" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Game Assets Modal --> */}
                <div className="modal fade" id="gameAssets" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h2 className="liqua cgsq">Game Assets</h2>
                                <p className="sodales pb-0">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
                                    eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin,
                                    ipsum eget blandit pulvinar. Integer tincidunt. Cras dapibus. Vivamus elementum semper
                                    nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                    eleifend ac, enim.</p>
                                <div className="masonry-grid-pop">
                                    <img src={SliderPop3Img1} alt="slider-pop-img1" />
                                    <img src={SliderPop3Img2} alt="slider-pop-img2" />
                                    <img src={SliderPop3Img3} alt="slider-pop-img3" />
                                    <img src={SliderPop3Img4} alt="slider-pop-img4" />
                                    <img src={SliderPop3Img5} alt="slider-pop-img5" />
                                    <img src={SliderPop3Img6} alt="slider-pop-img6" />
                                </div>
                                <p className="sodales">Vitae ipsum accumsan iaculis elementum. Lorem sed et fusce risus malesuada
                                    eu cras. Semper molestie elementum magna ullamcorper dui eget dolor nibh bibendum. Eu hac
                                    amet elit netus feugiat consectetur at. Felis habitant posuere neque libero. Placerat quam
                                    eget sollicitudin faucibus id ut a id est. Elit quam nullam luctus sed aliquam sed
                                    viverra.
                                </p>
                                <p className="sodales">Aenean et egestas nulla. Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Fusce gravida, ligula non molestie tristique,
                                    justo elit blandit risus, blandit maximus augue magna accumsan ante. Duis id mi tristique,
                                    pulvinar neque at, lobortis tortor.</p>
                                <div className="pop-img-gen-btn">
                                    <a href="index.html" className="generateImage pop-generateImage">Generate a image</a>
                                    <button className="generateImage close-grn" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Marketing & Advertising Modal --> */}
                <div className="modal fade" id="marketingAdvertising" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h2 className="liqua cgsq">Marketing & Advertising</h2>
                                <p className="sodales pb-0">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
                                    eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin,
                                    ipsum eget blandit pulvinar. Integer tincidunt. Cras dapibus. Vivamus elementum semper
                                    nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                    eleifend ac, enim.</p>
                                <div className="masonry-grid-pop">
                                    <img src={SliderPop4Img1} alt="slider-pop-img1" />
                                    <img src={SliderPop4Img2} alt="slider-pop-img2" />
                                    <img src={SliderPop4Img3} alt="slider-pop-img3" />
                                    <img src={SliderPop4Img4} alt="slider-pop-img4" />
                                    <img src={SliderPop4Img5} alt="slider-pop-img5" />
                                    <img src={SliderPop4Img6} alt="slider-pop-img6" />
                                </div>
                                <p className="sodales">Vitae ipsum accumsan iaculis elementum. Lorem sed et fusce risus malesuada
                                    eu cras. Semper molestie elementum magna ullamcorper dui eget dolor nibh bibendum. Eu hac
                                    amet elit netus feugiat consectetur at. Felis habitant posuere neque libero. Placerat quam
                                    eget sollicitudin faucibus id ut a id est. Elit quam nullam luctus sed aliquam sed
                                    viverra.
                                </p>
                                <p className="sodales">Aenean et egestas nulla. Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Fusce gravida, ligula non molestie tristique,
                                    justo elit blandit risus, blandit maximus augue magna accumsan ante. Duis id mi tristique,
                                    pulvinar neque at, lobortis tortor.</p>
                                <div className="pop-img-gen-btn">
                                    <a href="index.html" className="generateImage pop-generateImage">Generate a image</a>
                                    <button className="generateImage close-grn" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Content Creation Modal --> */}
                <div className="modal fade" id="contentCreation" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h2 className="liqua cgsq">Content Creation</h2>
                                <p className="sodales pb-0">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
                                    eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin,
                                    ipsum eget blandit pulvinar. Integer tincidunt. Cras dapibus. Vivamus elementum semper
                                    nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                    eleifend ac, enim.</p>
                                <div className="masonry-grid-pop">
                                    <img src={SliderPop5Img1} alt="slider-pop-img1" />
                                    <img src={SliderPop5Img2} alt="slider-pop-img2" />
                                    <img src={SliderPop5Img3} alt="slider-pop-img3" />
                                    <img src={SliderPop5Img4} alt="slider-pop-img4" />
                                    <img src={SliderPop5Img5} alt="slider-pop-img5" />
                                    <img src={SliderPop5Img6} alt="slider-pop-img6" />
                                </div>
                                <p className="sodales">Vitae ipsum accumsan iaculis elementum. Lorem sed et fusce risus malesuada
                                    eu cras. Semper molestie elementum magna ullamcorper dui eget dolor nibh bibendum. Eu hac
                                    amet elit netus feugiat consectetur at. Felis habitant posuere neque libero. Placerat quam
                                    eget sollicitudin faucibus id ut a id est. Elit quam nullam luctus sed aliquam sed
                                    viverra.
                                </p>
                                <p className="sodales">Aenean et egestas nulla. Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Fusce gravida, ligula non molestie tristique,
                                    justo elit blandit risus, blandit maximus augue magna accumsan ante. Duis id mi tristique,
                                    pulvinar neque at, lobortis tortor.</p>
                                <div className="pop-img-gen-btn">
                                    <a href="index.html" className="generateImage pop-generateImage">Generate a image</a>
                                    <button className="generateImage close-grn" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Photography Modal --> */}
                <div className="modal fade" id="productPhotography" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h2 className="liqua cgsq">Product Photography</h2>
                                <p className="sodales pb-0">Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
                                    eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin,
                                    ipsum eget blandit pulvinar. Integer tincidunt. Cras dapibus. Vivamus elementum semper
                                    nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                    eleifend ac, enim.</p>
                                <div className="masonry-grid-pop">
                                    <img src={SliderPop6Img1} alt="slider-pop-img1" />
                                    <img src={SliderPop6Img2} alt="slider-pop-img2" />
                                    <img src={SliderPop6Img3} alt="slider-pop-img3" />
                                    <img src={SliderPop6Img4} alt="slider-pop-img4" />
                                    <img src={SliderPop6Img5} alt="slider-pop-img5" />
                                    <img src={SliderPop6Img6} alt="slider-pop-img6" />
                                </div>
                                <p className="sodales">Vitae ipsum accumsan iaculis elementum. Lorem sed et fusce risus malesuada
                                    eu cras. Semper molestie elementum magna ullamcorper dui eget dolor nibh bibendum. Eu hac
                                    amet elit netus feugiat consectetur at. Felis habitant posuere neque libero. Placerat quam
                                    eget sollicitudin faucibus id ut a id est. Elit quam nullam luctus sed aliquam sed
                                    viverra.
                                </p>
                                <p className="sodales">Aenean et egestas nulla. Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Fusce gravida, ligula non molestie tristique,
                                    justo elit blandit risus, blandit maximus augue magna accumsan ante. Duis id mi tristique,
                                    pulvinar neque at, lobortis tortor.</p>
                                <div className="pop-img-gen-btn">
                                    <a href="index.html" className="generateImage pop-generateImage">Generate a image</a>
                                    <button className="generateImage close-grn" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Four ===================================== --> */}
            <section className="section-four pt-0" id="discover">
                <div className="container">
                    <h2 className="xplore fade_down">Discover the magic of <span>AI Image Generation.</span></h2>
                    <h3 className="stunnii fade_down">Geralt AI creative exploration easier and faster for everyone. Use Generate
                        image to experiment with your wildest ideas, find new sources of inspiration or create eye-catching
                        content in just a few words.</h3>
                    <div className="row row-imgDisc">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 text-middel zoom_in">
                            <h3 className="adbance">Advanced AI Artistry</h3>
                            <p className="unnleas">Unleash the power of Geralt AI. Transform text into high-fidelity images with
                                unparalleled precision. Experience the future of visual creation.</p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 img-middel">
                            <img className="disc1" src={Disc1} alt="disc1" />
                            <img className="disc2" src={Disc2} alt="disc2" />
                        </div>
                    </div>
                    <div className="row row-imgDisc aircarft-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 disc-mian-col">
                            <p className="aircraf">Aircraft flying into the sunset, 1980’s hot summer</p>
                            <img src={Disc3} alt="disc3" />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 text-middel zoom_in">
                            <h3 className="adbance">Innovative Text Interpretation</h3>
                            <p className="unnleas">Geralt AI understands the finer details of your imagination. It analyzes the
                                nuances of your descriptions, including emotions and scenarios, to generate artwork that
                                perfectly reflects your intent.</p>
                        </div>
                    </div>
                    <div className="row row-imgDisc">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 text-middel zoom_in">
                            <h3 className="adbance">Art for All Platforms</h3>
                            <p className="unnleas">Geralt AI makes it easy to use your creations anywhere. Generate stunning visuals
                                that effortlessly fit into your digital media, print materials, or personal projects.</p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 text-middel spacer-top">
                            <img src={Disc4} alt="disc4" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Five ===================================== --> */}
            <section className="section-five pt-0" id="features">
                <div className="container">
                    <h2 className="xplore fade_down">Why Create <span>AI Images</span> with Geralt AI</h2>
                    <h3 className="stunnii fade_down">Ultricies tincidunt fusce congue massa nulla vestibulum fringilla faucibus
                        sit. Nunc nullam euismod sit consectetur suspendisse sit amet ultrices ipsum. Tempus est nisl vulputate
                        lectus est maecenas amet.</h3>
                    <div className="row home-features-row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="features-cir-main">
                                <div className="features-cir">
                                    <img src={VariousSvg} alt="various" />
                                </div>
                                <span className="img-bg-circle" id="img-bg-circle1"></span>
                            </div>
                            <h3 className="gendseratio">Various Styles</h3>
                            <p className="eugiat">Dive into a world of design possibilities. Customize your images with a vast
                                selection of artistic styles.</p>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="features-cir-main">
                                <div className="features-cir">
                                    <img src={ResolutionSvg} alt="resolution" />
                                </div>
                                <span className="img-bg-circle" id="img-bg-circle2"></span>
                            </div>
                            <h3 className="gendseratio">High Resolution Images</h3>
                            <p className="eugiat">Summon vivid pictures, sharp graphics, and intricate illustrations. Experience the
                                power of high-resolution clarity.</p>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="features-cir-main">
                                <div className="features-cir">
                                    <img src={WatermarkSvg} alt="watermark" />
                                </div>
                                <span className="img-bg-circle" id="img-bg-circle3"></span>
                            </div>
                            <h3 className="gendseratio">No Watermarks</h3>
                            <p className="eugiat">Dive into a world of design possibilities. Customize your images with a vast
                                selection of artistic styles.</p>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="features-cir-main">
                                <div className="features-cir">
                                    <img src={ReuseSvg} alt="reuse" />
                                </div>
                                <span className="img-bg-circle" id="img-bg-circle4"></span>
                            </div>
                            <h3 className="gendseratio">Reuse in Cloud Storage</h3>
                            <p className="eugiat">Control your artistic destiny. Your digital creations, at your fingertips, ready
                                for your next command.</p>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="features-cir-main">
                                <div className="features-cir">
                                    <img src={CreatSvg} alt="creat" />
                                </div>
                                <span className="img-bg-circle" id="img-bg-circle5"></span>
                            </div>
                            <h3 className="gendseratio">Free Image Creation</h3>
                            <p className="eugiat">Earn rewards and unlock up to thirty more, letting you generate thirty stunning AI
                                images.</p>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="features-cir-main">
                                <div className="features-cir">
                                    <img src={InstantSvg} alt="instant" />
                                </div>
                                <span className="img-bg-circle" id="img-bg-circle6"></span>
                            </div>
                            <h3 className="gendseratio">Instant Generation</h3>
                            <p className="eugiat">The path is fraught with monsters, not waiting. Geralt AI crafts your visions with
                                unmatched speed.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Six ===================================== --> */}
            <Millions />
            {/* <!-- ====================================== Section Seven ===================================== --> */}
            <Marquee />
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight pt-0" id="pricing">
                <div className="container">
                    <h2 className="xplore fade_down">Get a plan and <span>Start Creating</span></h2>
                    <h3 className="stunnii fade_down">Est libero volutpat morbi massa. Lorem sodales adipiscing eu maecenas lectus
                        faucibus pharetra. Vivamus sed sit elementum eu. Venenatis euismod egestas metus enim et sed mauris lectus.
                    </h3>
                    <div className="row pricing-rows">
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-9 zoom_in">
                            <div className="price-box-main">
                                <p className="freeplan">Free Plan</p>
                                <h3 className="plan-price">$0<sub>/month</sub></h3>
                                <Link to="#" className="price-plan-btn">Generate a image</Link>
                                <ul className="plan-body">
                                    <li>Generate up to 20 images daily</li>
                                    <li>Try classNameic fast and flux fast modes</li>
                                    <li>No access to custom characters or styles</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-9 zoom_in">
                            <div className="price-box-main">
                                <p className="freeplan">Paid Plan</p>
                                <h3 className="plan-price">$9.99<sub>/month</sub></h3>
                                <Link to="#" className="price-plan-btn paind-plan">Get A Paid Plan</Link>
                                <ul className="plan-body">
                                    <li>Enjoy thousands of image generations</li>
                                    <li>Unlock all Flux and Mystic modes</li>
                                    <li>Create custom characters or styles</li>
                                    <li>Access advanced AI tools and features</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <Scanner />
            {/* <!-- ====================================== Section Ten ===================================== --> */}
            <section className="section-ten pt-0" id="faq">
                <div className="container">
                    <div className="row section-ten-row">
                        <div className="col-xxl-4 col-xl-5 col-lg-5">
                            <div className="sdh">
                                <h2 className="xplore text-img-sec-text">Text to Image <span>AI Generator FAQs</span></h2>
                                <h3 className="stunnii text-img-sec-text-sub">Can't find the answer here? Please reach out to us at
                                    <a href="mailto:help@geraltai.com"> help@geraltai.com</a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne">
                                            How does AI generate images?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AI generates images with vibrant colors and high quality. It is due to the machine
                                            learning model scanning millions of images on the Internet along with the associated
                                            text. Through learning and training, the AI model can predict what an image should
                                            look like based on your provided text.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo">
                                            Does the AI Create Unique Images?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AI generates images with vibrant colors and high quality. It is due to the machine
                                            learning model scanning millions of images on the Internet along with the associated
                                            text. Through learning and training, the AI model can predict what an image should
                                            look like based on your provided text.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree">
                                            Is Geralt AI image generator free?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AI generates images with vibrant colors and high quality. It is due to the machine
                                            learning model scanning millions of images on the Internet along with the associated
                                            text. Through learning and training, the AI model can predict what an image should
                                            look like based on your provided text.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour">
                                            Can I use AI images for commercial purposes?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AI generates images with vibrant colors and high quality. It is due to the machine
                                            learning model scanning millions of images on the Internet along with the associated
                                            text. Through learning and training, the AI model can predict what an image should
                                            look like based on your provided text.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive">
                                            What can you do with a text-to-image AI generator?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AI generates images with vibrant colors and high quality. It is due to the machine
                                            learning model scanning millions of images on the Internet along with the associated
                                            text. Through learning and training, the AI model can predict what an image should
                                            look like based on your provided text.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix">
                                            What's the best AI image generator?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AI generates images with vibrant colors and high quality. It is due to the machine
                                            learning model scanning millions of images on the Internet along with the associated
                                            text. Through learning and training, the AI model can predict what an image should
                                            look like based on your provided text.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven">
                                            How does Geralt AI ensure my data's privacy?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AI generates images with vibrant colors and high quality. It is due to the machine
                                            learning model scanning millions of images on the Internet along with the associated
                                            text. Through learning and training, the AI model can predict what an image should
                                            look like based on your provided text.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseEight">
                                            How many images can I generate?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AI generates images with vibrant colors and high quality. It is due to the machine
                                            learning model scanning millions of images on the Internet along with the associated
                                            text. Through learning and training, the AI model can predict what an image should
                                            look like based on your provided text.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingNine">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseNine">
                                            How do I write good prompts?
                                        </button>
                                    </h2>
                                    <div id="collapseNine" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AI generates images with vibrant colors and high quality. It is due to the machine
                                            learning model scanning millions of images on the Internet along with the associated
                                            text. Through learning and training, the AI model can predict what an image should
                                            look like based on your provided text.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTen">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTen">
                                            Why should I use an AI image generator?
                                        </button>
                                    </h2>
                                    <div id="collapseTen" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AI generates images with vibrant colors and high quality. It is due to the machine
                                            learning model scanning millions of images on the Internet along with the associated
                                            text. Through learning and training, the AI model can predict what an image should
                                            look like based on your provided text.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Blog ===================================== --> */}
            <Blog />
            {/* <!-- ====================================== Section community ===================================== --> */}
            <section className="section-community pt-0">
                <div className="container">
                    <h2 className="xplore fade_down"><span>Growing Together</span> As a community</h2>
                    <h3 className="stunnii fade_down">Nulla ultrices pharetra sagittis tellus diam elementum sem pharetra. Dignissim
                        etiam nunc donec morbi id tortor tristique. Sed fermentum amet nisi mattis nisi proin cras ut libero
                        porttitor.
                    </h3>
                    <div className="row comminity-row-main">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="community-box-main zoom_in">
                                <div>
                                    <p className="comm-fac">Facebook</p>
                                    <p className="d-update">Daily Updates </p>
                                </div>
                                <a href="https://www.facebook.com" className="folllow-now">Follow Now</a>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="community-box-main zoom_in">
                                <div>
                                    <p className="comm-fac">Instagram</p>
                                    <p className="d-update">Daily Short Tips</p>
                                </div>
                                <a href="https://www.instagram.com" className="folllow-now">Follow Now</a>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="community-box-main zoom_in">
                                <div>
                                    <p className="comm-fac">YouTube</p>
                                    <p className="d-update">Tutorial Videos</p>
                                </div>
                                <a href="https://x.com" className="folllow-now">Subscribe Now</a>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="community-box-main zoom_in">
                                <div>
                                    <p className="comm-fac">LinkedIn</p>
                                    <p className="d-update">Latest Trends</p>
                                </div>
                                <a href="https://www.linkedin.com" className="folllow-now">Follow Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ============================= Footer ============================== --> */}
            <Footer />
            {/* <!-- ============================= Bottom To Top Button ============================ --> */}
            {showButton && (
                <button className="bottom-top-button" onClick={scrollToTop}>&#8593;</button>
            )}
        </>
    )
}

export default Home
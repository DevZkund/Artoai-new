import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import dropdownSvg from '../assets/images/svg/dropdown.svg';

const options = ['No style', 'Photorealistic', 'Anime', 'Cyberpunk'];

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const ImageGeneratorSection = () => {
    const [input, setInput] = useState('');
    const [aspect, setAspect] = useState('16:9');
    const [count, setCount] = useState(2);
    const [style, setStyle] = useState('No style');
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [generatedImages, setGeneratedImages] = useState([]);

    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleOptionClick = (option) => {
        setStyle(option);
        setIsActive(false);
    };

    const handleGenerate = async () => {
        if (!input.trim()) {
            alert('Please enter a prompt.');
            return;
        }

        setLoading(true);
        try {
            const requestBody = {
                prompt: input,
                aspect,
                count,
                userEmail: 'test@example.com',    
            };

            const response = await axios.post(`${BASE_URL}/api/ai/generate`, requestBody);

            const result = response.data;
            console.log('Result:', result);

            if (result.images) {
                const urls = result.images.map((img) => img.url);
                setGeneratedImages(urls);
            }
        } catch (error) {
            console.error('Generation error:', error);
            alert('Something went wrong while generating the image.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
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


    return (
        <section className="section-one overflow-hidden" id="explore">
            <div className="container">
                <h1 className="imgGenerator ai-img-get-text fade_down">
                    AI <span>Image Generator</span>
                </h1>
                <p className="bring fade_down">
                    Bring your ideas to life with Generate image, the text to image generator in Geralt AI. You can generate
                    images quickly and easily, now with higher quality, more detail and improved lighting and colour.
                </p>

                <div className="inputGenerate" id="inputGenerate">
                    <input
                        className="img-gner"
                        type="text"
                        placeholder="Describe what you want to see"
                        name="Generate"
                        autoComplete="off"
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <div className="butn-drop-down-main">
                        <div className={`custom-dropdown ${isActive ? 'active' : ''}`} ref={dropdownRef}>
                            <input
                                type="text"
                                id="style"
                                name="style"
                                autoComplete="off"
                                readOnly
                                value={style}
                                onClick={() => setIsActive(!isActive)}
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

                        <button onClick={handleGenerate} className="generateImage" disabled={loading}>
                            {loading ? 'Generating...' : 'Generate'}
                        </button>
                    </div>
                </div>

                <h2 className="noInspi">
                    No Inspiration? Try this: <Link to="#">Baby hedgehog wearing a flower crown in a garden</Link>
                </h2>
            </div>
            <div className="expand-img-main image-slider">
                <Slider {...imageSlider}>
                    {generatedImages.map((url, index) => (
                        <div key={index} className="image-wrapper">
                            <img className="expand-img" src={url} alt={`Generated ${index}`} />
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="download-btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-download"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </a>

                            <style>{`
                .image-wrapper {
                    position: relative;
                    display: inline-block;
                }

                .download-btn {
                    position: absolute;
                    bottom: 10px;
                    right: 30px;
                    background: rgba(0, 0, 0, 0.4);
                    padding: 8px;
                    border-radius: 50%;
                    z-index: 2;
                    cursor: pointer;
                    transition: box-shadow 0.3s ease, transform 0.2s ease;
                    backdrop-filter: blur(5px);
                }

                .download-btn svg {
                    stroke: #fff;
                    filter: drop-shadow(0 0 3px #00f6ff) drop-shadow(0 0 6px #00e0ff);
                    transition: filter 0.3s ease;
                }

                .download-btn:hover {
                    transform: scale(1.1);
                }

                .download-btn:hover svg {
                    filter: drop-shadow(0 0 6px #00f6ff) drop-shadow(0 0 12px #00e0ff);
                }
            `}</style>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
};

export default ImageGeneratorSection;

// ---------- Slider Component ----------


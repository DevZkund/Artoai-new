import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Logo from '../assets/images/svg/logo.svg';
import formSliderImg1 from '../assets/images/form-imgs/slider-img1.jpg';
import formSliderImg2 from '../assets/images/form-imgs/slider-img2.jpg';
import formSliderImg3 from '../assets/images/form-imgs/slider-img3.jpg';
import formSliderImg4 from '../assets/images/form-imgs/slider-img4.jpg';
import formSliderImg5 from '../assets/images/form-imgs/slider-img5.jpg';
import formSliderImg6 from '../assets/images/form-imgs/slider-img6.jpg';
import formSliderImg7 from '../assets/images/form-imgs/slider-img7.jpg';
import { useForm } from "react-hook-form";
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [activeForm, setActiveForm] = useState('signin');
    const navigate = useNavigate();

    const {
        register: registerSignUp,
        watch: watchSignUp,
        handleSubmit: handleSubmitSignUp,
        formState: { errors: errorsSignUp },
    } = useForm();

    const {
        register: registerSignIn,
        handleSubmit: handleSubmitSignIn,
        formState: { errors: errorsSignIn },
    } = useForm();

    const password = watchSignUp('password');

    const onSignUp = (data) => {
        console.log('Signup Data:', data);
        api.post('api/auth/signup', data)
            .then(response => {
                console.log('Signup successful:', response.data);
                const userData = {
                    isLoggedIn: true,
                    userId: response.user.id,         // adjust based on your API response
                    name: response.user.name,
                    email: response.user.email,
                    referralCode: response.user.referralCode,
                    referredBy: response.user.referredBy
                };
                console.log(userData, 'referredBy')
                localStorage.setItem("userDetail", JSON.stringify(userData));
                navigate('/'); // Redirect to login page after successful signup
                // Handle successful signup (e.g., redirect to login or show success message)
            })
            .catch(error => {
                console.error('Signup error:', error);
                // Handle error (e.g., show error message)
            });
    };

    const onSignIn = (data) => {
        console.log('Signin Data:', data);
        api.post('/api/auth/login', data)
            .then(response => {
                console.log('Signin successful:', response);
                const userData = {
                    isLoggedIn: true,
                    userId: response.user.id,         // adjust based on your API response
                    name: response.user.name,
                    email: response.user.email,
                    referralCode: response.user.referralCode,
                    referredBy: response.user.referredBy
                };
                console.log(userData, 'referredBy')
                localStorage.setItem("userDetail", JSON.stringify(userData));

                navigate('/'); // Redirect to dashboard after successful signin
                // Handle successful signin (e.g., redirect to dashboard or show success message)
            })
            .catch(error => {
                console.error('Signin error:', error);
                // Handle error (e.g., show error message)
            });
    };

    const formSlider = {
        dots: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    };

    return (
        <div className="form-body">
            <div className="row">
                <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-6 slider-container">
                    <div className="background-img-slider-SecOne">
                        <div className="slider-section">
                            <Slider {...formSlider} className="form-slider">
                                {[formSliderImg1, formSliderImg2, formSliderImg3, formSliderImg4, formSliderImg5, formSliderImg6, formSliderImg7].map((img, idx) => (
                                    <img key={idx} className="service-main-bg" src={img} alt={`slider-img${idx + 1}`} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
                    <div className="form-col">
                        <Link to="/" className="logo">
                            <img src={Logo} alt="logo" />
                            <p>Geralt AI</p>
                        </Link>

                        <div className="form-container">
                            <div className="form-toggle">
                                <button className={`toggle-btn ${activeForm === 'signin' ? 'active' : ''}`} onClick={() => setActiveForm('signin')}>Sign In</button>
                                <button className={`toggle-btn ${activeForm === 'signup' ? 'active' : ''}`} onClick={() => setActiveForm('signup')}>Sign Up</button>
                            </div>

                            <div className="form-content">
                                {/* Sign In Form */}
                                <form onSubmit={handleSubmitSignIn(onSignIn)} className={`form ${activeForm === 'signin' ? 'active' : ''}`}>
                                    <h2>Welcome Back</h2>
                                    <div className="form-group">
                                        <input
                                            {...registerSignIn("email", { required: "Email is required" })}
                                            type="email"
                                            placeholder="Email"
                                            autoComplete="off"
                                        />
                                        {errorsSignIn.email && <p>{errorsSignIn.email.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            {...registerSignIn("password", { required: "Password is required" })}
                                            type="password"
                                            placeholder="Password"
                                            autoComplete="off"
                                        />
                                        {errorsSignIn.password && <p>{errorsSignIn.password.message}</p>}
                                    </div>
                                    <button type="submit" className="submit-btn">Sign In</button>
                                    <p className="form-footer">Don't have an account?{" "}
                                        <Link to="#" onClick={(e) => { e.preventDefault(); setActiveForm('signup'); }}>Sign Up</Link>
                                    </p>
                                </form>

                                {/* Sign Up Form */}
                                <form onSubmit={handleSubmitSignUp(onSignUp)} className={`form ${activeForm === 'signup' ? 'active' : ''}`}>
                                    <h2>Create Account</h2>
                                    <div className="form-group">
                                        <input {...registerSignUp("name", { required: "Name is required" })} type="text" placeholder="Name" autoComplete="off" />
                                        {errorsSignUp.name && <p>{errorsSignUp.name.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <input {...registerSignUp("email", { required: "Email is required" })} type="email" placeholder="Email" autoComplete="off" />
                                        {errorsSignUp.email && <p>{errorsSignUp.email.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            maxLength={10}
                                            placeholder="Phone Number"
                                            autoComplete="off"
                                            {...registerSignUp("phone", {
                                                required: "Phone number is required",
                                                pattern: {
                                                    value: /^[6-9]\d{9}$/,
                                                    message: "Enter a valid 10-digit Indian phone number",
                                                },
                                            })}
                                            onInput={(e) => {
                                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                                            }}
                                        />
                                        {errorsSignUp.phone && <p>{errorsSignUp.phone.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            {...registerSignUp("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 characters"
                                                }
                                            })}
                                            type="password"
                                            placeholder="Password"
                                            autoComplete="off"
                                        />
                                        {errorsSignUp.password && <p>{errorsSignUp.password.message}</p>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            {...registerSignUp("confirmPassword", {
                                                required: "Please confirm your password",
                                                validate: value => value === password || "Passwords do not match"
                                            })}
                                            type="password"
                                            placeholder="Confirm Password"
                                            autoComplete="off"
                                        />
                                        {errorsSignUp.confirmPassword && <p>{errorsSignUp.confirmPassword.message}</p>}
                                    </div>
                                    <button type="submit" className="submit-btn">Sign Up</button>
                                    <p className="form-footer">Already have an account?{" "}
                                        <Link to="#" onClick={(e) => { e.preventDefault(); setActiveForm('signin'); }}>Sign In</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;

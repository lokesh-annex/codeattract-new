import React from 'react';
import Logo from './images/logo-light.png';
import House from './images/house.svg';

function Login() {
    return (
        <>
            <div className="home-center">
                <div className="home-desc-center">
                    <div className="container">
                        <div className="home-btn">
                            <a href="/" className="text-white router-link-active">
                                <img src={House} height="22" alt="House" />
                            </a>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-5 pt-5">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="px-2 py-3">
                                            <div className="text-center">

                                                <img src={Logo} height="22" alt="logo" />


                                                <h5 className="text-primary mb-2 mt-4">Welcome Back !</h5>
                                                <p className="text-muted">Sign in to continue.</p>
                                            </div>

                                            <form className="form-horizontal mt-4 pt-2" action="/">
                                                <div className="mb-3">
                                                    <label for="username">Username</label>
                                                    <input type="text" className="form-control" id="username" value="test@gmail.com" placeholder="Enter username" />
                                                </div>

                                                <div className="mb-3">
                                                    <label for="userpassword">Password</label>
                                                    <input type="password" className="form-control" id="userpassword" value="t123456" placeholder="Enter password" />
                                                </div>

                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customControlInline" />
                                                        <label className="form-label" for="customControlInline">Remember me</label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <a className="btn btn-primary w-100 waves-effect waves-light" href="/havells">Log In</a>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <a href="#" className="text-muted"><i className="mdi mdi-lock me-1"></i> Forgot your password?</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 text-center text-white">
                                    <p>
                                        ©
                                        <script>
                                            document.write(new Date().getFullYear());
                                        </script>2023
                                        Chess. Crafted with <i className="mdi mdi-heart text-danger"></i> by Poize Games
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Login;
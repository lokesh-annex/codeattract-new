import React, { useState } from 'react';
import Logo from './images/logo-light.png';
import House from './images/house.svg';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useSaveUser from './api/post';
import { setToken } from '../helpers';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
const saveUserMutation = useSaveUser({
  onSuccess: (response) => {
    if(response){
      // router.push("/");
      console.log("onSuccess", response)
      setToken(response.data.token)

      navigate("/dashBoard");
    }
  },
  onError: (response) =>{
    console.log("onError", response)
    if(response?.message){
      alert(response?.message)
    }

  },
  resource:'login',
  method:'post'
});

const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (e) => {
    saveUserMutation.mutate(e)
}
  // console.log(process.env.REACT_APP_API_URL)
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

                                            <form className="form-horizontal mt-4 pt-2" onSubmit={handleSubmit(onSubmit)}>
                                                <div className="mb-3">
                                                    <label for="username">Username</label>
                                                    <input type="text" className="form-control" id="username"  placeholder="Enter username"  {...register("username", {required: true, minLength: 3})}/>
                                                    {errors.username && <p>Please check the username</p>}
                                                </div>

                                                <div className="mb-3">
                                                    <label for="userpassword">Password</label>
                                                    <input type="password" className="form-control" id="userpassword"  placeholder="Enter password" {...register("password", {required: true, minLength: 3})}/>
                                                    {errors.password && <p>Please check the password</p>}
                                                </div>

                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customControlInline" />
                                                        <label className="form-label" for="customControlInline">Remember me</label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button className="btn btn-primary w-100 waves-effect waves-light" onClick={() => handleSubmit(onSubmit)}>Log In</button>
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
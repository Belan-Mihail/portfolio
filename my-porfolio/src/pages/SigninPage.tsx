import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import {Store} from "../Store";
import { useSigninMutation } from "../hooks/userHooks";
import { toast } from "react-toastify";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";

const SigninPage = () => {
    //   redirect user in home page after login
  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'

  //   get email and password from input box
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //   get user info from context
  const { state, dispatch } = useContext(Store)
  const { userInfo } = state

//   we use useSigninMutation Hook and distract returned data in object mutateAsync. then we rename it to signin
  const { mutateAsync: signin, isPending } = useSigninMutation()

  //   handler when user click on login button
  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
        // signin from useSigninMutation() => mutateAsync: signin. email and password from useState from input fields
      const data = await signin({
        email,
        password,
      })
    //   next step: we use dispatch with data (data it is that return useSigninMutation() with email and password)
      dispatch({ type: 'USER_SIGNIN', payload: data })
    //   then we add data to localyStorage
      localStorage.setItem('userInfo', JSON.stringify(data))
    //   use redirect to redirect user to the homepage
      navigate(redirect)
    } catch (err) {
      toast.error(getError(err as ApiError))
    }
  }

  useEffect(() => {
    // we check user login or not and if user login we use redirect from this page. userInfo we take from useContext
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  return (
    <>
    <Navbar />
    <div className="general px-4 h-[100vh] w-[100%] pt-[110px]">
      <div className="wrapper" style={{height: '97%'}}>
        <div className="form-wrapper mx-4">
        <h3 className="text-2xl text-center py-4 font-semibold "><span className=" text-green-600 mr-2">#</span>Sign In</h3>
          <form className="max-w-sm mx-auto flex flex-col" onSubmit={submitHandler}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link className=" text-green-500 hover:underline " to={"/signup"}>Still no account. Create it...</Link>
            <button
              type="submit"
              className="hero-button spin-icons my-4 px-2 py-2 rounded contact-button front"
              disabled={isPending}
            >
              <i className="fa-solid fa-gear"></i>
              <span className="mx-2">Sign In</span>
              <i className="fa-solid fa-gear"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SigninPage;

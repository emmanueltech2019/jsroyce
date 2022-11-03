import React from "react";
import Button from "../button";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
function ContactInfo() {
  return (
    <div className="w-screen h-max py-10 bg-white md:flex md:justify-around md:px-24 relative">
      <div>
        <form
          className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 md:absolute md:-top-20 md:left-20 text-black "
        >
          <span className="pb-2 text-black">I would love to talk</span>
          <h1 className="text-3xl pb-5  font-bold text-transparent bg-clip-text bg-gradient-to-r from-step1 via-step2 to-step4">Get in touch</h1>
          <div className="flex justify-between">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                First Name
              </label>
              <input
                className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Last Name
              </label>
              <input
                className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Email
            </label>
            <input
              className="bg-white shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              What best describe the service you want.
            </label>
            <input
              className="bg-white shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
             Any additional Information you would like u to know?
            </label>
            <textarea rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <Button text={"Submit"} bg={"#f7cc0a"}/>
            
          </div>
        </form>
      </div>
      <div className="flex flex-col space-y-10 text-left pb-40 p-5">
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-step1 via-step2 to-step4">Phone</h3>
          <p className="text-black">+1 512.945.5195</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-step1 via-step2 to-step4">Email</h3>
          <p className="text-black">jdagency@gmail.com</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-step1 via-step2 to-step4">Locations</h3>
          <p className="text-black">67 JD street off jd avenue
jd state.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-step1 via-step2 to-step4">Socials</h3>
          <p className="flex justify-between text-black pt-5"><YouTubeIcon style={{color:"#FF0000"}} fontSize="large"/> <FacebookIcon style={{color:"#3b5998"}}  fontSize="large"/> <TwitterIcon fontSize="large" style={{color:"#00acee"}}  /> <LinkedInIcon fontSize="large" style={{color:"#0072b1"}} /> </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

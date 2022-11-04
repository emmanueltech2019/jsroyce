import React from "react";
import Button from "../button";
// import Img2 from "../../public/profile.jpg";
import Image from "next/image";

function Clients() {
  return (
    <div className="w-screen">
      <div className="bg-white p-20 text-black text-center w-screen">
        <p>Some of the recent projects I have done</p>
        <h1 className="text-black font-bold font-30 capitalize text-4xl py-5 pb-10">
          Our <span className="text-mainGold">Clients</span>
        </h1>

        <div className="flex text-mainSilver space-x-20 font-bold text-center text-3xl justify-center">
          <h1>MediHealth</h1>
          <h1>Zune</h1>
          <h1>WeHealth</h1>
        </div>
      </div>
      <div className="bg-mainSilver">
        <div className="md:flex  text-black items-center py-8 md:px-24 px-5 space-y-5 bg-mainSilver mt-1">
          <div className="h-full w-full relative">
            <Image src={Img} alt={"image"} className="rounded" />
          </div>
          <div className="pl-10 flex flex-col space-y-5">
            <span className="text-gray-500">I am here to help you</span>
            <h1 className="font-bold text-5xl">
              Acquire more
              <br />
              patients
            </h1>
            <p className="text-gray-500 pb-5">
              JD is one of the top rated marketing agency, focused on the growth
              of medical practices and startups, with the use of marketing
              techniques, SEO to pull web traffick and onboard new patients to
              your practice.
            </p>
            <Button text={"lets have a chat"} bg2={"#f7cc0a"} />
          </div>
        </div>
      </div>

      <div className="border grid grid-cols-2 gap-4 justify-around bg-mainSilver px-5">
        <div className="max-w-md rounded overflow-hidden shadow-lg flex bg-white h-fit">
          <div className="w-40 h-40 my-8">
            {/* <Image
              src={Img2}
              className="rounded-full "
              alt="Sunset in the mountains"
            /> */}
          </div>
          <div className="px-6 py-4 pt-6 h-fit">
            <p className="text-gray-700 text-base">
              JD is simply amazing, helped upscaled my startup and revenue loved
              working with them wil definitely recommend.
            </p>
            <div className="font-bold text-xl py-2">The Coldest Sunset</div>
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg flex bg-white h-fit">
          <div className="w-40 h-40 my-8">
            {/* <Image
              src={Img2}
              className="rounded-full "
              alt="Sunset in the mountains"
            /> */}
          </div>
          <div className="px-6 py-4 pt-6 h-fit">
            <p className="text-gray-700 text-base">
              JD is simply amazing, helped upscaled my startup and revenue loved
              working with them wil definitely recommend.
            </p>
            <div className="font-bold text-xl py-2">The Coldest Sunset</div>
          </div>
        </div>
        
      </div>
      <div className="py-5 border grid grid-cols-2 gap-4 justify-around bg-mainSilver px-5">
        <div className="max-w-md rounded overflow-hidden shadow-lg flex bg-white h-fit">
          <div className="w-40 h-40 my-8">
            {/* <Image
              src={Img2}
              className="rounded-full "
              alt="Sunset in the mountains"
            /> */}
          </div>
          <div className="px-6 py-4 pt-6 h-fit">
            <p className="text-gray-700 text-base">
              JD is simply amazing, helped upscaled my startup and revenue loved
              working with them wil definitely recommend.
            </p>
            <div className="font-bold text-xl py-2">The Coldest Sunset</div>
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg flex bg-white h-fit">
          <div className="w-40 h-40 my-8">
            {/* <Image
              src={Img2}
              className="rounded-full "
              alt="Sunset in the mountains"
            /> */}
          </div>
          <div className="px-6 py-4 pt-6 h-fit">
            <p className="text-gray-700 text-base">
              JD is simply amazing, helped upscaled my startup and revenue loved
              working with them wil definitely recommend.
            </p>
            <div className="font-bold text-xl py-2">The Coldest Sunset</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Clients;

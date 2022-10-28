import React from 'react';
import { BsFillTelephoneFill, BsGeoAltFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
// import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="h-screen">
      <div className="flex-col md:items-center md:justify-center md:gap-x-20 gap-y-10 md:flex md:flex-row py-36">
        <div className="flex items-center justify-center pb-10 md:py-0">
          <BsFillTelephoneFill className="mr-3 text-3xl" />
          <div>
            <h2 className="text-2xl tracking-widest text-gray-400 md:text-sm ">
              CALL
            </h2>
            <p className="text-gray-700">91 7983266442</p>
          </div>
        </div>
        <div className="flex items-center justify-center pb-10 md:py-0">
          <BsGeoAltFill className="mr-3 text-3xl" />
          <div>
            <h2 className="text-2xl tracking-widest text-gray-400 md:text-sm">
              ADDRESS
            </h2>
            <p className="text-gray-700">ABC City, PQR State INDIA </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <MdEmail className="mr-3 text-3xl" />
          <div>
            <h2 className="text-2xl tracking-widest text-gray-400 md:text-sm">
              EMAIL
            </h2>
            <p className="text-gray-700">abhishekvihan2@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-5 md:space-x-10 md:pt-48">
        <a href="https://www.facebook.com/Abhishek.ch.09/">
          <img
            className="h-10 md:h-14"
            src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-18.png"
            alt="fb-icon"
          />
        </a>

        <a href="https://www.linkedin.com/in/abhishek-vihan-86b210195/">
          <img
            className="h-10 md:h-14"
            src="https://p.kindpng.com/picc/s/32-326131_social-linkedin-pause-button-hd-png-download.png"
            alt="fb-icon"
          />
        </a>
        <a href="https://www.instagram.com/_this_is_a_v/">
          <img
            className="h-10 md:h-14"
            src="https://toppng.com/uploads/preview/new-black-instagram-logo-2020-11609370162ayxbdxlffo.png"
            alt="fb-icon"
          />
        </a>
        <a href="https://www.youtube.com/codeyogi">
          <img
            className="h-10 md:h-14"
            src="https://www.pngkey.com/png/detail/6-61720_transparent-youtube-circle-youtube-icon-black-and-white.png"
            alt="fb-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;

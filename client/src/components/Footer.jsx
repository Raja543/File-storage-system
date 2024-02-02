import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="text-gray-50 w-full p-8 bg-cover bg-center bg-no-repeat bg-[#121916]"  style={{ backgroundImage: `url('/Specialimages/signin-gradient.png')` }}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-4">
        <div className="md:flex  md:justify-between">
          <div className="mb-6 md:mb-0 md:max-w-xl">
            <HashLink href="#" className="flex items-center">
              <img
                src="/images/logo.jpg"
                className="h-8 mr-3 w-8" 
                alt="securesharex-logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SecureShareX
              </span>
            </HashLink>
            <p className="py-2 text-lg text-gray-400 font-medium">
              Experience a transformative leap in file transfer with
              SecureShareX. Leveraging blockchain technology, we ensure secure,
              tamper-proof transfers, granting you unparalleled control and
              privacy over your shared content.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="my-3">
                  <HashLink to="#" className="hover:underline">
                    Docs
                  </HashLink>
                </li>
                <li className="my-3">
                  <HashLink to="#" className="hover:underline">
                    Blog
                  </HashLink>
                </li>
                <li className="my-3">
                  <HashLink to="#" className="hover:underline">
                    Help Center
                  </HashLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="my-3">
                  <HashLink href="#" className="hover:underline">
                    Github
                  </HashLink>
                </li>
                <li className="my-3">
                  <HashLink to="#" className="hover:underline">
                    Twitter
                  </HashLink>
                </li>
                <li className="my-3">
                  <HashLink to="#" className="hover:underline">
                    Facebook
                  </HashLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="my-3">
                  <HashLink href="#" className="hover:underline">
                    License
                  </HashLink>
                </li>
                <li className="my-3">
                  <HashLink href="#" className="hover:underline">
                    Privacy Policy
                  </HashLink>
                </li>
                <li className="my-3">
                  <HashLink href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-[#00ffa8] border-2 sm:mx-auto lg:my-10" />

        <div className="flex items-center justify-center">
          <p className="text-lg text-gray-500 text-center dark:text-gray-400">
            &copy; {new Date().getFullYear()} SecureShareX . All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

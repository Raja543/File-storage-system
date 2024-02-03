import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Benefits = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center px-32 py-40 grid grid-cols-2 grid-rows-2 gap-24"
        style={{ backgroundImage: `url('/images/landing-center.png')` }}
      >
        <div>
          <img
            className="w-[450px] h-full "
            src="/images/security.gif"
            alt=""
            data-aos="zoom-in"
            type="image/gif"
          />
        </div>
        <div
          className="w-full flex flex-col justify-center text-[#fff] "
          data-aos="fade-up"
        >
          <h1 className="text-6xl font-bold">
            <span className="text-[#00ffa8]">Privacy</span> First.
          </h1>
          <h1 className="text-6xl font-bold">
            Completely <span className="text-[#00ffa8]">Secured.</span>
          </h1>
          <p className="py-3 text-xl text-[#dcdcdc]">
            SecureShareX offers a range of features that prioritize user privacy
            and security. From file upload to deletion, our platform ensures
            tamper-proof storage and controlled access, empowering users with
            complete control over their shared content.
          </p>
        </div>
        <div
          className="w-full flex flex-col justify-center text-[#fff] "
          data-aos="fade-up"
        >
          <h1 className="text-6xl font-bold ">
            <span className="text-[#00ffa8]">Decentralized.</span>
          </h1>
          <h1 className="text-6xl font-bold">
            Super <span className="text-[#00ffa8]">Fast</span> &
            <span className="text-[#00ffa8]"> Reliable</span>
          </h1>
          <p className="py-3 text-xl text-[#dcdcdc]">
            SecureShareX offers a range of features that prioritize user privacy
            and security. From file upload to deletion, our platform ensures
            tamper-proof storage and controlled access, empowering users with
            complete control over their shared content.
          </p>
        </div>
        <div>
          <img
            className="w-[450px] h-full ml-auto"
            src="/images/fragments.gif"
            alt=""
            data-aos="zoom-in"
            type="image/gif"
          />
        </div>
      </div>
    </>
  );
};

export default Benefits;

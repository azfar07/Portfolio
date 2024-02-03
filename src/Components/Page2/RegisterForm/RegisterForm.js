import React from "react";
import MainFooter from "../../Page1/Footer/MainFooter";
import RightSide from "./RightSide";
import LeftSIde from "./LeftSIde";

function RegisterForm() {
  return (
    <section className="h-screen">
      <div className="register-header-buttons absolute z-50 right-12 top-14 font-medium text-sm">
        <span className="mr-2">Already registered?</span>
        <a
          href="https://www.companisto.com/en/login/login"
          className="login uppercase border border-black py-2 px-4 rounded-full"
        >
          Log In
        </a>
      </div>
      <div className="h-full flex flex-wrap items-center">
        {/* Left column container with background */}
        <LeftSIde />
        {/* <!-- Right column container --> */}
        <RightSide />
      </div>
      {/* <div className="font-open-sans overflow-hidden z-50 font-semibold absolute top-0 left-1/2 -translate-x-1/2 w-3/4">
        <div className="container border-t border-b border-solid border-gray-500">
          <div className="col-xs-12 text-center text-gray-700 py-8">
            <h3 className="text-3xl mb-6">Please note</h3>
            <p className="text-xl">
              The acquisition of the offered securities and investments is
              associated with considerable risks and can lead to the complete
              loss of the invested assets. The expected yield is not guaranteed
              and may be lower. Whether it is a security or an asset investment
              can be seen in the description of the investment opportunity.
            </p>
          </div>
        </div>
      </div> */}
      <div className="border-t border-b border-solid border-gray-500">
        <div className="font-open-sans font-semibold mx-auto text-center text-gray-700 py-8">
          <div className="mx-auto  w-full">
            <div className="col-xs-12 text-center text-gray-700 py-8">
              <h3 className="text-3xl mb-6">Please note</h3>
              <p className="text-xl">
                The acquisition of the offered securities and investments is
                associated with considerable risks and can lead to the complete
                loss of the invested assets. The expected yield is not
                guaranteed and may be lower. Whether it is a security or an
                asset investment can be seen in the description of the
                investment opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MainFooter />
      </div>
    </section>
  );
}
export default RegisterForm;

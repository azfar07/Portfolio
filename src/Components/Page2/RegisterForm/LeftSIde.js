import React from 'react'
import { TEInput, TESelect, TERipple } from "tw-elements-react";

function LeftSIde() {
  return (
    <div className="bg-gray-900 h-full w-full md:w-8/12 lg:w-6/12 xl:w-5/12">
    <div className="mb-12 p-4 lg:p-8 h-full shrink-1 grow-0 basis-auto md:mb-0 md:w-full md:shrink-0 lg:w-full xl:w-full custom-gray-background">
      <div className="p-8 h-full">
        <img
          src="https://cdn.companisto.com/graphics/elements/companisto_website_logo_white.png"
          className="w-48 h-auto mb-14" // Increased width to 48 and margin-bottom to 6
          alt="Sample image"
        />
        <h1 className="text-white text-4xl mb-14">
          {" "}
          {/* Increased font size to 4xl and margin-bottom to 6 */}
          Invest together in smart companies
        </h1>

        <p className="text-white text-3xl mb-14 ">
          {" "}
          {/* Increased font size to lg and margin-bottom to 4 */}
          <strong>
            <span>€</span> 224,023,431{" "}
          </strong>
          have been invested{" "}
          <span style={{ whiteSpace: "nowrap" }}>
            across <strong>313</strong> companies{" "}
          </span>
        </p>

        <ul className="text-white list-disc text-2xl pl-6 mt-4">
          {" "}
          {/* Increased padding-left to 6 */}
          <li className="mt-6">
            High diversification due to 250 Euro minimum investment amount
          </li>
          <li className="mt-6">
            Our investment team curates the best deals for you
          </li>
          <li className="mt-6">
            Detailed investment analysis with return forecast for each
            company
          </li>
          <li className="mt-6">
            Connect with other investors, entrepreneurs and business
            angels
          </li>
          <li className="mt-6">
            Subscribe your equity investment online
          </li>
        </ul>
        <div className="flex items-center">
          <div className="md:col-span-7 lg:col-span-6 text-center mt-10">
            <img
              src="https://cdn.companisto.com/graphics/layout/companisto-trust.png"
              className=" w-96" // Adjust the width as needed, e.g., w-1/3 for 1/3 width
              alt=""
            />
          </div>
          <div className="ml-48">
            <a
              href="https://www.trustpilot.com/review/www.companisto.com?utm_medium=Trustbox&amp;utm_source=EmailSignature2"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-0 text-xs text-white font-normal pt-14 block"
            >
              We are rated <b>4,6</b> out of <b>5</b>
              {/* <p style="font-size: 13px; color: #fff; margin-bottom: 5px; font-style: normal; padding-top: 14px;"> */}
              {/* </p> */}
              <div>
                <svg
                  className="w-40 h-8"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 96"
                  style={{ enableBackground: "new 0 0 512 96;" }}
                  // xml:space="preserve"
                >
                  <g id="Trustpilot_ratings_4halfstar-RGB">
                    <g>
                      <rect
                        id="Rectangle-path"
                        fill="#00B67A"
                        width="96"
                        height="96"
                      ></rect>
                      <rect
                        x="104"
                        fill="#00B67A"
                        width="96"
                        height="96"
                      ></rect>
                      <rect
                        x="208"
                        fill="#00B67A"
                        width="96"
                        height="96"
                      ></rect>
                      <rect
                        x="312"
                        fill="#00B67A"
                        width="96"
                        height="96"
                      ></rect>
                      <g
                        id="Half"
                        transform="translate(416.000000, 0.000000)"
                      >
                        <rect
                          x="48"
                          fill="#DCDCE6"
                          width="48"
                          height="96"
                        ></rect>
                        <rect
                          fill="#00B67A"
                          width="48"
                          height="96"
                        ></rect>
                      </g>
                      <path
                        id="Shape"
                        fill="#FFFFFF"
                        d="M48,64.7L62.6,61l6.1,18.8L48,64.7z M81.6,40.4H55.9L48,16.2l-7.9,24.2H14.4l20.8,15l-7.9,24.2
      l20.8-15l12.8-9.2L81.6,40.4L81.6,40.4L81.6,40.4L81.6,40.4z"
                      ></path>
                      <path
                        fill="#FFFFFF"
                        d="M152,64.7l14.6-3.7l6.1,18.8L152,64.7z M185.6,40.4h-25.7L152,16.2l-7.9,24.2h-25.7l20.8,15l-7.9,24.2
      l20.8-15l12.8-9.2L185.6,40.4L185.6,40.4L185.6,40.4L185.6,40.4z"
                      ></path>
                      <path
                        fill="#FFFFFF"
                        d="M256,64.7l14.6-3.7l6.1,18.8L256,64.7z M289.6,40.4h-25.7L256,16.2l-7.9,24.2h-25.7l20.8,15l-7.9,24.2
      l20.8-15l12.8-9.2L289.6,40.4L289.6,40.4L289.6,40.4L289.6,40.4z"
                      ></path>
                      <path
                        fill="#FFFFFF"
                        d="M360,64.7l14.6-3.7l6.1,18.8L360,64.7z M393.6,40.4h-25.7L360,16.2l-7.9,24.2h-25.7l20.8,15l-7.9,24.2
      l20.8-15l12.8-9.2L393.6,40.4L393.6,40.4L393.6,40.4L393.6,40.4z"
                      ></path>
                      <path
                        fill="#FFFFFF"
                        d="M464,64.7l14.6-3.7l6.1,18.8L464,64.7z M497.6,40.4h-25.7L464,16.2l-7.9,24.2h-25.7l20.8,15l-7.9,24.2
      l20.8-15l12.8-9.2L497.6,40.4L497.6,40.4L497.6,40.4L497.6,40.4z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </a>
            <a
              href="https://www.trustpilot.com/review/www.companisto.com?utm_medium=Trustbox&amp;utm_source=EmailSignature2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1132.8 278.2"
                style={{ height: "20px", fill: "#ffffff" }}
              >
                <path
                  fill="#ffffff"
                  d="m297.7 98.6h114.7v21.4h-45.1v120.3h-24.8v-120.3h-44.9v-21.4zm109.8 39.1h21.2v19.8h0.4c0.7-2.8 2-5.5 3.9-8.1s4.2-5.1 6.9-7.2c2.7-2.2 5.7-3.9 9-5.3 3.3-1.3 6.7-2 10.1-2 2.6 0 4.5 0.1 5.5 0.2s2 0.3 3.1 0.4v21.8c-1.6-0.3-3.2-0.5-4.9-0.7s-3.3-0.3-4.9-0.3c-3.8 0-7.4 0.8-10.8 2.3s-6.3 3.8-8.8 6.7c-2.5 3-4.5 6.6-6 11s-2.2 9.4-2.2 15.1v48.8h-22.6v-102.5zm164 102.6h-22.2v-14.3h-0.4c-2.8 5.2-6.9 9.3-12.4 12.4s-11.1 4.7-16.8 4.7c-13.5 0-23.3-3.3-29.3-10s-9-16.8-9-30.3v-65.1h22.6v62.9c0 9 1.7 15.4 5.2 19.1 3.4 3.7 8.3 5.6 14.5 5.6 4.8 0 8.7-0.7 11.9-2.2s5.8-3.4 7.7-5.9c2-2.4 3.4-5.4 4.3-8.8s1.3-7.1 1.3-11.1v-59.5h22.6v102.5zm38.5-32.9c0.7 6.6 3.2 11.2 7.5 13.9 4.4 2.6 9.6 4 15.7 4 2.1 0 4.5-0.2 7.2-0.5s5.3-1 7.6-1.9c2.4-0.9 4.3-2.3 5.9-4.1 1.5-1.8 2.2-4.1 2.1-7s-1.2-5.3-3.2-7.1c-2-1.9-4.5-3.3-7.6-4.5-3.1-1.1-6.6-2.1-10.6-2.9s-8-1.7-12.1-2.6c-4.2-0.9-8.3-2.1-12.2-3.4s-7.4-3.1-10.5-5.4c-3.1-2.2-5.6-5.1-7.4-8.6-1.9-3.5-2.8-7.8-2.8-13 0-5.6 1.4-10.2 4.1-14s6.2-6.8 10.3-9.1c4.2-2.3 8.8-3.9 13.9-4.9 5.1-0.9 10-1.4 14.6-1.4 5.3 0 10.4 0.6 15.2 1.7s9.2 2.9 13.1 5.5c3.9 2.5 7.1 5.8 9.7 9.8s4.2 8.9 4.9 14.6h-23.6c-1.1-5.4-3.5-9.1-7.4-10.9-3.9-1.9-8.4-2.8-13.4-2.8-1.6 0-3.5 0.1-5.7 0.4s-4.2 0.8-6.2 1.5c-1.9 0.7-3.5 1.8-4.9 3.2-1.3 1.4-2 3.2-2 5.5 0 2.8 1 5 2.9 6.7s4.4 3.1 7.5 4.3c3.1 1.1 6.6 2.1 10.6 2.9s8.1 1.7 12.3 2.6c4.1 0.9 8.1 2.1 12.1 3.4s7.5 3.1 10.6 5.4 5.6 5.1 7.5 8.5 2.9 7.7 2.9 12.7c0 6.1-1.4 11.2-4.2 15.5-2.8 4.2-6.4 7.7-10.8 10.3s-9.4 4.6-14.8 5.8-10.8 1.8-16.1 1.8c-6.5 0-12.5-0.7-18-2.2s-10.3-3.7-14.3-6.6c-4-3-7.2-6.7-9.5-11.1s-3.5-9.7-3.7-15.8h22.8zm74.6-69.7h17.1v-30.8h22.6v30.8h20.4v16.9h-20.4v54.8c0 2.4 0.1 4.4 0.3 6.2 0.2 1.7 0.7 3.2 1.4 4.4s1.8 2.1 3.3 2.7 3.4 0.9 6 0.9c1.6 0 3.2 0 4.8-0.1s3.2-0.3 4.8-0.7v17.5c-2.5 0.3-5 0.5-7.3 0.8-2.4 0.3-4.8 0.4-7.3 0.4-6 0-10.8-0.6-14.4-1.7s-6.5-2.8-8.5-5c-2.1-2.2-3.4-4.9-4.2-8.2-0.7-3.3-1.2-7.1-1.3-11.3v-60.5h-17.1v-17.1zm76.1 0h21.4v13.9h0.4c3.2-6 7.6-10.2 13.3-12.8s11.8-3.9 18.5-3.9c8.1 0 15.1 1.4 21.1 4.3 6 2.8 11 6.7 15 11.7s6.9 10.8 8.9 17.4 3 13.7 3 21.2c0 6.9-0.9 13.6-2.7 20-1.8 6.5-4.5 12.2-8.1 17.2s-8.2 8.9-13.8 11.9-12.1 4.5-19.7 4.5c-3.3 0-6.6-0.3-9.9-0.9s-6.5-1.6-9.5-2.9-5.9-3-8.4-5.1c-2.6-2.1-4.7-4.5-6.5-7.2h-0.4v51.2h-22.6v-140.5zm79 51.4c0-4.6-0.6-9.1-1.8-13.5s-3-8.2-5.4-11.6-5.4-6.1-8.9-8.1c-3.6-2-7.7-3.1-12.3-3.1-9.5 0-16.7 3.3-21.5 9.9s-7.2 15.4-7.2 26.4c0 5.2 0.6 10 1.9 14.4s3.1 8.2 5.7 11.4c2.5 3.2 5.5 5.7 9 7.5 3.5 1.9 7.6 2.8 12.2 2.8 5.2 0 9.5-1.1 13.1-3.2s6.5-4.9 8.8-8.2c2.3-3.4 4-7.2 5-11.5 0.9-4.3 1.4-8.7 1.4-13.2zm39.9-90.5h22.6v21.4h-22.6v-21.4zm0 39.1h22.6v102.6h-22.6v-102.6zm42.8-39.1h22.6v141.7h-22.6v-141.7zm91.9 144.5c-8.2 0-15.5-1.4-21.9-4.1s-11.8-6.5-16.3-11.2c-4.4-4.8-7.8-10.5-10.1-17.1s-3.5-13.9-3.5-21.8c0-7.8 1.2-15 3.5-21.6s5.7-12.3 10.1-17.1 9.9-8.5 16.3-11.2 13.7-4.1 21.9-4.1 15.5 1.4 21.9 4.1 11.8 6.5 16.3 11.2c4.4 4.8 7.8 10.5 10.1 17.1s3.5 13.8 3.5 21.6c0 7.9-1.2 15.2-3.5 21.8s-5.7 12.3-10.1 17.1-9.9 8.5-16.3 11.2-13.7 4.1-21.9 4.1zm0-17.9c5 0 9.4-1.1 13.1-3.2s6.7-4.9 9.1-8.3 4.1-7.3 5.3-11.6c1.1-4.3 1.7-8.7 1.7-13.2 0-4.4-0.6-8.7-1.7-13.1s-2.9-8.2-5.3-11.6-5.4-6.1-9.1-8.2-8.1-3.2-13.1-3.2-9.4 1.1-13.1 3.2-6.7 4.9-9.1 8.2c-2.4 3.4-4.1 7.2-5.3 11.6-1.1 4.4-1.7 8.7-1.7 13.1 0 4.5 0.6 8.9 1.7 13.2s2.9 8.2 5.3 11.6 5.4 6.2 9.1 8.3c3.7 2.2 8.1 3.2 13.1 3.2zm58.4-87.5h17.1v-30.8h22.6v30.8h20.4v16.9h-20.4v54.8c0 2.4 0.1 4.4 0.3 6.2 0.2 1.7 0.7 3.2 1.4 4.4s1.8 2.1 3.3 2.7 3.4 0.9 6 0.9c1.6 0 3.2 0 4.8-0.1s3.2-0.3 4.8-0.7v17.5c-2.5 0.3-5 0.5-7.3 0.8-2.4 0.3-4.8 0.4-7.3 0.4-6 0-10.8-0.6-14.4-1.7s-6.5-2.8-8.5-5c-2.1-2.2-3.4-4.9-4.2-8.2-0.7-3.3-1.2-7.1-1.3-11.3v-60.5h-17.1v-17.1z"
                ></path>
                <polygon
                  fill="#00B67A"
                  points="271.3 98.6 167.7 98.6 135.7 0 103.6 98.6 0 98.5 83.9 159.5 51.8 258 135.7 197.1 219.5 258 187.5 159.5 271.3 98.6 271.3 98.6"
                ></polygon>
                <polygon
                  fill="#005128"
                  points="194.7 181.8 187.5 159.5 135.7 197.1"
                ></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeftSIde
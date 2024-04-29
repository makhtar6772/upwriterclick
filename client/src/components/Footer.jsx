import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white mt-16">
      <div className="max-w-screen-xl mx-auto py-10 px-4 relative">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="mb-6">
              <a href="#" className="inline-block">
                <h1 className="text-2xl font-bold">Upwriter</h1>
              </a>
            </div>
            <div className="mb-6">
              <h2 className="text-sm font-semibold uppercase mb-2">
                Get Started
              </h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#">Start</a>
                </li>
                <li className="mb-2">
                  <a href="#">Documentation</a>
                </li>
                <li className="mb-2">
                  <a href="#">Installation</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="mb-6">
              <h2 className="text-sm font-semibold uppercase mb-2">Company</h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#">Contact</a>
                </li>
                <li className="mb-2">
                  <a href="#">About</a>
                </li>
                <li className="mb-2">
                  <a href="#">Features</a>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-sm font-semibold uppercase mb-2">Legal</h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#">Privacy Notice</a>
                </li>
                <li className="mb-2">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="mb-6">
              <h2 className="text-sm font-semibold uppercase mb-2">
                Quick Links
              </h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#">Support Center</a>
                </li>
                <li className="mb-2">
                  <a href="#">Service Status</a>
                </li>
                <li className="mb-2">
                  <a href="#">Security</a>
                </li>
                <li className="mb-2">
                  <a href="#">Blog</a>
                </li>
                <li className="mb-2">
                  <a href="#">Customers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className="mb-6">
              <div className="mb-6">
                <h2 className="text-sm font-semibold uppercase mb-2">
                  Let's Chat
                </h2>
                <p className="mb-4">Have a support question?</p>
                <a
                  href="#"
                  className="inline-block py-3 px-6 bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-semibold rounded-lg transition duration-300"
                >
                  Get in Touch
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase mb-2">
                  You Call Us
                </h2>
                <p className="text-white">
                  <a href="tel:0124-64XXXX">0124-64XXXX</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-14">
          <svg
            className="w-full h-full absolute top-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 236 54"
          >
            <path
              className="fill-current text-purple-700"
              d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
            ></path>
          </svg>
          <div className="flex justify-end items-center h-full pr-4">
            <a
              href="#"
              className="mx-1 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 30"
              >
                <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="mx-1 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 26"
              >
                <path d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "></path>
              </svg>
            </a>
            <a
              href="#"
              className="mx-1 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 30"
              >
                <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="mx-1 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="fill-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 32"
              >
                <path d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 14.308594 C 8.34375 13.003906 8.875 11.957031 9.710938 11.128906 C 9.472656 10.660156 8.683594 8.8515625 10.210938 6.6054688 C 10.210938 6.6054688 11.945313 6.1367188 13.03125 7.3945312 C 13.660156 7.0820312 14.382813 6.9257812 15.125 7.0078125 C 17.214844 6.921875 19.292969 7.871094 20.269531 9.6757812 C 21.628906 8.828125 22.765625 8.160156 23.679688 8.0546875 C 23.675781 8.0507812 24.375 8.0078125 24.6875 8 C 24.953125 8 25 8 25.25 8 C 27.167969 8 29.191406 8.5546875 30.84375 9.4921875 C 31.917969 9.8476562 32.742188 10.65625 33.183594 11.65625 C 33.914063 13.214844 33.941406 15.363281 33.941406 16.003906 C 33.941406 23.339844 26.859375 29.136719 16 29.136719 C 7.1601562 29.136719 0.05859375 23.339844 0.05859375 16 C 0.05859375 8.671875 7.1601562 2.875 16 2.875 C 16 2.875 16 2.875 16 2.875 Z "></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright bg-blue-600 text-white py-4">
        <div className="footer-copyright-wrapper max-w-screen-lg mx-auto">
          <p className="copyright-text text-center">
            <a
              href="#"
              className="copyright-link"
              target="_self"
            >
              ©2024. | Upwriter | All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

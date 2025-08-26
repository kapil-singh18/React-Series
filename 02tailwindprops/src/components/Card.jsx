import React from "react";

function Card({ username, description, btnText }) {
    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-5  inline-block mx-5">
            <a href="#">
                <img alt="" src="https://images.pexels.com/photos/33207952/pexels-photo-33207952.jpeg"
                    className="rounded-t-lg" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5
                        className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {username}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}</p>
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    href="#">
                    {btnText}
                    <svg viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2">
                        <path d="M1 5h12m0 0L9 1m4 4L9 9" strokeWidth="2"
                            strokeLinejoin="round" strokeLinecap="round"
                            stroke="currentColor"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Card
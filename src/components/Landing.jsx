import React, {Fragment} from "react";
import family from '../images/familyweb.webp'
import covavideo from "../videos/cova.mp4"
export const Landing = () => {
    return <Fragment>

        <section
            className="bg-center bg-no-repeat jumbotron bg-gray-700 bg-blend-multiply"
            style={{ backgroundImage: `url('${family}')`}}
        >
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="animate__animated animate__fadeInDown mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Insurrance accelorator in Africa</h1>
                <p className="animate__animated animate__fadeInUp mb-8 text-xl font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    We are making insurance less hard to distribute, to buy, and to benefit from, for billion africans that have any form of insurance
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#"
                       className="primary-link inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Get started
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#"
                       className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
        <div className="grid md:grid-cols-2 gap-2 md:gap-8 py-8 px-8 xl:py-28 xl:px-28">
            <div>
                <iframe className="animate__animated animate__fadeInLeft mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
                        src={covavideo} title="Cova" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <div
                className="animate__animated animate__fadeInRight rounded-lg p-2 md:p-12">
                <a href="#"
                   className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                </a>
                <h2 className="text-gray-900 dark:text-white text-4xl font-extrabold mb-2">A single partner to seamlessly offer reliable and digital insurance products.</h2>
                <p className="text-lg mt-8 font-normal text-gray-500 dark:text-gray-400 mb-4">
                    <h3 className={'text-2xl font-bold'}>For insurers and partners: </h3>
                    <ol className={'ol'}>
                        <li>an insurance as-a-service which bridge the gap between micro-insurance offer and underserved buyers,</li>
                        <li>Outsourcing of claims settlement service for better clients confidence,</li>
                        <li>an API where agents and trusted existing actors can distribute insurance (MFS, telcos, banks, e-commerce),</li>
                    </ol>
                    <h3 className={'text-2xl font-bold'}>For end-users:  </h3>
                    <ol className={'ol'}>
                        <li>A edge-cutting selection of best reliable insurers offer,</li>
                        <li>Purchasing of insurance in seconds,</li>
                        <li>Instant and real-time claim settlement process,</li>
                    </ol>
                </p>
                <a href="#"
                   className="more font-medium text-lg inline-flex items-center">Read
                    more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>

    </Fragment>
}

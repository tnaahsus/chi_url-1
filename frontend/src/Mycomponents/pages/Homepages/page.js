import React from 'react'

export const Page = () => {
    
    return (
        <>
            
            <div className="container px-4 pt-2 mt-5 " id="hanging-icons">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="https://www.shorturl.at/img/icon-url.png" alt="" />
                        </div>
                        <div>
                            <h2>Url Shortener</h2>
                            <p>Free URL Shortener with many features that gives you better quality. Shortened URLs will never expire.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="https://www.shorturl.at/img/icon-like.png" alt="" />
                        </div>
                        <div>
                            <h2>Easy to use</h2>
                            <p>Once you Signup with us it is easy and fast, enter the long link to get your shortened link.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start  ">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="https://www.shorturl.at/img/icon-statistics.png" alt="" />
                        </div>
                        <div>
                            <h2>Link Statistics</h2>
                            <p>We provide services where you can check the amount of clicks that your shortened url received</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start  pt-3">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="https://www.shorturl.at/img/icon-responsive.png" alt="" />
                        </div>
                        <div>
                            <h2>Compatible</h2>
                            <p>We provide data for each of your short link and check the amount of clicks that your shortened url received</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start pt-3 ">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="https://www.shorturl.at/img/icon-unique.png" alt="" />
                        </div>
                        <div>
                            <h2>Reliable</h2>
                            <p>All links that try to disseminate spam, viruses and malware are deleted</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start pt-3">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                        <img src="https://www.shorturl.at/img/icon-secure.png" alt="" />
                        </div>
                        <div>
                            <h2>Security</h2>
                            <p>Our services are fast and secure, our service have HTTPS protocol and data encryption</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

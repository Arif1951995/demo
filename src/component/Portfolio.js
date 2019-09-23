import React from 'react';

const Portfolio = () => {
    return (
        <div className="portfolio">

            <h2>Portfolio</h2>
            <p>our students have been working very hard! Here are some of there projects</p>
            <div id="portfolio-work">
                <div className="workfirst-row">
                    <figure>
                        <img src="https://i.ibb.co/8zYC4Zv/p-1.png" alt="work"></img>

                        <figcaption>
                            <h4>Reach out</h4>
                            <div>
                                <button className="my-button"><i class="fas fa-eye"></i></button>
                                <button className="my-button"><i class="fas fa-thumbs-up"></i></button>
                                <button className="my-button"><i class="far fa-heart"></i></button>
                            </div>

                        </figcaption>
                    </figure>
                    <figure>
                        <img src="https://i.ibb.co/1Q4W5cJ/p-2.png" alt="work"></img>
                        <figcaption>
                            <h4>Reach out</h4>
                            <div>
                                <button className="my-button"><i class="fas fa-eye"></i></button>
                                <button className="my-button"><i class="fas fa-thumbs-up"></i></button>
                                <button className="my-button"><i class="far fa-heart"></i></button>
                            </div>

                        </figcaption>
                    </figure>
                    <figure>
                    <img src="https://i.ibb.co/vDfVPL6/p-3.png" alt="work"></img>
                            <figcaption>
                                <h4>Reach out</h4>
                                <div>
                                    <button className="my-button"><i class="fas fa-eye"></i></button>
                                    <button className="my-button"><i class="fas fa-thumbs-up"></i></button>
                                    <button className="my-button"><i class="far fa-heart"></i></button>
                                </div>

                            </figcaption>
                    </figure>
                       
                </div>
                    <div className="workSecond-row">
                        <figure>
                            <img src="https://i.ibb.co/gtWhLLw/p-4.png" alt="work"></img>
                            <figcaption>
                                <h4>Reach out</h4>
                                <div>
                                    <button className="my-button"><i class="fas fa-eye"></i></button>
                                    <button className="my-button"><i class="fas fa-thumbs-up"></i></button>
                                    <button className="my-button"><i class="far fa-heart"></i></button>
                                </div>

                            </figcaption>
                        </figure>

                        <figure>
                            <img src="https://i.ibb.co/5FZz6zq/p-5.png" alt="work"></img>
                            <figcaption>
                                <h4>Reach out</h4>
                                <div>
                                    <button className="my-button"><i class="fas fa-eye"></i></button>
                                    <button className="my-button"><i class="fas fa-thumbs-up"></i></button>
                                    <button className="my-button"><i class="far fa-heart"></i></button>
                                </div>

                            </figcaption>
                        </figure>

                        <figure>
                            <img src="https://i.ibb.co/M5nDqLn/p-6.png" alt="work"></img>
                            <figcaption>
                                <h4>Reach out</h4>
                                <div>
                                    <button className="my-button"><i class="fas fa-eye"></i></button>
                                    <button className="my-button"><i class="fas fa-thumbs-up"></i></button>
                                    <button className="my-button"><i class="far fa-heart"></i></button>
                                </div>

                            </figcaption>
                        </figure>

                    </div>
                </div>
            </div>
            );
        };
        
export default Portfolio;
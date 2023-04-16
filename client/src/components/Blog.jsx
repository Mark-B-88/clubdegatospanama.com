import React from "react";
import "../styles/Blog.scss";

const BlogComponent = () => {
    return (
        <section className="blog" id="blog">
            <div className="row">
                <div className="col">
                    <div className="blog__content">
                        <h1>Articles &amp; More</h1>
                        <div className="blog__underline"></div>

                        {/* <!-- article 1 --> */}
                        <div className="blog__article">
                            <h1>Why Does My Cat Sleep So Much?</h1>
                            <h4>June 7th 2022</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur, vel nisi eius ipsum natus. Impedit laudantium, repellat debitis error ipsam officia ex quibusdam rerum blanditiis. Unde omnis repellat odio labore. Maiores sit perferendis magnam veritatis? Animi reiciendis numquam soluta?
                            </p>
                            <a href="#">READ MORE</a>
                        </div>

                        {/* <!-- article 2 --> */}
                        <div className="blog__article">
                            <h1>Why Does My Cat Sleep So Much?</h1>
                            <h4>June 7th 2022</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur, vel nisi eius ipsum natus. Impedit laudantium, repellat debitis error ipsam officia ex quibusdam rerum blanditiis. Unde omnis repellat odio labore. Maiores sit perferendis magnam veritatis? Animi reiciendis numquam soluta?
                            </p>
                            <a href="#">READ MORE</a>
                        </div>

                        {/* <!-- article 3 --> */}
                        <div className="blog__article">
                            <h1>Why Does My Cat Sleep So Much?</h1>
                            <h4>June 7th 2022</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur, vel nisi eius ipsum natus. Impedit laudantium, repellat debitis error ipsam officia ex quibusdam rerum blanditiis. Unde omnis repellat odio labore. Maiores sit perferendis magnam veritatis? Animi reiciendis numquam soluta?
                            </p>
                            <a href="#">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogComponent;
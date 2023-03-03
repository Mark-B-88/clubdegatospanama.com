import React from "react";
import { Link } from "react-router-dom";
import "./styles/not-found-styles.scss";

const NotFoundPage = () => {
    return (
        <div className="not-found-page-container">
            <h1 className="text-center">Page Not Found | 404</h1>
            <button className="btn btn-primary mt-3">
                <Link to="/" className="text-white">Go Back Home</Link>
            </button>
        </div>
    );
};

export default NotFoundPage;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="simple-error-page">
            <h1 className="simple-error-title">Oops! Page Not Found :)</h1>
            <button className="simple-error-btn" onClick={() => navigate("/")}>
                Go to Homepage
            </button>
        </div>
    );
};

export default ErrorPage;

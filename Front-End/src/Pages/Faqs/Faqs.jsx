import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import FaqsCompo from "../../Components/Faqs-Component/FaqsCompo";

const Faqs = () => {
    const faqsItem = [
        { question: "What is your return policy?", answer: "You can return items within 30 days." },
        { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide!" },
        { question: "How can I track my order?", answer: "You will receive a tracking link via email." }
    ];
    return (
        <>
            <div className="cart-hero">
                <h1>Contact Us</h1>
                <div className="cart-breadcrumbs">
                    <div className="cart-crumbs-text">
                        <Link to='/'><p>Home</p></Link>
                        <FontAwesomeIcon icon={faGreaterThan} />
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            {faqsItem.map((item, index) => (
                <FaqsCompo key={index} question={item.question} answer={item.answer} />
            ))}
        </>
    )

}
export default Faqs
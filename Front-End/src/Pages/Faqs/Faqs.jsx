import React, { useEffect, useState } from "react";
import './Faqs.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGreaterThan, faL } from "@fortawesome/free-solid-svg-icons";

const Faqs = () => {
    const [show, setShow] = useState(false);

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
            <div className="faqs-container">
                <div className="faqs">
                    <div className="faqs-head" onClick={() => setShow(!show)}>
                        <div className="faqs-text">This is text</div>
                        <div className="faqs-icon"><FontAwesomeIcon icon={faChevronRight} className={show ? 'rotate' : ''} /></div>
                    </div>

                    {show && <div className='faqs-para'>This is hidden para</div>}
                </div>
            </div>
        </>
    )
}

export default Faqs
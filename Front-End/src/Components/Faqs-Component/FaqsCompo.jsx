import React, { useState } from "react";
import './Faqs.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const FaqsCompo = ({ question, answer }) => {
    const [show, setShow] = useState(false);

    return (
        <>

            <div className="faqs-container">
                <div className="faqs">
                    <div className="faqs-head" onClick={() => setShow(!show)}>
                        <div className="faqs-text">{question}</div>
                        <div className="faqs-icon"><FontAwesomeIcon icon={faChevronRight} className={show ? 'rotate' : ''} /></div>
                    </div>

                    {show && <div className='faqs-para'> {answer} </div>}
                </div>
            </div>
        </>
    )
}

export default FaqsCompo
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Testimonial.css'

function TestimonialCarousel() {
    const testimonials = [
        {
            quote:
                "Wulla tincidunt convallis bibendum. Donec nec posuere nunc, sed rutrum massa. Maecenas nisi mauris, elementum consequat iaculis ac, aliquam in Sed estas, massa a stibulum augue, atculis arcu felis id ex.",
            author: "Melisia",
            role: "Singer",
        },
        {
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
            author: "John Doe",
            role: "Designer",
        },
        {
            quote:
                "Phasellus vel tincidunt orci. Morbi faucibus sapien at arcu sodales, sed vestibulum lacus pharetra. Curabitur vel orci sed orci sodales ultricies.",
            author: "Jane Smith",
            role: "Photographer",
        },
    ];

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000 }}
        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                    <div className="testimonial-card">
                        <div className="quote-icon">❝</div>
                        <p className="testimonial-text">{testimonial.quote}</p>
                        <div className="testimonial-author">
                            <strong>{testimonial.author}</strong> - {testimonial.role}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default TestimonialCarousel;

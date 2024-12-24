import React from "react";
import './Gallery.css'


const Gallery = () => {
    return (
        <>
            {/* <div className="gallery-container">
                <div className="gallery-1 gallery">gallery1</div>
                <div className="gallery-1 gallery">gallery2</div>
                <div className="gallery-1 gallery">gallery3</div>
                <div className="gallery-1 gallery">gallery4</div>
            </div> */}
            <div className="gallery-container">
                <div className="left gallery"><button>Clearance Store</button></div>
                <div className="top-right-1 gallery"><button>Jacket Store</button></div>
                <div className="top-right-2 gallery"><button>Women Shop</button></div>
                <div className="bottom-right gallery"><button>Kids Shop</button></div>
            </div>
        </>
    )
}

export default Gallery;
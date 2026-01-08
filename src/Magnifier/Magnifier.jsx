import React, { useRef, useState, useEffect, useCallback } from "react";

const Magnifier = ({ src, zoom = 2.5, width, height, className }) => {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
    percentageX: 0,
    percentageY: 0,
  });
  const [imgDims, setImgDims] = useState({ w: 0, h: 0 });

  const imgRef = useRef(null);
  const frame = useRef(null);

  // Syncs the internal math with the actual rendered size of your image
  const updateDimensions = useCallback(() => {
    if (imgRef.current) {
      setImgDims({
        w: imgRef.current.offsetWidth,
        h: imgRef.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  const handleMove = (e) => {
    if (frame.current) return;

    frame.current = requestAnimationFrame(() => {
      if (!imgRef.current) return;
      const {
        left,
        top,
        width: w,
        height: h,
      } = imgRef.current.getBoundingClientRect();

      // Mouse position relative to the main image
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Percentage calculation: This maps the point on the small image
      // to the exact same point on the zoomed background.
      const percentageX = (x / w) * 100;
      const percentageY = (y / h) * 100;

      setPos({ x, y, percentageX, percentageY });
      frame.current = null;
    });
  };

  return (
    <div
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        width: width, // Controlled by your component call
        height: height, // Controlled by your component call
      }}
    >
      {/* 1. MAIN IMAGE CONTAINER */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          cursor: "crosshair",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
        }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => {
          setShow(false);
          if (frame.current) cancelAnimationFrame(frame.current);
          frame.current = null;
        }}
        onMouseMove={handleMove}
      >
        <img
          ref={imgRef}
          src={src}
          onLoad={updateDimensions}
          alt="Product Display"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />

        {/* SCANNER SQUARE (The blue focus area) */}
        {show && (
          <div
            style={{
              position: "absolute",
              pointerEvents: "none",
              backgroundColor: "rgba(59, 130, 246, 0.15)",
              border: "1px solid #3b82f6",
              width: `${100 / zoom}%`,
              height: `${100 / zoom}%`,
              top: 0,
              left: 0,
              // Centers the square on your cursor using hardware acceleration
              transform: `translate(${pos.x - imgDims.w / zoom / 2}px, ${
                pos.y - imgDims.h / zoom / 2
              }px)`,
            }}
          />
        )}
      </div>
      
      {/* 2. ASIDE ZOOM PANEL */}
      {show && (
        <div
          style={{
            position: "absolute",
            // Distance from the main image
            left: "calc(100% + 20px)",
            top: 0,
            width: width,
            height: height,
            overflow: "hidden",

            // ✅ VITAL: zIndex 9999 ensures it floats ABOVE your product text/buttons
            zIndex: 9999,

            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)", // Deep shadow for "floating" effect
            pointerEvents: "none", // Ensures you can't accidentally interact with the zoom box
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${zoom * 100}%`,
              backgroundPosition: `${pos.percentageX}% ${pos.percentageY}%`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Magnifier;

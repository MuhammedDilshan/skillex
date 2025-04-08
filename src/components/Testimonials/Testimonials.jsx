import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import Avatar from "../../assets/avatar.svg";
import prev from "../../assets/arrow-l.svg";
import next from "../../assets/arrow-r.svg";

const testimonialsData = [
  {
    text: "The explanations are clear, the teachers are responsible and friendly, and the homework is real practice",
    name: "Rob Zuber",
    role: "CEO",
  },
  {
    text: "I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client.",
    name: "Melanle Pickett",
    role: "IT Manager",
  },
  {
    text: "I really like the speakers of the course and the quality of the lectures. There is always feedback",
    name: "Regis Wilson",
    role: "Engineer",
  },
  {
    text: "A new profession is a lot of vivid impressions. Today I was at the presentation of the regional business award",
    name: "Emma Watson",
    role: "Cook",
  },
  {
    text: "The course shows all the stages of the work of an SMM marketer. And also excellent practice",
    name: "Michael",
    role: "Cook",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const intervalRef = useRef(null);

  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width < 600) {
      setItemsPerPage(1);
    } else if (width < 840) {
      setItemsPerPage(2);
    } else if (width < 1100) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(4);
    }
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerPage >= testimonialsData.length ? 0 : prev + 1
      );
    }, 3000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - itemsPerPage : prev - 1
    );
    startAutoSlide();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonialsData.length ? 0 : prev + 1
    );
    startAutoSlide();
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    startAutoSlide();

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, [itemsPerPage]);

  const visibleItems = testimonialsData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="testimonials">
      <h6>What our customers say</h6>
      <div className="slider_items">
        {visibleItems.map((item, index) => (
          <div className="item" key={index}>
            <p>{item.text}</p>
            <div className="user_info">
              <div className="user_avatar">
                <img src={Avatar} alt={item.name} />
              </div>
              <div className="user_detail">
                <h6>{item.name}</h6>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <div className="prev" onClick={prevSlide}>
          <img src={prev} alt="Previous" />
        </div>
        <div className="next" onClick={nextSlide}>
          <img src={next} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

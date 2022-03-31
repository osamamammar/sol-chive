import React, { useEffect, useState } from "react";
import { scrollToTop } from "../../assets";
import { BtnGoToTop } from "./ScrollToTop.styles";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <BtnGoToTop>
          <img
            src={scrollToTop}
            alt="scroll-to-top"
            onClick={goToTop}
            width={31}
            height={31}
          />
        </BtnGoToTop>
      )}
    </>
  );
};

export default ScrollToTop;

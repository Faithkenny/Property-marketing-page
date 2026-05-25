
    function moveMobileElements() {
      const isMobile = window.matchMedia("(max-width: 798px)").matches;
  
      const right = document.querySelector(".right");
      const titleDetails = document.querySelector(".titleDetails-buttons");
      const titleFeaturesPrice = document.querySelector(".title-features-price");
  
      const priceWrapper = document.querySelector(".price-wrapper");
      const forBtns = document.querySelector(".for-btns");
  
      if (
        !right ||
        !titleDetails ||
        !titleFeaturesPrice ||
        !priceWrapper ||
        !forBtns
      ) return;
  
      // Create wrapper div if it doesn't exist
      let mobileWrapper = document.querySelector(".mobile-price-btn-wrapper");
  
      if (!mobileWrapper) {
        mobileWrapper = document.createElement("div");
        mobileWrapper.classList.add("mobile-price-btn-wrapper");
      }
  
      if (isMobile) {
        // Append wrapper to .right
        if (mobileWrapper.parentElement !== right) {
          right.appendChild(mobileWrapper);
        }
  
        // Move elements into wrapper
        if (priceWrapper.parentElement !== mobileWrapper) {
          mobileWrapper.appendChild(priceWrapper);
        }
  
        if (forBtns.parentElement !== mobileWrapper) {
          mobileWrapper.appendChild(forBtns);
        }
  
      } else {
        // Move elements back to original desktop positions
  
        if (priceWrapper.parentElement !== titleFeaturesPrice) {
          titleFeaturesPrice.appendChild(priceWrapper);
        }
  
        if (forBtns.parentElement !== titleDetails) {
          titleDetails.appendChild(forBtns);
        }
  
        // Remove empty wrapper from DOM
        if (mobileWrapper.parentElement) {
          mobileWrapper.remove();
        }
      }
    }
  
    // Run on load
    moveMobileElements();
  
    // Run on resize
    window.addEventListener("resize", moveMobileElements);

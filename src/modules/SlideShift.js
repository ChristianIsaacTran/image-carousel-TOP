function slideShift(slideContainer) {
    function resetToFirst() {
        slideContainer.style.right = "0px";
    }

    function resetToLast() {
        slideContainer.style.right = "2400px";
    }

    function checkPositionFirst(newPos) {
        const firstSlidePos = 0;

        if (newPos < firstSlidePos) {
            return true;
        }

        return false;
    }

    function checkPositionLast(newPos) {
        const lastSlidePos = 2400;

        if (newPos > lastSlidePos) {
            return true;
        }

        return false;
    }

    function getCurrentPos() {
        // extract number value from position style
        const tempStr = slideContainer.style.right;
        const tempStrArr = tempStr.split("px");
        const [extractedNum] = tempStrArr;
        const currentPos = Number(extractedNum);

        return currentPos;
    }

    function changeCurrentDot() {
        // dom query for nav dots
        const dot1 = document.querySelector(".dot1");
        const dot2 = document.querySelector(".dot2");
        const dot3 = document.querySelector(".dot3");
        const dot4 = document.querySelector(".dot4");

        // position variables
        const currentPos = getCurrentPos();
        const firstImagePos = 0;
        const secondImagePos = 800;
        const thirdImagePos = 1600;
        const fourthImagePos = 2400;

        //based on currentPos, turn nav dot background to "activated" color
        if (currentPos === firstImagePos) {
            dot1.style.backgroundColor = "red";
            dot2.style.backgroundColor = "unset";
            dot3.style.backgroundColor = "unset";
            dot4.style.backgroundColor = "unset";
        } else if (currentPos === secondImagePos) {
            dot1.style.backgroundColor = "unset";
            dot2.style.backgroundColor = "red";
            dot3.style.backgroundColor = "unset";
            dot4.style.backgroundColor = "unset";
        } else if (currentPos === thirdImagePos) {
            dot1.style.backgroundColor = "unset";
            dot2.style.backgroundColor = "unset";
            dot3.style.backgroundColor = "red";
            dot4.style.backgroundColor = "unset";
        } else if (currentPos === fourthImagePos) {
            dot1.style.backgroundColor = "unset";
            dot2.style.backgroundColor = "unset";
            dot3.style.backgroundColor = "unset";
            dot4.style.backgroundColor = "red";
        }
    }

    function nextSlide() {
        // extract number value from position style
        const currentPos = getCurrentPos();

        // default offset to the right position value (next)
        const positionOffset = 800;

        // add offset to the existing position number
        const newPos = currentPos + positionOffset;
        slideContainer.style.right = `${newPos}px`;

        // check if the position is passed the last image position. If it is, loop back to the first image
        if (checkPositionLast(newPos)) {
            resetToFirst();
        }

        // change nav dots when switching images
        changeCurrentDot();
    }

    function prevSlide() {
        // extract number value from position style
        const currentPos = getCurrentPos();

        // default offset to the right position value (previous)
        const positionOffset = -800;

        // add offset to the existing position number
        const newPos = currentPos + positionOffset;
        slideContainer.style.right = `${newPos}px`;

        // check if the position is passed the first image position. If it is, then loop back to the last image
        if (checkPositionFirst(newPos)) {
            resetToLast();
        }

        // change nav dots when switching images
        changeCurrentDot();
    }

    function createNavDotLogic() {
        const dot1 = document.querySelector(".dot1");
        const dot2 = document.querySelector(".dot2");
        const dot3 = document.querySelector(".dot3");
        const dot4 = document.querySelector(".dot4");

        const secondImagePos = "800px";
        const thirdImagePos = "1600px";

        // 1st image nav dot
        dot1.addEventListener("click", () => {
            resetToFirst();
            dot1.style.backgroundColor = "red";
            dot2.style.backgroundColor = "unset";
            dot3.style.backgroundColor = "unset";
            dot4.style.backgroundColor = "unset";
        });

        // 2nd image nav dot
        dot2.addEventListener("click", () => {
            slideContainer.style.right = secondImagePos;
            dot1.style.backgroundColor = "unset";
            dot2.style.backgroundColor = "red";
            dot3.style.backgroundColor = "unset";
            dot4.style.backgroundColor = "unset";
        });

        // 3rd image nav dot
        dot3.addEventListener("click", () => {
            slideContainer.style.right = thirdImagePos;
            dot1.style.backgroundColor = "unset";
            dot2.style.backgroundColor = "unset";
            dot3.style.backgroundColor = "red";
            dot4.style.backgroundColor = "unset";
        });

        // 4th image nav dot
        dot4.addEventListener("click", () => {
            resetToLast();
            dot1.style.backgroundColor = "unset";
            dot2.style.backgroundColor = "unset";
            dot3.style.backgroundColor = "unset";
            dot4.style.backgroundColor = "red";
        });
    }

    return {
        nextSlide,
        prevSlide,
        resetToFirst,
        resetToLast,
        createNavDotLogic,
    };
}

export default slideShift;

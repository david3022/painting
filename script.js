document.addEventListener("scroll", () => {
    const gray = document.getElementById("gray");
    const blue = document.getElementById("blue");
    const green = document.getElementById("green");
    const coral = document.getElementById("coral");

    const rectGray = gray.getBoundingClientRect();
    const rectBlue = blue.getBoundingClientRect();

    if (rectGray.top >= 0 && rectGray.bottom <= window.innerHeight) {
        setTimeout(() => {
            gray.classList.add("reduce-up");

            setTimeout(() => {
                if (rectBlue.top >= 0 && rectBlue.bottom <= window.innerHeight) {
                    blue.classList.add("reduce-down");

                    setTimeout(() => {
                        const rectGreen = green.getBoundingClientRect();
                        if (rectGreen.top >= 0 && rectGreen.bottom <= window.innerHeight) {
                            green.classList.add("reduce-up");

                            setTimeout(() => {
                                const rectCoral = coral.getBoundingClientRect();
                                if (rectCoral.top >= 0 && rectCoral.bottom <= window.innerHeight) {
                                    coral.classList.add("reduce-down");
                                }
                            }, 500);
                        }
                    }, 500);
                }
            }, 500);
        }, 500);
    }
});
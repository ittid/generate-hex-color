/*=== === === === === === === === === === === === === === === === === === 
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    ~~~ Hex Color Auto Change ~~~
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  Author: https://github.com/ittid
                  Email: ahnaine3bd@gmail.com
                  Release Date: 3 nov, 2022
                  Detail: A Pure JavaScript Project
=== === === === === === === === === === === === === === === === === ===*/

addEventListener("DOMContentLoaded", () => {
  // declar the variable that hat all Hex Letter:
  const hexElms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "F", "B", "C"];
  let hexColor = "#";

  // the body TAG that will be chnaged
  const dataBody = document.querySelector("[data-body]");
  const hexCodeText = document.getElementById("color");

  // Generator Function That Generat The Hex Color Code
  function generateHexColor(colors) {
    for (let i = 0; i < 6; i++) {
      hexColor += `${colors[Math.floor(Math.random() * colors.length)]}`;
    }
    return hexColor;
  }

  dataBody.addEventListener("click", function () {
    generateHexColor(hexElms);
    this.style.backgroundColor = hexColor;
    hexCodeText.textContent = hexColor;
    // Reset the hex color to make it emplty and ready to the next loop
    hexColor = "#";

    /* prevent the Auto Copy after Click */
    document.execCommand("copy");
  });
  dataBody.addEventListener("copy", function (e) {
    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData("text/plain", hexCodeText.textContent);
      document.querySelector(
        "[data-copy]"
      ).textContent = `Your Color has Copied 📑`;
      //console.log(e.clipboardData.getData("text"));
    }
  });
});

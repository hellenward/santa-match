import React from 'react';
import { images } from '../../resources/CardLInks/CardLinks.js';

class Images extends React.Component {
    christmasImages = [];
    handleClick = (event) => {
      let christmasImage = event.target;
      if (christmasImage.getAttribute("check") === "found") {
        return;
      }

      if (christmasImage !== this.christmasImages[0]) {
        this.switch(christmasImage);
        this.christmasImages.push(christmasImage);
      } else {
        this.switch(christmasImage);
        this.christmasImages = [];
      }

      if (this.christmasImages.length > 2) {
        if (!this.checkName(this.christmasImages[0], this.christmasImages[1])) {
          this.switch(this.christmasImages[0]);
          this.switch(this.christmasImages[1]);
          this.christmasImages.shift();
          this.christmasImages.shift();
        } else {
          this.christmasImages.shift();
          this.christmasImages.shift();
        }
      }
      let allPictures = document.getElementsByClassName("image-blank");
      if (allPictures.length < 1) {
        this.props.endGame(true);
        let reset = document.getElementsByClassName("image");
        for (let i = 0; i < reset.length; i++) {
          reset[i].classList.add("image-blank");
          reset[i].setAttribute("check", "false");
          this.christmasImages = [];
        }
      }
    };

    checkName = (christmasImage1, christmasImage2) => {
      if (christmasImage1.getAttribute("name") === christmasImage2.getAttribute("name")) {
        christmasImage1.setAttribute("check", "found");
        christmasImage2.setAttribute("check", "found");
        return true;
      }
      return false;
    };

    switch = (target) => {
      if (target.getAttribute("check") === "true") {
        target.setAttribute("check", "false");
        target.classList.add("image-blank");
      } else {
        target.setAttribute("check", "true");
        target.classList.remove("image-blank");
      }
    };
    render() {
      return (
        <div className="images">
          {images
            .sort(() => Math.random() - 0.5)
            .map((element) => {
              return (
                <div
                  className="image image-blank"
                  name={element.name}
                  style={{ background: `url(${element.image})` }}
                  check="false"
                  onClick={this.handleClick}
                  key={element.id}
                />
              );
            })}
        </div>
      );
    }
  }
  export default Images;
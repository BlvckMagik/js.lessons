const addImage = (imgSrc, callback) => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'Photo');
    imgElem.src = imgSrc;
    const containerEl = document.querySelector('.page');
    containerEl.append(imgElem);

    const onImgLoaded = () => {
      const { width, height } = imgElem;
      callback(null, imgElem);
    };

    imgElem.addEventListener('load', onImgLoaded);
    imgElem.addEventListener('error', () => callback('Image load is failed'));
  });
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-AerialView-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded
);

const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'Photo');
    imgElem.src = imgSrc;
    const containerEl = document.querySelector('.page');
    containerEl.append(imgElem);

    const onImgLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImgLoaded);
    imgElem.addEventListener('error', () =>
      reject(new Error('Image load is failed...'))
    );
  });

  return p;
};

const result = addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
);

result.then(({ width, height }) => {
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
});

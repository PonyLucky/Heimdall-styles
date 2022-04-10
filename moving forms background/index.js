// 
// Prepend the CSS background image to the body
// 

const bgCtn = document.createElement('div');
bgCtn.classList.add('bg-ctn');

const bgCircles = document.createElement('ul');
bgCircles.classList.add('bg-circles');

for (let i = 0; i < 10; i++) {
  const bgCircle = document.createElement('li');
  bgCircles.appendChild(bgCircle);
}

bgCtn.appendChild(bgCircles);
document.body.prepend(bgCtn);

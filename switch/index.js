// Update background
const updateBackground = () => {
  const bgCtn = document.createElement('div');
  bgCtn.classList.add('bg-ctn');

  const bgCircles = document.createElement('ul');
  bgCircles.classList.add('bg-circles');

  for (let i = 0; i < 10; i++) {
    const bgCircle = document.createElement('li');
    bgCircle.appendChild(createMario());
    bgCircles.appendChild(bgCircle);
  }

  bgCtn.appendChild(bgCircles);
  document.body.prepend(bgCtn);
}

// Initialize switch
const initSwitch = () => {
  // Create switchDiv element and set its content
  const switchDiv = document.createElement('div');
  switchDiv.innerHTML = `<div class="switch">
  <div class="body"></div>
  <div class="grip"></div>
  <div class="tablet">
    <div class="tablet__frame">
      <div class="tablet__screen">
        
      </div>
    </div>
  </div>
  <div class="joycon joycon--left">
    <div class="joycon__sign joycon__sign--minus"></div>
    <div class="joycon__stick joycon__stick--left">
      <div class="joycon__stickCenter"></div>
    </div>
    <div class="joycon__cross joycon__cross--left">
      <div class="joycon__button joycon__button--top">
        <div class="arrow arrow--up"></div>
      </div>
      <div class="joycon__button joycon__button--left">
        <div class="arrow arrow--left"></div>
      </div>
      <div class="joycon__button joycon__button--right">
        <div class="arrow arrow--right"></div>
      </div>
      <div class="joycon__button joycon__button--bottom">
        <div class="arrow arrow--down"></div>
      </div>
    </div>
    <div class="joycon__options joycon__options--capture"></div>
  </div>
  <div class="joycon joycon--right">
    <div class="joycon__sign joycon__sign--plus"></div>
    <div class="joycon__stick joycon__stick--right">
      <div class="joycon__stickCenter"></div>
    </div>
    <div class="joycon__cross joycon__cross--right">
      <div class="joycon__button joycon__button--top">
        <div class="letter">X
        </div>
      </div>
      <div class="joycon__button joycon__button--left">
        <div class="letter">Y
        </div>
      </div>
      <div class="joycon__button joycon__button--right">
        <div class="letter">A
        </div>
      </div>
      <div class="joycon__button joycon__button--bottom">
        <div class="letter">B
        </div>
      </div>
    </div>
    <div class="joycon__options joycon__options--home"></div>
  </div>
  </div>`;
  // Prepend switchDiv element to body
  document.getElementsByTagName('main')[0].prepend(switchDiv);

  // Get the element where we will put the content
  const container = document.querySelector('.switch .tablet__screen');
  // Move .searchform to container
  container.appendChild(document.querySelector('.searchform'));
  // Move #sortable
  container.appendChild(document.querySelector('#sortable'));
}

// Remove all .tooltip elements
const removeTooltips = () => {
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => {
    tooltip.remove();
  });
};

// Update search form
const updateSearchForm = () => {
  const searchCtn = document.getElementById('search-container');
  // Get the submit button
  const submitBtn = searchCtn.querySelector('button');
  
  // Overwrite the content of the submit button
  submitBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>';

  // Get the input
  const input = searchCtn.querySelector('input');
  // Set autocomplete to off
  input.setAttribute('autocomplete', 'off');
}

// Set to settings mode if the user is on the settings page
const setToSettingsMode = () => {
  if (window.location.pathname !== '/') {
    document.body.classList.add('settings-mode');
  }
}

// Make joycon__stick follow the mouse
const moveJoyconStick = (e) => {
  // Get the joycon stick
  const joyconStick = document.querySelector(`.joycon--left .joycon__stickCenter`);

  // If mouse is not in .tablet__screen
  if (!e.target.closest('.tablet__screen')) {

    // Get the mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get the joycon stick position
    const joyconStickX = joyconStick.getBoundingClientRect().left;
    const joyconStickY = joyconStick.getBoundingClientRect().top;

    // Get the rotation degrees
    const rotationDegrees = Math.atan2(mouseX - joyconStickX, mouseY - joyconStickY) * (180 / Math.PI) * -1 + 180;

    // We will change the position of the stick depending on the rotation degrees
    // If the rotation degrees is between 45 and 135, we will move the stick to the right (so left = 60% and top = 50%)
    // If the rotation degrees is between 135 and 225, we will move the stick to the bottom (so left = 50% and top = 60%)
    // If the rotation degrees is between 225 and 315, we will move the stick to the left (so left = 40% and top = 50%)
    // If the rotation degrees is between 315 and 45, we will move the stick to the top (so left = 50% and top = 40%)
    if (rotationDegrees >= 45 && rotationDegrees <= 135) {
      joyconStick.style.left = '60%';
      joyconStick.style.top = '50%';
    } else if (rotationDegrees >= 135 && rotationDegrees <= 225) {
      joyconStick.style.left = '50%';
      joyconStick.style.top = '60%';
    } else if (rotationDegrees >= 225 && rotationDegrees <= 315) {
      joyconStick.style.left = '40%';
      joyconStick.style.top = '50%';
    } else if (rotationDegrees >= 315 || rotationDegrees <= 45) {
      joyconStick.style.left = '50%';
      joyconStick.style.top = '40%';
    }
  }
  else {
    // Return the stick to the center
    joyconStick.style.left = '50%';
    joyconStick.style.top = '50%';
  }
}

// Create mario
const createMario = () => {
  // Create a mario div and set its content
  const marioDiv = document.createElement('div');
  marioDiv.innerHTML = `<div class="mario">
    <div class="hat">
      <div class="logo"><span></span><span></span><span></span><span></span></div>
      <div class="peak"></div>
    </div>
    <div class="face">
      <div class="brow"><span></span></div>
      <div class="brow-right"><span></span></div>
    </div>
    <div class="chin">
      <div class="nose"><span></span><span></span><span></span><span></span><span></span><span></span>
        <div class="tash"></div>
      </div>
      <div class="mouth"><span></span></div>
      <div class="eye"> <span> </span><span></span><span></span></div>
      <div class="eye-right"><span> </span><span></span><span></span></div>
    </div>
    <div id="hair-left"></div>
    <div id="hair-right"></div>
    <div id="ear-left"><span></span><span></span></div>
    <div id="ear-right"><span></span><span></span></div>
  </div>`;

  return marioDiv;
}

try {
  initSwitch();
  removeTooltips();
  updateSearchForm();
  updateBackground();
  document.addEventListener('mousemove', moveJoyconStick);
  initMario();
}
catch {
  setToSettingsMode();
}

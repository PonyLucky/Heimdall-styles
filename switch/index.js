class Stick {
  /**
   * Class to control a stick
   * @param {HTMLElement} stick Stick element
   */
  constructor (stick) {
    // Stick element
    this.stick = stick
  }

  /**
   * Get center
   * @return {HTMLElement} Center of the stick
   * @private
   * @memberof stick
   * @instance
   * @since 1.1.0
   * @example
   * const center = stick.getCenter();
   * console.log(center);
   * // => <div class="joycon__stickCenter"></div>
   */
  getCenter () {
    return this.jc.querySelector('.joycon__stickCenter')
  }

  /**
   * Reset position
   * @return {void}
   * @private
   * @memberof joycon
   * @instance
   * @since 1.1.0
   * @example
   * joycon.resetPosition();
   * // The joycon will be in the center
   */
  resetPosition () {
    this.jc.classList.remove('joycon__left');
    this.jc.classList.remove('joycon__right');
    this.jc.classList.remove('joycon__top');
    this.jc.classList.remove('joycon__bottom');
  }

  /**
   * Go to left
   * @return {void}
   * @private
   * @memberof joycon
   * @instance
   * @since 1.1.0
   * @example
   * joycon.left();
   * // The joycon will go to the left
   */
  left () {
    this.jc.classList.add('joycon__left');
  }

  /**
   * Go to top
   * @return {void}
   * @private
   * @memberof joycon
   * @instance
   * @since 1.1.0
   * @example
   * joycon.top();
   * // The joycon will go to the top
   */
  top () {
    this.jc.classList.add('joycon__top');
  }

  /**
   * Go to right
   * @return {void}
   * @private
   * @memberof joycon
   * @instance
   * @since 1.1.0
   * @example
   * joycon.right();
   * // The joycon will go to the right
   */
  right () {
    this.jc.classList.add('joycon__right');
  }

  /**
   * Go to bottom
   * @return {void}
   * @private
   * @memberof joycon
   * @instance
   * @since 1.1.0
   * @example
   * joycon.bottom();
   * // The joycon will go to the bottom
   */
   bottom () {
    this.jc.classList.add('joycon__bottom');
  }
}



// Update background
const updateBackground = () => {
  const bgCtn = document.createElement('div');
  bgCtn.classList.add('bg-ctn');

  const bgCircles = document.createElement('ul');
  bgCircles.classList.add('bg-circles');

  for (let i = 0; i < 10; i++) {
    const bgCircle = document.createElement('li');

    // Ramdom number between 0 and 1
    const r = Math.random();
    // If r is less than 0.5, append mario to bgCircle
    if (r < 0.5) {
      bgCircle.appendChild(createMario());
    }
    // Else append Luigi to bgCircle
    else {
      bgCircle.appendChild(createLuigi());
    }

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

  // For each items in the sortable list
  $('#sortable .item').each(function () {
    // On hover
    $(this).mouseover(function () {
      // Remove .active from all items
      $('#sortable .item').removeClass('active');

      // Progressively add the class .active
      $(this).addClass('active');
    });
    // On mouseout
    $(this).mouseout(function () {
      // Remove the class .active
      $(this).removeClass('active');
    });
  });

  // Focus on the search input
  document.querySelector('.searchform input').focus();
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

/**
 * Create mario.
 * @returns {HTMLElement} Mario HTML element
 */
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

/**
 * Create Luigi
 * @returns {HTMLElement} Luigi HTML element
 */
const createLuigi = () => {
  // Create a luigi div and set its content
  const luigiDiv = document.createElement('div');
  luigiDiv.innerHTML = `<div class="luigi">
    <div class="hat">
      <div class="logo"><span></span><span></span></div>
      <div class="peak"></div>
    </div>
    <div class="face">
      <div id="overlay"></div>
      <div class="brow"><span></span></div>
      <div class="brow-right"><span></span></div>
      <div class="nose"></div>
      <div id="tash-l"></div>
      <div id="tash-r"></div>
      <div class="tash"></div>
      <div class="eye-left"> <span> </span><span></span><span></span></div>
      <div class="eye-right"><span> </span><span></span><span></span></div>
      <div class="mouth"></div>
      <div class="chin"></div>
    </div>
    <div id="hair-left"></div>
    <div id="hair-right"></div>
    <div id="ear-left"><span></span><span></span></div>
    <div id="ear-right"><span></span><span></span></div>
    <div class="hair-back" id="l"></div>
    <div class="hair-back" id="r"></div>
  </div>`;

  return luigiDiv;
}

try {
  initSwitch();
  removeTooltips();
  updateSearchForm();
  updateBackground();
}
catch {
  setToSettingsMode();
}

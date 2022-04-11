class Stick {
  /**
   * Class to control a stick
   * @param {HTMLElement} stick Stick element
   */
  constructor (stick) {
    // Stick element
    this.stick = stick;
    // Center of stick
    this.center = this.getCenter();
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
    return this.stick.querySelector('.joycon__stickCenter');
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
    this.center.classList.remove('joycon__left');
    this.center.classList.remove('joycon__right');
    this.center.classList.remove('joycon__top');
    this.center.classList.remove('joycon__bottom');
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
    this.center.classList.add('joycon__left');
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
    this.center.classList.add('joycon__top');
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
    this.center.classList.add('joycon__right');
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
    this.center.classList.add('joycon__bottom');
  }
}

class Button {
  /**
   * Class to control a button
   * @param {HTMLElement} button Button element
   */
  constructor (button) {
    // Button element
    this.button = button;
  }

  /**
   * Press the button
   * @param {Function} func Function to execute when the button is pressed
   * @return {void}
   * @private
   * @memberof button
   * @instance
   * @since 1.1.0
   */
  press (func = () => {}) {
    console.log(this.button);
    this.button.classList.add('pressed');
    func();
  }

  /**
   * Unpress the button
   * @return {void}
   * @private
   * @memberof button
   * @instance
   * @since 1.1.0
   */
  unpress () {
    this.button.classList.remove('pressed');
  }

  /**
   * Bind click event
   * @param {Function} func Function to execute when the button is pressed
   * @returns {void}
   * @private
   * @memberof button
   * @instance
   * @since 1.1.0
   */
  bindClick (func = () => {}) {
    this.button.addEventListener('mousedown', () => {
      this.press(func);
    });
    this.button.addEventListener('mouseup', () => {
      this.unpress();
    });
  }
}

class Switch {
  /**
   * Class to control a switch
   * @param {HTMLElement} switch Switch element
   */
  constructor (switchElement) {
    // Switch element
    this.switch = switchElement;
    // Left stick
    const leftStick = new Stick(this.switch.querySelector('.joycon__stick--left'));
    // Right stick
    const rightStick = new Stick(this.switch.querySelector('.joycon__stick--right'));
    // Minus sign
    const minus = new Button(this.switch.querySelector('.joycon__sign--minus'));
    // Plus sign
    const plus = new Button(this.switch.querySelector('.joycon__sign--plus'));
    // Arrow up
    const arrowUp = new Button(this.switch.querySelector('.joycon__cross--left .joycon__button--top'));
    // Arrow down
    const arrowDown = new Button(this.switch.querySelector('.joycon__cross--left .joycon__button--bottom'));
    // Arrow left
    const arrowLeft = new Button(this.switch.querySelector('.joycon__cross--left .joycon__button--left'));
    // Arrow right
    const arrowRight = new Button(this.switch.querySelector('.joycon__cross--left .joycon__button--right'));
    // Button A
    const buttonA = new Button(this.switch.querySelector('.joycon__cross--right .joycon__button--right'));
    // Button B
    const buttonB = new Button(this.switch.querySelector('.joycon__cross--right .joycon__button--bottom'));
    // Button X
    const buttonX = new Button(this.switch.querySelector('.joycon__cross--right .joycon__button--left'));
    // Button Y
    const buttonY = new Button(this.switch.querySelector('.joycon__cross--right .joycon__button--top'));
    // Option capture
    const optionCapture = new Button(this.switch.querySelector('.joycon__options--capture'));
    // Option home
    const optionHome = new Button(this.switch.querySelector('.joycon__options--home'));

    // sign
    this.sign = {
      minus,
      plus
    };
    // stick
    this.stick = {
      left: leftStick,
      right: rightStick
    };
    // Arrow
    this.arrow = {
      up: arrowUp,
      down: arrowDown,
      left: arrowLeft,
      right: arrowRight
    };
    // Button
    this.button = {
      a: buttonA,
      b: buttonB,
      x: buttonX,
      y: buttonY
    };
    // Option
    this.option = {
      capture: optionCapture,
      home: optionHome
    };

    // Bind events
    this.bindEvents();
  }

  /**
   * On click arrow up
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  onClickArrowUp () {
    this.arrow.up.press(() => {
      // TODO : Add code here
    });
  }

  /**
   * On click arrow down
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  onClickArrowDown () {
    this.arrow.down.press(() => {
      // TODO : Add code here
    });
  }

  /**
   * On click arrow left
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  onClickArrowLeft () {
    this.arrow.left.press(() => {
      // TODO : Add code here
    });
  }

  /**
   * On click arrow right
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  onClickArrowRight () {
    this.arrow.right.press(() => {
      // TODO : Add code here
    });
  }

  /**
   * On click button A
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  onClickButtonA () {
    this.button.a.press(() => {
      // TODO : Add code here
    });
  }

  /**
   * On click button B
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
   onClickButtonB () {
    this.button.b.press(() => {
      // TODO : Add code here
    });
  }

  /**
   * On click button X
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
   onClickButtonX () {
    this.button.x.press(() => {
      // TODO : Add code here
    });
  }

  /**
   * On click button Y
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
   onClickButtonY () {
    this.button.y.press(() => {
      // TODO : Add code here
    });
  }

  /**
   * On click sign minus
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  onClickSignMinus () {
    this.sign.minus.press();
  }

  /**
   * On click sign plus
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  onClickSignPlus () {
    this.sign.plus.press();
  }

  /**
   * On click option capture
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  onClickOptionCapture () {
    this.option.capture.press();
  }

  /**
   * On click option home
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  onClickOptionHome () {
    this.option.home.press(() => {
      // TODO : Add code here
    });
  }

  /**
   * Bind events
   * @private
   * @memberof switch
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  bindEvents () {
    // Arrow events
    this.arrow.up.bindClick(this.onClickArrowUp.bind(this));
    this.arrow.down.bindClick(this.onClickArrowDown.bind(this));
    this.arrow.left.bindClick(this.onClickArrowLeft.bind(this));
    this.arrow.right.bindClick(this.onClickArrowRight.bind(this));
    // Button events
    this.button.a.bindClick(this.onClickButtonA.bind(this));
    this.button.b.bindClick(this.onClickButtonB.bind(this));
    this.button.x.bindClick(this.onClickButtonX.bind(this));
    this.button.y.bindClick(this.onClickButtonY.bind(this));
    // Sign events
    this.sign.minus.bindClick(this.onClickSignMinus.bind(this));
    this.sign.plus.bindClick(this.onClickSignPlus.bind(this));
    // Option events
    this.option.capture.bindClick(this.onClickOptionCapture.bind(this));
    this.option.home.bindClick(this.onClickOptionHome.bind(this));
  }
}


// Update background
const updateBackground = async () => {
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
const initSwitch = async () => {
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

  const items = document.querySelectorAll('#sortable .item');
  // For each items
  for (let i = 0; i < items.length; i++) {
    // On hover
    items[i].addEventListener('mouseover', function () {
      // Remove .active from all items
      items.forEach(item => item.classList.remove('active'));

      // Add .active to the current item
      this.classList.add('active');
    });
    // On mouseout
    items[i].addEventListener('mouseout', function () {
      // Remove the class .active
      this.classList.remove('active');
    });
  }
  

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

  return marioDiv.cloneNode(true);
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

// On DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initSwitch();
    removeTooltips();
    updateSearchForm();
    // After 1 second, update the background
    setTimeout(() => {
      updateBackground();
    }, 2000);

    // Initialize switchController
    const switchController = new Switch(document.querySelector('.switch'));
  }
  catch (e) {
    console.error(e);
    setToSettingsMode();
  }
});

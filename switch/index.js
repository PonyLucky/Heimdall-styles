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
    this.button.classList.add('pressed');
    func();
  }

  /**
   * Release the button
   * @return {void}
   * @private
   * @memberof button
   * @instance
   * @since 1.1.0
   */
  release () {
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
      this.release();
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
    const buttonX = new Button(this.switch.querySelector('.joycon__cross--right .joycon__button--top'));
    // Button Y
    const buttonY = new Button(this.switch.querySelector('.joycon__cross--right .joycon__button--left'));
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

    // Items
    this.items = document.querySelectorAll('#sortable .item');

    // Search
    this.search = document.querySelector('.switch .searchform input[type="text"]');

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

class Navigation {
  /**
   * Support for navigation of Switch
   * @class
   * @name Navigation
   * @since 1.1.0
   * @param {Switch} [switchController] - Switch
   * @param {object} [options] - Options
   */
  constructor (switchController, options = {}) {
    // Check if switchController is a Switch
    if (!(switchController instanceof Switch)) {
      throw new Error('switchController must be a Switch');
    }

    // Check if options is an object
    if (typeof options !== 'object') {
      throw new Error('options must be an object');
    }

    // Check if options.loop is a boolean
    if (options.loop && typeof options.loop !== 'boolean') {
      throw new Error('options.loop must be a boolean');
    }

    this.sw = switchController;
    this.options = options;
    this.loop = options.loop || false;
    this.grid = this.sw.items[0].parentElement.parentElement;
    this.items = this.sw.items;

    this.keysEvents();
  }

  /**
   * Navigate
   * @public
   * @memberof Navigation
   * @instance
   * @since 1.1.0
   * @param {string} [direction] - Direction [up, down, left, right]
   * @returns {void}
   */
  navigate (direction) {
    const activeClass = 'active';
    const grid = this.grid;
    const active = grid.querySelector(`.${activeClass}`);
    const activeIndex = Array.from(grid.children).indexOf(active);

    const gridChildren = Array.from(grid.children).filter(child => child.classList.contains('item-container'));
    const gridNum = gridChildren.length;
    const baseOffset = gridChildren[0].offsetTop;
    const breakIndex = gridChildren.findIndex(item => item.offsetTop > baseOffset);
    const numPerRow = (breakIndex === -1 ? gridNum : breakIndex);
    // Get the number of items in the last row
    const lastRowNum = gridNum % numPerRow || numPerRow;

    const updateActiveItem = (active, next, activeClass) => {
      active.classList.remove(activeClass);
      next.classList.add(activeClass);
      // Scroll into view
      next.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
      // Focus on next item
      next.querySelector('a.link').focus();
    }
    
    const isTopRow = activeIndex <= numPerRow - 1;
    const isBottomRow = activeIndex >= gridNum - lastRowNum;
    const isLeftColumn = activeIndex % numPerRow === 0;
    const isRightColumn = activeIndex % numPerRow === numPerRow - 1 || activeIndex === gridNum - 1;
    
    if (this.sw.search !== document. activeElement) {
      switch (direction) {
        case "up":
          if (active) {
            if (!isTopRow) {
              const next = activeIndex - numPerRow
              if (!isBottomRow) {
                updateActiveItem(active, gridChildren[next], activeClass);
              }
              else {
                // Get the index of the next item in the last row
                const lastRowIndex = Math.ceil(activeIndex / lastRowNum) - 1;
                // Get the position of the first item in the previous row
                const prevRowIndex = gridNum - lastRowNum - numPerRow;

                if (lastRowNum === numPerRow) {
                  updateActiveItem(active, gridChildren[next], activeClass);
                }
                else {
                  updateActiveItem(active, gridChildren[prevRowIndex + lastRowIndex], activeClass);
                }
              }
            }
            else {
              // Focus on the search input
              this.sw.search.focus();
            }
          }
          break;
        case "down":
          if (active) {
            const next = activeIndex + numPerRow;
            const isNextBottomRow = next >= gridNum - numPerRow;

            if (!isBottomRow) {
              // If the next item is in the last row
              if (!isNextBottomRow) {
                updateActiveItem(active, gridChildren[next], activeClass);
              }
              else {
                // Get the number of items in the last row
                const lastRowNum = gridNum % numPerRow || numPerRow;
                // Get the index of the next item in the last row
                const lastRowIndex = Math.floor(activeIndex / lastRowNum);
                const nextIndex = gridNum - lastRowNum + lastRowIndex;

                // If the number of items in the last row is equal to the number of items in row
                if (lastRowNum === numPerRow) {
                  updateActiveItem(active, gridChildren[next], activeClass);
                }
                else {
                  updateActiveItem(active, gridChildren[nextIndex], activeClass);
                }
              }
            }
            else {
              // Go up
              this.navigate('up');
            }
          }
          break;  
        case "left":
          if (active) {
            if (!isLeftColumn) {
              updateActiveItem(active, gridChildren[activeIndex - 1], activeClass);
            }
            else if (this.loop) {
              // Get the position of the active item in the row
              const activeRowIndex = activeIndex % numPerRow;
              // Get the position of the last item in the row
              let lastRowIndex = activeIndex + (numPerRow - activeRowIndex) - 1;

              // If lastRowIndex is greater than the number of items in the grid, set it to the last item in the grid
              if (lastRowIndex > gridNum - 1) {
                lastRowIndex = gridNum - 1;
              }
              updateActiveItem(active, gridChildren[lastRowIndex], activeClass);
            }
          }
          break;   
        case "right":
          if (active) {
            if (!isRightColumn) {
              updateActiveItem(active, gridChildren[activeIndex + 1], activeClass);
            }
            else if (this.loop) {
              // Get the position of the active item in the row
              const activeRowIndex = activeIndex % numPerRow;
              // Get the position of the first item in the row
              const firstRowIndex = activeIndex - activeRowIndex;
              updateActiveItem(active, gridChildren[firstRowIndex], activeClass);
            }
          }
          break;
      }
    }
    else {
      if (direction === "down") {
        const nActive = gridChildren[0];
        nActive.classList.add(activeClass);
        // Focus on active item
        nActive.querySelector('a.link').focus();

        // For the number of items in row
        for (let i = 1; i < numPerRow + 1; i++) {
          this.navigate("right");
        }
      }
    }
  }

  /**
   * Keys events
   * @private
   * @memberof Navigation
   * @instance
   * @since 1.1.0
   * @returns {void}
   */
  keysEvents () {
    // Key down
    document.addEventListener('keydown', (e) => {
      switch (e.code) {
        case "ArrowUp":
          // Press up arrow
          this.sw.arrow.up.press(() => {
            this.navigate('up');
          });
          break;
        case "ArrowDown":
          // Press down arrow
          this.sw.arrow.down.press(() => {
            this.navigate('down');
          });
          break;
        case "ArrowLeft":
          // Press left arrow
          this.sw.arrow.left.press(() => {
            this.navigate('left');
          });
          break;
        case "ArrowRight":
          // Press right arrow
          this.sw.arrow.right.press(() => {
            this.navigate('right');
          });
          break;
        case "Escape":
          // Press Home
          this.sw.option.home.press();
          // Focus on search input
          this.sw.search.focus();
          break;
        case "Enter":
          // Press A
          this.sw.button.a.press();
          break;
        case "NumpadEnter":
          // Press A
          this.sw.button.a.press();
          break;
        case "Space":
          // Press Y
          this.sw.button.y.press();
          break;
        case "Backspace":
          // Press B
          this.sw.button.b.press();
          break;
      }
    });
    // Key up
    document.addEventListener('keyup', (e) => {
      switch (e.code) {
        case "ArrowUp":
          // Release up arrow
          this.sw.arrow.up.release();
          break;
        case "ArrowDown":
          // Release down arrow
          this.sw.arrow.down.release();
          break;
        case "ArrowLeft":
          // Release left arrow
          this.sw.arrow.left.release();
          break;
        case "ArrowRight":
          // Release right arrow
          this.sw.arrow.right.release();
          break;
        case "Escape":
          // Release Home
          this.sw.option.home.release();
          break;
        case "Enter":
          // Release A
          this.sw.button.a.release();
          break;
        case "NumpadEnter":
          // Release A
          this.sw.button.a.release();
          break;
        case "Space":
          // Release Y
          this.sw.button.y.release();
          break;
        case "Backspace":
          // Release B
          this.sw.button.b.release();
          break;
      }
    });
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
    // On focusin
    items[i].addEventListener('focusin', function () {
      // Remove the class .active
      this.classList.add('active');
    });
    // On focusout
    items[i].addEventListener('focusout', function () {
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

    // After 2 seconds, update the background
    setTimeout(() => {
      updateBackground();
    }, 2000);

    // Initialize switchController
    const switchController = new Switch(document.querySelector('.switch'));
    // Initialize navigation
    const navigation = new Navigation(switchController, {
      loop: true,
    });
  }
  catch (e) {
    console.error(e);
    setToSettingsMode();
  }
});

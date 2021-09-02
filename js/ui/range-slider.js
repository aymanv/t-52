
class RangeSlider {
  constructor(rangeInput1, rangeInput2, rangeThumb1, rangeThumb2, rangeDisplayUI1, rangeDisplayUI2, rangeFill, rangeStep, beforeSymbol, afterSymbol) {
    this.rangeInput1 = document.getElementById(rangeInput1);
    this.rangeInput2 = document.getElementById(rangeInput2);
    this.rangeThumb1 = document.getElementById(rangeThumb1);
    this.rangeThumb2 = document.getElementById(rangeThumb2);
    this.rangeDisplayUI1 = document.getElementById(rangeDisplayUI1);
    this.rangeDisplayUI2 = document.getElementById(rangeDisplayUI2);
    this.rangeFill = document.getElementById(rangeFill);
    this.rangeStep = rangeStep;
    this.beforeSymbol = beforeSymbol; // ex: $
    this.afterSymbol = afterSymbol; // ex: $
  };
  setRange1() {
    let _this = this.rangeInput1;
    let min = parseInt(_this.min);
    let max = parseInt(_this.max);
    _this.value = Math.min(_this.value, (parseInt(this.rangeInput2.value) - this.rangeStep));
    // console.log('1# this val', _this.value, 'range 2 val', parseInt(this.rangeInput1.value) + this.rangeStep);
    let percent = ((_this.value - min) / (max - min)) * 100;
    this.rangeThumb1.style.left = `${percent}%`;
    this.rangeFill.style.left = `${percent}%`;
    console.log('rangeDisplayUI1', this.rangeDisplayUI1);
    this.rangeDisplayUI1.innerText = `${this.beforeSymbol || ''}${_this.value}${this.afterSymbol || ''}`;
  };
  setRange2() {
    let _this = this.rangeInput2;
    let min = parseInt(_this.min);
    let max = parseInt(_this.max);
    _this.value = Math.max(_this.value, (parseInt(this.rangeInput1.value) + this.rangeStep));
    // console.log('2# this val', _this.value, 'range 1 val', parseInt(this.rangeInput1.value) + this.rangeStep);
    let percent = ((_this.value - min) / (max - min)) * 100;
    this.rangeThumb2.style.right = `${(100 - percent)}%`;
    this.rangeFill.style.right = `${(100 - percent)}%`;
    this.rangeDisplayUI2.innerText = `${this.beforeSymbol || ''}${_this.value}${this.afterSymbol || ''}`;
  }
  createRangeSlidersEvents() {
    this.rangeInput1.addEventListener('input', () => { this.setRange1() }, false);
    this.rangeInput2.addEventListener('input', () => { this.setRange2() }, false);
  }
}

// PRICE RANGE SLIDER
let priceRangeSlider = new RangeSlider('priceRangeInput1', 'priceRangeInput2', 'priceRangeThumb1', 'priceRangeThumb2', 'priceMinRangeUI', 'priceMaxRangeUI', 'priceRangeFill', 500, '$');
priceRangeSlider.setRange1();
priceRangeSlider.setRange2();
priceRangeSlider.createRangeSlidersEvents();


// YEAR RANGE SLIDER
let yearRangeSlider = new RangeSlider('yearRangeInput1', 'yearRangeInput2', 'yearRangeThumb1', 'yearRangeThumb2', 'yearMinRangeUI', 'yearMaxRangeUI', 'yearRangeFill', 1);
yearRangeSlider.setRange1();
yearRangeSlider.setRange2();
yearRangeSlider.createRangeSlidersEvents();


// mileage RANGE SLIDER
let mileageRangeSlider = new RangeSlider('mileageRangeInput1', 'mileageRangeInput2', 'mileageRangeThumb1', 'mileageRangeThumb2', 'mileageMinRangeUI', 'mileageMaxRangeUI', 'mileageRangeFill', 500);
mileageRangeSlider.setRange1();
mileageRangeSlider.setRange2();
mileageRangeSlider.createRangeSlidersEvents();


var makeEdmDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this._changecolor = 1;
};

makeEdmDancer.prototype = Object.create(makeDancer.prototype);
makeEdmDancer.prototype.constructor = makeBlinkyDancer;

makeEdmDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this, 500);

  //changes color every time step is called
  if (this._changecolor === 0) {
    this._changecolor = 1;
    this.$node.removeClass('edmDancerCyan');
    this.$node.addClass('edmDancerRed');
  } else if (this._changecolor === 1) {
    this._changecolor = 2;
    this.$node.removeClass('edmDancerRed');
    this.$node.addClass('edmDancerGreen');
  } else if (this._changecolor === 2) {
    this._changecolor = 3;
    this.$node.removeClass('edmDancerGreen');
    this.$node.addClass('edmDancerBlue');
  } else if (this._changecolor === 3) {
    this._changecolor = 4;
    this.$node.removeClass('edmDancerBlue');
    this.$node.addClass('edmDancerPurple');
  } else if (this._changecolor === 4) {
    this._changecolor = 5;
    this.$node.removeClass('edmDancerPurple');
    this.$node.addClass('edmDancerPink');
  } else if (this._changecolor === 5) {
    this._changecolor = 0;
    this.$node.removeClass('edmDancerPink');
    this.$node.addClass('edmDancerCyan');
  }
};

//groups all same type to same location
makeEdmDancer.prototype.groupUp = function() {
  var top = (Math.random() * 100) + 300;
  var left = (Math.random() * 600) + 800;
  this.$node.animate(
    {
      top: top,
      left: left
    }, 'slow');
};
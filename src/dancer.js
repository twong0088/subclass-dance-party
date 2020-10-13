//declare class (pseudoclassical)
var makeDancer = function(top, left, timeBetweenSteps) {
  // create properties
  this.$node = $('<span class ="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  this.step();
  this.setPosition();
};

// set prototype functions outside of class;
makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
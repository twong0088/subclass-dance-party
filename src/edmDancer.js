var makeEdmDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeEdmDancer.prototype = Object.create(makeDancer.prototype);
makeEdmDancer.prototype.constructor = makeBlinkyDancer;

makeEdmDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
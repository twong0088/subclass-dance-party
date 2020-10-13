
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
  this.$node.append("<img id='blinky' src='pic/cyan.png'/>");
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {
  // makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};

makeBlinkyDancer.prototype.groupUp = function() {
  var top = (Math.random() * 100);
  var left = (Math.random() * 300) + 375;
  this.$node.animate({
    top: top,
    left: left}, 'slow');
};
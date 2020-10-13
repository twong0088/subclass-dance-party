
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
  this.$node.append("<img id='blinky' src='pic/red.png'/>");
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {
};

//groups all same type to same location
makeBlinkyDancer.prototype.groupUp = function() {
  var top = (Math.random() * 100);
  var left = (Math.random() * 300) + 375;
  this.$node.animate({
    top: top,
    left: left}, 'slow');
};
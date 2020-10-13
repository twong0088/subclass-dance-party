var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncyDancer');
  this.$node.addClass('bounce');
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function () {

};
makeBouncyDancer.prototype.groupUp = function() {
  var top = (Math.random() * 100) + 300;
  var left = (Math.random() * 200);
  this.$node.animate({
    top: top,
    left: left}, 'slow');
};
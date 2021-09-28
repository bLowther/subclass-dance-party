var ShapeChangeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
}

var style = {
  'border-color': 'blue'
}

ShapeChangeDancer.prototype = Object.create(MakeDancer.prototype);
ShapeChangeDancer.prototype.constructor = ShapeChangeDancer;
ShapeChangeDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};
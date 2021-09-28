var ShapeChangeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer zangief"><img src="../images/Super_Zangief.png"></span>');
  this.$node = $('<img class="dancer zangief" src="../images/Super_Zangief.png">');
  this.startingCSS();
  this.step()
}

ShapeChangeDancer.prototype = Object.create(MakeDancer.prototype);
ShapeChangeDancer.prototype.constructor = ShapeChangeDancer;

ShapeChangeDancer.prototype.startingCSS = function () {
  var style = {
    'border': 'none'
  }
  this.$node.css(style);
}

ShapeChangeDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};
var ShapeChangeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('zangief');
  this.$node.prepend('<img class="zangief" src="../images/Super_Zangief.png">');
  this.$node.css('border', 'none');
  this.reverse = false;
  this.step();
}

ShapeChangeDancer.prototype = Object.create(MakeDancer.prototype);
ShapeChangeDancer.prototype.constructor = ShapeChangeDancer;

ShapeChangeDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  var width = $('body').width();
  if ((this.left + 100) < width && this.reverse === false) {
    var styleSettings = {
      left: this.left += 100
    };
    this.$node.css(styleSettings)
  }
  if ((this.left + 100) > width && reverse === false) {
    reverse = true;
    var styleSettings = {
      left: this.left -= 100
    };
    this.$node.css(styleSettings)
  }
  if ((this.left - 100) < 0 && reverse) {
    reverse = false;
    var styleSettings = {
      left: this.left += 100
    };
    this.$node.css(styleSettings)
  }
};
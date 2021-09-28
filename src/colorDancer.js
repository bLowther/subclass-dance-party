var MakeColorDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.color = ['yellow', 'blue', 'green'];
  this.colorIndex = 0;
  this.sizeChange = false;
  this.startingCSS();
  this.step();
}

MakeColorDancer.prototype = Object.create(MakeDancer.prototype);
MakeColorDancer.prototype.constructor = MakeColorDancer;

MakeColorDancer.prototype.startingCSS = function () {
  var style = {
    'border-color': 'green'
  }
  this.$node.css(style);
}

// MakeColorDancer.prototype.colorIndex = function(i) {
//   var arr = [0, 1, 2]
//   return arr[i];
// }

// this.$node .addClass and .removeClass, create different classes and cycle through with the color index

MakeColorDancer.prototype.step = function() {
  if (this.colorIndex === this.color.length - 1) {
    this.colorIndex = 0;
  } else {
    this.colorIndex++;
  }
  var color = this.color[this.colorIndex]
  if (this.sizeChange) {
    this.$node.animate({'borderWidth' : '20px' }, this.timeBetweenSteps);
    this.sizeChange = false;
  } else {
    this.$node.animate({'borderWidth' : '10px' }, this.timeBetweenSteps);
    this.sizeChange = true;
  }

  this.$node.animate({'border-color': color }, this.timeBetweenSteps);
  MakeDancer.prototype.step.call(this);
};

  // if the color index is greater than the array length
    // set the index to zero
  // else
    // increase the index by one
  // if the size bulleon is true
    // change the bulleon to false
    // increase the border width
  // else
    // change the bulleon to true
    // reset the borber width
  // change the borber color to the new array index
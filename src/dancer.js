// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // this.top = top;
  // this.left = left;

  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // this.step();
  this.setPosition(top, left);
};

  // MakeDancer.prototype = {};

  MakeDancer.prototype.step = function () {
    var newThis = this;
    setTimeout(function(){newThis.step(); }, this.timeBetweenSteps);
    // console.log('this', this, newThis)
  }

  MakeDancer.prototype.setPosition = function (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };;
    this.$node.css(styleSettings);
  }
  MakeDancer.prototype.lineUp = function () {
    var styleSettings = {
      left: '50px'
    };
    this.$node.css(styleSettings)
  };




  // use jQuery to create an HTML <span> tag
  // dancer.$node = $('<span class="dancer"></span>');

  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  // dancer.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left);

  // return dancer;

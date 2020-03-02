var Widget = {
  init(width, height) {
    this.height = height || 50;
    this.width = width || 50;
    this.$el = null;
  },
  insert($where) {
    if (this.$el) {
      this.$el
        .css({
          width: this.width + "px",
          height: this.height + "px"
        })
        .appendTo($where);
    }
  }
};

var Button = Object.create(Widget);

Button.setup = function(width, height, label) {
  this.init(width, height);
  this.label = label || "Default";
  this.$el = $("<button class='btn'>").text(this.label);
};

Button.build = function($where, callback) {
  this.insert($where);
  if (typeof callback === "function") this.$el.on("click", callback.bind(this));
  else this.$el.on("click", this.onClick.bind(this));
};

Button.onClick = function() {
  alert("Button " + this.label + " clicked");
};

$(document).ready(function() {
  var $body = $(document.body);

  var btn1 = Object.create(Button);
  btn1.setup(150, 45, "Me!");

  var btn2 = Object.create(Button);
  btn2.setup(100, 30, "You!");

  btn1.build($body, function() {
    console.log("perra");
  });
  btn2.build($body, function() {
    alert("maldita");
  });
});

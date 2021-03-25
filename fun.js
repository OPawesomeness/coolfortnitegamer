(function ($) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  var newColor = function () {
      return "rgb(" + Math.floor(Math.random() * 150 + 100) + "," + Math.floor(Math.random() * 150 + 100) + "," + Math.floor(Math.random() * 150 + 100) + ")";
  };
  var renderLoop = function () {
      // const {width, height} = {
      //     width: window.innerWidth,
      //     height: window.innerHeight
      // };
      // if (shapes.length < 20) {
      //     let num = Math.floor(Math.random() * 2);
      //     console.log(num);
      //     switch (num) {
      //         case 0:
      //             shapes.push(new Circle(width / 2, height / 2, Math.floor(Math.random() * 6)+5))
      //             break;
      //         case 1:
      //             shapes.push(new Square(width / 2, height / 2, Math.floor(Math.random() * 6)+5, Math.floor(Math.random() * 6)+5))
      //             break;
      //         default:
      //             break;
      //     }
      // }
      var canvas = $__default['default']("#render");
      // @ts-ignore
      var ctx = canvas[0].getContext("2d");
      ctx.fillStyle = newColor();
      ctx.fillRect(0, 0, canvas.width(), canvas.height());
      // for (let shape in shapes) {
      //     console.log("Drawing shape")
      //     shapes[shape].render(ctx);
      // }
  };
  $__default['default'](function () {
      $__default['default'](window).on("resize", function () {
          var canvas = $__default['default']("#render");
          canvas.height(window.innerHeight);
          canvas.width(window.innerWidth);
      });
      var canvas = $__default['default']("#render");
      canvas.height(window.innerHeight);
      canvas.width(window.innerWidth);
      setInterval(renderLoop, 1 / 60);
  });

}($));
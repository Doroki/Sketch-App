import Tool from "../classes/tool_class.js"; // Class of tools

const Spray = new Tool('#Brush', '../my-icons-collection/svg/001-color-picker.png');

Spray.getRandomPosition = function (paintWidth) {
    const randomAngle = Math.random() * 360;
    const randomRadius = Math.random() * paintWidth;

    return {
        angle: Math.cos(randomAngle) * randomRadius,
        radius: Math.sin(randomAngle) * randomRadius
    };
}

Spray.paint = function(e, paintWidth) {

        for (let i = 0; i < 50; i++) {
            var offset = Spray.getRandomPosition(paintWidth);
            var x = e.offsetX + offset.angle,
                y = e.offsetY + offset.radius;

            // const pleceToDraw = [x, y, 1, 1];
            return [x, y, 1, 1];

            // Sketch.changeProperties({drawStyle: "rect", rect: pleceToDraw});
        }
    
}

Spray.use = function (e, canvasCtx, paintWidth) {

    canvasCtx.changeProperties({drawStyle: "rect", rect: function(e, paintWidth){
        Spray.paint(e, paintWidth);
    }});
    // setInterval(this.paint(e, Sketch, paintWidth), 16);
};

export default Spray;
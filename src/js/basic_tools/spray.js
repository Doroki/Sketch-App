import Tool from "../classes/tool_class.js"; // Class of tools

const Spray = new Tool('#Spray', '../my-icons-collection/svg/001-color-picker.png');

Spray.getRandomPosition = function (spraySize) {
    const randomAngle = Math.random() * 360;
    const randomRadius = Math.random() * spraySize;

    return {
        angle: Math.cos(randomAngle) * randomRadius,
        radius: Math.sin(randomAngle) * randomRadius
    };
}

Spray.paint = function(e, canvas) {

    const spraySize = canvas.ctx.lineWidth;
    const density = 60 * (spraySize/10);

        for (let i = 0; i < density; i++) {

            const offset = Spray.getRandomPosition(spraySize);
            const x = offset.angle + e.offsetX;
            const y = offset.radius + e.offsetY;

            canvas.ctx.fillRect(x, y, 1, 1); 
        }
}

Spray.active = function (event, canvas) {

    canvas.bindEvents();
    canvas.drawMethod = Spray.paint;
};

Spray.inactive = function (e, canvas) {

    canvas.unbindEvents();
    canvas.drawMethod = null;
};

export default Spray;
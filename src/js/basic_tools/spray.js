import Tool from "../classes/tool_class.js"; // Class of tools

class SprayTool extends Tool {

    getRandomPosition(spraySize) {
        const randomAngle = Math.random() * 360;
        const randomRadius = Math.random() * spraySize;

        return {
            angle: Math.cos(randomAngle) * randomRadius,
            radius: Math.sin(randomAngle) * randomRadius
        };
    }

    paint(e) {
        const spraySize = this.canvas.ctx.lineWidth;
        const density = 60 * (spraySize / 5);

        for (let i = 0; i < density; i++) {

            const offset = this.getRandomPosition(spraySize);
            const x = offset.angle + e.offsetX;
            const y = offset.radius + e.offsetY;

            this.canvas.ctx.fillRect(x, y, 1, 1);
        }
    }

    active() {

        this.canvas.bindEvents();
        this.canvas.drawMethod = this.paint.bind(this);
    };

    inactive() {

        this.canvas.unbindEvents();
        this.canvas.drawMethod = null;
    };
}

export default SprayTool;
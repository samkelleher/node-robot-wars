/**
 * A warzone, or battlefield.
 */
export default class Warzone {

    constructor({width, height}) {
        this.height = height;
        this.width = width;
    }

    /**
     * Place the robots in the warzone.
     * @param robots
     * @returns {Warzone}
     */
    placeRobots(robots) {

        this.robots = robots.map(robot => robot.placeOnWarzone(this));
        return this;
    }

    /**
     * Executes the battle, moving the robots about following their each individual instructions.
     * @returns {Warzone}
     */
    goToBattle() {

        let hasMovement = true;

        while (hasMovement) {
            hasMovement = this.moveAllRobots();
        }

        return this;
    }

    /**
     * Moves each robot one sequence.
     * @returns {boolean} - Indicates if any robots on the battle field moved.
     */
    moveAllRobots() {
        let movementInRound = false;
        this.robots.forEach((robot) => {
            const robotMoved = robot.executeNextInstruction();
            if (robotMoved) {
                movementInRound = true;
            }
        });

        return movementInRound;
    }

    /**
     * Return as JSON reprentation of the positions and heading of the robots in the warzone.
     * @returns {Array}
     */
    toJSON() {
        return this.robots.map(robot => robot.toJSON());
    }

}

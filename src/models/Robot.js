import Headings from '../constants/Headings';
import Instructions from '../constants/Instructions';
import Debug from 'debug';

const debug = Debug('App:Robot');

/**
 * A battle robot.
 */
export default class Robot {

    constructor({
        x, y, heading, instructions
    }) {

        this.x = x;
        this.y = y;
        this.heading = heading;
        this.instructions = instructions;
    }

    /**
     * Indicates if this robot has any remaining instructions.
     * @returns {boolean}
     */
    hasInstructions() {
        return this.instructions.length > 0;
    }

    /**
     * Places the robot on a given warzone. This allows the robot to sense the edges of the zone.
     * @param warzone
     * @returns {Robot}
     */
    placeOnWarzone(warzone) {
        this.warzone = warzone;
        return this;
    }

    /**
     * Turn the robot left.
     * @returns {Robot}
     */
    moveLeft() {
        const originalLocation = this.getNavigationString();

        switch (this.heading) {
            case Headings.North:
                this.heading = Headings.West;
                break;
            case Headings.South:
                this.heading = Headings.East;
                break;
            case Headings.East:
                this.heading = Headings.North;
                break;
            case Headings.West:
                this.heading = Headings.South;
                break;
        }

        debug(`Turned Left from ${originalLocation} to ${this.getNavigationString()}`);

        return this;
    }

    /**
     * Turn the robot right.
     * @returns {Robot}
     */
    moveRight() {
        const originalLocation = this.getNavigationString();
        switch (this.heading) {
            case Headings.North:
                this.heading = Headings.East;
                break;
            case Headings.South:
                this.heading = Headings.West;
                break;
            case Headings.East:
                this.heading = Headings.South;
                break;
            case Headings.West:
                this.heading = Headings.North;
                break;
        }

        debug(`Turned Right from ${originalLocation} to ${this.getNavigationString()}`);

        return this;
    }

    /**
     * Make the robot take one step forward.
     * @returns {Robot}
     */
    moveFoward() {
        const originalLocation = this.getNavigationString();
        switch (this.heading) {
            case Headings.North:
                this.y += 1;
                debug(`Moved North from ${originalLocation} to ${this.getNavigationString()}`);
                break;
            case Headings.South:
                this.y -= 1;
                debug(`Moved South from ${originalLocation} to ${this.getNavigationString()}`);
                break;
            case Headings.East:
                this.x += 1;
                debug(`Moved East from ${originalLocation} to ${this.getNavigationString()}`);
                break;
            case Headings.West:
                this.x -= 1;
                debug(`Moved West from ${originalLocation} to ${this.getNavigationString()}`);
                break;
        }

        return this;

    }

    /**
     * Get a string that indicate the position of the robot on the map.
     * @returns {string}
     */
    getNavigationString() {
        return `${this.x} ${this.y} ${this.heading.substring(0)}`;
    }

    /**
     * If an instruction is available, the robot will execute it.
     * @returns {boolean} - Indictes if the robot made an instruction or not.
     */
    executeNextInstruction() {
        if (!this.hasInstructions()) {
            return false;
        }

        const currentInstruction = this.instructions.shift();

        if (currentInstruction === Instructions.Left) {
            this.moveLeft();
        } else if (currentInstruction === Instructions.Right) {
            this.moveRight();
        } else if (currentInstruction === Instructions.Move) {
            this.moveFoward();
        }

        return true;

    }

    /**
     * Return a JSON represenation of the robots position and heading.
     * @returns {{x: (number), y: (number), heading: (string)}}
     */
    toJSON() {
        return {
            x: this.x,
            y: this.y,
            heading: this.heading
        };
    }

}


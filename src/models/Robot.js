import Headings from '../constants/Headings';
import Instructions from '../constants/Instructions';

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

    placeOnWarzone(warzone) {
        this.warzone = warzone;
        return this;
    }

    moveLeft() {
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
    }

    moveRight() {
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
    }

    moveFoward() {

        switch (this.heading) {
            case Headings.North:
                this.y += 1;
                break;
            case Headings.South:
                this.y -= 1;
                break;
            case Headings.East:
                this.x += 1;
                break;
            case Headings.West:
                this.x -= 1;
                break;
        }

    }

    executeNextInstruction() {
        if (!this.hasInstructions()) {
            return false;
        }

        const currentInstruction = this.instructions.pop();

        if (currentInstruction === Instructions.Left) {
            this.moveLeft();
        } else if (currentInstruction === Instructions.Right) {
            this.moveRight();
        } else if (currentInstruction === Instructions.Move) {
            this.moveFoward();
        }

        return true;

    }

    toJSON() {
        return {
            x: this.x,
            y: this.y,
            heading: this.heading
        };
    }

}


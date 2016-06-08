/**
 * A warzone, or battlefield.
 */
export default class Warzone {

    constructor({width, height, robots}) {
        this.height = height;
        this.width = width;
        this.robots = robots;
    }

    goToBattle() {
        return this;
    }

    toJSON() {
        return [{
            x: 1,
            y: 3,
            heading: 'North'
        }];
    }

}

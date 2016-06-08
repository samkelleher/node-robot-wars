/**
 * A warzone, or battlefield.
 */
export default class Warzone {

    constructor({width, height}) {
        this.height = height;
        this.width = width;
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

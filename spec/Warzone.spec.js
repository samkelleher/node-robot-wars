import request from 'superagent';

describe('Can handle test data.', () => {

    it('Validates data submitted', (done) => {

        const mapWidth = 5;
        const mapHeight = 5;

        request
            .post(`http://localhost:8080/warzone/${mapWidth}/${mapHeight}`)
            .send({
                boo: 'hoo'
            })
            .end((err, res) => {

                expect(err).not.toBe(null);
                expect(err.status).toBe(400);

                done();

            });

    });

    it('Validates map dimensions', (done) => {

        const mapWidth = 'boo';
        const mapHeight = 'hoo';

        request
            .post(`http://localhost:8080/warzone/${mapWidth}/${mapHeight}`)
            .send({
                boo: 'hoo'
            })
            .end((err, res) => {

                expect(err).not.toBe(null);
                expect(err.status).toBe(400);

                done();

            });

    });

    it('Requires robots.', (done) => {

        const mapWidth = 5;
        const mapHeight = 5;

        request
            .post(`http://localhost:8080/warzone/${mapWidth}/${mapHeight}`)
            .send([])
            .end((err, res) => {

                expect(err).not.toBe(null);
                expect(err.status).toBe(400);

                done();

            });

    });

    it('Responds to an API call', (done) => {

        const mapWidth = 5;
        const mapHeight = 5;

        request
            .post(`http://localhost:8080/warzone/${mapWidth}/${mapHeight}`)
            .send([
                {
                    start: {
                        x: 1,
                        y: 2,
                        heading: 'North'
                    },
                    instructions: ['Left', 'Move', 'Left', 'Move', 'Left', 'Move', 'Left', 'Move', 'Move']
                },
                {
                    start: {
                        x: 3,
                        y: 3,
                        heading: 'East'
                    },
                    instructions: ['Move', 'Move', 'Right', 'Move', 'Move', 'Right', 'Move', 'Right', 'Right', 'Move']
                }
            ])
            .end((err, res) => {

                expect(err).toBe(null);
                expect(res).not.toBe(null);

                expect(res.status).toBe(200);
                expect(res.type).toBe('application/json');

                const body = res.body;

                expect(body.length).toBe(2);

                let firstRobot = null;
                let secondRobot = null;

                if (body.length === 2) {
                    firstRobot = body[0];
                    secondRobot = body[1];
                }

                expect(firstRobot).not.toBe(null);
                expect(secondRobot).not.toBe(null);

                firstRobot = firstRobot || {};
                secondRobot = secondRobot || {};

                expect(firstRobot.x).toBe(1);
                expect(firstRobot.y).toBe(3);
                expect(firstRobot.heading).toBe('North');

                expect(secondRobot.x).toBe(5);
                expect(secondRobot.y).toBe(1);
                expect(secondRobot.heading).toBe('East');

                //console.log(res.body);

                done();

            });


    });
});

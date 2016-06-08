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
                        x: 1,
                        y: 3,
                        heading: 'North'
                    },
                    instructions: ['Move', 'Move', 'Right', 'Move', 'Move', 'Right', 'Move', 'Right', 'Right', 'Move']
                }
            ])
            .end((err, res) => {

                if (err) {
                    console.log(err);
                }

                expect(err).toBe(null);
                expect(res).not.toBe(null);

                done();

            });


    });
});

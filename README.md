# Node Robot Wars
> A Hapi API for calculating positions of robots on a map.


## Getting Started

This is a Node v6 written in ES6 application that runs a [HAPI](http://hapijs.com/) server. For the first time you
will need to install the project depdencies by running `npm install` in the project directory. Because the code is using
ES6 features, items not supported by Node6 (such as module imports) are automatically transpiled by [Babel](https://babeljs.io/).

```
$ npm start
```

When you start the API, you can browse to [http://localhost:8080/](http://localhost:8080/) where you will be able
to see the described API endpoint. The API is listening for POST requests made to `http://localhost:8080/warzone/{width}/{height}`.
See the self-generated documentation for a guide on the object format, as well as `Warzone.spec.js` for details on how it's called.

```
$ npm test
```

By executing the test, a [Jasmine](http://jasmine.github.io/) spec is executed which makes HTTP calls to the API, testing
things like payload and request validation handling. It also tests the described use case and test data to verify the output
matches what is expected. All request parameters are described by using [Joi](https://github.com/hapijs/joi) which allows
schema to be tested and defined exactly.

## Story
A fleet of hand built robots are due to engage in battle for the annual “Robot Wars”
competition. Each robot will be placed within a rectangular battle arena and will
navigate their way around the arena using a built in computer system.

A robots location and heading is represented by a combination of x and y coordinates
and a letter representing one of the four cardinal compass points. The
arena is divided up into a grid to simplify navigation. An example position might be `0,
0, N` which means the robot is in the bottom left corner and facing North.

Build an API that the competition organisers can integrate with in order to move and
navigate the robot. The only prerequisite is the API should be written in Node JS and
responses should be in JSON format. How you take inputs and co-ordinates is
entirely up to you.

The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ make the robot spin 90 degrees to
the left or right respectively without moving from its current spot while ‘M’ means
move forward one grid point and maintain the same heading. Assume that the
square directly North from (x, y) is (x, y+1).

### Input

The first line of input is the upper-right coordinates of the arena, the lower-left
coordinates are assumed to be (0, 0).

The rest of the input is information pertaining to the robots that have been deployed.
Each robot has two lines of input - the first gives the robot’s position and the second
is a series of instructions telling the robot how to move within the arena.

The position is made up of two integers and a letter separated by spaces,
corresponding to the x and y coordinates and the robot’s orientation. Each robot will
finish moving sequentially, which means that the second robot won’t start to move
until the first one has finished moving.

### Output

The API response should be JSON containing each robots final coordinates and
heading.

## Acceptance criteria

In order to confirm your API is working correctly, we have provided some test input
and output for your use. Implement these details however you consider most
appropriate.

Test input:
```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

Expected output:
```
1 3 N
5 1 E
```

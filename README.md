# Realself Interview

Tech
  - Node
  - Typescript

The jusified code in in the class TextFormatter in the `scripts/text-formatter.ts` file.

As descripted in the problem. The code will justify the words based on the length given.
If the spaces cannot be evenly distributed, then extra spaces will be added to words starting from the left-side.

There is some basic error handling in there that will throw errors:
  - If the string is just spaces
  - If the length given is not big enough to create a valid sentence without removing characters or combinings words without a space

# Steps to run
Make sure Node and NPM are up to date
Clone in the repo
```sh
$ cd realself-interview
$ npm i
$ npm run build
$ npm run exe:justify
```
All the justify "tests" from the file `scripts/justify.ts` will run.

# Testing
Checkout the file in `scripts/justify.ts`.
You can insert in your own tests in there.

Go ahead and use the runJusifyTest() to help format the tests and potential errors you might see if you input incorrect info
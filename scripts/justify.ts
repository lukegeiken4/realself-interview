import { TextFormatter } from './text-formatter';

var formatter = new TextFormatter();

/**
 * A simple try/catch formatter to checkout the tests you want to run
 * @param line 
 * @param length 
 */
function runJusifyTest(line: string, length: number): void {
    console.log('----------');
    console.log(`justifySingleLine(\'${line}\', ${length})`);
    try {
        var justified = formatter.justifySingleLine(line, length);
        console.log(justified);
    } catch (e) {
        console.log(e);
    }
}

/** Toss in whatever tests you want to run here.  */
runJusifyTest('The quick brown fox jumps over the lazy dog.', 52);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 53);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 54);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 55);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 56);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 57);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 58);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 59);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 60);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 61);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 62);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 63);
runJusifyTest('The quick brown fox jumps over the lazy dog.', 64);

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

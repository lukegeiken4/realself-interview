/**
 * Text formatter class
 */
export class TextFormatter {
    /**
     * Creates a single line string buffer where 1st character is at 0 index of buffer 
     * and last character is at given length
     * @param line The string to build into the buffer
     * @param length The index the last character is on
     */
    public justifySingleLine(line: string, length: number): string {
        // Lets format the line better to make sure we are only handling the words and no exta spaces
        let lineArr = line.replace(/\s+/g,' ').trim().split(' ');

        // If line given is just an empty string
        if(lineArr.length < 1 || lineArr[0] === '') {
            throw new Error('Line param given is not valid');
        }

        // If length must be min [length-of-all-characters] + ([number-of-words] - 1) in order to make it a valid sentence.
        var numCharacters = 0;
        lineArr.forEach((str: string) => {
            numCharacters += str.length;
        });
        var minLenth = numCharacters + (lineArr.length - 1);
        if(length < minLenth) {
            throw new Error('Length given is not long enough');
        }

        // Time to generate the string
        // Setup the properties to figure out the spaces needed
        var extraSpaces = length - numCharacters;
        var wordSeparations = (lineArr.length - 1);

        var justifiedString = '';
        lineArr.forEach((word: string) => {
            // How many spaces to use after this word
            var spacesToUse: number =  extraSpaces !== 0 
                ? Math.floor(extraSpaces / wordSeparations) + ( extraSpaces % wordSeparations > 0 ? 1 : 0) 
                : 0;
            
            // Create the empty space string
            var emptyString = '';
            for(var i = 0; i < spacesToUse; i++) {
                emptyString += ' ';
            };
            justifiedString += word + emptyString;

            // Remove the used spaces/word from the properties
            extraSpaces -= spacesToUse;
            wordSeparations--;
        });

        return justifiedString;
    }
}

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file-based tasks')
  .version('0.8.0');

program
  .command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
      }

      // Your original logic with adjustments
      let count = 0;
      let inWord = false;

      for (let i = 0; i < data.length; i++) {
        if (data[i] === ' ' || data[i] === '\n' || data[i] === '\t') {
          if (inWord) {
            count++; // End of a word
            inWord = false;
          }
        } else {
          inWord = true; // Inside a word
        }
      }

      // Add the last word if the file doesn't end with a space/newline
      if (inWord) {
        count++;
      }

      console.log(`The file contains ${count} words.`);
    });
  });

program.parse();

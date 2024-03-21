function wordTracker(input) {
    
        let neededlineAsArray = input.shift().split(" ");
        let list = new Map();
      
        for (let neededWord of neededlineAsArray) {
          list.set(neededWord, 0);
          for (let wordToCheck of input) {
            if (neededWord === wordToCheck) {
              let currentOccurrences = list.get(wordToCheck);
              currentOccurrences++;
              list.set(wordToCheck, currentOccurrences);
            }
          }
        }
        let sorted = Array.from(list).sort((a, b) => b[1] - a[1]);
        for (let word of sorted) {
          console.log(`${word[0]} - ${word[1]}`);
        }
      

    
}
wordTracker(['this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );
//wordTracker();
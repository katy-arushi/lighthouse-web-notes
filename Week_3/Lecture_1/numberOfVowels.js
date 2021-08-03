const numberOfVowels = (str) => {

   const vowels = "aeoiu"
   let counter = 0;

   for(const letter of str){
       if(vowels.includes(letter)){
           counter += 1;
       }
   }

   return counter;
}

module.exports = numberOfVowels
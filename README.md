# Class Exercise 4: Word Analyzer App
## How It Works?
1. The word input by user will be assessed using for loop to check on whether it is a vowel or a consonant.
2. The vowels and consonants alphabets has been defined first.
3. Through the loop, each vowel will be counted based on the vowels defined earlier and same goes for consonants.
4. While for the character, it will be counted using .length of the letter entered.


` for(let letter of str.toLowerCase()){

        if (vowels.includes(letter)){
          vowel_count++;
        }
        
        else if (consonants.includes(letter)){
          consonant_count++;
        }
        
        if (letter != ' '){
          character_count += letter.length;
        }
   }`
   
5. The application will return all number of consonants, vowels, and characters at the same time.

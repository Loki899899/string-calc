# String Calculator

Allow the Add method to handle an unknown amount of numbers
————————————————————————————————

Add method handles new lines between numbers (instead of commas).  
the following input is ok: “1\n2,3” (will equal 6)  
——————————————————————————————-

Support different delimiters  
to change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .  
the first line is optional. all existing scenarios should still be supported
————————————————————————————————

Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.  
if there are multiple negatives, show all of them in the exception message.
————————————————————————————————

Numbers bigger than 1000 will be ignored, so adding 2 + 1001 = 2
————————————————————————————————

Delimiters can be of any length with the following format: “//[delimiter]\n” for example: “//[***]\n1***2***3” should return 6
————————————————————————————————

Allow multiple delimiters like this: “//[delim1][delim2]\n” for example “//[*][%]\n1*2%3” should return 6.
————————————————————————————————

Also handles multiple delimiters longer than 1 char

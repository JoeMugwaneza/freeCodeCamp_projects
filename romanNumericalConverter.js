function convertToRoman(num) {
    //build object that reference both numerical and roman numbers
    const romanNumericDict = {1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX", 10:"X", 20:"XX", 30:"XXX", 40:"XL", 50:"L", 60:"LX", 70:"LXX", 80:"LXXX", 90:"XC", 100:"C", 200:"CC", 300:"CCC", 400:"CD", 500:"D", 600:"DC", 700:"DCC", 800:"DCCC", 900:"CM", 1000:"M", 2000:"MM", 3000:"MMM"};

    //converting numbers into string so that split method can be applied
    var numbers = num.toString();
    var digits = []; //able to store numbers

//we will take the digit, example 125, we will store, 100, 20, 5 which constitute 125 for ease roman reading
    for (let i = 0; i < numbers.length; i++){
        digits.push(+numbers.charAt(i)*Math.pow(10, (numbers.length -1) - i));
      }

    var romans = []; //store the chucks of digits that will be saved as roman
    for (let j = 0; j <digits.length; j++){
        romans.push(romanNumericDict[digits[j]]); //look through the dictionary of numbers and romans and return corresponding roman numbers, e.g. 50 return \"L"
    };

    return romans.join(""); //join the return roman numbers together

   }
   
   console.log(convertToRoman(651));
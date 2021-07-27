function telephoneCheck(str) {
    //define variable that will check for us and return true if phone number is valid or return false if not
    var validRegex = /(^1?\s?)(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/gm;

    return validRegex.test(str); // if test pass, it will return true or false if not
  }
  
  console.log(telephoneCheck("555-555-5555"));

// explanation of regular expression used
// ^1? phone number either start with 1 or not
//\s? between 1 and following number, there can be whitespace or not
//\(open paranthesis
//\) closed paranthesis
//(\(\d{3}\) | \d{3}) the following three digits can have paranthesis or not
//(\s|-) can be followed by whitespace or - && both can be there or not
//d{3} only 3 digits
//\d{4$} end with 4 digits only
// /gm G stand for global which search in all string M stand for multiple lines

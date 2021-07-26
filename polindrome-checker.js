function palindrome(str) {
    //checking non alphanumericals
    var searchWithRegex = /[^a-zA-Z0-9]/gi;

    //remove special cases and make an array of characters in lowercases
    var needPartOfInput = str.replace(searchWithRegex, "").toLowerCase().split("");

    // return true/false if needPartOfInput variable is matching with its reversed version
    return needPartOfInput.join("") === needPartOfInput.reverse().join("");

}
console.log(palindrome("five|\_/|four"));
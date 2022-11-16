function introduction (name) {
    return 'Hi, my name is 
    ${name} }

function introductionWithLanguage (name,language) {
    console.log ('Hi my name is 
    ${name} and I am learning to program in
     ${language}.')
}
function introductionWithLanguage (name = "introductionWithLanguageOptional",
language = "JavaScript") {
    console.log('Hi, my name is 
    ${name} 
    and I am learning to program in
     ${language}.')
}
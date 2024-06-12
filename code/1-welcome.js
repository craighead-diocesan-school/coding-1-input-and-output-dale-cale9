// ####################################
// ######## ----- Welcome ----- #######
// ####################################

function welcome() {
  let name = prompt ('what is your name')

  alert('We want to know if you like programming!')

 
  let answer = prompt('Do you like programming ' + name + '?')

  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
}

function questionnaire() {
  let name = prompt ('what is your name?')
  alert('Hello ' + name )

  let food = prompt('What did you have for breakfast ' + name + '?')
alert('Amazing, I love ' + food + ' for breakfast')

let colour = prompt ('what is your favourite colour ' + name + '?')
alert('wonderful, I like ' + colour +  ' too!' )

let age = prompt('How old are are you ?' )
age = Number (age)
age = age + 1
alert ('you will be ' + age + ' next year!')
}

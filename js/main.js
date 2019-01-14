let raceNumber = Math.floor(Math.random() * 1000);
const regEarly = true;
const age = 18;

if (regEarly && age > 18) {
  raceNumber += 1000;
  console.log(`Race will begin at 9:30am. Your registration number is ${raceNumber}.`)  
} else if (!regEarly && age > 18) {
  console.log(`Race will begin at 11:00am. Your registration number is ${raceNumber}.`)
} else if (age < 18) {
  console.log(`Race will begin at 12:30pm. Your registration number is ${raceNumber}.`)
} else {
  console.log('Please see the registration desk. Thanks!')
}
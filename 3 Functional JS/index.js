

let color_lawn = {
  title:"lawn",
  color:"#00FF00",
  rating:0
}

var rateColor = function(color, rating){
  return Object.assign({}, color, {rating:rating})
}

console.log(rateColor(color_lawn, 5).rating)
console.log(color_lawn.rating)

//or do the ES7 way with spread
/* doesn't work in node 6.9
const rateColor = (color, rating) => ({
  ...color,
  rating
})

console.log(color_lawn.rating)
*/

//array concatination will be mutable if you use push.  You've got to use concat instead, or the spread operator.
let list = [
    { title: "Rad Red"},
    { title: "Lawn"},
    { title: "Party Pink"}
]

list2 = [...list, "Nauseaus Green"];
console.log(list);
console.log(list2);


///Pure functions -
//an impure function.  It doesn't take args and it doesn't return a value.  it also changes variables outside of scope
var frederick = {name: "frederick Douglass", canread:false, canwrite:false}

function selfEducate() {
  frederick.canread = true;
  frederick.canwrite = true;
  return frederick
}

//selfEducate()
console.log(frederick);

//Pure functions are testable and don't change anything about the world.  Everything it needs is from params.  DOESN'T change the object passed in.
pureSelfEducate = person => ({
     name:person.name,
     canread:true,
     canwrite:true
 })

console.log(pureSelfEducate(frederick))
console.log(frederick)


//predicate functions - only take a bool in as their argument.  Filter, the built in array method is a predicate function (include/disclude = true,false)
const schools = [
  "Yorktown",
  "Washington & Lee",
  "Wakefield"
]
const filterSchools = schools.filter(school => school[0] === "W")
console.log(filterSchools)

const cutSchools = (cut,list) => list.filter(school => school !== cut)

console.log(cutSchools("Washington & Lee", schools).join("*"))



//Array map function - takes a callback, and runs the callback on each element in the Array
const highSchools = schools.map(school=>`${school} High School`);
console.log(highSchools);

//now one liner a map function to change a name of a school
let oschools = [
    { name: "Yorktown"},
    { name: "Stratford" },
    { name: "Washington & Lee"},
    { name: "Wakefield"}
]
const editName = (oldName, name, arr) => arr.map(item=>(item.name === oldName) ? {name: name} : item)
console.log(editName("Wakefield", "Boomtown", oschools))


//Reduce: takes an array and original value.  Reduces an array to a single number or object.  takes a callback and an original starting value.
const ages = [21,18,42,40,64,63,34];
console.log(ages)
console.log(ages.reduce( (max,age) => age > max ? age : max, 0))


//Higher order functions
//first up, a function that takes functions as arguments
const invokeIf = (condition, ifTrue, ifFalse) => condition ? ifTrue() : ifFalse()
const showWelcome = () => console.log("Welcome!")
const showUnauth = () => console.log("Unauthorized.")
invokeIf(true, showWelcome, showUnauth)
invokeIf(false, showWelcome, showUnauth)

//Currying functions - higher order.  They hold onto data so that work can be done later using that data
const userLogs = userName => message => console.log(`${userName} -> ${message}`)
const log = userLogs("skankhunt42")
log("attemped to troll jennifer rodrigez")

//Recursion - functions callign themselves.
const countdown = (value,fn) =>{
  fn(value)
  return (value>0) ? countdown(value-1,fn) : value
}
countdown(20, value => console.log(`${value}`))

//or recursion to navigate a data structure like the dom or objects
var dan = {
    type: "person",
    data: {
      gender: "male",
      info: {
        id: 22,
        fullname: {
          first: "Dan",
          last: "Deacon"
        }
      }
    }
  }
const deepPick = (fields, obj = {}) => {
  [first, ...remaining] = fields.split('.')
  return (remaining.length > 0) ? deepPick(remaining.join("."), obj[first]) : obj[first]
}
console.log(deepPick("type", dan))
console.log(deepPick("data.info", dan))


//Composition - most functional programs have many small pure functions that are chained together.  This is composition, like strings
const template = 'hh:mm:ss tt'
const clockTime = template.replace('hh', "03")
                  .replace('mm', "23")
                  .replace('ss', "40")
                  .replace('tt', "ET")
console.log(clockTime)

// sometimes composition will pipe the output of one function to another func2(func1(val)), but instead do this:

const bothCrappyWay =
const both= compose(civHours, appendAMPM)
const compose = (...fns)=>{
  (arg) => fns.reduce((composed,f) => f(composed), arg)
}

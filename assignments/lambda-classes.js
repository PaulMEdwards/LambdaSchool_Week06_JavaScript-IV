// CODE here for your Lambda Classes

console.log("==================");
console.log("lambda-classes.js");
console.log("==================");

console.log("\n");  //Double blank line

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
  }
  speak(extra='') {
    console.log(`Hello, my name is ${this.name}; I am from ${this.location}.`+extra);
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }
  generateGrade() {
    let r = random(-100,100);
    return r;
  }
  addGrade(student, grade) {
    student.grade = grade;
  }
}

class TeamLead extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(slackChannel) {
    console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}...`);
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = 0 | attributes.grade;
  }
  listSubjects() {
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun the Sprint Challenge on ${subject}.`);
  }
  graduate() {
    if (this.grade > 70) {
      return true;
    } else {
      return false;
    }
  }
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const paceEllsworth = new Instructor({
  name: `Pace Ellsworth`,
  age: 36,
  location: `Mesa, Arizona`,
  specialty: `Video Collaboration`,
  favLanguage: `JavaScript`,
  catchPhrase: `How're you doin' today?`
});

const johnORourke = new TeamLead({
  name: `John O'Rourke`,
  age: 35,
  location: `Knoxville, Tennessee`,
  gradClassName: `Web15`,
  favInstructor: `Brendan Eich`,
  specialty: `HTML5 & CSS3`,
  favLanguage: `Less`,
  catchPhrase: `Does anyone want me to open up a quick zoom before lecture to discuss the TK material? We've kind of been using our standup for that. I don't have any special input, but I'm good with whatever!`
});

const raymondPugh = new TeamLead({
  name: `Ray Pugh`,
  age: 38,
  location: `Milwaukee, Wisconsin`,
  gradClassName: `Web17`,
  favInstructor: `James Gosling`,
  specialty: `Back-End Programming`,
  favLanguage: `Java`,
  catchPhrase: `Emoji for attendance! If you haven’t added me as collaborator for your latest project please do so now!`
});

const jaredParrish = new TeamLead({
  name: `Jared Parrish`,
  age: 35,
  location: `Eugene, Oregon`,
  gradClassName: `Web19`,
  favInstructor: `Linus Torvalds`,
  specialty: `Full Stack Web Development`,
  favLanguage: `React.js & Node.js`,
  catchPhrase: `Everyone please double check that your code is up in an editor & in the browser, and that you've submitted a Pull Request for the assignment!`
});

const paulMEdwards = new Student({
  name: `Paul M Edwards`,
  age: 40,
  location: `Los Angeles / Orange County, California`,
  previousBackground: `Senior Software Quality Assurance, specializing in Test Automation`,
  className: `WebPt9`,
  favSubjects: ['React', 'TypeScript', 'Algorithms']
});

console.log(`Instructor:`);
console.log(`-----------`);
paceEllsworth.speak(`\nMy specialty is ${paceEllsworth.specialty}.\n`+paceEllsworth.catchPhrase);

console.log("\n");  //Double blank line

console.log(`Team Lead:`);
console.log(`----------`);
johnORourke.speak(`\nMy specialty is ${johnORourke.specialty}.\n`+johnORourke.catchPhrase+`\nI graduated in ${johnORourke.gradClassName}.\nMy favorite instructor was ${johnORourke.favInstructor}.`);

console.log("\n");  //Double blank line

console.log(`Team Lead:`);
console.log(`----------`);
raymondPugh.speak(`\nMy specialty is ${raymondPugh.specialty}.\n`+raymondPugh.catchPhrase+`\nI graduated in ${raymondPugh.gradClassName}.\nMy favorite instructor was ${raymondPugh.favInstructor}.`);

console.log("\n");  //Double blank line

console.log(`Team Lead:`);
console.log(`----------`);
jaredParrish.speak(`\nMy specialty is ${jaredParrish.specialty}.\n`+jaredParrish.catchPhrase+`\nI graduated in ${jaredParrish.gradClassName}.\nMy favorite instructor was ${jaredParrish.favInstructor}.`);

console.log("\n");  //Double blank line

console.log(`Student:`);
console.log(`--------`);
paulMEdwards.speak(`\nI'm part of the ${paulMEdwards.className} cohort.\nMy background is ${paulMEdwards.previousBackground}.`);

console.log(`\n================\n`);

let weeks = [`WEBPT9 "A" Week 1, Unit 1: User Interface and Git`,
`WEBPT9 "B" Week 2, Unit 1: Web Fundamentals, Sprint 1: User Interface and Git`,
`WEBPT9 "A" Week 3, Unit 1: Web Fundamentals, Sprint 2: Advanced CSS`,
`WEBPT9 "B" Week 4, Unit 1: Web Fundamentals, Sprint 2: Advanced CSS`,
`WEBPT9 "A" Week 5, Unit 1: Web Fundamentals, Sprint 3: JavaScript Fundamentals`,
`WEBPT9 "B" Week 6, Unit 1: Web Fundamentals, Sprint 3: JavaScript Fundamentals`,
`WEBPT9 "A" Week 7, Unit 1: Web Fundamentals, Sprint 4: WEB Unit 1 Build`,
`WEBPT9 "B" Week 8, Unit 1: Web Fundamentals, Sprint 4: WEB Unit 1 Build`,
`WEBPT9 "A" Week 9, Unit 2: Web Applications I, Sprint 5: Applied JavaScript`,
`WEBPT9 "B" Week 10, Unit 2: Web Applications I, Sprint 5: Applied JavaScript`,
`WEBPT9 "A" Week 11, Unit 2: Web Applications I, Sprint 6: Intro to React`,
`WEBPT9 "B" Week 12, Unit 2: Web Applications I, Sprint 6: Intro to React`,
`WEBPT9 "A" Week 13, Unit 2: Web Applications I, Sprint 7: Single Page Applications`,
`WEBPT9 "B" Week 14, Unit 2: Web Applications I, Sprint 7: Single Page Applications`,
`WEBPT9 "A" Week 15, Unit 2: Web Applications I, Sprint 8: WEB Unit 2 Build`,
`WEBPT9 "B" Week 16, Unit 2: Web Applications I, Sprint 8: WEB Unit 2 Build`,
`WEBPT9 "A" Week 17, Unit 3: Web Applications II, Sprint 9: Advanced React`,
`WEBPT9 "B" Week 18, Unit 3: Web Applications II, Sprint 9: Advanced React`,
`WEBPT9 "A" Week 19, Unit 3: Web Applications II, Sprint 10: Advanced State Management`,
`WEBPT9 "B" Week 20, Unit 3: Web Applications II, Sprint 10: Advanced State Management`,
`Thanksgiving Break`,
`WEBPT9 "A" Week 21, Unit 3: Web Applications II, Sprint 11: Advanced Web Applications`,
`WEBPT9 "B" Week 22, Unit 3: Web Applications II, Sprint 11: Advanced Web Applications`,
`WEBPT9 "A" Week 23, Unit 3: Web Applications II, Sprint 12: WEB Unit 3 Build`,
`Winter Break`,
`Winter Break`,
`WEBPT9 "B" Week 24, Unit 3: Web Applications II, Sprint 12: WEB Unit 3 Build`,
`WEBPT9 "A" Week 25, Unit 4: Building Web APIs, Sprint 13: Building RESTful APIs with Express`,
`WEBPT9 "B" Week 26, Unit 4: Building Web APIs, Sprint 13: Building RESTful APIs with Express`,
`WEBPT9 "A" Week 27, Unit 4: Building Web APIs, Sprint 14: Adding Data Persistence`,
`WEBPT9 "B" Week 28, Unit 4: Building Web APIs, Sprint 14: Adding Data Persistence`,
`WEBPT9 "A" Week 29, Unit 4: Building Web APIs, Sprint 15: Authentication and Testing`,
`WEBPT9 "B" Week 30, Unit 4: Building Web APIs, Sprint 15: Authentication and Testing`,
`WEBPT9 "A" Week 31, Unit 4: Building Web APIs, Sprint 16: WEB Unit 4 Build`,
`WEBPT9 "B" Week 32, Unit 4: Building Web APIs, Sprint 16: WEB Unit 4 Build`,
`WEBPT9 "A" Week 33, Unit 5: Labs, Sprint 17: Labs 1`,
`WEBPT9 "B" Week 34, Unit 5: Labs, Sprint 17: Labs 1`,
`WEBPT9 "A" Week 35, Unit 5: Labs, Sprint 18: Labs 2`,
`WEBPT9 "B" Week 36, Unit 5: Labs, Sprint 18: Labs 2`,
`WEBPT9 "A" Week 37, Unit 5: Labs, Sprint 19: Labs 3`,
`WEBPT9 "B" Week 38, Unit 5: Labs, Sprint 19: Labs 3`,
`WEBPT9 "A" Week 39, Unit 5: Labs, Sprint 20: Labs 4`,
`WEBPT9 "B" Week 40, Unit 5: Labs, Sprint 20: Labs 4`,
`WEBPT9 "A" Week 41, Unit 6: Labs, Sprint 21: Labs 5`,
`WEBPT9 "B" Week 42, Unit 6: Labs, Sprint 21: Labs 5`,
`WEBPT9 "A" Week 43, Unit 6: Labs, Sprint 22: Labs 6`,
`WEBPT9 "B" Week 44, Unit 6: Labs, Sprint 22: Labs 6`,
`WEBPT9 "A" Week 45, Unit 6: Labs, Sprint 23: Labs 7`,
`WEBPT9 "B" Week 46, Unit 6: Labs, Sprint 23: Labs 7`,
`WEBPT9 "A" Week 47, Unit 6: Labs, Sprint 24: Labs 8`,
`WEBPT9 "B" Week 48, Unit 6: Labs, Sprint 24: Labs 8`,
`Summer Break`,
`WEBPT9 "A" Week 49, Unit 7: Python, Sprint 25: Intro to Python and OOP`,
`WEBPT9 "B" Week 50, Unit 7: Python, Sprint 25: Intro to Python and OOP`,
`WEBPT9 "A" Week 51, Unit 7: Python, Sprint 26: Algorithms`,
`WEBPT9 "B" Week 52, Unit 7: Python, Sprint 26: Algorithms`,
`WEBPT9 "A" Week 53, Unit 7: Python, Sprint 27: Data Structures`,
`WEBPT9 "B" Week 54, Unit 7: Python, Sprint 27: Data Structures`,
`WEBPT9 "A" Week 55, Unit 7: Python, Sprint 28: Graphs`,
`WEBPT9 "B" Week 56, Unit 7: Python, Sprint 28: Graphs`,
`WEBPT9 "A" Week 57, Unit 8: C, Sprint 29: Intro to C`,
`WEBPT9 "B" Week 58, Unit 8: C, Sprint 29: Intro to C`,
`WEBPT9 "A" Week 59, Unit 8: C, Sprint 30: Theory of Computation/Hash Tables`,
`WEBPT9 "B" Week 60, Unit 8: C, Sprint 30: Theory of Computation/Hash Tables`,
`WEBPT9 "A" Week 61, Unit 8: C, Sprint 31: Computer Architecture`,
`WEBPT9 "B" Week 62, Unit 8: C, Sprint 31: Computer Architecture`,
`WEBPT9 "A" Week 63, Unit 8: C, Sprint 32: Web Server`,
`WEBPT9 "B" Week 64, Unit 8: C, Sprint 32: Web Server`,
`WEBPT9 "A" Week 57, Unit 9: LambdaX.1, Sprint 33: Continuing Education & Job Search 1`,
`WEBPT9 "B" Week 58, Unit 9: LambdaX.1, Sprint 33: Continuing Education & Job Search 1`,
`WEBPT9 "A" Week 59, Unit 9: LambdaX.1, Sprint 34: Continuing Education & Job Search 2`,
`WEBPT9 "B" Week 60, Unit 9: LambdaX.1, Sprint 34: Continuing Education & Job Search 2`,
`Thanksgiving Break`,
`WEBPT9 "A" Week 61, Unit 9: LambdaX.1, Sprint 35: Continuing Education & Job Search 3`,
`WEBPT9 "B" Week 62, Unit 9: LambdaX.1, Sprint 35: Continuing Education & Job Search 3`,
`WEBPT9 "A" Week 63, Unit 9: LambdaX.1, Sprint 36: Continuing Education & Job Search 4`,
`Winter Break`,
`Winter Break`,
`WEBPT9 "B" Week 64, Unit 9: LambdaX.1, Sprint 36: Continuing Education & Job Search 4`,
`WEBPT9 "A" Week 65, Unit 10: LambdaX.2, Sprint 37: Continuing Education & Job Search 5`,
`WEBPT9 "B" Week 66, Unit 10: LambdaX.2, Sprint 37: Continuing Education & Job Search 5`,
`WEBPT9 "A" Week 67, Unit 10: LambdaX.2, Sprint 38: Continuing Education & Job Search 6`,
`WEBPT9 "B" Week 68, Unit 10: LambdaX.2, Sprint 38: Continuing Education & Job Search 6`,
`WEBPT9 "A" Week 69, Unit 10: LambdaX.2, Sprint 39: Continuing Education & Job Search 7`,
`WEBPT9 "B" Week 70, Unit 10: LambdaX.2, Sprint 39: Continuing Education & Job Search 7`,
`WEBPT9 "A" Week 71, Unit 10: LambdaX.2, Sprint 40: Continuing Education & Job Search 8`,
`WEBPT9 "B" Week 72, Unit 10: LambdaX.2, Sprint 40: Continuing Education & Job Search 8`];
let sprint = 1;
for (let w = 0; w < weeks.length; w++) {
  console.log(`==================================================`);
  console.log(weeks[w]);
  console.log(`==================================================`);
  let i = weeks[w].lastIndexOf(':');
  let x = weeks[w].indexOf('LambdaX');
  if(i == -1 || x > 0) {
    if (x > 0) {
      let j = random(0,6);
      if (j == 0) {
        console.log(`${paulMEdwards.name} found a job with the skills learned through Lambda!`);
        break;
      }
    } else {
      continue;
    }
  } else {
    let subject = weeks[w].substring(i+2);

    paceEllsworth.demo(subject);
    console.log(`--------------------------------------------------`);

    let TLs = [ johnORourke, raymondPugh, jaredParrish ];

    if (w % 2) paulMEdwards.sprintChallenge(subject);
    paulMEdwards.PRAssignment(subject);
    
    let r1 = random(0,TLs.length-1);
    let r2 = random(0,TLs.length-1);

    console.log(`Team Lead, weekdays:`,TLs[r1].name);
    console.log(`Team Lead, 5th days:`,TLs[r2].name);

    if (r1 == 0) {
      if (random(0,1) == 0) {
        TLs[r1].debugsCode(paulMEdwards, subject);
      } else {
        TLs[r2].debugsCode(paulMEdwards, subject);
      }
    }

    paulMEdwards.grade = 0;
    while (!paulMEdwards.graduate()) {
      let G1 = TLs[r1].generateGrade();
      let G2 = TLs[r2].generateGrade();
      let G3 = paceEllsworth.generateGrade();

      grade = Math.round((G1+G2+G3+600)/9);

      paceEllsworth.addGrade(paulMEdwards, grade);

      if(paulMEdwards.graduate()) {
        console.log(`${paulMEdwards.name}' grade on ${subject} is`,grade);
        paceEllsworth.grade(paulMEdwards, subject);
      }
    }
  }
}
console.log(`Congrabulations ${paulMEdwards.name}, you granulated Lambda School!`);
//My favorite English teacher in High School said it like this.
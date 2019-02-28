// CODE here for your Lambda Classes
class Person {
    constructor(params) {
        this.name = params.name;
        this.age = params.age;
        this.location = params.location;
        this.gender = params.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(params) {
        super(params)
        this.specialty = params.specialty;
        this.favLanguage = params.favLanguage;
        this.catchPhrase = params.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(params) {
        super(params);
        this.previousBackground = params.previousBackground;
        this.className = params.className;
        this.favSubjects = params.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(subj => console.log(subj));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(params) {
        super(params);
        this.gradClassName = params.gradClassName;
        this.favInstructor = params.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
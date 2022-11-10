class Instructor {
    constructor({ name, role = 'assistant'} = {}) {
        this.role = role;
        this.name = name;
    }
    static helloWorld () {
        console.log('Hi there');
    }
    static canTeach (instructor) {
        return (instructor.role === 'classroom');
    }
    renderDetails () {
        console.log(`${this.name} - ${this.role}`);
    }
}
let juniorInstructor = new Instructor({'name' : 'Brian'});
let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });

juniorInstructor.renderDetails();
seniorInstructor.renderDetails();

Instructor.helloWorld();
console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);
console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);
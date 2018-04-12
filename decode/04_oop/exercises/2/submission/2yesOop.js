class Teacher {
    constructor(name, hoursTaught){
        this.name = name;
        this.hoursTaught = hoursTaught;
    };
    dadJoke() {
        console.log(this.name + " made a funny")
    };
    teach(student) {
        student.fundamentalsProficiency = student.fundamentalsProficiency + 1;
        this.hoursTaught = this.hoursTaught + 1;
    }; 
};

class Student {
    constructor (name, fundamentalsProficiency, workEthic) {
        this.name = name;
        this.fundamentalsProficiency = fundamentalsProficiency;
        this.workEthic = workEthic;
    };
    getProficiency() {
        return this.fundamentalsProficiency
    };
    study() {
        this.fundamentalsProficiency = this.fundamentalsProficiency + this.workEthic;
    };
    doProject() {
        if(this.fundamentalsProficiency < 5) {
            console.log(this.name + " was not ready to take on the project");
        } else {
            console.log(this.name + " successfully completed the project!");
        }
    };
};

var jack = new Teacher("jack");
var bob = new Student("bob", 10);
var susan = new Student("susan", 12);

jack.teach(bob);
jack.teach(susan);
bob.doProject();
susan.doProject();
bob.study();
susan.study();


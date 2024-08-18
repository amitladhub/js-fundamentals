const user = {
    firstname : "Amit",
    lastname : 'Lad',
    birthYear : 1991,
    job : 'SE',
    hasDriversLicense: true,
    calAge : function () {
        this.age = 2037 - this.birthYear; 
        return this.age;
    }
}
console.log(user.calAge());
const { firstname, lastname, age, job } = user;
console.log(`${firstname} is a ${age} old ${job}`);

const mark = {
    fullName : 'Mark',
    mass : 78,
    height : 1.69,
    calcBMI : function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}


const john = {
    fullName : 'john',
    mass : 92,
    height : 1.95,
    calcBMI : function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

mark.calcBMI();
john.calcBMI();
console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher that ${john.fullName}'s (${john.bmi}) `)
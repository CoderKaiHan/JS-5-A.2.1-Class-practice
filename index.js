class Vehicle {
    constructor(type,model,year,brand,power){
        this.type = type;
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.power = power;
    }

    loadInfo(){
        if(this.type === 'car'){
            console.log('I can load 5 persons.')
        }

        if(this.type === 'truck'){
            console.log('I can load 2-5 persons.')
        }

        if(this.type === 'SUV'){
            console.log('I can load 5-7 persons.')
        }
    }

    yearInfo(){
        const currentYear = new Date().getFullYear();

        if(currentYear - this.year === 0){
            console.log('I was just born this year!')
        }

        if(currentYear - this.year <= 10){
            console.log('I am still young.')
        }

        if(currentYear - this.year >= 10){
            console.log('I am at my old age now')
        }
    }

    powerInfo(){
        if(this.power === 'Gas'){
            console.log('I am old style.')
        }

        if(this.power === 'EV'){
            console.log('Charge me with cable, not gas gun!')
        }

        if(this.power === 'Hybird'){
            console.log('I think I am the coolest.')
        }
    }
}

let newVehicle = new Vehicle ('SUV','ML350','2011','MZ','Gas');

newVehicle.powerInfo();
newVehicle.loadInfo();
newVehicle.yearInfo();
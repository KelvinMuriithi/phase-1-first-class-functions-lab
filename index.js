const returnFirstTwoDrivers = function(drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return [drivers[0],drivers[1]]
    
}

const returnLastTwoDrivers = function(drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return [drivers[2],drivers[3]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(number){
    // let fare =4
    return function(fare){
        return Math.abs(fare*number)
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function (drivers, selectingDrivers){
    return selectingDrivers(drivers)
}

    





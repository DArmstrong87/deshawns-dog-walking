import { getCities, getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

const currentCity = (cityArray) => {
    let theCity  = {}
    for (const currentCity of cityArray){
        if (walkers.cityId === currentCity.id){
            theCity = currentCity
        }
        return theCity
    }
}
// const thisCity = currentCity()

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"  
    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const thisCity = currentCity(cities)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${thisCity.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}


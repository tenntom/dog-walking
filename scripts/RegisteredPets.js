import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")

            // Done with filters
            
            const petIdNumber = parseInt(petId)

            const foundPet = pets.find (
                (pet) => {
                    return pet.id === petIdNumber
                }
            )

            const foundWalker = walkers.find (
                (walker) => {
                    return walker.id === foundPet.walkerId
                }
            )

            window.alert(`${foundPet.name} is being walked by ${foundWalker.name}.`)


            // Done with nested loop.

            // for (const pet of pets) {
            //     if (parseInt(petId) === pet.id) {
            //         for (const walker of walkers) {
            //             if (pet.walkerId === walker.id) {
            //                 window.alert(`${pet.name} is being walked by ${walker.name}.`)
            //             }

            //         }
            //     }
            // }
        }
    }
)



export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


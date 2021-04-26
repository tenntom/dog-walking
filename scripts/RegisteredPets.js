import { getPets, getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (parseInt(petId) === pet.id) {
                    for (const walker of walkers) {
                        if (pet.walkerId === walker.id) {
                            window.alert(`${pet.name} is being walked by ${walker.name}.`)
                        }

                    }
                }
            }
        }
    }
)

//On Monday, I should try to do this with the .find () array method to avoid the nested loop.

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}


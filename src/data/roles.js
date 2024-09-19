import mafiacard from "../assets/mafia.jpg"
import police from "../assets/polic.jpg"
import villager from "../assets/villager.jpg"
import doctor from "../assets/doctor.jpg"


export const roleScreenData = [
    {
        role: 'Mafia',
        image: mafiacard,
        heading: 'Wow! You are the Mafia!!',
        title: 'Who do you wish to Kill?',
        description: 'You have to eliminate all other players and take control of the game. Each night, Mafia collectively decides on one player to eliminate. You must work together with your partner if any to avoid detection and deception.',
        description1: 'Choose a candidate from below to Kill. Make a good choice as you can select only once'
    },
    {
        role: 'Police',
        image: police,
        heading: 'Wow! You are a Police!!',
        title: 'Who do you suspect to be the mafia?',
        description: 'You need to find and eliminate the Mafia members. You will have the ability to investigate one player each night to determine if they are a member of the Mafia or not.',
        description1: 'Choose your suspect from the player list. Make a good choice as you can select only once'
    },
    {
        role: 'Villager',
        image: villager,
        heading: 'Wow! You are a Villager!!',
        title: 'How to play as a villager?',
        description: 'Your goal is to help the Town (or the non-Mafia members) identify and eliminate the Mafia members. You need to ensure that the Town survives and thrives by working together to uncover the identities of the enemies.',
        description1: 'Below are the participants of the game.'
    },
    {
        role: 'Doctor',
        image: doctor,
        heading: 'Wow! You are the Doctor!!',
        title: 'Who do you wish to save?',
        description: 'Your duty is to protect the Town from being eliminated by the Mafia. You can choose one player each night to protect from the mafia.',
        description1: 'Choose a candidate from below to save, you can also choose yourself.'
    }

];
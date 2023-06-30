const grid = document.querySelector('.grid')

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy'
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = ''
let secondCard = ''

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length === 20) {
        setTimeout(() => {
            alert('Parabéns, você conseguiu!')
        }, 100)
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        secondCard = ''

        checkEndGame()
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')
    
            firstCard = ''
            secondCard = ''
        }, 500)
    }
}

const revealCard = ({ target }) => {
    const card = target.parentNode

    if (card.className.includes('reveal-card')) {
        return
    }

    if (firstCard === '') {
        card.classList.add('reveal-card')
        firstCard = card
    } else if (secondCard === '') {
        card.classList.add('reveal-card')
        secondCard = card

        checkCards()
    }
}

const createCard = (character) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')
    
    front.style.backgroundImage = `url('/assets/images/${character}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

    return card
}

const loadGame = () => {
    const duplicateCharacters = [...characters, ...characters]

    const shuffleadArray = duplicateCharacters.sort(() => Math.random() - 0.5)

    shuffleadArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card)
    })
}

loadGame()
import React from 'react';
import index from './index.css'
import SlotM from './component/SlotM'

const emojis =["😆" , "😉", "😎" ,"🤠"];
// const randomIndex1 = Math.floor(Math.random()*emojis.length);
// const randomIndex2 = Math.floor(Math.random()*emojis.length);
// const randomIndex3 = Math.floor(Math.random()*emojis.length);
// const selectedEmoji = emojis[randomIndex]
// const selectedEmoji2 = emojis[randomIndex2]
// const selectedEmoji3 = emojis[randomIndex3]

const getRandomEmoji = () => {
    const randomIndex =Math.floor(Math.random()*emojis.length)
    return emojis[randomIndex]
}

const App =() => {
return <>
<h1 className='heading-style'> 🎰 Welcome to <span style={{backgroundColor:'pink'}}> Slot Machine Game </span>🎰</h1>
<div className="slotMachine">
<SlotM x={getRandomEmoji()} y={getRandomEmoji()} z={getRandomEmoji()}/>
<SlotM x={getRandomEmoji()} y={getRandomEmoji()} z={getRandomEmoji()}/>
<SlotM x={getRandomEmoji()} y={getRandomEmoji()} z={getRandomEmoji()}/>
<SlotM x={getRandomEmoji()} y={getRandomEmoji()} z={getRandomEmoji()}/> 
</div>

</>
}


export default App;
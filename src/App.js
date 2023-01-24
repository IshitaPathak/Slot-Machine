import React from 'react';
import index from './index.css'
import SlotM from './component/SlotM'



const App =() => {
return <>
<h1 className='heading-style'> 🎰 Welcome to <span style={{backgroundColor:'pink'}}> Slot Machine Game </span>🎰</h1>
<div className="slotMachine">
<SlotM x='🤠' y='🤠' z='🤠'/>
<SlotM x='🤠' y='🤠' z='🤠'/>
<SlotM x='😁' y='😎' z='😍'/>
<SlotM x='😁' y='😎' z='🙁'/>
</div>

</>
}


export default App;
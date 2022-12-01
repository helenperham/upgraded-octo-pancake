import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import {useState, useEffect} from 'react'

function BotsPage() {
  const [botCollection, setBotCollection] = useState([])
  const [army, setArmy] = useState([])
  useEffect(()=>{
    const request = async () => {
      let req = await fetch("http://localhost:8002/bots")
      let res = await req.json()
      setBotCollection(res)
    }
    request()
  }, [])

  const addToArmy= (hero) => {
    if(army.includes(hero)) return;
    setArmy([...army,hero])
  }

  const releaseBot = (bot) => {
    setArmy((prevState) => {
      return [...prevState.filter((b) => {
        return b.id !== bot.id
    }
  )]
    })
  }

  //

  return (
    <div>
      <YourBotArmy  army={army} releaseBot={releaseBot}/>
      <BotCollection botCollection={botCollection} addToArmy={addToArmy} releaseBot={releaseBot}/>
    </div>
  )
}

export default BotsPage;

import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({army, bot, addToArmy, releaseBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
         {
          army.map((bot) => {
            return(
              <div onClick={() => { (releaseBot(bot)) }
              }>
                  <BotCard bot={bot} army={army} addToArmy={addToArmy} releaseBot={releaseBot}/>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;

import React from "react";
import BotCard from './BotCard'

function BotCollection({botCollection, bot, addToArmy, army, releaseBot}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {
          botCollection.map((bot) => {
            return (
              <div >
                <BotCard bot={bot} army={army} addToArmy={addToArmy} releaseBot={releaseBot}/>
              </div>
            )
          })
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;

import React from 'react';

function HoverCard() {
  return (
    <div >
      <h3 className="font-bold mb-2">L0vd score - find the best validator to stake</h3>
      <p className="mb-2">
        We track historical performance, including commission changes, APY history, and gauge updates,
        while also assessing the risk profile of each validator. Our scoring system rewards actions that 
        benefit the network and penalizes harmful behavior, ensuring you get the most reliable recommendations.
      </p>
      <h4 className="font-semibold mb-1">How we calculate it</h4>
      <p className="mb-2">
        Score version: v0.1
      </p>
      <p className="mb-2">APY: 0-50%</p>
      <p className="mb-2">Decentralization: 0-100%</p>
      <p className="text-blue-500 underline">L0vd Score = 0.5 * APY Score + 0.5 * Decentralization Score</p>
    </div>
  );
}

export default HoverCard;

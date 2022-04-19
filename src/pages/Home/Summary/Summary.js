import './summary.css';

import React from 'react';

import summaryHeaderImg from '../../../assets/summary/summary-header.svg';
import Panel from '../../../components/Panel/Panel';
import panels from '../../../contents/panels';

function Summary() {
  return (
    <div className="summary">
      <img src={summaryHeaderImg} className="summary-header" />
      <div className="summary-gallery">
        {panels.map((currentValue) => (
          <div
            className="summary-panel"
            key={currentValue.title}
          >
            <Panel panelObject={currentValue} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summary;

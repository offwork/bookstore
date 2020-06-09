import * as React from 'react';
import './search-box.scss';

export const SerachBox = () => {
  return (
    <div className="bp3-control-group bp3-fill">
      <div className="bp3-input-group">
        <span className="bp3-icon bp3-icon-search"></span>
        <input type="text" className="bp3-input" placeholder="Find collaborators..." />
      </div>
      <button className="bp3-button bp3-intent-primary">
        <span className="bp3-icon bp3-icon-arrow-right"></span>
      </button>
    </div>
  )
}

export default SerachBox;

import React, { Fragment } from "react";

const FeedbackOptions = ({}) => (
  <Fragment>
    <button type="button" onClick={this.handleAddGoodFedback}>
      good
    </button>
    <button type="button" onClick={this.handleAddNeutralFedback}>
      neutral
    </button>
    <button type="button" onClick={this.handleAddBadFedback}>
      bad
    </button>
  </Fragment>
);

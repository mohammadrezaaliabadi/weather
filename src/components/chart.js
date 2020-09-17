import React, { Component } from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
import _ from "lodash";

function average(data) {
  return _.round(_.sum(data) / data.length);
}

class Chart extends Component {
  render() {
    return (
      <div>
        <Sparklines height={120} width={180} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{average(this.props.data)}</div>
      </div>
    );
  }
}

export default Chart;

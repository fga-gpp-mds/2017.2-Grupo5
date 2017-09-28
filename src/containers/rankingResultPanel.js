import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class RankingResultPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const groupID = Number(this.props.groupID);
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header"><h4>Match de { this.props.percentage }%</h4></li>
          {
            this.props.rankingData[groupID].candidates.map((candidate, i) => {
              return (
                <li className="collection-item" key={i}>{ candidate }</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rankingData: state.rankingData,
  };
}


RankingResultPanel.propTypes = {
  rankingData: PropTypes.array,
  percentage: PropTypes.string,
  groupID: PropTypes.string,
};

RankingResultPanel.defaultProps = {
  rankingData: [],
  groupID: 0,
  getResults() {},
  percentage: 0,
};

export default connect(mapStateToProps)(RankingResultPanel);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Presentation from './Presentation/Presentation';
import * as actions from '../../store/actions/index';

class Presentations extends Component {
  componentDidMount = () => {
    this.props.onFetchPresentations();
  };

  render() {
    const { presentations, loading } = this.props;

    let presentationRows = <p>Loading...</p>;
    if (!loading) {
      console.log('presentations', presentations);
      presentationRows = presentations.map(data => (
        <Presentation key={data._id} data={data} />
      ));
    }

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Presenter</th>
              <th scope="col">Evaluator</th>
              <th scope="col">Topic</th>
              <th scope="col">Article</th>
              <th scope="col">Date</th>
              <th scope="col">Monitor</th>
            </tr>
          </thead>
          <tbody>{presentationRows}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    presentations: state.presentations,
    loading: state.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPresentations: () => dispatch(actions.fetchPresentations()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Presentations);

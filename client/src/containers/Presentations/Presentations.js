import React, { Component } from 'react';
import { connect } from 'react-redux';

import Presentation from '../../components/Presentation/Presentation';
import * as actions from '../../store/actions/index';

class Presentations extends Component {
  componentDidMount = () => {
    this.props.onFetchPresentations();
  };

  render() {
    const { presentations, loading } = this.props;

    let presentationRows = (
      <tr>
        <td>Loading...</td>
      </tr>
    );
    if (!loading) {
      presentationRows = presentations.map(data => (
        <Presentation key={data._id} data={data} />
      ));
    }

    return (
      <div className="container-fluid">
        <table className="table my-5">
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

const mapStateToProps = state => ({
  presentations: state.presentations,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  onFetchPresentations: () => dispatch(actions.fetchPresentations()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Presentations);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

class AddPresentation extends Component {
  state = {
    presenter: '',
    evaluator: '',
    topic: '',
    article: '',
    date: '',
    keywords: '',
    summary: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearInputFieldsAfterSubmit = () => {
    this.setState({
      presenter: '',
      evaluator: '',
      topic: '',
      article: '',
      date: '',
      keywords: '',
      summary: '',
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      presenter: this.state.presenter,
      evaluator: this.state.evaluator,
      topic: this.state.topic,
      article: this.state.article,
      date: this.state.date,
      keywords: this.state.keywords,
      summary: this.state.summary,
    };
    console.log('data', data);

    this.props.onPostPresentation(data);
    this.clearInputFieldsAfterSubmit();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} method="POST" className="my-5">
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault01">Presenter name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="First name"
                name="presenter"
                value={this.state.presenter}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault02">Evaluator name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                placeholder="Last name"
                name="evaluator"
                value={this.state.evaluator}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefaultUsername">
                Presentation topic
            </label>
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                name="topic"
                value={this.state.topic}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-8 mb-3">
              <label htmlFor="validationDefault03">Article URL</label>
              <input
                type="url"
                className="form-control"
                id="validationDefault03"
                name="article"
                value={this.state.article}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationDefault03">Presentation date</label>
              <input
                id="validationDefault03"
                type="date"
                className="form-control"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col-12 mb-3">
              <label htmlFor="validationDefault04">Keywords</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault04"
                placeholder="Keywords"
                name="keywords"
                value={this.state.keywords}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="validationDefault05">Summary</label>
              <textarea
                type="text"
                className="form-control"
                id="validationDefault05"
                placeholder="Summary"
                name="summary"
                value={this.state.summary}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onPostPresentation: presentationData =>
    dispatch(actions.postPresentation(presentationData)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddPresentation);

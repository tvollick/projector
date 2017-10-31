import React, {PropTypes} from 'react';

const metricTypes = [
  {
    _id: 1,
    label: "Reps"
  },
  {
    _id: 2,
    label: "Time",
  },
  {
    _id: 3,
    label: "Boulder Grade",
  },
  {
    _id: 4,
    label: "Sport Grade",
  }
];

class CreateExercisePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: {
        title: '',
        metrics: [{
          name: '',
          type: ''
        }] // must have at least one metric
      }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickAddMetric = this.onClickAddMetric.bind(this);
    this.onClickDeleteMetric = this.onClickDeleteMetric.bind(this);
  }

  onTitleChange(event) {
    const exercise = this.state.exercise;
    exercise.title = event.target.value;
    this.setState({course: exercise});
  }

  onClickSave() {
    console.log(this.state.exercise);
  }

  onClickAddMetric() {
    const exercise = this.state.exercise;
    exercise.metrics.push({
      name: '',
      type: ''
    });
    this.setState({exercise: exercise});
  }

  onMetricNameChange(idx, e) {
    let newMetrics = [];
    let exercise = this.state.exercise;
    this.state.exercise.metrics.map((oldMetric, sidx) => {
      let tempName = (idx === sidx) ? e.target.value : oldMetric.name;
      newMetrics.push({
        name: tempName,
        type: ''
      });
    });
    exercise.metrics = newMetrics;
    this.setState(prevState => {
      exercise: exercise
    });
  }

  onClickDeleteMetric(idx) {
    this.setState((prevState) => {
      const metrics = prevState.exercise.metrics;
      metrics.map((metric, sidx) => {
        if (sidx === idx) metrics.splice(idx, 1);
      });
      prevState.exercise.metrics = metrics;
      return({
        exercise: prevState.exercise
      });
    });
  }

  hanldeMetricTypeChange(idx, e) {
    const newValue = e.target.value;
    this.setState(prevState => {
      const metrics = prevState.exercise.metrics;
      metrics.map((metric, sidx) => {
        if (sidx === idx) metrics[idx].type = newValue;
      });
      prevState.exercise.metrics = metrics;
      return({
        exercise: prevState.exercise
      });
    });
  }

  render() {
    return(
      <div id="createExercisePage">
        <h1>CreateExercisePage</h1>
        <input
          type="text"
          placeholder="Add Name"
          value={this.state.exercise.title}
          onChange={this.onTitleChange} />

        <h3>Metrics</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercise.metrics.map((metric, idx) => {
              return(
                <tr key={`metric-${idx}`}>
                  <td>
                    <input
                      type="text"
                      placeholder="name"
                      value={this.state.exercise.metrics[idx].name}
                      onChange={this.onMetricNameChange.bind(this, idx)}
                    />
                  </td>
                  <td>
                    <select
                      value={this.state.exercise.metrics[idx].type}
                      onChange={this.hanldeMetricTypeChange.bind(this, idx)} >
                      <option value="">-- Select -- </option>
                      {metricTypes.map((type, idx) => {
                        return(
                          <option key={idx} value={type._id}>{type.label}</option>
                        )
                      })}
                    </select>
                  </td>
                  <td>
                    <input
                      type="button"
                      className="btn btn-danger"
                      value="Remove"
                      onClick={this.onClickDeleteMetric.bind(this, idx)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <input
          type="button"
          className="btn btn-success"
          value="Add Metric"
          onClick={this.onClickAddMetric} />

        <input
          type="button"
          className="btn btn-primary"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    )
  }
}

export default CreateExercisePage;

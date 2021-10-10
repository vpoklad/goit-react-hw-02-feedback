import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return Math.round((this.state.good * 100) / total);
  };
  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const posPercentage = this.countPositiveFeedbackPercentage();
    return (
      <article>
        <h2>Please leave feaadback</h2>
        <button type="button" name="good" onClick={this.onLeaveFeedback}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.onLeaveFeedback}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.onLeaveFeedback}>
          Bad
        </button>
        <h3>Satistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feadback: {posPercentage}%</p>
      </article>
    );
  }
}

export default App;

import React from 'react';
import axios from 'axios';

const Result = (props) => {
  const { message } = props
  const [highScores, setHighScores] = React.useState([]);
  const fetchHighScores = () => {
    const url = 'https://my-json-server.typicode.com/MahsaAghajani/Unit-and-Integration-testing/db';
    axios
      .get(url)
      .then(response => 
        {
          const resp = Object.values(response.data);
          setHighScores(resp)
          })
      .catch(err => console.error(err));
  };

  return(
    <footer data-testid="result_footer">
      {!message && <h2>Waiting for your choice !</h2>}
      {message && <h2>{message}</h2>}
      <button onClick={fetchHighScores} data-testid="high-scores">High Scores!</button>
      {highScores.map(highScore => <li key={highScore.id}>{highScore.name}: {highScore.points}</li>)}
    </footer>
  );
}

export default Result;
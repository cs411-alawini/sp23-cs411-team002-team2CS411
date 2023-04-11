import { useState } from "react";
import './App.css';
import Axios from 'axios'

function App() {
  // search
  const [athleteName1, setAthleteName1] = useState('');
  // insert
  const [athleteName3, setAthleteName3] = useState('');
  const [athleteFact3, setAthleteFact3] = useState('');
  // update
  const [athleteName4, setAthleteName4] = useState('');
  const [athleteFact4, setAthleteFact4] = useState('');

  const [searchAthleteList, setSearchAthleteList] = useState([
    { name: '0', discipline: '1', noc: '2' }
  ]);
  const [advancedQueury1List, setAdvancedQueury1List] = useState([
    { discipline: '0', name: '1'}
  ]);

  const [advancedQueury2List, setAdvancedQueury2List] = useState([
    { losing_athlete: '0', winning_athlete: '1', discipline: '2'}
  ]);
  //const [athleteFact3, setAthleteFact3] = useState('');
  const submitOne = (e) => {
    e.preventDefault();
    Axios.get('http://34.31.89.110:80/searchAthlete', {
      params: {
        athleteName1: athleteName1,
      },
    }).then((response) => {
      const searchAthleteList = response.data;
      let result = '';

      for (let i = 0; i < searchAthleteList.length; i++) {
        result += `Country: ${searchAthleteList[i].NOC}, Athlete: ${searchAthleteList[i].Name}, Discipline: ${searchAthleteList[i].Discipline}\n`;
      }
      if (searchAthleteList.length == 0) {
        alert(`athlete does not exist`);
      } else {
        alert(`Search success:\n${result}`);
      }
    });
  };
  
  
  const submitThree = (e) => {
    e.preventDefault();
    Axios.post('http://34.31.89.110:80/insert', {
      athleteName3: athleteName3,
      athleteFact3: athleteFact3,
    }).then(() => {
      alert('insertion success');
    });
  };

  const submitFour = (e) => {
    e.preventDefault();
    Axios.post('http://34.31.89.110:80/update', {
      athleteName4: athleteName4,
      athleteFact4: athleteFact4,
    }).then(() => {
      alert('insertion success');
    });
  };


  const advancedQuery1 = (e) => {
    e.preventDefault();
    Axios.get('http://34.31.89.110:80/advancedQueury1').then((response) => {
      const advancedQueury1List = response.data;
      let result = '';
      for (let i = 0; i < advancedQueury1List.length; i++) {
        result += `Coach Discipline: ${advancedQueury1List[i].Discipline}, Coach Name: ${advancedQueury1List[i].Name}\n`;
      }
      alert(`Search success:\n${result}`);
    });
  };

  const advancedQuery2 = (e) => {
    e.preventDefault();
    Axios.get('http://34.31.89.110:80/advancedQueury2').then((response) => {
      const advancedQueury2List = response.data;
      let result = '';
      for (let i = 0; i < advancedQueury2List.length; i++) {
        result += `Losing Athlete: ${advancedQueury2List[i].LosingAthlete}, Winning Athlete: ${advancedQueury2List[i].WinningAthlete}, Discipline: ${advancedQueury2List[i].discipline}\n`;
      }
      alert(`Search success:\n${result}`);
    });
  };

  return (
    <div>
      <h1>Tokyo Olympics Wiki - Team 2</h1>
      <form>
        <label htmlFor="input1"><i>&nbsp;&nbsp;&nbsp;&nbsp;Input format should be "Serena Williams":</i></label><br />
        <label htmlFor="input1">Search for Athletes:</label>
        <input type="text" id="input1" name="input1" onChange={(e) => {
          setAthleteName1(e.target.value);
          } } />
          <button onClick={(e) => submitOne(e)}>Submit</button><br /><br />

        <label htmlFor="input2"><i>&nbsp;&nbsp;&nbsp;&nbsp;Input format should be "Aimee Boorman":</i></label><br />
        <label htmlFor="input2">Search for Coaches:</label>
        <input type="text" id="input2" name="input2" />

        <button type="submit">Submit</button><br /><br />

        <label htmlFor="input3"><i>&nbsp;&nbsp;&nbsp;&nbsp;Input format should be "ATHLETE NAME : FUN FACT":</i></label><br />
        <label htmlFor="input3">Insert the fun fact:</label>
        <input type="text" id="input3" name="input3" onChange={(e) => {
        setAthleteName3(e.target.value);
          }}/>
        <input type="text" id="input1.5" name="input1.5" onChange={(e) => {
          setAthleteFact3(e.target.value);
          } } />
        <button onClick={(e) => submitThree(e)}>Submit</button><br /><br />

        <label htmlFor="input4"><i>&nbsp;&nbsp;&nbsp;&nbsp;Input format should be "ATHLETE NAME : FUN FACT":</i></label><br />
        <label htmlFor="input4">Update the fact:</label>
        <input type="text" id="input4" name="input4" onChange={(e) => {
          setAthleteName4(e.target.value);
          }}/>
        <input type="text" id="input4.5" name="input4.5" onChange={(e) => {
          setAthleteFact4(e.target.value);
          } } />
        <button onClick={(e) => submitFour(e)}>Submit</button><br /><br />

        <label htmlFor="input5"><i>&nbsp;&nbsp;&nbsp;&nbsp;Input format should be "Serena Williams":</i></label><br />
        <label htmlFor="input5">Delete the fact:</label>
        <input type="text" id="input5" name="input5" />
        <button type="submit">Submit</button><br /><br />
        <div><p>There are many countries whose coaches do not get recognition for contributing to a nation that wins medals in these competitive games. This advanced query uses INNER JOIN and a subquery. It finds all of the coaches and connects it to the medals table so the output is only a list of coaches whose athletes have won a gold medal. We also group by the discipline of the athlete and their respective coach’s name. </p>
        <button onClick={(e) => advancedQuery1(e)}>Advanced Queury 1</button>
        </div>

        <div><p>For each athlete that didn’t win a medal, we want to display the athlete that won the gold medal for that discipline. </p>
        <button onClick={(e) => advancedQuery2(e)}>Advanced Queury 2</button>
        </div>

        
      </form>
    </div>
  );
}

export default App;

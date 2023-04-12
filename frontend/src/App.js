import { useState } from "react";
import './App.css';
import Axios from 'axios'

function App() {
  // search - Athlete
  const [athleteName1, setAthleteName1] = useState('');

  // search - Coach 
  const [coachName1, setCoachName1] = useState('');
  // insert
  const [athleteName3, setAthleteName3] = useState('');
  const [athleteFact3, setAthleteFact3] = useState('');
  // update
  const [athleteName4, setAthleteName4] = useState('');
  const [athleteFact4, setAthleteFact4] = useState('');

  // delete
  const [athleteName5, setAthleteName5] = useState('');

  const [searchAthleteList, setSearchAthleteList] = useState([
    { name: '0', discipline: '1', noc: '2' }
  ]);

  const [searchCoachList, setSearchCoachList] = useState([
    { name: '0', discipline: '1', noc: '2' , event: '0'}
  ]);

  const [searchAthleteListFact, setSearchAthleteListFact] = useState([
    { name: '0', contents: '1'}
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
        result += `Country: ${searchAthleteList[i].NOC}\nAthlete: ${searchAthleteList[i].Name}\nDiscipline: ${searchAthleteList[i].Discipline}\n`;
      }
      if (searchAthleteList.length === 0) {
        alert(`athlete does not exist`);
      } else {
        alert(`Search success:\n${result}`);
      }
    });
  };
  
  const submitTwo = (e) => {
    e.preventDefault();
    Axios.get('http://34.31.89.110:80/searchCoach', {
      params: {
        coachName1: coachName1,
      },
    }).then((response) => {
      const searchCoachList = response.data;
      let result = '';

      for (let i = 0; i < searchCoachList.length; i++) {
        result += `Country: ${searchCoachList[i].NOC}\nCoach: ${searchCoachList[i].Name}\nDiscipline: ${searchCoachList[i].Discipline}\nEvent: ${searchCoachList[i].Event}\n`;
      }
      if (searchCoachList.length === 0) {
        alert(`${coachName1} does not exist... try again`);
      } else {
        alert(`Search success for ${coachName1}:\n${result}`);
      }
    });
  };
  
  const submitThree = (e) => {
    e.preventDefault();
    Axios.post('http://34.31.89.110:80/insert', {
      athleteName3: athleteName3,
      athleteFact3: athleteFact3,
    }).then(() => {
      console.log('insertion success');
      Axios.get('http://34.31.89.110:80/searchAthleteFactInsert', {
        params: {
          athleteName3: athleteName3,
        },
      }).then((response) => {
        const searchAthleteListFact = response.data;
        let result = '';
  
        for (let i = 0; i < searchAthleteListFact.length; i++) {
          result += `Athlete: ${searchAthleteListFact[i].AthleteName}, Content: ${searchAthleteListFact[i].Content}\n`;
        }
        if ((searchAthleteListFact.length == 0)) {
          alert(`athlete does not exist`);
        } else {
          alert(`Insert success:\n${result}`);
        }
      });

    });
  };

  const submitFour = (e) => {
    e.preventDefault();
    Axios.post('http://34.31.89.110:80/update', {
      athleteName4: athleteName4,
      athleteFact4: athleteFact4,
    }).then(() => {
      console.log('update success');
      Axios.get('http://34.31.89.110:80/searchAthleteFact', {
        params: {
          athleteName4: athleteName4,
        },
      }).then((response) => {
        const searchAthleteListFact = response.data;
        let result = '';
  
        for (let i = 0; i < searchAthleteListFact.length; i++) {
          result += `Athlete: ${searchAthleteListFact[i].AthleteName}, Content: ${searchAthleteListFact[i].Content}\n`;
        }
        if ((searchAthleteListFact.length === 0)) {
          alert(`athlete does not exist`);
        } else {
          alert(`Update success:\n${result}`);
        }
      });
    });
  };

  const submitFive = (e) => {
    e.preventDefault();
    Axios.post('http://34.31.89.110:80/deleteUserFact', {
      athleteName5: athleteName5,
    }).then(() => {
      console.log('Deletion success');
      Axios.get('http://34.31.89.110:80/searchAthleteFact', {
        params: {
          athleteName5: athleteName5,
        },
      }).then((response) => {
        const searchAthleteListFact = response.data;
        let result = '';
  
        for (let i = 0; i < searchAthleteListFact.length; i++) {
          result += `Athlete: ${searchAthleteListFact[i].AthleteName}, Content: ${searchAthleteListFact[i].Content}\n`;
        }
        if (!(searchAthleteListFact.length === 0)) {
          alert(`athlete does not exist`);
        } else {
          alert(`Deletion for ${athleteName5} is a success!\n${result}`)
        }
      });
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
        <input type="text" id="input2" name="input2" onChange={(e) => {
          setCoachName1(e.target.value);
          } } />

        <button onClick={(e) => submitTwo(e)}>Submit</button><br /><br />

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
        <input type="text" id="input5" name="input5" onChange={(e) => {
          setAthleteName5(e.target.value);
          } } />
        <button onClick={(e) => submitFive(e)}>Submit</button><br /><br />

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

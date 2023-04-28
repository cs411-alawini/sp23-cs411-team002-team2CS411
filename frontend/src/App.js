import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import AthleteProfile from './AthleteProfile';

import './App.css';
import Axios from 'axios'
import AthleteGrid from "./SearchGrid";
import SearchBar from "./search"; // Import the SearchBar component
import FactLogs from "./logs";


const head = document.getElementsByTagName('head')[0];

const Header = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  background-color: #0077b6;
  padding: 1rem;
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #023e8a;
  }
`;
const LogLink = styled(NavLink)`
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  background-color: #0077b6;
  padding: 1rem;
  border-radius: 0;

  &:hover {
    background-color: #023e8a;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0077b6;
  width: 100%;
`;
const Spacer = styled.div`
  width: 5rem;
`;




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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchField, setSearchField] = useState("");
  const [country, setCountry] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log('App searchResults THIS IS FUCKIGN RUNNING:', searchResults);
  }, [searchResults]);


  const getSearchResults = async (searchTerm, searchType, searchField, country, discipline) => {
    // Call your API to get the search results
    const response = await fetch(`http://34.31.89.110:80/search?name=${searchTerm}&country=${country}&discipline=${discipline}&searchType=${searchType}&searchField=${searchField}`);
    const data = await response.json();
    return data;
  };

  const handleSearch = async (searchTerm, searchType, searchField, country, discipline) => {
    const results = await getSearchResults(searchTerm, searchType, searchField, country, discipline);
    console.log(results);
    setSearchResults(results);
  };


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
    <Router>
      <div className="App-header">
      <HeaderContainer>
     
      <Spacer />

    <Link to="/">
      <Header>Tokyo Olympics Wiki - Team 2</Header>
    </Link>
    <LogLink to="/logs">Logs</LogLink>
    
  </HeaderContainer>
  <button onClick={(e) => advancedQuery1(e)}>Advanced Queury 1</button>
      <button onClick={(e) => advancedQuery2(e)}>Advanced Queury 2</button>

      <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} />
                <br></br>
                <AthleteGrid searchResults={searchResults} />
              </>
            }
            index
          />
          <Route path="/athlete/:name" element={<AthleteProfile />} />
          <Route path="/logs" element={<FactLogs />} />

        </Routes>
      </div>
    </Router>
  );
  
 }
 export default App;
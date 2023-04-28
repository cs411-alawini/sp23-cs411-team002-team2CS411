import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const LogContainer = styled.div`
  margin: 1rem 0;
`;

const LogItem = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #f2e9a2;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #282c34;
`;

const FactLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await Axios.get('http://34.31.89.110:80/getFactLogs');
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching logs:', error.message);
      }
    };

    fetchLogs();
  }, []);

  return (
    <LogContainer>
      <h3>Fact Logs:</h3>
      {logs.map((log, index) => (
        <LogItem key={index}>
          {`${log.log_timestamp} - ${log.log_type} - ${log.athlete_name} - ${log.fact_content} - User: ${log.user_id}`}
        </LogItem>
      ))}
    </LogContainer>
  );
};

export default FactLogs;

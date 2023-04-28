import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const FunFactsContainer = styled.div`
  margin: 1rem 0;
`;
const Fact = styled.div`
  position: relative;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #a2f2a2;  
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  display: block;
  max-width: 80%;
  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 0.5rem;
  }
  font-size: 20px;
  font-weight: bold;
  color: #282c34;
  & span {
    font-size: 16px;
    font-weight: normal;
    color: #666;
  }
`;
const FactButtons = styled.div`
  position: relative;
  right: 0.5rem;
  bottom: 0.1rem; // Changed from top to bottom
`;

const EditFactButton = styled.button`
  margin-right: 0.5rem;
`;
const DeleteFactButton = styled.button``;

const FactEditForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const FactEditInput = styled.input`
  margin-bottom: 0.5rem;
`;
const FactEditButton = styled.button`
  display: block;
  margin-left: auto;
`;

const AddFactForm = styled.form`
  display: flex;
  align-items: center;
`;

const AddFactInput = styled.input`
  flex: 1;
  margin-right: 0.5rem;
  padding: 0.25rem;
`;

const UserLogin = styled.input`
  flex: 1;
  margin-right: 0.5rem;
  padding: 0.25rem;
`;

const AddFactButton = styled.button`
  padding: 0.25rem 0.5rem;
`;

const FunFacts = ({ athleteName, initialFacts = [] }) => {

  const [facts, setFacts] = useState(initialFacts);
  const [newFact, setNewFact] = useState('');
  const [UserId, setUserId] = useState('');
  const [editingFactIndex, setEditingFactIndex] = useState(null);
  const [editingFactContent, setEditingFactContent] = useState('');


  const insertFact = (athleteName, newFact, UserId) => {
  Axios.post('http://34.31.89.110:80/insert', {
    athleteName3: athleteName,
    athleteFact3: newFact,
    UserId: UserId
  }).then(() => {
    console.log('insertion success');
    
    setFacts([...facts, { content: newFact.trim(), UserId: UserId.trim() }]);
  }).catch((error) => {
    alert(`Error inserting athlete fact: ${error.message}`);
  });
};

const handleDelete = (fact) => {
  if (window.confirm("Are you sure you want to delete this fact?")) {
    onDelete(fact);
  }
};

const handleEdit = (fact) => {
  const newFact = window.prompt("Edit fact:", fact.content);
  if (newFact !== null && newFact.trim() !== '') {
    onEdit(fact, newFact.trim());
  }
};

const onDelete = (factToDelete) => {
  const updatedFacts = facts.filter((fact) => fact !== factToDelete);
  setFacts(updatedFacts);
  Axios.post('http://34.31.89.110:80/deleteUserFact', {
    athleteName5: athleteName,
    UserId: factToDelete.UserId
  }).then(() => {
    console.log('deletion success');
  }).catch((error) => {
    alert(`Error deleting athlete fact: ${error.message}`);
  });
};

const onEdit = (factToEdit, newContent) => {
  Axios.post('http://34.31.89.110:80/update', {
    athleteName4: athleteName,
    athleteFact4: newContent,
    UserId: factToEdit.UserId
  }).then(() => {
    console.log('update success');
    const updatedFacts = facts.map((fact) => {
      if (fact === factToEdit) {
        return { ...fact, content: newContent };
      }
      return fact;
    });
    setFacts(updatedFacts);
  }).catch((error) => {
    alert(`Error updating athlete fact: ${error.message}`);
  });
};



  useEffect(() => {
    const fetchFacts = async () => {
      const response = await Axios.get('http://34.31.89.110:80/searchAthleteFactInsert', {
        params: {
          athleteName3: athleteName,
        },
      });
      const searchAthleteListFact = response.data;
      const facts = searchAthleteListFact.map((fact) => ({
        content: fact.Content,
        UserId: fact.UserId, // Changed from UserId to UserId
      }));
      setFacts(facts);
    };

    if (athleteName) {
      fetchFacts();
    }
  }, [athleteName]);
  const handleAddFact = (e) => {
    e.preventDefault();
    if (newFact.trim()) {

      insertFact(athleteName, newFact.trim(), UserId);
    }
  };
  
  return (
    <FunFactsContainer>
      <h3>Fun Facts:</h3>
      <AddFactForm onSubmit={handleAddFact}>
        <AddFactInput
          type="text"
          value={newFact}
          onChange={(e) => setNewFact(e.target.value)}
          placeholder="Add a fun fact"
        />
        <UserLogin
          type="text"
          value={UserId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="UserId"
        />
        <AddFactButton type="submit">Add Fun Fact</AddFactButton>
      </AddFactForm>
      {facts.map((fact, index) => (
        <Fact key={index}>
          {fact.content}
          <span> - submitted by {fact.UserId}</span>
          <FactButtons> {/* Replace the 'div' with 'FactButtons' */}
            <EditFactButton onClick={() => handleEdit(fact)}>Edit</EditFactButton>
            <DeleteFactButton onClick={() => handleDelete(fact)}>Delete</DeleteFactButton>
          </FactButtons>
        </Fact>
      ))}
    </FunFactsContainer>
  );
  
      }
export default FunFacts;

import React from 'react';
import { Container as ContainerBase, Row as RowBase, Col as ColBase } from 'react-grid-system';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled(ContainerBase)``;

const Row = styled(RowBase)``;

const StyledLink = styled(Link)`
margin-bottom: 25px;
padding: 25px;
text-decoration: none;
color: white;

&:hover {
  color: grey;
}

> div {
  padding: 10px;
  height: 300px;
  text-align: center;
}

> div > img {
  max-height: 250px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

> div > h2 {
  font-size: 24px;
  text-transform: capitalize;

  font-weight: bold;
  margin: 0;
  text-align: center;
}

`;

const Col = styled(ColBase)`

`;

function AthleteGrid(props) {
  const { searchResults } = props;

  if (!searchResults[0]) {
    return null;
  }

  return (
    <Container>
      <Row>
        {searchResults[0].map((athlete, index) => {
          const imagePath = `img/${athlete.Name.replace(/\s+/g, '_')}_Olympics/${athlete.Name.replace(/\s+/g, '')}Olympics0.jpg`;
          const defaultImagePath = `profile.v1.jpg`;
          if (athlete.Name == null)
            return null
          else
          {
          
          return (
            <Col key={index} xs={7}  sm={6}  md={5}  lg={4} xl={3}>
                <StyledLink to={`/athlete/${encodeURIComponent(athlete.Name)}`}>
                  <div>
                  <img src={imagePath} onError={(e) => { e.target.onerror = null; e.target.src = defaultImagePath }} alt={athlete.Name} />
                  <h2>{athlete.Name.split(' ').reverse().join(' ').toLowerCase()}</h2>
                  </div>
                </StyledLink>
            </Col>
          );
          }
        })}
      </Row>
    </Container>
  );
}

export default AthleteGrid;
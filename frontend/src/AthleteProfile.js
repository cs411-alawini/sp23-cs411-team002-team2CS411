import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FunFacts from './FunFacts'; // Import the FunFacts component


const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const ProfileHeader = styled.h2`
  font-size: 2.5rem;
  text-align: center;
`;

const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  padding: 0 2rem;
`;

const ProfileImage = styled.img`

  width: 600px;
  height: 600px;
  object-fit: cover;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 600px;
  margin-left: 2rem;
`;

const InfoItem = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const AthleteProfile = () => {
  const { name } = useParams();
  const [athlete, setAthlete] = useState(null);
  const [defaultImageLoaded, setDefaultImageLoaded] = useState(false);


  useEffect(() => {
    const fetchAthlete = async () => {
    console.log("use effect here")
    const response = await fetch(`http://34.31.89.110:80/search?name=${name}&searchType=athlete&searchField=${"profile"}`);
    const data = await response.json();
    if (data && data[0]) {
        console.log("Athlete info recieved")
        setAthlete(data[0]);
    }
    };

    fetchAthlete();
  }, [name]);

  if (!athlete) {
    return <div>Loading...</div>;
  }
  if (!athlete[0]) {
    return <div>Loading...</div>;
  }

  const imagePath = `/img/${athlete[0].Name.replace(/\s+/g, '_')}_Olympics/${athlete[0].Name.replace(/\s+/g, '')}Olympics0.jpg`;
  const defaultImagePath = `/profile.v1.jpg`;
  console.log(imagePath)
  return (
    <ProfileContainer>
    <ProfileHeader>{athlete[0].Name}</ProfileHeader>
    <ProfileContent>      
    <ProfileImage
        src={imagePath}
        alt={`${athlete[0].Name}'s profile image`} // Add the alt attribute

        onError={(e) => {
            if (!defaultImageLoaded) {
            e.target.onerror = null;
            console.log("ERRRRRORRR");
            e.target.src = defaultImagePath;
            setDefaultImageLoaded(true);
            }
        }}/>
    <ProfileInfo>
        <InfoItem>Country: {athlete[0].NOC}</InfoItem>
        <InfoItem>Discipline: {athlete[0].Discipline}</InfoItem>
        {/* Add other InfoItems for the athlete's event winner and coach */}
        <FunFacts athleteName={name} /> {/* Render the FunFacts component and pass the athlete's name */}
    </ProfileInfo>
    </ProfileContent>
    </ProfileContainer>
  );

};

export default AthleteProfile;

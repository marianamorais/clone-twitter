import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit profile</EditButton>

        <h1>Mari</h1>
        <h2>@marimorais</h2>

        <p>Developer front-end</p>

        <ul>
          <li>
            <LocationIcon />
            Sao Paulo, Brazil
          </li>

          <li>
            <CakeIcon />
            Was born on July 8, 1997
          </li>
        </ul>

        <Followage>
          <span>
            Following <strong>100</strong>
          </span>
          <span>
          <strong>100 </strong> Followers 
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
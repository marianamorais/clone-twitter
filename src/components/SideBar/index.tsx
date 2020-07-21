import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="May you like"
            elements={[
              <FollowSuggestion name="Cap Freire" nickname="@capfreire" />,
              <FollowSuggestion name="Gabriel Bee" nickname="@beecoding" />,
              <FollowSuggestion name="Codando" nickname="@codando" />,
            ]}
          />

          <List
            title="May you like"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="May you like"
            elements={[<News />, <News />, <News />, <News />]}
          />
          <List
            title="May you like"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink, ProfileLink } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>{user.basics.headline}</h4>
          <ProfileLink
            href={`https://github.com/santoshkumawat`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>@{user.basics.username}</p>
          </ProfileLink>
          <p>{user.basics.label}</p>
          <p>Works at {user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          {/* <p>
            Blog:{' '}
            <a href={user.basics.blog} target="_blank" rel="noreferrer noopener">
              {user.basics.blog}
            </a>
          </p> */}
        </div>
      </Header>
      <div>
        <ViewResumeLink
          // href={`https://gitconnected.com/${user.basics.username}/resume`}
          href="../Santosh_Kumawat_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Resume</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
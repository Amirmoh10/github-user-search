import {
  ProfileContainer,
  ProfileInfo,
  ProfileName,
  JoinedDate,
  ProfileBio,
  StatsContainer,
  Column,
} from "./Styles";
import { H4, H2 } from "../App/Styles/Fonts/Styles";
import { LightColors } from "../App/Styles/Colors/LightColors";
import { CompanyInfo } from "./CompanyInfo";
import { user } from "../App/userType";

type stats = { label: string | undefined; number: number | undefined };
type UserProfileProps = {
  user: user;
};

export const UserProfile = ({ user }: UserProfileProps) => {
  const {
    name,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    twitter_username,
    blog,
    location,
    company,
  } = user;

  const companyInfo = { twitter_username, blog, location, company };
  const joinedDate = new Date(created_at).toDateString();

  const profileStats: stats[] = [
    { label: "Repos", number: public_repos },
    { label: "Followers", number: followers },
    { label: "Following", number: following },
  ];

  const ProfileStatistics = (
    <StatsContainer>
      {profileStats.map(({ label, number }, index) => {
        return (
          <Column key={index}>
            <H4 style={{ color: `${LightColors.sanMarino}` }}>{label}</H4>
            <H2>{number}</H2>
          </Column>
        );
      })}
    </StatsContainer>
  );

  return (
    <ProfileContainer>
      <ProfileInfo>
        <ProfileName>{name}</ProfileName>
        <JoinedDate>{`Joined:${joinedDate}`}</JoinedDate>
      </ProfileInfo>
      <ProfileBio>{bio}</ProfileBio>
      {ProfileStatistics}
      <CompanyInfo {...companyInfo} />
    </ProfileContainer>
  );
};

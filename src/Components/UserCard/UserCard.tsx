import { CardContainer, Logo } from "./Styles";
import GithubLogo from "./Images/GithubLogo.png";
import { UserProfile } from "./UserInfo";
import { user } from "../App/userType";

type userCardProp = {
  user: user;
};

export const UserCard = (props: userCardProp) => {
  return (
    <CardContainer>
      <Logo src={GithubLogo} alt="Logo" />
      <UserProfile {...props} />
    </CardContainer>
  );
};

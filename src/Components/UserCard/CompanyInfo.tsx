import { CompanyInfoContainer } from "./Styles";
import LocationIcon from "./Images/CompanyLocationIcon.svg";
import TwitterIcon from "./Images/TwitterIcon.svg";
import OfficeIcon from "./Images/OfficeIcon.svg";
import LinkIcon from "./Images/LinkIcon.svg";
import { CompanyInfoColumn } from "./Styles";
import { CompanyLocation, CompanyInfoBox, EmptyMessage } from "./Styles";

type companyInfo = {
  twitter_username?: string;
  blog?: string;
  location?: string;
  company?: string;
};

export const CompanyInfo = ({
  twitter_username,
  blog,
  location,
  company,
}: companyInfo) => {

  return (
    <CompanyInfoContainer>
      <CompanyInfoColumn>
        <CompanyInfoBox>
          <img src={LocationIcon} alt="Location" />
          <CompanyLocation>
            {location || <EmptyMessage>Not Available</EmptyMessage>}
          </CompanyLocation>
        </CompanyInfoBox>
        <CompanyInfoBox>
          <img src={LinkIcon} alt="Link" />
          <CompanyLocation>
            {blog || <EmptyMessage>Not Available</EmptyMessage>}
          </CompanyLocation>
        </CompanyInfoBox>
      </CompanyInfoColumn>
      <CompanyInfoColumn>
        <CompanyInfoBox>
          <img src={TwitterIcon} alt="Twitter" />
          <CompanyLocation>
            {twitter_username || <EmptyMessage>Not Available</EmptyMessage>}
          </CompanyLocation>
        </CompanyInfoBox>
        <CompanyInfoBox>
          <img src={OfficeIcon} alt="Office" />
          <CompanyLocation>
            {company || <EmptyMessage>Not Available</EmptyMessage>}
          </CompanyLocation>
        </CompanyInfoBox>
      </CompanyInfoColumn>
    </CompanyInfoContainer>
  );
};

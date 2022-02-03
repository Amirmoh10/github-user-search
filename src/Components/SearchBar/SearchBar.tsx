import React from "react";
import { SearchBarContainer } from "./Styles";
import { SearchIcon } from "./SearchIcon";
import { SearchButton } from "./SearchButton";

import "./SearchBar.css";
type userCardProps = {
  onSubmit(user: string): void;
};

export const SearchBar = ({ onSubmit }: userCardProps) => {
  const [typedUser, setTypedUser] = React.useState("");

  return (
    <SearchBarContainer>
      <SearchIcon />
      <input
        placeholder="Search GitHub username…"
        className="searchInput"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTypedUser(event.target.value)
        }
      />
      <SearchButton onClick={() => onSubmit(typedUser)} />
    </SearchBarContainer>
  );
};

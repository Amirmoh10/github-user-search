import React from "react";
import { SearchBarContainer, SearchInput } from "./Styles";
import { SearchIcon } from "./SearchIcon";
import { SearchButton } from "./SearchButton";

type userCardProps = {
  onSubmit(user: string): void;
};

export const SearchBar = ({ onSubmit }: userCardProps) => {
  const [typedUser, setTypedUser] = React.useState("");

  return (
    <SearchBarContainer>
      <SearchIcon />
      <SearchInput
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTypedUser(event.target.value)
        }
      />
      <SearchButton onClick={() => onSubmit(typedUser)} />
    </SearchBarContainer>
  );
};

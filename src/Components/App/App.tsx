import React from "react";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { GlobalStyle } from "../../GlobalStyles";
import { AppContainer } from "../AppContainer/Styles";
import { UserCard } from "../UserCard/UserCard";
import { user } from "./userType";

export const App = () => {
  const [user, setUser] = React.useState<user | null>(null);
  const [searchedUser, setSearchedUser] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/users/${searchedUser}`
      );
      const fetchedUser = await response.json();
      setUser(fetchedUser);
    };

    if (searchedUser) {
      fetchData();
    }
  }, [searchedUser]);

  let userCardElement = user ? <UserCard user={user} /> : null;

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <SearchBar onSubmit={(user: string) => setSearchedUser(user)} />
      {userCardElement}
    </AppContainer>
  );
};

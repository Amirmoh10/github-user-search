import { Button } from "./Styles";
import { H3 } from "../../Components/App/Styles/Fonts/Styles";

type SearchButtonProps = {
  onClick(): void;
};

export const SearchButton = (props: SearchButtonProps) => {
  return (
    <Button {...props}>
      <H3>Search</H3>
    </Button>
  );
};

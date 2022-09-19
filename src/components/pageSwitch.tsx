import { TPage } from "../App";
import AnyPermutation from "../pages/anyPermutation";
import SimpleSubstitution from "../pages/simpleSubstitution";

interface IProps {
  page: TPage;
}

export default function PageSwitch(props: IProps) {
  switch (props.page) {
    case "home":
      return null;
    case "simpleSubstitution":
      return <SimpleSubstitution />;
    case "anyPermutation":
      return <AnyPermutation />;
  }
}

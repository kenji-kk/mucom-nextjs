import { VFC } from "react";

import { Private } from "../../components/templates/Private";
import * as UserPage from "../../components/pages/UserPage";

const User: VFC = () => {
  return (
    <Private>
      <UserPage.UserPage />
    </Private>
  );
};

export default User;

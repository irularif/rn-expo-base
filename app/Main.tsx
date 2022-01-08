import { AppProvider } from "libs/ui";
import { TRole } from "root/types/global";

const Main = () => {
  const role: TRole[] = ["guest"];

  return (
    <AppProvider
      role={role}
      disableAppCenter
      stackNavigatorProps={{
        initialRouteName: "/news",
      }}
    />
  );
};

export default Main;

export const meta = () => {
  return [{ title: "Spotify" }];
};

import {SideMenu, Main} from "~/components/layout";


export default function Index() {
  return (
    <div className="flex w-screen text-white h-screen">
    <SideMenu></SideMenu>
    <Main></Main>
    </div>
  );
}

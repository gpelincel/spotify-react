import GoodMorning from "./GoodMorning";
import TopMenu from "./TopMenu";
import Suggestion from "./Suggestion";

export default function Main() {
    return(
        <>
        <div className="bg-gradient-to-b from-neutral-600 to-40% to-neutral-900 w-4/5 p-4 flex flex-col gap-8">
            <TopMenu></TopMenu>
            <GoodMorning></GoodMorning>
            <Suggestion></Suggestion>
        </div>
        </>
    );
}
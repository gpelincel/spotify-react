import GoodMorningCard from "./Cards/GoodMorningCard";

export default function GoodMorning(){
    return(
        <div>
            <h1 className="text-3xl font-bold mb-4">Good morning</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
                <GoodMorningCard></GoodMorningCard>
                <GoodMorningCard></GoodMorningCard>
                <GoodMorningCard></GoodMorningCard>
                <GoodMorningCard></GoodMorningCard>
                <GoodMorningCard></GoodMorningCard>
                <GoodMorningCard></GoodMorningCard>
            </div>
        </div>
    );
}
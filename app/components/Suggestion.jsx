import SuggestionCard from "./Cards/SuggestionCard";

export default function Suggestion() {
    return (
        <>
            <h1 className="text-2xl font-bold">For you</h1>

            <div className="suggestion-carousel flex gap-8">
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
            </div>
        </>
    );
}
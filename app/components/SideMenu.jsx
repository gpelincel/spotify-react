export default function SideMenu() {
    return (
        <div className="w-1/6 h-full flex flex-col bg-black p-7">
            <div className="flex mb-4">
                <i class="fa-brands fa-spotify text-4xl mr-1"></i>
                <h1 className="text-3xl">Spotify</h1>
                <p>©</p>
            </div>
            <ul className="flex flex-col gap-4">
                <li><a href=""><i class="fa-solid fa-house mr-3"></i>Home</a></li>
                <li><a href=""><i class="fa-solid fa-magnifying-glass mr-3"></i>Search</a></li>
                <li><a href=""><i class="fa-solid fa-bookmark mr-3"></i>Your library</a></li>
            </ul>
            <hr className="my-5" />
            <ul className="flex flex-col gap-4">
                <p className="text-sm uppercase my-2">Playlist</p>
                <li><a href=""><i class="fa-solid fa-square-plus mr-3 text-2xl"></i>Add Playlist</a></li>
                <li><a href=""><i class="fa-solid fa-heart mr-3 text-2xl"></i>Favorites</a></li>
            </ul>
        </div>
    );
}
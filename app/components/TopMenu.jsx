export default function TopMenu() {
    return (
        <div className="flex justify-between">
            <div className="arrows flex gap-3">
                <div className="bg-neutral-800 w-min p-2 rounded">
                    <i class="fa-solid fa-angle-left"></i>
                </div>
                <div className="bg-neutral-800 w-min p-2 rounded">
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <div className="user bg-black flex items-center gap-4 p-1 rounded-full">
                <i class="fa-solid fa-circle-user text-3xl"></i>
                <p>Username</p>
                <i class="fa-solid fa-caret-down mr-3"></i>
            </div>
        </div>
    );
}
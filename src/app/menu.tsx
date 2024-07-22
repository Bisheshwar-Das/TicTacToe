import Link from "next/link";
import Options from "./functions/Options";

export default function Menu(){
    return(
        <div className="flex flex-col items-center space-y-5 font-bold">
            <Link href="/games/gameDPS"><Options option="2 players: Standard"/></Link>
            <Link href="/games/gameDPE"><Options option="2 players: Extended"/></Link>
            <Link href="/games/gameSP"><Options option="With Computer"/></Link>
        </div>
    )
}
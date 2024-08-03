import Link from "next/link";

export default function Navbar(){
    return(
        <div className="bg-indigo-200 drop-shadow-xl text-xl text-black p-4 flex justify-center space-x-5">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
        </div>
    )
}
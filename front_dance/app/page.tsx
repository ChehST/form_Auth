import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex bg-red-200 items-center h-screen justify-center align-center">
        <div className="border-2 hover:bg-red-700 transition-all duration-200 delay-200 py-12 rounded-[48px] bg-blue-500 text-white text-[1.425rem]">
          <Link className="py-12 px-20 rounded-[48px]" href={"/login"}>Вход в профиль</Link>
        </div>
      </div>
    </>
    
  );
}

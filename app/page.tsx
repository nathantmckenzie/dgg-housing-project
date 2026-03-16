import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <div className="relative w-full">
          <Image
            className="w-full"
            src="/homepage.png"
            alt="Homepage"
            width={1440}
            height={500}
            priority
          />

          <button
            className="
              absolute 
              left-1/2 
              top-[75%] 
              -translate-x-1/2 
              -translate-y-1/2
              bg-[#c16011]
              text-white 
              font-semibold 
              rounded-sm 
              shadow-lg
              px-[clamp(.3rem,1vw,2.5rem)]
              py-[clamp(.25rem,1vw,1rem)]
              text-[clamp(.5rem,1vw,1.25rem)]
              hover:bg-[#a75a1a]
              transition
              cursor-pointer
            "
          >
            Sign Up for Updates
          </button>
        </div>
      </main>
    </div>
  );
}

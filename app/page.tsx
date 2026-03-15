import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <Image
          className="w-full"
          src="/homepage.png"
          alt="Next.js logo"
          width={1440}
          height={500}
          priority
        />
      </main>
    </div>
  );
}

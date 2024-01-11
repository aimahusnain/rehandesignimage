import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-16 py-10 flex items-center justify-center gap-16">
      <div className="max-w-[40%] flex flex-col gap-6">
        <h1 className="text-7xl font-extrabold">Build Your Awesome Platform</h1>
        <p className='text-white/40'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea
          sapiente fuga, voluptatem optio rerum? Velit atque molestias obcaecati
          eos nemo quod?
        </p>
        <Button>Click Me!</Button>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-28">
        <div className="absolute top-28 right-64 flex rounded-2xl rotate-12 w-[300px] h-72 outline bg-transparent justify-center items-center" />
        <div className="relative flex rounded-2xl rotate-12 w-[55%] h-72 outline bg-[#5554D4] justify-center items-center">
          Rehan Image
        </div>
      </div>
    </main>
  );
}

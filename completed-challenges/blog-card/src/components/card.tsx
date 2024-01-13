import Image from "next/image";

export function Card() {
  return (
    <div className="bg-white shadow-[8px_8px_0px_#000000] hover:-translate-y-1 hover:-translate-x-1 transition-all cursor-pointer hover:shadow-[16px_16px_0px_#000000] max-w-96 w-full p-6 rounded-3xl border border-black font-semibold">
      <Image
        alt=""
        width={335}
        height={200}
        className="rounded-lg"
        src={"/illustration-article.svg"}
      />

      <span className="font-extrabold py-1 px-3 bg-yellow-500 rounded-md mt-5 inline-block">
        Learning
      </span>

      <p className="mt-4">Published 21 Dec 2023</p>

      <h1 className="font-extrabold text-2xl mt-3 hover:text-yellow-500 hover:cursor-pointer transition-all">
        HTML & CSS foundations
      </h1>

      <p className="text-zinc-400 mt-5">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <div className="flex items-center gap-2.5 mt-5">
        <Image
          alt="profile photo of greg hooper"
          width={30}
          height={30}
          className="rounded-lg"
          src={"/image-avatar.webp"}
        />

        <p className="font-extrabold">Greg Hooper</p>
      </div>
    </div>
  );
}

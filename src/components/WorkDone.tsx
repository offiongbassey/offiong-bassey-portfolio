import Image from "next/image";

const WorkDone = () => {
  return (
    <div className="flex items-center justify-start">
      <div>
        <h2 className="font-motion text-5xl md:text-8xl bg-gradient-to-br from-orange-300 via-green-300 to-blue-300 bg-clip-text text-transparent">
          WORK <br />
          DONE
        </h2>
        <p className="text-medium italic">
          These are some of the works I&apos;ve done so far.
        </p>
      </div>
      <Image
        src="/tree.png"
        className="-rotate-12"
        alt="works"
        width={100}
        height={100}
      />
    </div>
  );
};

export default WorkDone;

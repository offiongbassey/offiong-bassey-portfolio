import Link from "next/link";

const Appreciation = () => {
    return (
        <div className="padding-container mt-10 text-center flex justify-center flex-col items-center">
        <h4 className="text-3xl md:text-5xl font-semibold py-4 bg-gradient-to-r dark:from-green-300 dark:to-purple-300 from-green-800 to-purple-800 bg-clip-text text-transparent">
          Wow! You&apos;ve reached this part?
        </h4>
        <p className="text-medium md:text-3xl font-[600] w-full md:max-w-[710px] dark:bg-gradient-to-tr from-[#f6f3d2] via-green-50 to-purple-50 bg-clip-text dark:text-transparent text-gray-600">
          I appreciate your time and visit. I&apos;m open to collaborating,
          learning and building. Hit me up{" "}
          <span className="text-white">🙇‍♂️</span>{" "}
          <Link href="mailto:offiongbassidev@gmail.com" target="_blank">
            offiongbassidev@gmail.com
          </Link>{" "}
        </p>
      </div>
    )
}

export default Appreciation;
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/images/Hero.jpg"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-sans">
        <span className="text-red-400 ">Shubham</span> Verma
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Shubham verma resume.pdf"
        download="Shubham resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-300 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-red-400 md:w-full ">
        <a href="https://www.linkedin.com/in/shubham-verma-1b0188213/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/ShubhamV-30">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-300 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Raipur, Chhattisgarh </span>
        </div>
        <p className="my-2 "> sverma3045@gmail.com </p>
        <p className="my-2"> 7773061001 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white font-extrabold bg-black rounded-full cursor-pointer bg-gradient-to-r from-red-300 to-blue-900 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:sverma3045@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white font-extrabold bg-black rounded-full cursor-pointer bg-gradient-to-r from-red-300 to-blue-900 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;

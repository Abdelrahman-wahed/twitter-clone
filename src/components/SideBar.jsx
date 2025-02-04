import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className= " md hidden side min-w-[350px]  m-2">
      {/* start Search box  */}
      <div className="bg-gray-200 dark:bg-[#253341] rounded-full flex items-center px-4 py-2">
        <FontAwesomeIcon
          className="text-dark-gray mr-4 "
          icon={faMagnifyingGlass}
        />
        <input
          type="text"
          placeholder="Search Twitter"
          className=" grow focus:outline-none bg-transparent placeholder:text-dark-gray "
        />
      </div>
      {/* end Search box  */}
      {/* START top trends  */}
      <ul className="my-2 space-y-2 divide-y-2 divide-[#e5e7eb] dark:divide-gray-700  rounded-2xl bg-gray-50 dark:bg-[#192734]">
        <li className="px-4 pt-2">
          <h1 className="font-bold">What’s happening</h1>
        </li>
        <li className="px-4 pt-2">
          <h1 className="font-bold">#Free Palestine</h1>
          <p className="text-dark-gray">29.7K Tweets</p>
        </li>
        <li className="px-4 pt-2">
          <h1 className="font-bold">#Free Palestine</h1>
          <p className="text-dark-gray">29.7K Tweets</p>
        </li>
        <li className="px-4 pt-2">
          <h1 className="font-bold">#Free Palestine</h1>
          <p className="text-dark-gray">29.7K Tweets</p>
        </li>
        <li className="px-4 py-2">
          <a
            href="#"
            className="cursor-pointer text-center text-[rgb(96,165,250)] -tracking-wide"
          >
            Show more
          </a>
        </li>
      </ul>
      {/* END top trends  */}
      {/*START Follow Box  */}
      <ul className="my-2 space-y-2 divide-y-2 divide-[#e5e7eb] dark:divide-gray-700  rounded-2xl bg-gray-50 dark:bg-[#192734]">
        <li className="px-4 pt-2">
          <h1>Who to follow</h1>
        </li>
        <li className="px-4 pt-2">
          <div className="flex justify-between gap-3 items-center w-full  ">
            <img
              src="./abdo.jpg"
              alt="photoProfile"
              className="w-10 h-10 ring-white ring-1 rounded-full"
            />
            <div className="flex-grow ">
              <h3 className="bold">Abdo Wahed</h3>
              <p className="text-dark-gray">@abdowaheed</p>
            </div>
            <button className="btn bg-transparent hover:text-white duration-300 hover:bg-[rgb(96,165,250)]  text-[rgb(96,165,250)] border-[2px] border-[rgb(96,165,250)]">
              Follow
            </button>
          </div>
        </li>
        <li className="px-4 pt-2">
          <div className="flex justify-between gap-3 items-center w-full">
            <img
              src="./abdo.jpg"
              alt="photoProfile"
              className="w-10 h-10 ring-white ring-1 rounded-full"
            />
            <div className="flex-grow ">
              <h3 className="bold">Abdo Wahed</h3>
              <p className="text-dark-gray">@abdowaheed</p>
            </div>
            <button className="btn bg-transparent hover:text-white duration-300 hover:bg-[rgb(96,165,250)] text-[rgb(96,165,250)] border-[2px] border-[rgb(96,165,250)]">
              Follow
            </button>
          </div>
        </li>
        <li className="px-4 pt-2">
          <div className="flex items-center animate-pulse ">
            <span className="w-10 h-10 bg-[#9ca3af] rounded-full"></span>
            <div className=" grow ml-4 pb-4">
              <span className="mt-2 bg-[#9ca3af] rounded-[4px] h-4 w-[85%] block"></span>
              <span className="mt-2 bg-[#9ca3af] rounded-[4px] h-4 w-[70%] block"></span>
              <span className="mt-2 bg-[#9ca3af] rounded-[4px] h-4 w-[50%] block"></span>
            </div>
          </div>
        </li>
        <li className="px-4 py-2">
          <a
            href="#"
            className="cursor-pointer text-center text-[rgb(96,165,250)] -tracking-wide"
          >
            Show more
          </a>
        </li>
      </ul>
      {/*End Follow Box */}
    </div>
  );
}

export default SideBar;

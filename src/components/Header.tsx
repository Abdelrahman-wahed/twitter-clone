import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faListUl,
  faUser,
  faEllipsis,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className=" flex flex-col items-start pr-4 relative border-r border-[#e5e7eb ] dark:border-gray-700 ">
      {/* Start Logo  */}
      <a href="#">
        <img src="./twitter.png" className="my-3  w-12" alt="twitter Logo" />
      </a>
      {/* End Logo  */}
      {/* Start NavBar  */}
      <ul className="space-y-8 xl:min-w-56   capitalize self-center ">
        <li className="bold text-2xl text-[rgb(96,165,250)] duration-100 cursor-pointer">
          <FontAwesomeIcon icon={faHouse} className=" text-2xl xl:mr-4" />
          <span className="xl:inline-block hidden">Home</span>
        </li>
        <li className="bold text-2xl hover:text-[rgb(96,165,250)] duration-100 cursor-pointer">
          <FontAwesomeIcon icon={faHashtag} className=" text-2xl xl:mr-4" />
          <span className="xl:inline-block hidden">Explore</span>
        </li>
        <li className="bold text-2xl hover:text-[rgb(96,165,250)] duration-100 cursor-pointer">
          <FontAwesomeIcon icon={faBell} className=" text-2xl xl:mr-4" />
          <span className="xl:inline-block hidden">Notification</span>
        </li>
        <li className="bold text-2xl hover:text-[rgb(96,165,250)] duration-100 cursor-pointer">
          <FontAwesomeIcon icon={faEnvelope} className=" text-2xl xl:mr-4" />
          <span className="xl:inline-block hidden">Messages</span>
        </li>
        <li className="bold text-2xl xl:font- hover:text-[rgb(96,165,250)] duration-100 cursor-pointer">
          <FontAwesomeIcon icon={faBookmark} className=" text-2xl xl:mr-4" />
          <span className="xl:inline-block hidden">Bookmarks</span>
        </li>
        <li className="bold text-2xl hover:text-[rgb(96,165,250)] duration-100 cursor-pointer">
          <FontAwesomeIcon icon={faListUl} className="-ul text-2xl xl:mr-4 " />
          <span className="xl:inline-block hidden">Lists</span>
        </li>
        <li className="bold text-2xl hover:text-[rgb(96,165,250)] duration-100 cursor-pointer">
          <FontAwesomeIcon icon={faUser} className=" text-2xl xl:mr-4" />
          <span className="xl:inline-block hidden">profile</span>
        </li>
        <li className="bold text-2xl hover:text-[rgb(96,165,250)] duration-100 cursor-pointer">
          <FontAwesomeIcon icon={faEllipsis} className=" text-2xl xl:mr-4   " />
          <span className="xl:inline-block hidden">more</span>
        </li>
      </ul>
      {/* End NavBar  */}

      <button className="btn hover:bg-[rgb(70,128,199)] duration-300 xl:w-full  my-8 p-0 w-12 h-12 xl:text-lg ">
        <span className="hidden xl:block">Tweet</span>
        <FontAwesomeIcon
          icon={faFeather}
          className="xl:hidden  bg-[rgb(96,165,250)]"
        />
      </button>
      {/* start account  */}
      <div className="flex justify-between flex-col xl:flex-row xl:gap-3 items-center w-full pb-3 ">
        <img
          src="./abdo.jpg"
          alt="photoProfile"
          className="w-10 h-10 ring-white ring-1 rounded-full cursor-pointer"
        />
        <div className="flex-grow hidden xl:block ">
          <h3 className="bold">Abdo Wahed</h3>
          <p className="text-dark-gray">@abdowaheed</p>
        </div>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 mr-2 cursor-pointer hidden xl:block"
        >
          <g>
            <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
          </g>
        </svg>
      </div>
      {/* end account  */}
    </div>
  );
}

export default Header;

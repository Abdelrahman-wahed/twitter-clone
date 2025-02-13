import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSpinner,
  faCloudMoon,
} from "@fortawesome/free-solid-svg-icons";
import Post from "./Post";
import Btn from "./Btn";
Post;
function TimeLine() {
  function HandleDarkmode(): void {
    document.body.classList.toggle("dark");
  }
  return (
    <div className="md:text-xs grow bg-[#e5e7eb]  dark:bg-main-dark  overflow-y-scroll ">
      {/* start Head  */}
      <div className="section flex justify-between items-center">
        <h1 className="font-bold text-xl ">Home</h1>
        <img className="w-8 " src="./twitter.png" alt="twitter" />
      </div>
      {/* end Head  */}
      {/* start create post  */}
      <div className="section">
        <div className="flex pb-4">
          <img
            src="./abdo.jpg"
            alt="photoProfile"
            className="w-12 h-12  rounded-full mr-2 cursor-pointer"
          />
          <input
            className="grow w-full placeholder:text-dark-gray focus:outline-none bg-transparent "
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <div className="bg-transparent pt-4 flex justify-between items-center">
          <ul className="flex space-x-4 text-xl md:text-sm text-[rgb(96,165,250)]  ">
            <li className="cursor-pointer">
              <FontAwesomeIcon icon={faImage} />
            </li>
            <li className="cursor-pointer">
              <FontAwesomeIcon icon={faImage} />
            </li>
            <li className="cursor-pointer">
              <FontAwesomeIcon icon={faImage} />
            </li>
            <li className="cursor-pointer">
              <FontAwesomeIcon icon={faImage} />
            </li>
            <li className="cursor-pointer">
              <FontAwesomeIcon icon={faImage} />
            </li>
          </ul>
        <Btn style="btn w-fit">Tweet</Btn>
        </div>
      </div>
      {/* End create post  */}
      {/* start showMore  */}
      <div className="section text-center">
        <a
          href="#"
          className="cursor-pointer block text-[rgb(96,165,250)] -tracking-wide"
        >
          Show 9 Tweets
        </a>
      </div>
      {/* End showMore  */}
      {/* start Post  */}
      <Post />
      <Post />
      <Post />
      {/* end Post  */}
      {/* start custom view  */}
      <div className=" dark:bg-[#38444d8c] py-2 text-center ">
        <div className="section dark:bg-main-dark">
          <h1 className="text-4xl font-bold ">Customize your view</h1>
          <p className=" dark:text-dark-gray my-3">
            Manage your font size, color and background. These settings affect
            all the Twitter accounts on this browser.
          </p>
          <button
            className=" btn hover:bg-[rgb(70,128,199)]  duration-300 xl:text-xl xl:px-6 xl:py-2 xl:w-fit w-12 h-12 text-xl p-0 "
            onClick={HandleDarkmode}
          >
            <FontAwesomeIcon
              icon={faCloudMoon}
              className="xl:hidden  bg-[rgb(96,165,250)]"
            />
            <span className="hidden xl:block">Toggle Dark Mode</span>
          </button>
        </div>
      </div>
      {/* end custom view  */}
      {/* start loading  */}
      <div className="section text-center">
        <FontAwesomeIcon
          icon={faSpinner}
          className="animate-spin text-5xl text-[rgb(96,165,250)]"
        />
      </div>
      {/* end loading  */}
    </div>
  );
}

export default TimeLine;

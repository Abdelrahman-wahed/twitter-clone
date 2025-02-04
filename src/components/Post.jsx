import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRetweet,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
function Post() {
  return (
    <div className="section">
      <div className="flex items-center">
        <img
          src="./abdo.jpg"
          alt="photoProfile"
          className="w-10 h-10 rounded-full mr-2 inline-block cursor-pointer"
        />
        <div className="space-x-1  flex items-center flex-wrap">
          <h1 className="md:w-full  font-bold">Abd El-Rahman Waheed</h1>
          <a className="text-dark-gray " href="#">
            @abdowaheed
          </a>
          <span className="text-dark-gray">&#46;</span>
          <p className=" text-dark-gray capitalize">nov 2</p>
        </div>
      </div>
      {/* start caption and photo and reacts */}
      <div className="pl-5 pr-2">
        <p className="text-xl leading-7 mt-3">
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.
          <br />
          <br />
          Experience is the name everyone gives to their{" "}
          <span className="text-[rgb(96,165,250)] cursor-pointer">
            #mistakes
          </span>{" "}
          <br />
          <br />
          Simplicity is the soul of efficiency.
        </p>
        <img
          src="./post.jpg"
          alt="post"
          className="my-4 w-full border rounded-2xl border-[#4b5563]"
        />
        <ul className=" flex justify-between items-center">
          <li className="react hover:text-blue-400 ">
            <FontAwesomeIcon icon={faComment} className="mr-4 " />
            12.3 k
          </li>
          <li className="react hover:text-green-400">
            <FontAwesomeIcon icon={faRetweet} className="mr-4 " />
            14 k
          </li>
          <li className="react hover:text-red-600">
            <FontAwesomeIcon icon={faHeart} className="mr-4 " />
            14 k
          </li>
          <li className="react  hover:text-blue-400">
            <FontAwesomeIcon icon={faShare} className="mr-4 " />
          </li>
        </ul>
      </div>
      {/* End caption and photo and reacts  */}
    </div>
  );
}

export default Post;

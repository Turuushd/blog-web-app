import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container w-[642px] mt-24 mb-24">
      <div className="flex gap-14 items-center justify-between">
        <div className="text-7xl">404</div>
        <div className="w-[3px] h-40 bg-[#E8E8EA]"></div>
        <div className="error-detail">
          <div className="title font-semibold text-2xl mb-5">
            Page Not Found
          </div>
          <div className="desc text-lg text-[#696A75] mb-5">
            We are sorry, This page is unknown or does not exist the page you
            are looking for.
          </div>
          <Link href="/">
            <button className="py-2 px-4 bg-[#4B6BFB] rounded-md font-medium text-white">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

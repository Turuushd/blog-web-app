export const ContactDetail = () => {
  return (
    <div>
      <p className="text-[#696A75] mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div className="flex gap-12 mb-10">
        <div className="p-4 rounded-xl border border-[#E8E8EA]">
          <div className="font-semibold text-2xl mb-2">Address</div>
          <div className="text-[#696A75] text-lg">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </div>
        </div>
        <div className="p-4 rounded-xl border border-[#E8E8EA]">
          <div className="font-semibold text-2xl mb-2">Contact</div>
          <div className="text-[#696A75] text-lg">
            313-332-8662 info@email.com
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F7] rounded-xl p-9 mb-40">
        <div className="font-semibold text-lg mb-6">Leave a Message</div>
        <form className="mb-7">
          <div className="flex gap-7 mb-5">
            <input
              className="p-3 w-60 rounded-md"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="p-3 w-60 rounded-md"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <input
            className="p-3 w-[508px] rounded-md mb-5"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="p-3 rounded-md w-[508px] h-32"
            type="text"
            placeholder="Write a Message"
          />
        </form>
        <button className="bg-[#4B6BFB] py-2 px-4 text-white text-sm font-medium rounded-md">
          Send Message
        </button>
      </div>
    </div>
  );
};

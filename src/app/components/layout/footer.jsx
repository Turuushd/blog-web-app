
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "../icons/FacebookIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkinIcon } from "../icons/LinkinIcon";

export const Footer = () => {
  return (
    <footer className="bg-[#F6F6F7] pt-16 mt-20">
      <div className="container">
        <div className="content flex justify-between mb-6">
          <div className="info w-72">
            <div className="text-[#181A2A] font-semibold text-lg mb-3">
              About
            </div>
            <p className="text-[#696A75] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="email">
              <span className="text-[#181A2A]">Email : </span>
              <span className="text-[#3B3C4A]">info@jstemplate.net</span>
            </div>
            <div className="phone">
              <span className="text-[#181A2A]">Phone : </span>
              <span className="text-[#3B3C4A]">880 123 456 789</span>
            </div>
          </div>
          <div className="link">
            <ul className="text-center">
              <li>
                <Link href={"#"}>Home</Link>
              </li>
              <li>
                <Link href={"#"}>Blog</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="social-icons flex gap-7">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkinIcon />
          </div>
        </div>
        <div className="copyright flex justify-between items-center py-8 border-t-[1px] border-t-[#DCDDDF]">
          <div className="detail flex gap-2">
            <Image src={"/Logo1.png"} alt="" width={50} height={48} />
            <div>
              <div className="text-xl text-[#141624]">
                Meta<span className="font-extrabold text-xl">Blog</span>
              </div>
              <div className="text-[#3B3C4A]">© All Rights Reserved.</div>
            </div>
          </div>
          <div className="consent">
            <ul className="flex gap-4">
              <li>
                <Link href={"#"} className="text-[#3B3C4A]">
                  Terms of Use
                </Link>
              </li>
              <div className="w-[1px] h-6 bg-[#E8E8EA]"></div>
              <li>
                <Link href={"#"} className="text-[#3B3C4A]">
                  Privacy Policy
                </Link>
              </li>
              <div className="w-[1px] h-6 bg-[#E8E8EA]"></div>
              <li>
                <Link href={"#"} className="text-[#3B3C4A]">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

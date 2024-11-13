"use client";
import Section from "@/app/components/section";
import IconButton from "../../components/icon-button";
import Tag from "../../components/tag";
import FigmaIcon from "../hero/desc/figma-icon";
import GithubIcon from "../hero/desc/github-icon";
import LinkedinIcon from "../hero/desc/linkedin-icon";
import CopyIcon from "./copy-icon";
import EmailIcon from "./email-icon";
import PhoneIcon from "./phone-icon";

function ContactMe() {
  return (
    <Section id="contact-me">
      <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-12 md:px-8">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col justify-center items-center">
            <Tag text="Get in touch" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <span className="text-xl text-gray-600">
              {` What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.`}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:gap-4">
          <div className="flex justify-center items-center gap-4 text-gray-600">
            <EmailIcon />
            <span className="text-gray-900 font-semibold text-lg">
              pc2man@gmail.com
            </span>
            <IconButton onClick={() => console.log("copy")}>
              <CopyIcon />
            </IconButton>
          </div>
          <div className="flex justify-center items-center gap-4 text-gray-600">
            <PhoneIcon />
            <span className="text-gray-900 font-semibold text-lg">
              +98 9119010041
            </span>
            <IconButton onClick={() => console.log("copy")}>
              <CopyIcon />
            </IconButton>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <span className="text-gray-600 ">
              You may also find me on these platforms!
            </span>
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <div className="flex items-center gap-1">
                <IconButton>
                  <GithubIcon />
                </IconButton>
                <IconButton>
                  <LinkedinIcon />
                </IconButton>
                <IconButton>
                  <FigmaIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactMe;

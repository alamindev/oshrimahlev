import React from 'react'
import Image from "next/image"; 
import python from "../public/python.svg";
import javascript from "../public/javascript.svg";
import sql from "../public/sql.svg";
import excel from "../public/excel.svg";
import cybar from "../public/cybar.svg"
import bannerDesktop from "../public/banner-desktop.png";
import bannerMobile from "../public/banner-mobile.png";
import aws from "../public/aws.svg";
export default function Banner() {
  return (
    <section className="pt-24 px-4 bg-[url(/banner-bg-mobile.png)] lg:bg-[url(../public/banner-bg.png)] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-6 xl:gap-10">
          <div className="w-[500px] max-w-full lg:pt-14">
            <h1 className="text-[48px] font-bold !leading-[54px] text-white pb-5">
              Grow up your skills by online courses
            </h1>
            <p className="text-[22px] font-semibold text-[#ACAFC9]">
              The best tech-related educational products
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 pt-5">
              <a href="#" className="inline-block">
                <Image src={python} alt="python" />
              </a>
              <a href="#" className="inline-block">
                <Image src={javascript} alt="javascript" />
              </a>
              <a href="#" className="inline-block">
                <Image src={sql} alt="sql" />
              </a>
              <a href="#" className="inline-block">
                <Image src={excel} alt="excel" />
              </a>
              <a href="#" className="inline-block">
                <Image src={cybar} alt="cybar" />
              </a>
              <a href="#" className="inline-block">
                <Image src={aws} alt="aws" />
              </a>
            </div>
          </div>
          <div className="">
            <div className="hidden lg:block -mb-3.5">
              <Image src={bannerDesktop} alt="banner-desktop" />
            </div>
            <div className="lg:hidden">
              <Image src={bannerMobile} alt="banner-mobile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

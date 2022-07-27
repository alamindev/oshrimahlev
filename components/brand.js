import React from 'react'
import Image from "next/image"; 
import udemy from "../public/udemy.svg";
import coursera from "../public/coursera.svg";
import edx from "../public/edx.svg";
import edureka from "../public/edureka.svg";
export default function Brand() {
  return (
    <section className='py-6 px-4'>
      <div className="w-[636px] max-w-full mx-auto">
        <ul className='flex gap-5 justify-center  lg:gap-10 items-center'>
          <li>
            <Image src={udemy} alt="udemy" />
          </li>
          <li>
            <Image src={coursera} alt="coursera" />
          </li>
          <li>
            <Image src={edx} alt="edx" />
          </li>
          <li>
            <Image src={edureka} alt="edureka" />
          </li>
        </ul>
      </div>
    </section>
  );
}

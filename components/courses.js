import React from 'react'
import Image from "next/image"; 
import Course from "../components/Course";
import { CourseDatas } from "../data"; 
export default function Courses() { 
  return (
    <section className="py-10 lg:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-[28px] lg:text-[32px] text-dark pb-10">
          The most popular courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8">
          {CourseDatas.map((course) => (
            <Course key="course.id" {...course} />
          ))}
              </div>
              <div className='flex justify-center pt-8'>
                  <a href='#' className='px-4 py-2.5 rounded-md bg-brand-blue text-white '>Show all</a>
              </div>
      </div>
    </section>
  );
}

import React from 'react'
import Link from "next/link";
import Image from "next/image"; 
export default function Course({ id, title, user_name, tag, brand, image, date, price }) {
  return (
    <div className="border border-brand-gray p-6 bg-white rounded-md">
      <ul className="flex flex-wrap gap-2 items-center pb-6">
        {tag.map((index, t) => (
          <li key={index}>
            <a
              className="inline-block px-3 py-2 bg-[#EFF8FF] rounded-full text-brand-blue text-xs font-medium"
              href="#"
            >
              {t}
            </a>
          </li>
        ))}
      </ul>
      <div className="mb-6 w-full h-[137px] relative rounded-lg overflow-hidden">
        <Image
          src={image}
          layout="fill" 
          objectFit="cover"
          alt="edureka"
        />
      </div>
      <div className="flex flex-col justify-between min-h-[250px]">
        <div>
          <h2 className="text-xl font-bold mb-5">{title}</h2>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99358 9.47183C9.48106 9.47183 9.96377 9.37581 10.4141 9.18926C10.8645 9.00271 11.2737 8.72927 11.6184 8.38457C11.9631 8.03987 12.2366 7.63065 12.4231 7.18027C12.6097 6.7299 12.7057 6.24719 12.7057 5.75971C12.7057 5.27223 12.6097 4.78952 12.4231 4.33914C12.2366 3.88877 11.9631 3.47955 11.6184 3.13485C11.2737 2.79014 10.8645 2.51671 10.4141 2.33016C9.96377 2.14361 9.48106 2.04759 8.99358 2.04759C8.00906 2.04759 7.06487 2.43869 6.36871 3.13485C5.67256 3.831 5.28146 4.77519 5.28146 5.75971C5.28146 6.74422 5.67256 7.68841 6.36871 8.38457C7.06487 9.08073 8.00906 9.47183 8.99358 9.47183ZM8.99935 0.75C10.0859 0.749646 11.1424 1.10687 12.0059 1.76654C12.8693 2.42622 13.4916 3.35169 13.7769 4.40016C14.0621 5.44863 13.9944 6.56183 13.5842 7.56801C13.174 8.57419 12.4441 9.41742 11.5071 9.9676C14.5494 10.8833 16.8344 13.4471 17.2444 16.6313C17.2831 16.934 17.0579 17.2087 16.7412 17.2458C16.4252 17.2829 16.1365 17.0685 16.0977 16.7657C15.6523 13.3093 12.6587 10.7067 9.02822 10.7067C5.37797 10.7067 2.34559 13.3143 1.90096 16.7657C1.86219 17.0685 1.57347 17.2829 1.25752 17.2458C0.940757 17.2087 0.715555 16.934 0.754326 16.6313C1.16348 13.4603 3.46087 10.8998 6.50811 9.97585C5.56827 9.42816 4.83503 8.58612 4.42176 7.57991C4.0085 6.57369 3.93822 5.45936 4.22179 4.4092C4.50536 3.35904 5.127 2.43154 5.99057 1.77011C6.85415 1.10869 7.91158 0.750173 8.99935 0.75Z"
                  fill="#B8BAC1"
                />
              </svg>
              <p className="text-base font-medium text-[#535668]">
                {user_name}
              </p>
            </li>
            <li className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.256 4.4648C7.564 4.4648 7.8136 4.7152 7.8136 5.0232V8.9304H11.7208C11.8651 8.93587 12.0017 8.99705 12.1019 9.1011C12.2021 9.20514 12.2581 9.34396 12.2581 9.4884C12.2581 9.63284 12.2021 9.77166 12.1019 9.8757C12.0017 9.97975 11.8651 10.0409 11.7208 10.0464H7.256C7.1079 10.0464 6.96587 9.98757 6.86115 9.88285C6.75643 9.77813 6.6976 9.6361 6.6976 9.488V5.024C6.6976 4.7152 6.9472 4.4648 7.256 4.4648Z"
                  fill="#B8BAC1"
                />
              </svg>
              <p className="text-base font-medium text-[#535668]"> {date}</p>
            </li>
            <li className="flex items-center gap-2 pt-2">
              <p className="font-bold text-lg text-[#3BBA4F] leading-[1]">
                ${price}
              </p>
              <div className="relative group w-4 h-4">
                <Image src="/info.svg" width="20" height="20" alt="edureka" />
                <div className="absolute bottom-0 -left-[50%] -translate-x-[33%] flex-col items-center hidden  mb-6 group-hover:flex">
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-black shadow-lg">
                    Pay by course
                  </span>
                  <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center pt-10">
          <div>
            <Image src="/udemy-sm.svg" width="60" height="20" alt="edureka" />
          </div>
          <Link href={`/${id}`}>
            <a className="flex gap-2 items-center text-brand-blue">
              View details
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.819676 11.0303C0.526783 10.7374 0.526783 10.2626 0.819676 9.96967L4.78935 6L0.819676 2.03033C0.526783 1.73744 0.526783 1.26256 0.819676 0.96967C1.11257 0.676777 1.58744 0.676777 1.88034 0.96967L6.38034 5.46967C6.67323 5.76256 6.67323 6.23744 6.38034 6.53033L1.88034 11.0303C1.58744 11.3232 1.11257 11.3232 0.819676 11.0303Z"
                  fill="#3D64E3"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import logo from "../public/logo.svg";
export default function Navbar({ styles }) {
  return (
    <header className={`py-5 px-4 ${styles}`}>
      <div className="container mx-auto">
        <div className="flex gap-20 items-center">
          <div className="">
            <Image src={logo} alt="logo" />
          </div>
          <nav>
            <ul className="flex gap-12 items-center">
              <li>
                <a
                  href="#"
                  className="inline-block text-base text-brand-gray-dark"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-base text-brand-gray-dark"
                >
                  Courses
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

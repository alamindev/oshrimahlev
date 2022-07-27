 
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import BrandLogo from "../components/brand";
import Courses from "../components/courses";
 
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="-mt-20">
        <Banner /> 
        <BrandLogo/>
        <Courses/>
      </main>
    </>
  );
}

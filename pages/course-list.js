import Navbar from "../components/navbar";
import Banner from "../components/banner";
import BrandLogo from "../components/brand";
import Courses from "../components/courses";
import { Disclosure } from "@headlessui/react";
export default function Home() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Navbar styles="bg-[#161933]" />
      <main>
        <section className="px-4 py-10">
          <div className="container mx-auto">
            <div className="pb-8">
              <h2 className="text-2xl font-medium">
                Showing 137 results for <strong>Python</strong>
              </h2>
              <div className="flex gap-10 pt-10">
                <div className="w-[300px] shrink-0 max-w-full">
                  <div className="w-full bg-[#F1F8FF] border border-[#B9D0E7] rounded-md shadow-[0_4px_4px_0_rgba(0,0,0,.25)]">
                    <Disclosure
                      as="div"
                      defaultOpen
                      className="p-5 border-b border-[#B9D0E7]"
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            as="div"
                            className="flex justify-between items-center"
                          >
                            <h3>Offered by</h3>
                            <svg
                              className={classNames(
                                !open ? "-rotate-180" : "rotate-0",
                                "transform"
                              )}
                              width="14"
                              height="8"
                              viewBox="0 0 14 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.1482 7.39817C12.7902 7.75615 12.2098 7.75615 11.8518 7.39817L7 2.54635L2.14818 7.39817C1.7902 7.75615 1.2098 7.75615 0.851819 7.39817C0.493837 7.04019 0.493837 6.45979 0.851819 6.10181L6.35182 0.601809C6.7098 0.243828 7.2902 0.243828 7.64818 0.601809L13.1482 6.10181C13.5062 6.45979 13.5062 7.04019 13.1482 7.39817Z"
                                fill="#282D55"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel as="div" className="pt-5">
                            <fieldset class="space-y-5">
                              <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                  <input
                                    id="offer-1"
                                    name="offer"
                                    type="checkbox"
                                    class="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-1"
                                    class="font-normal text-[#535668]"
                                  >
                                    EdX (284)
                                  </label>
                                </div>
                              </div>
                              <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                  <input
                                    id="offer-2"
                                    name="offer"
                                    type="checkbox"
                                    class="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-2"
                                    class="font-normal text-[#535668]"
                                  >
                                    Udemy (202)
                                  </label>
                                </div>
                              </div>
                              <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                  <input
                                    id="offer-3"
                                    name="offer"
                                    type="checkbox"
                                    class="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-3"
                                    class="font-normal text-[#535668]"
                                  >
                                    Coursera (186)
                                  </label>
                                </div>
                              </div>
                              <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                  <input
                                    id="offer-4"
                                    name="offer"
                                    type="checkbox"
                                    class="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-4"
                                    class="font-normal text-[#535668]"
                                  >
                                    Edureka (113)
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure
                      as="div"
                      className="p-5 border-b border-[#B9D0E7]"
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            as="div"
                            className="flex justify-between items-center"
                          >
                            <h3>Pricing</h3>
                            <svg
                              className={classNames(
                                !open ? "-rotate-180" : "rotate-0",
                                "transform"
                              )}
                              width="14"
                              height="8"
                              viewBox="0 0 14 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.1482 7.39817C12.7902 7.75615 12.2098 7.75615 11.8518 7.39817L7 2.54635L2.14818 7.39817C1.7902 7.75615 1.2098 7.75615 0.851819 7.39817C0.493837 7.04019 0.493837 6.45979 0.851819 6.10181L6.35182 0.601809C6.7098 0.243828 7.2902 0.243828 7.64818 0.601809L13.1482 6.10181C13.5062 6.45979 13.5062 7.04019 13.1482 7.39817Z"
                                fill="#282D55"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel as="div" className="pt-5">
                            <fieldset className="space-y-5">
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offer-1"
                                    name="offer"
                                    type="checkbox"
                                    className="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-1"
                                    className="font-normal text-[#535668]"
                                  >
                                    EdX (284)
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offer-2"
                                    name="offer"
                                    type="checkbox"
                                    className="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-2"
                                    className="font-normal text-[#535668]"
                                  >
                                    Udemy (202)
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offer-3"
                                    name="offer"
                                    type="checkbox"
                                    className="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-3"
                                    className="font-normal text-[#535668]"
                                  >
                                    Coursera (186)
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offer-4"
                                    name="offer"
                                    type="checkbox"
                                    className="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-4"
                                    className="font-normal text-[#535668]"
                                  >
                                    Edureka (113)
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure
                      as="div"
                      className="p-5 border-b border-[#B9D0E7]"
                    >
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            as="div"
                            className="flex justify-between items-center"
                          >
                            <h3>Tools</h3>
                            <svg
                              className={classNames(
                                !open ? "-rotate-180" : "rotate-0",
                                "transform"
                              )}
                              width="14"
                              height="8"
                              viewBox="0 0 14 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.1482 7.39817C12.7902 7.75615 12.2098 7.75615 11.8518 7.39817L7 2.54635L2.14818 7.39817C1.7902 7.75615 1.2098 7.75615 0.851819 7.39817C0.493837 7.04019 0.493837 6.45979 0.851819 6.10181L6.35182 0.601809C6.7098 0.243828 7.2902 0.243828 7.64818 0.601809L13.1482 6.10181C13.5062 6.45979 13.5062 7.04019 13.1482 7.39817Z"
                                fill="#282D55"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel as="div" className="pt-5">
                            <fieldset className="space-y-5">
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offer-1"
                                    name="offer"
                                    type="checkbox"
                                    className="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-1"
                                    className="font-normal text-[#535668]"
                                  >
                                    EdX (284)
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offer-2"
                                    name="offer"
                                    type="checkbox"
                                    className="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-2"
                                    className="font-normal text-[#535668]"
                                  >
                                    Udemy (202)
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offer-3"
                                    name="offer"
                                    type="checkbox"
                                    className="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-3"
                                    className="font-normal text-[#535668]"
                                  >
                                    Coursera (186)
                                  </label>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offer-4"
                                    name="offer"
                                    type="checkbox"
                                    className="focus:ring-[#B9D0E7] h-5 w-5 text-[#B9D0E7] border-[#B9D0E7] rounded"
                                  />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label
                                    htmlFor="offer-4"
                                    class="font-normal text-[#535668]"
                                  >
                                    Edureka (113)
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid grid-cols-1 gap-6">
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import React from "react";
import Svgexport from "../../public/assets/Deploy and scale on Cloud.svg";
import Copy from "../../public/assets/svgexport-28.svg";
import Image from "next/image";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function CoreSection() {
  const text = `from prefect import flow, task

@task
def say_hello():
	print("Hello, World! I'm Marvin!")


@flow("Prefect 2.0 Flow"):
def marvin_flow():
	say_hello()


marvin_flow() # "Hello, World! I'm Marvin!"
  `;
  return (
    <section className="core-section ">
      <section className="text-white body-font ">
        <div className="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full ">
            <Image className="m-auto pb-4" src={Svgexport} alt="" />
            <p style={{ fontSize: "12px" }}>OPEN-SOURCE WORKFLOW MANAGEMENT</p>
            <h1
              className=" title-font sm:text-4xl text-3xl mb-1 mt-16 font-medium text-white lg:mx-auto opacity-100"
              style={{ fontSize: "64px" }}
            >
              Focus on your code
            </h1>

            <p className=" leading-relaxed p-10">
              Use a flexible Python framework to easily combine tasks into
              workflows, then deploy, schedule, and monitor their execution
              through the Prefect UI or API.
            </p>
            <div className="flex justify-center">
              <button className="btn inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10">
                GET THE CODE
              </button>
              <button className="text-white inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                READ THE DOCS
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-28 pb-40 ">
        <SyntaxHighlighter
          language="python"
          style={tomorrowNightBlue}
          customStyle={{
            padding: "30px",
          }}
          showLineNumbers={true}
          wrapLongLines={true}
        >
          {text}
        </SyntaxHighlighter>
        <div className="bg-gray-700  flex flex-wrap justify-between">
          <div></div>
          <div style={{ background: "#0e50f5", padding: "10px 35px" }}>
            <Image src={Copy} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between ">
          <div></div>
          <div className=" flex flex-col">
            <div style={{ fontSize: "46px", color: "#0e50f5" }}>11,651</div>
            <div
              style={{ fontSize: "26px", color: "white", textAlign: "center" }}
            >
              Github Stars
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

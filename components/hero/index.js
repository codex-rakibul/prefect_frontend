import React from "react";
import Navbar from "../navbar";
import Svgexport from "../../public/assets/svgexport-40.svg";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="relative ">
      <div className="gradient-1 absolute object-cover w-full h-full"></div>
      <div className="gradient-2 absolute object-cover w-full h-full"></div>
      <div
        className="absolute object-cover w-auto h-full opacity-40"
        style={{ top: "-318px" }}
      >
        <Image src={Svgexport} />
      </div>
      <div
        className="absolute object-cover right  h-full invisible xl:visible opacity"
        style={{ top: "30px" }}
      >
        {/* <Image src={Svgexport} /> */}
      </div>

      <Navbar />
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1
              className=" title-font sm:text-4xl text-3xl mb-16 font-medium text-white lg:mx-auto opacity-100"
              style={{ fontSize: "96px" }}
            >
              Coordinate
            </h1>
            <h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white "
              style={{ fontSize: "96px" }}
            >
              your dataflow
            </h1>

            <p className="mt-16 mb-8 leading-relaxed">
              Orchestrate anything, observe erverything.
            </p>
            <div className="flex justify-center">
              <button className="btn2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10">
                START FREE
              </button>
              <button className="btn ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                DEPLOY OPEN SOURCE
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white hero-grid container grid md:grid-cols-3 lg:grid-cols-4 gap-2 z-10 relative m-16 ">
        <div class="how-it-works pt-10 animate__animated animate__fadeInLeft">
          <h4 style={{ fontSize: "32px" }}>
            Supercharge
            <br />
            your
            <br />
            workflows
          </h4>
          <p class="text-5xl mt-12 group-hover:ml-2 text-white">→</p>
        </div>
        <div className="hero-grid--section">
          <img
            style={{ marginTop: "45px" }}
            alt="Use Prefect 1.0 to build and design workflows with our trusted and popular open-source framework."
            src="https://d33wubrfki0l68.cloudfront.net/7d4b20d859244fd6d0e591e7420102570717b590/65e35/assets/img/build-icon.2d46c976.svg"
          />
          <h3
            style={{
              fontSize: "32px",
              marginTop: "21px",
              marginBottom: "21px",
            }}
          >
            Build
          </h3>
          <p
            style={{
              fontSize: "18px",
              marginTop: "16px",
              marginBottom: "42px",
              width: "220px",
            }}
            className="font-sans"
          >
            Design and test your workflow with our popular open-source
            framework.
          </p>
          <a href="/opensource/" className="btn-text ">
            PREFECT 2.0
            <span
              className="text-white arrow text-3xl"
              style={{ marginBottom: "6px" }}
            >
              {" "}
              →
            </span>
          </a>
        </div>
        <div className="hero-grid--section">
          <img
            style={{ marginTop: "45px" }}
            alt="Use Prefect 1.0 to build and design workflows with our trusted and popular open-source framework."
            src="https://d33wubrfki0l68.cloudfront.net/7d4b20d859244fd6d0e591e7420102570717b590/65e35/assets/img/build-icon.2d46c976.svg"
          />
          <h3
            style={{
              fontSize: "32px",
              marginTop: "21px",
              marginBottom: "21px",
            }}
          >
            Run
          </h3>
          <p
            style={{
              fontSize: "18px",
              marginTop: "16px",
              marginBottom: "42px",
              width: "250px",
            }}
            className="font-sans"
          >
            Design and test your workflow with our popular open-source
            framework.
          </p>
        </div>
        <div className="hero-grid--section">
          <img
            style={{ marginTop: "45px" }}
            alt="Use Prefect 1.0 to build and design workflows with our trusted and popular open-source framework."
            src="https://d33wubrfki0l68.cloudfront.net/7d4b20d859244fd6d0e591e7420102570717b590/65e35/assets/img/build-icon.2d46c976.svg"
          />
          <h3
            style={{
              fontSize: "32px",
              marginTop: "21px",
              marginBottom: "21px",
            }}
          >
            Monitor
          </h3>
          <p
            style={{
              fontSize: "18px",
              marginTop: "16px",
              marginBottom: "42px",
              width: "220px",
            }}
            className="font-sans"
          >
            Design and test your workflow with our popular open-source
            framework.
          </p>
          <a href="/opensource/" className="btn-text ">
            PREFECT 2.0
            <span
              className="text-white arrow text-3xl"
              style={{ marginBottom: "6px" }}
            >
              {" "}
              →
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

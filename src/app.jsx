import { useState, useEffect } from "preact/hooks";

import countries from "/src/config.json";
import "./app.css";

let styleFlag = "",
  sizeFlag = "",
  countryCode = "";
styleFlag = "FLAT";
sizeFlag = 64;
const URLflagAPI = "https://www.countryflagicons.com/";
//const countries = CONFIG.countries;
// const countries = [
//   {
//     name: "Argentina",
//     "countryCode": "AR",
//     flagImgURL: "https://www.countryflagicons.com/FLAT/64/AR.png",
//     companies: [
//       {
//         name: "Claro",
//         logoImgURL: "/img/claro-logo.png",
//         termsURL: "https://www.google.com.ar",
//       },
//       {
//         name: "Movistar",
//         logoImgURL: "/img/movistar-logo.png",
//         termsURL: "https://www.youtube.com",
//       },
//       {
//         name: "Personal",
//         logoImgURL: "/img/personal-logo.png",
//         termsURL: "https://mtorto.com",
//       },
//     ],
//   },
//   {
//     name: "Brasil",
//     "countryCode": "BR",
//     flagImgURL: "https://www.countryflagicons.com/FLAT/64/BR.png",
//     companies: [
//       {
//         name: "Claro",
//         logoImgURL: "",
//         termsURL: "",
//       },
//       {
//         name: "Movistar",
//         logoImgURL: "",
//         termsURL: "",
//       },
//       {
//         name: "Personal",
//         logoImgURL: "",
//         termsURL: "",
//       },
//     ],
//   },
//   {
//     name: "Colombia",
//     "countryCode": "CO",
//     flagImgURL: "https://www.countryflagicons.com/FLAT/64/CO.png",
//     companies: [
//       {
//         name: "Claro",
//         logoImgURL: "",
//         termsURL: "",
//       },
//       {
//         name: "Movistar",
//         logoImgURL: "",
//         termsURL: "",
//       },
//       {
//         name: "Personal",
//         logoImgURL: "",
//         termsURL: "",
//       },
//     ],
//   },
//   {
//     name: "Venezuela",
//     "countryCode": "VE",
//     flagImgURL: "https://www.countryflagicons.com/FLAT/64/VE.png",
//     companies: [
//       {
//         name: "Claro",
//         logoImgURL: "",
//         termsURL: "",
//       },
//       {
//         name: "Movistar",
//         logoImgURL: "",
//         termsURL: "",
//       },
//       {
//         name: "Personal",
//         logoImgURL: "",
//         termsURL: "",
//       },
//     ],
//   },
// ];

export function App() {
  const [selectedCountry, setSelectedCountry] = useState(0);

  // useEffect(() => {
  //   if (selectedCountry) {
  //     console.log(selectedCountry);
  //   }
  // }, [selectedCountry]);

  return (
    <section className=" w-screen h-full max-w-3xl flex flex-col items-center justify-center bg-transparent">
      <div className=" flex flex-col items-center justify-center">
        <h1 className=" text-xl font-mono">UI Terminos y Condiciones</h1>

        <ul
          className=" p-4 flex flex-wrap justify-center gap-4 
                    sm:gap-6"
        >
          {countries.map((country) => {
            return (
              <button
              className=" w-40 h-36 text-lg my-1  bg-blue-100 rounded-lg
                          hover:scale-110 hover:shadow-md hover:shadow-gray-500 active:scale-100 transition-all hover:cursor-pointer
                          sm:my-2"
                onClick={() => setSelectedCountry(country)}
              >
                <li className="flex flex-col items-center justify-center"
                  
                  key={country.name}
                  id={country.name}
                >
                  {/* <img src={country.flagImgURL} alt={`${country.name} Flag`} /> */}
                  <img
                    src={
                      URLflagAPI +
                      `${styleFlag}/${sizeFlag}/${country.countryCode}.png`
                    }
                    alt={`${country.name} Flag`}
                  />
                  <h3 className=" leading-tight">{country.name}</h3>
                </li>
              </button>
            );
          })}
        </ul>
      </div>
      {selectedCountry ? (
        <div className=" w-full  h-screen absolute top-0 flex items-center justify-center px-4">
          <div
            className=" h-[50vh] max-h-[400px] min-h-[260px] px-5 flex flex-col items-center justify-around bg-gray-300 opacity-100 rounded-lg
                      "
          >
            <div className=" flex items-center justify-center gap-4 sm:gap-4 ">
              <button
                className=" px-2 py-1 font-bold text-gray-200 bg-blue-500 rounded-lg transition-all hover:bg-blue-600 active:scale-95"
                onClick={() => setSelectedCountry(0)}
              >
                X
              </button>
              <h1 className=" text-xl font-sans font-medium uppercase">
                Operadoras en {selectedCountry.name}
              </h1>
              <img
                className=" w-10"
                src={
                  URLflagAPI +
                  `${styleFlag}/${sizeFlag}/${selectedCountry.countryCode}.png`
                }
                alt={`${selectedCountry.name} Flag`}
              />
            </div>

            <div>
              <ul className=" flex flex-wrap">
                {selectedCountry.companies.map((company) => {
                  return (
                    <li
                      key={company.name}
                      className=" text-lg mx-5 flex flex-col items-center"
                      id={company.name}
                    >
                      <a
                        className=" hover:scale-110 transition-all"
                        href={company.termsURL}
                        target="blank"
                      >
                        <img
                          className=" w-20"
                          src={company.logoImgURL}
                          alt={`${company.name} Company Logo`}
                        />
                      </a>
                      <h3>{company.name}</h3>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

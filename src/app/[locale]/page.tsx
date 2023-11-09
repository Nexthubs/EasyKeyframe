import SelectDraft from "./components/SelectDraft";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FAQSection from "./components/FAQSection";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <header className="relative">
      <div className="flex justify-center items-center min-h-screen">
        <Image
          src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg"
          alt=""
          width={100}
          height={100}
          className="absolute -z-10 inline-block h-full w-full object-cover"
        />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
              {t("Title")}
            </h1>
            <div className="mx-auto mb-3 max-w-[528px] md:mb-6 lg:mb-8">
              <p className="text-xl text-[#636262]">{t("Description")}</p>
            </div>

            <SelectDraft></SelectDraft>
          </div>

          <section className="relative">
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-24">
              <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
                <p className="text-sm font-bold uppercase text-[#c9fd02]">
                  {t("TutorialStep")}
                </p>
                <h2 className="mb-4 mt-6 text-3xl font-extrabold text-white md:text-5xl">
                  {t("HowUse")}
                </h2>
                {/* <p className="mx-auto mt-4 max-w-[528px] text-[#aeaeae]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam,purus sit amet luctus magna fringilla urna
                </p> */}
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                <div className="grid grid-cols-1 gap-4 rounded-xl bg-[#131313] p-8">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-[#c9fd02]">
                    <p className="text-xl font-bold">1</p>
                  </div>
                  <p className="text-xl font-semibold text-white">
                    {t("TutorialStep1Title")}
                  </p>
                  <p className="text-sm text-[#636262]">
                    {t("TutorialStep1Description")}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 rounded-xl bg-[#131313] p-8">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-[#c9fd02]">
                    <p className="text-xl font-bold">2</p>
                  </div>
                  <p className="text-xl font-semibold text-white">
                    {t("TutorialStep2Title")}
                  </p>
                  <p className="text-sm text-[#636262]">
                    {t("TutorialStep2Description")}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 rounded-xl bg-[#131313] p-8">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-[#c9fd02]">
                    <p className="text-xl font-bold">3</p>
                  </div>
                  <p className="text-xl font-semibold text-white">
                    {t("TutorialStep3Title")}
                  </p>
                  <p className="text-sm text-[#636262]">
                    {t("TutorialStep3Description")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <FAQSection></FAQSection>

          <footer className="bg-center text-white">
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
              <div className="flex flex-col items-center">
                {/* <a href="#" className="mb-8 inline-block max-w-full">
                  <img
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6399728d302d2471f18b229f_Group%2047874%20(2).svg"
                    alt=""
                    className="inline-block max-h-10"
                  />
                </a> */}
                {/* <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1">
                  <a
                    href="#"
                    className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
                  >
                    Works
                  </a>
                  <a
                    href="#"
                    className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    className="inline-block px-6 py-2 font-normal transition hover:text-[#d6a701]"
                  >
                    Help
                  </a>
                </div> */}
                <div className="mb-8 mt-8 w-48 border-b border-solid border-b-white"></div>
                {/* <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3">
                  <a
                    href="#"
                    className="ifont-bold mx-auto flex max-w-[24px] flex-col"
                  >
                    <img
                      src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bc5e36f4a882999413_Frame%205479.svg"
                      alt=""
                      className="inline-block"
                    />
                  </a>
                  <a
                    href="#"
                    className="mx-auto flex max-w-[24px] flex-col font-bold"
                  >
                    <img
                      src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf093252f2b2114050_Frame%205480.svg"
                      alt=""
                      className="inline-block"
                    />
                  </a>
                  <a
                    href="#"
                    className="ifont-bold mx-auto flex max-w-[24px] flex-col"
                  >
                    <img
                      src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bde1a389ee15d86fc6_Frame%205481-1.svg"
                      alt=""
                      className="inline-block"
                    />
                  </a>
                  <a
                    href="#"
                    className="mx-auto flex max-w-[24px] flex-col font-bold"
                  >
                    <img
                      src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639972bf10337117b26b8e51_Frame%205481.svg"
                      alt=""
                      className="inline-block"
                    />
                  </a>
                </div> */}
                <p className="max-[479px]:text-sm">
                  Made with 😆 by{" "}
                  <a href="https://twitter.com/iHunterDev" target="_blank">
                    iHunterDev
                  </a>
                  . Powered by{" "}
                  <a href="https://vercel.com/" target="_blank">
                    Vercel
                  </a>
                  ,{" "}
                  <a href="https://www.cloudflare.com/" target="_blank">
                    Cloudflare
                  </a>
                  .
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </header>
  );
}

import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
function About() {
  return (
    <section className=" bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text={"code and chai"} />
          <p className=" text-slate-600 mt-8 leading-loose">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
            consectetur, in optio assumenda omnis quibusdam enim sunt similique
            asperiores quod vitae quo deleniti quidem dolor mollitia iusto minus
            amet pariatur.
          </p>
        </article>
      </div>
    </section>
  );
}
export default About;

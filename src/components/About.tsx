import { heroBanner2 } from "@/data";

const About = () => {
  return (
    <section>
      <div>
        <img
          src={heroBanner2}
          height={1200}
          className="w-screen object-center object-contain"
          width={1200}
          alt="herobanner"
        />
      </div>
    </section>
  );
};

export default About;

import { WhyUsLanguage, WhyUsNoBot, WhyUsSecure, WhyUsService } from "@/data";

interface CardProps {
  title: string;
  desc: string;
  img: string;
}

const Card = ({ title, desc, img }: CardProps) => {
  return (
    <div className="flex flex-col items-center p-4 w-full  shadow-lg rounded-lg max-w-xs mx-auto">
      <div className="flex justify-center items-center mb-4">
        <img src={img} alt={title} className="w-24 h-24 object-contain" />
      </div>
      <div className="text-center ">
        <h3 className="text-xl font-semibold min-w-full text-yellow-400 mb-2">
          {title}
        </h3>
        <p className="text-yellow-600 flex min-w-full">{desc}</p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            title="Secure"
            desc="User-friendly interface and smooth experience"
            img={WhyUsSecure}
          />
          <Card title="6+" desc="Languages Support" img={WhyUsLanguage} />
          <Card title="24 x 7" desc="Customer Services" img={WhyUsService} />
          <Card title="No Bots" desc="we have real peoples " img={WhyUsNoBot} />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

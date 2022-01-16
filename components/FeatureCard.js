import Image from "next/image";

const FeatureCard = ({img, title, desc}) => {
  return (
    <div>
      <Image src={img} width={250} height={250} alt={title}/>
      <h3 className="fw-bold text-white mt-2">{title}</h3>
      <p className="text-white description">
        {desc}
      </p>
    </div>
  );
};

export default FeatureCard;

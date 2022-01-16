import Image from "next/image";

const USPCard = ({ img, title, desc }) => {
  return (
    <div className={`text-white bg-purple rounded card p-2 m-2 shadow`}>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4">
          <Image
            className="img-fluid rounded-start"
            src={img}
            width={250}
            height={250}
            alt={title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default USPCard;

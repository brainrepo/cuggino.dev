import Image from "next/image";

const SuccessItem = ({ title, subtitle, image }) => {
  return (
    <div className="bg-gray-300 flex flex-col justify-between">
     
      <div className="w-full relative p-3">
          <Image src={image} alt={title} 
          layout="responsive"
          height="150"
          width="300"
          className="object-cover"
          />
      </div>
      
       
      <div className="bg-gray-900 p-3 text-gray-100 text-center">
        <h3 className="font-logo font-bold text-sm">{title}</h3>
        <p className="text-gray-400 text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default SuccessItem;

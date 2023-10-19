import Image from "next/image";
const ContestCard = ({ title, imageSrc }) => {
    return (
      <div className="w-[340px] h-[250px] justify-center my-6 shadow-amber-100/20 border mx-2 border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[14px] bg-opacity-10 backdrop-blur-lg shadow-xl drop-shadow-xl bg-blend-normal z-10">
        <div className="flex flex-col text-center justify-center px-6 py-4">
          <div className="flex flex-rows justify-around font-bold text-2xl text-black mb-2 my-3.5">
            <div className="mr-4">Contest</div>
            <div>
              <Image className="" src={imageSrc} width={40} height={10} alt="icon" />
            </div>
          </div>
          <p className="my-3.5 h-[180px] text-3xl font-semibold text-center">
            {title}
          </p>
        </div>
      </div>
    );
  };
  
  export default ContestCard;
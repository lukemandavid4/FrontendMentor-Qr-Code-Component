import Image from "../src/assets/image-qr-code.png";
const App = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="p-[1rem] pb-[2rem] bg-primaryWhite rounded-[0.5rem] w-[20rem] flex flex-col gap-[1rem]">
          <img src={Image} alt="img" className="size-[18rem] rounded-lg" />
          <p className="text-darkBlue font-bold text-[1.375rem] text-center">
            Improve your front-end skills by building projects
          </p>
          <p className="text-grayishBlue text-center">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
};

export default App;

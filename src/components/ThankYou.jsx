import thankYouSvg from '/src/assets/illustration-thank-you.svg';

export default function ThankYou({ ratingValue, isSubmitted }) {
  return (
    <div
      className={`${
        isSubmitted ? "flex" : "hidden"
      } flex-col bg-darkBlue text-white items-center justify-around w-[26.2rem] h-[26.5rem] rounded-[1.9rem] p-[1.7rem] py-[3rem]`}
    >
      <img
        className="h-[40%]"
        src={thankYouSvg}
        alt="thank you"
      />
      <div className="flex items-end bg-lowOpacityGray px-[1.3rem] py-[0.2rem] rounded-[1rem] h-[2rem] mt-[2rem]">
        <p className="text-lowOpacityOrange mt-0">You selected {ratingValue} out of 5</p>
      </div>
      <p className="text-[2rem]">Thank you!</p>
      <p className="text-lightGray text-center mt-[0.5rem]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

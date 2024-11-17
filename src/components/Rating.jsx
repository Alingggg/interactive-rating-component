export default function Rating({
  ratingValue,
  setRatingValue,
  isSubmitted,
  setIsSubmitted,
}) {
  return (
    <div
      className={`${
        isSubmitted ? "hidden" : "flex"
      } flex-col justify-between w-[26.2rem] h-[26.5rem] bg-darkBlue text-white p-[2rem] rounded-[1.9rem]`}
    >
      <div className="circleBackground">
        <img src="/icon-star.svg" alt="start" />
      </div>

      <p className="text-[2rem] mt-0">How did we do?</p>
      <p className="text-lightGray mt-[-1.5rem]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between">
        <button
          className={`circleBackground ratingOption buttonHover ${
            ratingValue === 1 && "selectedRating"
          }`}
          onClick={() => {
            setRatingValue(1);
          }}
        >
          1
        </button>
        <button
          className={`circleBackground ratingOption buttonHover ${
            ratingValue === 2 && "selectedRating"
          }`}
          onClick={() => {
            setRatingValue(2);
          }}
        >
          2
        </button>
        <button
          className={`circleBackground ratingOption buttonHover ${
            ratingValue === 3 && "selectedRating"
          }`}
          onClick={() => {
            setRatingValue(3);
          }}
        >
          3
        </button>
        <button
          className={`circleBackground ratingOption buttonHover ${
            ratingValue === 4 && "selectedRating"
          }`}
          onClick={() => {
            setRatingValue(4);
          }}
        >
          4
        </button>
        <button
          className={`circleBackground ratingOption buttonHover ${
            ratingValue === 5 && "selectedRating"
          }`}
          onClick={() => {
            setRatingValue(5);
          }}
        >
          5
        </button>
      </div>
      <button
        className="rounded-[1.9rem] font-bold h-[3rem] tracking-[0.1rem] bg-orange text-veryDarkBlue border-none buttonHover"
        onClick={() => ratingValue && setIsSubmitted(true)}
      >
        SUBMIT
      </button>
    </div>
  );
}

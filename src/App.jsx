import { useState } from "react";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
  const [ratingValue, setRatingValue] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen">
      <Rating
        ratingValue={ratingValue}
        setRatingValue={setRatingValue}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      ></Rating>
      <ThankYou ratingValue={ratingValue} isSubmitted={isSubmitted}></ThankYou>
    </div>
  );
}

export default App;

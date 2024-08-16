declare module "react-star-ratings" {
  import * as React from "react";

  interface StarRatingsProps {
    rating: number;
    starRatedColor?: string;
    changeRating?: (newRating: number) => void;
    numberOfStars?: number;
    name?: string;
    starDimension?: string;
    starSpacing?: string;
    starHoverColor?: string;
    starEmptyColor?: string;
  }

  const StarRatings: React.FC<StarRatingsProps>;

  export default StarRatings;
}

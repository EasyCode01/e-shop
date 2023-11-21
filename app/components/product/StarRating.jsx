import { Star, StarBorder } from "@mui/icons-material";

export const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        return index < rating ? (
          <Star key={index} className="text-yellow-500 text-sm" />
        ) : (
          <StarBorder key={index} className="text-yellow-500 text-sm" />
        );
      })}
    </div>
  );
};

export default function StarRatingReview() {
  return (
    <div className="flex items-center pr-4 border-r border-gray-300 mr-4">
      <StarRating rating={4} />
      <span className="ml-2">(150 Reviews)</span>
    </div>
  );
}

import { Star, StarBorder } from "@mui/icons-material";

const Ratings = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        return index < rating ? (
          <Star key={index} className="text-yellow-500" />
        ) : (
          <StarBorder key={index} className="text-yellow-500" />
        );
      })}
    </div>
  );
};

export default function StarRating() {
  return (
    <div className="flex items-center pr-4 border-r border-gray-300 mr-4">
      <Ratings rating={4} />
      <span className="ml-2">(150 Reviews)</span>
    </div>
  );
}

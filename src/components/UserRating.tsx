import { testimonials } from "@/data";

import { FaRegStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, StarHalf } from "lucide-react";

const Stars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="text-yellow-400 fill-yellow-400" />;
        } else if (i === fullStars && hasHalfStar) {
          return (
            <StarHalf key={i} className="text-yellow-400 fill-yellow-400" />
          );
        } else {
          return <FaRegStar size={22} key={i} className="text-yellow-400" />;
        }
      })}
    </div>
  );
};

const RatingBar = ({
  stars,
  percentage,
}: {
  stars: number;
  percentage: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 text-yellow-300 text-sm">{stars}</span>
      <div className="w-full bg-yellow-100 rounded-full h-2">
        <div
          className="bg-yellow-400 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="w-8 text-yellow-300 text-right text-sm">{percentage}%</span>
    </div>
  );
};

const UserRating = () => {
  const overallRating = 4.7;
  const ratings = [
    { stars: 5, percentage: 35 },
    { stars: 4, percentage: 40 },
    { stars: 3, percentage: 8 },
    { stars: 2, percentage: 12 },
    { stars: 1, percentage: 5 },
  ];

  return (
    <section className="  pt-2 pb-10  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">


          <div  id="rating_couter" className="md:row-span-4 lg:row-span-5   rounded-lg shadow-lg p-6">


            <div className="flex items-center justify-center mb-4">
              <div className="text-5xl font-bold text-yellow-500 mr-4">
                {overallRating}
                <p className="text-sm text-yellow-300 mt-1">out of 5</p>
              </div>

              <div className="flex flex-col items-start justify-center h-full">
                <Stars rating={overallRating} />
              </div>
            </div>

            <div className="space-y-2">
              {ratings.map((rating) => (
                <RatingBar
                  key={rating.stars}
                  stars={rating.stars}
                  percentage={rating.percentage}
                />
              ))}
            </div>


          </div>

          <div className="w-full md:row-span-8 lg:row-span-7">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className=" text-white m-1 p-6 rounded-lg shadow-md flex flex-col items-center h-full">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          height={400}
                          width={400}
                          className="object-center object-cover size-20"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.name}
                      </h3>
                      <Stars rating={item.rating} />
                      <p className="text-white text-sm mt-4 text-center">
                        {item.reviewDescription}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRating;

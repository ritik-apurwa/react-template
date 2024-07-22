"use client";

import { topGames } from "@/data";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const TopGames = () => {
  return (
    <section className="flex flex-col py-10 gap-10">
      <div className="max-w-7xl mx-auto w-full px-4">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:px-20 md:-ml-4">
            {topGames.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4  md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <TopGamesCard
                  description={item.description}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext />

          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
};

export default TopGames;

interface TopGame {
  id: number;
  name: string;
  image: string;
  description: string;
}

const TopGamesCard: React.FC<TopGame> = ({ id, image, name }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        key={id}
        className="relative w-60 h-40 overflow-hidden rounded-3xl shadow-lg transition-transform transform hover:scale-105"
      >
        <img
          height={600}
          width={600}
          src={image}
          alt={name}
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4">
          <p className="text-yellow-400 font-bold text-xl  mb-2">{name}</p>
        </div>
      </div>
    </div>
  );
};

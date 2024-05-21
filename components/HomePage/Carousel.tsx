import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./Carousel.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CarouselProps = {
  title: string;
};

export default function CarouselComponent({ title }: CarouselProps) {
  const images = [
    {
      id: 1,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 2,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 3,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 4,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 5,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 6,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 7,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 8,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 9,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
    {
      id: 10,
      url: "https://img.freepik.com/free-photo/cat-kitten-ai-generated_268835-9255.jpg?t=st=1716129867~exp=1716133467~hmac=2a221f1826144e6359c1f3e90c6b14d6e8a49004e2c13dd6faf2402b73bef587&w=1380",
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col justify-center">
        <h2 className="text-white text-5xl mx-auto max-w-[1500px] py-10 pt-0">
          {title}
        </h2>
        <Carousel
          opts={{
            direction: "rtl",
            align: "center",
            //   loop: true,
          }}
          className="max-w-[1500px] mx-20 xl:mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Image
                    className="rounded-md w-full"
                    src={image.url}
                    alt="carousel image"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
const Cards = () => { 
  return (
    <section className="py-16 bg-black-800">
      <div className="container mx-auto px-8">
        {/* Card Container (Responsive Layout with Tailwind Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="p-6 shadow 2xl black-rounded-lg"> 
            <Image
              src="/images/card1.jpg" //
              alt="Card Image 1"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="p-6"> 
            <Image
              src="/images/card2.jpg" // Image source from the public/images folder
              alt="Card Image 2"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="p-6"> 
            <Image
              src="/images/card3.jpg" // Image source from the public/images folder
              alt="Card Image 3"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cards;

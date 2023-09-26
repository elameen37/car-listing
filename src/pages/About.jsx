import React from 'react'

export const About = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl text-center font-bold mb-4">About Us</h1>
      <div className="flex justify-between flex-wrap items-start px-6 py-8 mx-w-6xl mx-auto">
        <div className="w-[50%] text-2xl leading-10">
          Superkarz is a car listing website that makes it easy to compare
          prices, features, and availability for all types of cars. With our
          website, users can search for a car based on their specific needs and
          preferences, such as price range, location, and car features. We have
          also provided a platform for users to connect with each other and
          share their experiences with car rental or buying.
        </div>
        <div className="w-[40%] text-2xl leading-10">
          So, if you're looking for the best way to find and rent or buy a car,
          we invite you to check out our website. With our easy-to-use platform,
          you'll be able to find the perfect car for your needs. We believe that
          our solution will change the way people think about renting and buying
          cars.
        </div>
      </div>
    </main>
  );
}


import React from 'react'
import github from '../assets/svg/github.svg'

export const About = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl text-center font-bold mb-4">About Us</h1>
      <div className="flex justify-between flex-wrap items-start px-6 mx-w-6xl mx-auto mb-8">
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
      <h1 className="text-3xl text-center font-bold mb-8">TEAM</h1>
      <div className="flex items-center justify-center gap-12 flex-wrap">
        <div className="flex flex-col gap-4 items-center">
          <a href="http://github.com/elameen37">
            <img className="w-12 h-12" src={github} alt="" />
          </a>
          <p className="text-2xl font-medium">Aminu Shuaibu</p>
          <p>Backend Engineer</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <a href="">
            <img className="w-12 h-12" src={github} alt="" />
          </a>
          <p className="text-2xl font-medium">Babalola Raphael Kehinde</p>
          <p>Backend Engineer</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <a href="https://github.com/DevKaffy">
            <img className="w-12 h-12" src={github} alt="" />
          </a>
          <p className="text-2xl font-medium">Adewumi Kafilat</p>
          <p>Frontend Engineer</p>
        </div>
      </div>
    </main>
  );
}


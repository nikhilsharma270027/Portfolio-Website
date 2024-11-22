const About = () => {
  return (
    <div className="m-5 max-h-screen ">
      <div>
        <h2 className="font-bold text-2xl py-5">ME, MYSELF, I</h2>
        <hr />
        <h2 className="text-2xl font-normal mb-4 py-8">
          Hi, I'm Nikhil Sharma
        </h2>
        <p className="font-normal text-xl py-1 text-gray-600">
          I am a student at Jain (Deemed-to-be University)
        </p>
        <p className="font-normal text-xl py-1 text-gray-600">
          I'm Up for WebDeveloper Internship and working on interesting Side
          Projects
        </p>
      </div>

      <div className="py-7">
        <div className="font-medium text-2xl py-2">MY PROFILE KEYPOINTS:</div>
        <p className="px-2 text-xl">-Education: Jain (Deemed-to-be University)</p>
      </div>

      <div className="py-7">
        <div className="font-medium text-2xl py-2">INTEREST:</div>
        <p className="px-2 text-lg">
          I have a huge interest in Problem Solving, Data Structure and
          Algorithms, System Design , Front-End Dev, and UX/UI.
          to Develop & Design creative stuff.
        </p>
      </div>

      <div className="py-7">
        <div className="font-medium text-2xl py-2">HOBBIES:</div>
        <p className="px-2 text-lg">For Fun I Play Games, Play Cricket, Read about Novels.</p>
      </div>

      <hr />

      <div className="flex py-5 px-5 items-center">
        <div>
          <p className="text-2xl py-5"><span className="font-medium text-2xl">Name:</span> Nikhil Sharma</p>
          <p className="text-2xl py-5"><span className="font-medium text-2xl">Address:</span> Bangalore, India</p>
        </div>
        <div>
          <p className="text-2xl px-5 py-5"><span className="font-medium text-2xl">Date of birth:</span> 19 August 2002</p>
          <p className="text-blue-500 text-2xl px-5 py-5"><span className="font-medium text-2xl">Connect:</span> Email, LinkedIn, Facebook, Instagram</p>
        </div>
      </div>

      <hr />

      <div className="py-7 h-screen">
        <div>
          <h2 className="font-medium text-2xl py-2">CODING PROFILE</h2>
        </div>
        <hr />
        <div className="flex items-center justify-center py-5 gap-5 flex-wrap">
          {/* First Image */}
          <div className="shadow-xl rounded-lg border border-gray-200 p-2 max-w-[150px]">
            <img
              className="h-auto w-full object-contain"
              src="/icons/leetcode.png"
              alt="GitHub"
            />
          </div>

          {/* Second Image */}
          <div className="shadow-xl rounded-lg border border-gray-200 p-2 max-w-[150px]">
            <img
              className="h-auto w-full object-contain"
              src="/icons/github.jpeg"
              alt="GitHub"
            />
          </div>
        </div>
      </div>


    </div>
  );
};

export default About;

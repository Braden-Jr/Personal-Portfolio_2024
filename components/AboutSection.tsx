import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Javascript" },
  { skill: "Typescript" },
  { skill: "Bootstrap" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Laravel" },
  { skill: "PHP" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-justify">
             Hi, I'm Braden, a passionate and driven front-end developer with a Bachelor’s degree in Information Technology,
              which I earned in 2022. Based in Batangas City, I've been diving into the world of web development with enthusiasm
               and creativity.
            </p>
            <br />
            <p className="text-justify">
            In addition to coding, I have a range of hobbies that keep me inspired and active. Whether I'm playing basketball, 
            cycling through scenic trails, wakeboarding on a sunny day, capturing moments through photography, or exploring new 
            destinations, I love to embrace life to the fullest.
            </p>
            <br />
            <p className="text-justify">
            I believe in always looking on the {" "}
            <span className="font-bold text-teal-500">
                bright side
              </span>{" "} 
              and remembering that every challenge has its silver lining. 
              This positive mindset fuels my approach to both work and life, and I'm always excited to see where my career
              in tech will take me next. I'm open to new opportunities and eager to keep learning and growing. 🌟
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
    
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' abdullahsayshello@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Abdullah Odeh</p>
              <p className="grid-subtext">
              I’m a Web Developer with over 4 years of experience, currently building user-focused applications at <a className='grid-headtext' target='_blank' rel='noopener noreferrer' href='https://www.wunderkind.co'>Wunderkind</a>. I enjoy working with cross-functional teams and stakeholders who share the same values for developing applications that improve user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages and frameworks. I'm currently primarily working with React, GatsbyJS, SCSS, WordPress Headless CMS, and GraphQL.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Santa Monica, CA', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m open to working from anywhere in the world.</p>
              <p className="grid-subtext">Currently based in Santa Monica, California.</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My love for coding</p>
              <p className="grid-subtext">
              My journey with Web Development started in my last year of college. I was experiencing some angst about what career I should pursue. I had taken some programming courses throughout my degree and found it was interesting to solve problems with code but didn't really give it the time of day. I thought I'd seriously try it out and started teaching myself how to code alongside my degree. I found the <a className='grid-headtext' rel='noreferrer noopener' target="_blank" href='https://www.youtube.com/traversymedia'>Traversy Media</a> YouTube Channel that specializes in programming and technical education. I learned the fundamentals of web development and built projects along with the tutorials and enjoyed the process of building things on the web.
              After about a year or so, I got an internship for a small advertising agency in LA. I worked with <a className='grid-headtext' rel='noreferrer noopener' target="_blank" href='https://www.creativedigitalagency.com/'>CDA</a> for a little over 18 months before joining Wunderkind in September 2022.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">abdullahsayshello@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

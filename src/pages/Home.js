import React from 'react';
import './Home.css';
import p1 from './dudigital.jpg'; // Replace with a hockey image
import { useNavigate } from 'react-router-dom';
import aaa from './aaa.jpeg'
import fost from'./fost.png'
import legal from './legal.png'
import eco from './eco.png'
import vine from './vine.png'
import dog from './dog.png'
import soci from './soci.jpg'
import sled from './sled.png'
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Ending Exploitation in Animal Labour</h1>
          <p>Animal labour today is built on a system of exploitation. From cramped cages to brutal slaughterhouse conditions, many animals live and die in ways that would be unthinkable in any other industry.</p>
        </div>
        <div className="hero-image">
          <img src={aaa} alt="The Future of Animal Agriculture: Ending Exploitation Through Innovation" />
        </div>
      </section>
<div className='test'>
  <h3 style={{color:'black'}}>What is this all about?</h3>

  <p style={{color:'#555', fontSize: '1.2rem'}}>This project is divided into four sections. Above, it introduces the issue of animal exploitation in agriculture and explains why it matters. Below, it presents real-world examples of how animals are mistreated in farming systems, including documented abuse and unsafe working conditions for both animals and humans. Then, it highlights examples of more ethical and compassionate alternatives, like sanctuaries and plant-based innovations. Finally, it outlines key legal, social, and economic changes that could reduce harm and support a future where animals are no longer treated as tools or property.
</p>
  </div>
      <section className="services">
        <div className="service-box">
          <h2>Bad Examples of Animal Labour</h2><br/>
          <div className="hero-image">
          <img src={fost} alt="The Future of Animal Agriculture: Ending Exploitation Through Innovation" />
        </div>
        <h4>Foster Farms</h4>
          <p>
           The mistreatment of animals in industrial agriculture is often hidden behind sanitized language and marketing. As Winter notes in the lecture, "whitewashing in agriculture hides systemic violence by branding animals as 'happy' workers" (Winter, 2025). Foster Farms is one such example, recently exposed by a Vox investigation for falsely advertising its products as humane while undercover footage revealed chickens being kicked and handled violently (Torrella, 2024). These abuses are not isolated but systemic. These acts are a growing pattern at these intuitions. A consequence of animals being denied basic rights has them reduced to tools.
          </p>
          <div className="hero-image">
          <img src={sled} alt="The Future of Animal Agriculture: Ending Exploitation Through Innovation" />
        </div>
        <h4>Olympic Dog Slaughter</h4>
          <p>
           Another haunting example was Canada’s 2010 Olympic dog cull, where sled dogs were reportedly killed when they were deemed no longer useful (Winter, 2025). This is a disturbing illustration of animals being used, discarded, and ultimately destroyed. Sadly, these events occur all over the world but receive less media attention and go unpunished. If animals can be slaughtered and removed from the workforce without considering what's best for them, they were considered tools and not living animals. 
          </p>
 
         
        </div>
        <div className="service-box">
          <h2>Good Examples of Animal Labour</h2><br/>
                   <div className="hero-image">
          <img src={vine} alt="The Future of Animal Agriculture: Ending Exploitation Through Innovation" />
        </div>
        <br/>
        <h4>VINE Sanctuary</h4>
          <p>
          Not all animal labour is exploitative. At VINE Sanctuary, farm animals are not only rescued but given agency. Throughout the course I have learned that agency is developed in relationships, not in isolation (Winter, 2025). VINE gives animals the space to exist for their own sake, fostering interspecies communities where animals are seen as more than economic units. They are treated like humans. These types of sanctuaries should be all over the world, so it is important that we support them financially and socially.

          </p>
          <div className="hero-image">
          <img src={dog} alt="The Future of Animal Agriculture: Ending Exploitation Through Innovation" />
        </div>
        <h4>Conservation Dogs</h4>
          <p>
           Conservation dogs are another inspiring example. Many of these dogs, labeled too high-energy for adoption, find meaningful purpose in conservation work (Winter, 2025).  They are chosen to do the work they enjoy as it aligns with their natural tendencies and they are trained ethically. It is very important to observe animals behaviour to see if they truly enjoy the work. In the many examples observed in this course it was evident that these dogs are treated well. These dogs aren’t coerced, they’re collaborating, and their welfare is central.
          </p>
        </div>
      </section>
  <section className="hero"> 
    <br/><br/><br/>
    <div className="hero-image">
          <img src={legal} alt="The Future of Animal Agriculture: Ending Exploitation Through Innovation" />
        </div>
        <div className="hero-text">
         <h3 style={{color:"black"}}>Legal Changes</h3>
          <p> To move forward, animals must be recognized legally as more than property. Recognition is not enough, but it is the first step. Recognizing the issues without transforming our decision making and actions sustains exploitation. (Winter, 2024). In certain instances, rivers are actually considered legal persons. This protects them from mistreatment. Getting animals classified as legal persons would ensure their rights and protected and they are treated ethically.</p>
        </div>
       
      </section>
      <section className="hero"> 
   
        <div className="hero-text">
         <h3 style={{color:"black"}}>Economic Changes</h3>
          <p>We must support ethical systems. This means rewarding companies that actually value animals. But as the lecture videos put it, “agricultural exceptionalism” means many farms avoid scrutiny, so consumer vigilance is crucial (Winter, 2025). With how competitive business are today, it is important we reward ones who are doing things the right way. We need to speak up for the voiceless and do what is right.</p>
        </div>
        <div className="hero-image">
          <img src={eco} alt="The Future of Animal Agriculture: Ending Exploitation Through Innovation" />
        </div>
      </section>
      <section className="hero"> 
    <div className="hero-image">
          <img src={soci} alt="The Future of Animal Agriculture: Ending Exploitation Through Innovation" />
        </div>
        <div className="hero-text">
         <h3 style={{color:"black"}}>Social Changes</h3>
          <p>The shift starts with us. We must learn to see animals as our teammates in our effort to advance our lives and the lives of our community (Winter, 2025). Changing how we view animals is the foundation of interspecies justice. We need to view animals as employees and not tools that are at our dispense to achieve some economic goal.
</p>
        </div>
       
      </section>
      <div className="see-work">
<div className='test'>
  <h3 style={{color:'black'}}>How can you help?</h3>

 <p>



As I learned in the lecture videos this term, recognition is only the beginning. If we truly value animal labour, we must transform how we live alongside them. We must acknowledge animals as beings with agency, not units of production. By questioning what’s on our plates, who we buy from, and how we talk about animals, we move closer to justice.
<br/><br/>
Want to learn more? Contact us anytime for resources, actions, and community initiatives. </p>
  </div>
        <button onClick={() => navigate('/contact')}>Contact us today to learn more!</button>
        <div>
          <br/><br/><br/>


  <h3 style={{ color: 'black', textAlign: 'left' }}>Works Cited</h3>


 
</div>

      </div> <div style={{ color: 'black', fontSize: '1.1rem', marginTop: '20px' }}>
        <p style={{ margin: 0, paddingLeft: '2em', textIndent: '-2em' }}>
  Rodríguez Fernández, C. (2022, April 13; updated 2024, November 5). <i>Cultured meat is coming soon: Here’s what you need to know</i>. Labiotech. https://www.labiotech.eu/in-depth/cultured-meat-industry/
</p>

        <p style={{ margin: 0, paddingLeft: '2em', textIndent: '-2em' }}>
  Torrella, K. (2024, November 14). <i>Most “humane” farms are lying to you — and the government isn’t stopping them: A new investigation finds false advertising continues to dupe consumers</i>. Vox. https://www.vox.com/future-perfect/384740/foster-farms-usda-humane-story
</p><br/>

   
    <p style={{ margin: 0, paddingLeft: '2em', textIndent: '-2em' }}>
      Winter, E. (2025). <i>LABR2Q95: Animals at Work</i> [Lecture videos]. Brock University, Department of Labour Studies.
    </p><br/>
 

  </div>
    </div>
  );
};

export default Home;


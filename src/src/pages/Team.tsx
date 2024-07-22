import "./components/styles/TeamCard.scss";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

const Myfer = {
  name: "Myfer",
  description: "The future is written in code and I'm writing it.",
  image: "https://github.com/myferr.png",
  title: "Full-Stack Web Developer",
};

const Mannerce = {
  name: "Mannerce",
  description: "Founder of VerifyME and bot developer",
  image:
    "https://cdn.discordapp.com/avatars/393468486178963458/a_1e0064e41f4b76582df60256aba300c4.gif?size=1024&width=0&height=345",
  title: "Founder & Bot Dev",
};

const Head = {
  name: "Head",
  description: "Co-Founder and bot developer of VerifyME bot",
  image:
    "https://cdn.discordapp.com/avatars/320711375209103370/01541260610703d3fd9348044fa99638.webp?size=1024&format=webp&width=0&height=345",
  title: "Co-Founder & Bot Dev",
};

function OurTeam() {
  return (
    <>
      <Header selected="team" />
      <div>
        <TeamCard
          name={Myfer.name}
          descr={Myfer.description}
          image={Myfer.image}
          title={Myfer.title}
        />
        <TeamCard
          name={Mannerce.name}
          descr={Mannerce.description}
          image={Mannerce.image}
          title={Mannerce.title}
        />
        <TeamCard
          name={Head.name}
          descr={Head.description}
          image={Head.image}
          title={Head.title}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default OurTeam;

function TeamCard(props: any) {
  const name: string = props.name;
  const descr: string = props.descr;
  const image: any = props.image;
  const title: string = props.title;

  return (
    <>
      <div id="team-card-container">
        <div id="team-card">
          <img src={image} className="team-person-image" />
          <h2 className="team-person-name">{name}</h2>
          <p className="team-person-title">{title}</p>
          <p className="team-person-descr">{descr}</p>
        </div>
      </div>
    </>
  );
}

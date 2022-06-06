import React from "react";
import Image from "next/image";
import HeadingLineBottom from "../Atom/HeadingLineBottom";
import s from "../../styles/Team.module.css";
import t from "../Translation";
import TeamCard from "./TeamCard";

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Anar Abbas",
      proffesion: "CEO",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 2,
      name: "Ismail Kula",
      proffesion: "CGO",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 3,
      name: "Elkhan Dadashov",
      proffesion: "CISO",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 4,
      name: "Taleh Kazimbayli",
      proffesion: "Content Manager",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 5,
      name: "Muhammadali Musazade",
      proffesion: "Architect/Exterior Designer",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 6,
      name: "Narmin Ismayilova",
      proffesion: "Interior Designer",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 7,
      name: "Ali Novruzov JR",
      proffesion: "L.A./Ambassador",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 8,
      name: "Asad Mammadov",
      proffesion: "3D Modeling/Animating",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 9,
      name: "Jabrayil Guliyev",
      proffesion: "Community Manager/Europe",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 10,
      name: "Agil Gadashov",
      proffesion: "HelpDesk/Photo Editor",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 11,
      name: "Karim Karimli",
      proffesion: "Community Manager/Eurasia",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 12,
      name: "Bechir Mahamat",
      proffesion: "Marketing Manager/East",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 13,
      name: "Kamil Huseynov",
      proffesion: "Developer",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 14,
      name: "Kanan Abbaszade",
      proffesion: "Graphic Designer",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 15,
      name: "Cavid Hasanli",
      proffesion: "Game Developer",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 16,
      name: "Emil Mirzeyev",
      proffesion: "Developer",
      linkedinUrl: "https://www.linkedin.com/",
    },
    {
      id: 17,
      name: "Veys Aliyev",
      proffesion: "Developer",
      linkedinUrl: "https://www.linkedin.com/",
    },
  ];
  return (
    <div className={s.team}>
    <Image src={"/images/illustration.png"} layout="fill" />
    <div className={s.neon_shape}></div>
      <HeadingLineBottom text={t("team")} />
      <div className={s.team_cards_wrapper}>
        {team.map((member) => (
          <TeamCard
            name={member.name}
            proffesion={member.proffesion}
            linkedinUrl={member.linkedinUrl}
            key={member.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;

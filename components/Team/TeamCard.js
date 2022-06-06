import React from "react";
import Image from "next/image";
import s from "../../styles/Team.module.css";

const TeamCard = ({ name, proffesion, linkedinUrl }) => {
  return (
    <div className={s.team_card}>
      <p>{name}</p>
      <small className={s.proffesion}>{proffesion}</small>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
      <Image src={"/vectors/linkedin.svg"} width={24} height={24} />
      </a>
    </div>
  );
};

export default TeamCard;

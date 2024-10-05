import { FC } from "react";
import { TCompetition } from "types/TCompetition";
import { Image } from "components/image/Image";
import { Contact } from "../contact/Contact";
import { chooseStatusCompetition } from "utils/ts/choose";
import { transformDate } from "utils/ts/transformDate";
import { IS_MOBILE } from "src/Constants";
import CalendarIcon from "assets/icons/calendar.svg?react";
import PlaceIcon from "assets/icons/place.svg?react";

import style from "./Competition.module.scss";

interface CompetitionProps {
  competition: TCompetition;
}

export const Competition: FC<CompetitionProps> = ({
  competition,
}) => {
  const status = (
    <p className="text-orange">
      {"Статус: " + chooseStatusCompetition(competition.statusCompetition)}
    </p>
  );

  return (
    <div className={style.competition}>
      <div className={style.competition__imgcontainer}>
        <Image
          src={competition.img}
          alt={`Фото конкурса ${competition.nameCompetition}`}
          className={style.competition__img}
        />
        {!IS_MOBILE && status}
      </div>
      <div className={style.competition__info}>
        <div className={style.competition__topcontainer}>
          <p className={style.competition__name}>
            {competition.nameCompetition}
          </p>
          <Contact
            contact={competition.cityCompetition.city}
            icon={<PlaceIcon fill="#FF6B00" width={20} height={20} />}
            classnames={style.competition__place}
          />
        </div>
        <Contact
          contact={
            transformDate(competition.dateStart) +
            " - " +
            transformDate(competition.dateFinish)
          }
          icon={<CalendarIcon height={25} />}
          classnames={style.competition__date}
        />
        {IS_MOBILE && status}
      </div>
    </div>
  );
};

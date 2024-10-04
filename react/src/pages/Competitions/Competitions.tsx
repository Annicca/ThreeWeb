import { FC } from "react";
import { PageLayout } from "components/layout/PageLayout";
import { List } from "uikit/list/List";
import { TCompetition } from "src/types/TCompetition";
import { Competition } from "uikit/competition/Competition";
import { useFetch } from "src/hooks/useFetch";

export const Competitions: FC = () => {

  const competitions = useFetch("src/assets/json/competitions.json")

  return (
    <PageLayout>
      <List
        items = {competitions}
        renderItem={(item: TCompetition) => <Competition key={item.idCompetition} competition = {item}/>}
        className="list list_competitions"
      />
    </PageLayout>
  );
};

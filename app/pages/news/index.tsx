import { IPage } from "pkgs/types/global";
import { Page, Text, TopBar } from "libs/ui";
import React from "react";
import { useAppSelector } from "pkgs/libs/hooks/store";

const NewsPage: IPage = () => {
  const { news } = useAppSelector((state) => state);
  console.log(news);

  return (
    <Page>
      <TopBar title="News" />
      <Text>
        Ini News asjdgakjshg dakhjsgdkahsgd ashdgkahsgdahs dkajhsgdkahsgda
        khsgdkahjsgdash
      </Text>
    </Page>
  );
};

export default NewsPage;

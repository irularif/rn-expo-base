import { IPage } from "libs/types/global";
import { Page, Text, TopBar } from "libs/ui";
import React from "react";

const NewsPage: IPage = () => {
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

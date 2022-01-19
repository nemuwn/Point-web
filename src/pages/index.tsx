import type { NextPage } from "next";
import { Cardinfo } from "@/widgets/CardInfo2";
import { Video } from "@/widgets/Video";
import { Rewards } from "@/widgets/Rewards";
import { Access } from "@/widgets/Access";
import { Page6 } from "@/widgets/Page6";
import { Page4 } from "@/widgets/Page4";
import { Page8 } from "@/widgets/Page8";
import { HandInHand } from "@/widgets/HandInHand";
import { InstantFeed } from "@/widgets/InstantFeed";
import { Virtual } from "@/widgets/Virtual";
import { CardControl } from "@/widgets/CardControl";
import { HeadsUp } from "@/widgets/HeadsUp";
import { Membership } from "@/widgets/Membership";
import { AllRew } from "@/widgets/AllRew";
import { RewardDatas } from "@/utils/datas";

const Home: NextPage = () => {
  return (
    <>
      <Video />
      <Cardinfo />
      <Rewards slides={RewardDatas} />
      <Access />
      {/* <Page4 /> */}
      <Page6 />
      {/* <Page8 /> */}
      <HandInHand />
      <InstantFeed />
      <Virtual />
      <CardControl />
      <HeadsUp />
      {/* <AllRew />
      <Membership /> */}
    </>
  );
};

export default Home;

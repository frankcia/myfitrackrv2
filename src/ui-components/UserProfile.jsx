/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function UserProfile(props) {
  const { myfitrackrv2DB, overrides, ...rest } = props;
  const refreshButtonOnClick = useNavigateAction({ type: "reload" });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1105px"
      height="unset"
      justifyContent="space-between"
      alignItems="flex-start"
      position="relative"
      padding="21px 17px 21px 59px"
      {...rest}
      {...getOverrideProps(overrides, "UserProfile")}
    >
      <View
        width="285px"
        height="498px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <View
          width="285px"
          height="498px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="25px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 1165")}
        ></View>
        <Image
          width="170px"
          height="170px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="48px"
          left="58px"
          border="5px SOLID rgba(255,153,0,1)"
          borderRadius="165px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://media-exp1.licdn.com/dms/image/C5603AQHok7i_GJfMfA/profile-displayphoto-shrink_400_400/0/1637507803194?e=1674086400&v=beta&t=GPKYUgOHNnnohVwPu_RD2ZRs7Mjbh55tRxkZ2j232hY"
          {...getOverrideProps(overrides, "image29766900")}
        ></Image>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="237px"
          left="44px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Name")}
        >
          <Text
            fontFamily="Arial"
            fontSize="20px"
            fontWeight="700"
            color="rgba(255,153,0,1)"
            lineHeight="25px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="@cvanderx"
            {...getOverrideProps(overrides, "alias")}
          ></Text>
          <Text
            fontFamily="Arial"
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.05px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Collin Vandersommen"
            {...getOverrideProps(overrides, "name")}
          ></Text>
        </Flex>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="250px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="366px"
          left="18px"
          backgroundColor="rgba(255,153,0,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Update"
          {...getOverrideProps(overrides, "updateButton")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="250px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="436px"
          left="18px"
          backgroundColor="rgba(255,153,0,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Refresh"
          onClick={() => {
            refreshButtonOnClick();
          }}
          {...getOverrideProps(overrides, "refreshButton")}
        ></Button>
        <View
          width="252px"
          height="27px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="4px"
          left="18px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 418")}
        >
          <View
            width="59px"
            height="18px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            bottom="4px"
            left="calc(50% - 29.5px - 0.5px)"
            borderRadius="7px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(26,30,37,1)"
            {...getOverrideProps(overrides, "Rectangle 1164")}
          ></View>
        </View>
        <Text
          fontFamily="Arial"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="316px"
          left="122px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="LIVE "
          {...getOverrideProps(overrides, "LIVE")}
        ></Text>
      </View>
      <View
        width="717px"
        height="498px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="25px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 424")}
      >
        <View
          width="717px"
          height="498px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="25px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 1166")}
        ></View>
        <View
          width="642px"
          height="35px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="163px"
          left="46px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 422")}
        >
          <Text
            fontFamily="Arial"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12px"
            left="17px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sit-ups"
            {...getOverrideProps(overrides, "Sit-ups")}
          ></Text>
          <Text
            fontFamily="Arial"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12px"
            left="166px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pull-ups"
            {...getOverrideProps(overrides, "Pull-ups")}
          ></Text>
          <Text
            fontFamily="Arial"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12px"
            left="314px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Aquats"
            {...getOverrideProps(overrides, "Aquats")}
          ></Text>
          <Text
            fontFamily="Arial"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="12px"
            left="525px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Total Time"
            {...getOverrideProps(overrides, "Total Time")}
          ></Text>
        </View>
        <Text
          fontFamily="Arial"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          fontStyle="italic"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          bottom="16px"
          right="29px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Yesterday 10:35 AM"
          {...getOverrideProps(overrides, "Yesterday 10:35 AM")}
        ></Text>
        <View
          width="130px"
          height="130px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="38px"
          left="27px"
          border="5px SOLID rgba(255,153,0,1)"
          borderRadius="165px"
          padding="0px 0px 0px 0px"
          src="https://www.fabioambrosi.it/wp-content/uploads/2022/07/Amazon-Prime-Abbonamenti.jpg"
          {...getOverrideProps(overrides, "image35612466")}
        ></View>
        <Text
          fontFamily="Arial"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.25px"
          width="53px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="89px"
          left="64px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="37"
          {...getOverrideProps(overrides, "37")}
        ></Text>
        <View
          width="130px"
          height="130px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="38px"
          left="172px"
          border="5px SOLID rgba(255,153,0,1)"
          borderRadius="165px"
          padding="0px 0px 0px 0px"
          src="https://www.fabioambrosi.it/wp-content/uploads/2022/07/Amazon-Prime-Abbonamenti.jpg"
          {...getOverrideProps(overrides, "image35612467")}
        ></View>
        <Text
          fontFamily="Arial"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.25px"
          width="50px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="91px"
          left="212px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="25"
          {...getOverrideProps(overrides, "25")}
        ></Text>
        <View
          width="130px"
          height="130px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="38px"
          left="317px"
          border="5px SOLID rgba(255,153,0,1)"
          borderRadius="165px"
          padding="0px 0px 0px 0px"
          src="https://www.fabioambrosi.it/wp-content/uploads/2022/07/Amazon-Prime-Abbonamenti.jpg"
          {...getOverrideProps(overrides, "image35612469")}
        ></View>
        <Text
          fontFamily="Arial"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.25px"
          width="74px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="91px"
          left="345px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="17"
          {...getOverrideProps(overrides, "17")}
        ></Text>
        <View
          width="130px"
          height="130px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="38px"
          left="547px"
          border="5px SOLID rgba(255,153,0,1)"
          borderRadius="165px"
          padding="0px 0px 0px 0px"
          src="https://www.fabioambrosi.it/wp-content/uploads/2022/07/Amazon-Prime-Abbonamenti.jpg"
          {...getOverrideProps(overrides, "image35612471")}
        ></View>
        <View
          width="130px"
          height="130px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="263px"
          left="429px"
          border="5px SOLID rgba(255,0,0,1)"
          borderRadius="165px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image35662465")}
        ></View>
        <Text
          fontFamily="Arial"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.25px"
          width="93px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="89px"
          left="565px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="7:23"
          {...getOverrideProps(overrides, "7:23")}
        ></Text>
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="316px"
          left="458px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Stats")}
        >
          <Text
            fontFamily="Arial"
            fontSize="64px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.49px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={myfitrackrv2DB?.count}
            {...getOverrideProps(overrides, "10")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Arial"
          fontSize="48px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          fontStyle="italic"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.33px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="328px"
          left="182px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Push-ups"
          {...getOverrideProps(overrides, "Push-ups")}
        ></Text>
        <View
          width="239px"
          height="36px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="280px"
          left="166px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle 1167")}
        ></View>
        <Text
          fontFamily="Arial"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="223px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="287px"
          left="174px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="CURRENT WORKOUT:"
          {...getOverrideProps(overrides, "CURRENT WORKOUT:")}
        ></Text>
        <Text
          fontFamily="Arial"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,153,0,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="458px"
          left="433px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Last Activity:"
          {...getOverrideProps(overrides, "Last Activity:")}
        ></Text>
      </View>
    </Flex>
  );
}

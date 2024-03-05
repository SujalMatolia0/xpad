import { Center, Stack } from "@mantine/core";
import { MainHeader } from "~/component/header/main";
import { CommonLayout } from "~/component/layout/layout";
import TextEditor from "~/component/pad";

export default function New() {
  return (
    <CommonLayout header={<MainHeader />}>
      <Stack h="100vh">
        <Center h="100vh">
          <TextEditor/>
        </Center>
      </Stack>
    </CommonLayout>
  );
}

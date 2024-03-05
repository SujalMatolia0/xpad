import { Center, Stack } from "@mantine/core";
import { MainHeader } from "~/component/header/main";
import { CommonLayout } from "~/component/layout/layout";
import UpdateNote from "~/component/pad/update-note";

export default function Update() {
  return (
    <CommonLayout header={<MainHeader />}>
      <Stack h="100vh">
        <Center h="100vh">
          <UpdateNote/>
        </Center>
      </Stack>
    </CommonLayout>
  );
}

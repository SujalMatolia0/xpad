import { Center, Stack } from "@mantine/core";
import { HomeHeader } from "~/component/header";
import { CommonLayout } from "~/component/layout/layout";
import { ListNotes } from "~/component/lsit";

export default function Home() {
  return (
    <CommonLayout header={<HomeHeader />}>
      <Stack h="100vh">
        <Center h="100vh">
          <ListNotes/>
        </Center>
      </Stack>
    </CommonLayout>
  );
}

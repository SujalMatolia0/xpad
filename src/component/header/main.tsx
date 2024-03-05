import { ActionIcon, Group } from "@mantine/core";
import { ImageLogo } from "../logo/image";
import { IconList } from "@tabler/icons-react";
import Link from "next/link";

export const MainHeader = () => {
  return (
    <>
      <Group justify="space-between">
        <ImageLogo />
        <Group pr={100}>
          <ActionIcon component={Link} href="/">
            <IconList />
          </ActionIcon>
        </Group>
      </Group>
    </>
  );
};

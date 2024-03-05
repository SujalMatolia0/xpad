import { ActionIcon, Group } from "@mantine/core";
import { ImageLogo } from "../logo/image";
import Link from "next/link";
import { IconPlus } from "@tabler/icons-react";

export const HomeHeader = () => {
  return (
    <>
      <Group justify="space-between">
        <ImageLogo />
        <ActionIcon m="md" mr="100px" component={Link} href="/new">
          <IconPlus size="18px"/>
        </ActionIcon>
      </Group>
    </>
  );
};

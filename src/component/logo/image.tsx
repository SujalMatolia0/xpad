import { Group, Image, Title } from "@mantine/core";

export const ImageLogo = () => {
  return (
    <>
      <Group align="center" justify="center" pl={100}>
        <Image src="/logo.svg" w="60px" h="60px" alt="Logo"/>
        <Title size="35px" c="#263238">XPad</Title>
      </Group>
    </>
  );
};

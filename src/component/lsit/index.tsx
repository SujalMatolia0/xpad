import { Center, Menu, Stack, Title } from "@mantine/core";
import Link from "next/link";
import { api } from "~/utils/api";

export const ListNotes = () => {
  const listApi = api.new.list.useQuery();

  return (
    <Stack>
      <Center h="100vh">
        <Stack>
          <Menu opened>
            <Menu.Target>
              <Title order={2}>All Notes</Title>
            </Menu.Target>
            <Menu.Dropdown
              styles={{
                dropdown: {
                  width: 300,
                },
              }}
            >
              {listApi.data && listApi.data.length > 0 ? (
                listApi.data.map((note) => (
                  <Link key={note.id} href={`/update?id=${note.id}`}>
                    <Menu.Item >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Title order={4}>{note.title}</Title>
                        <Title order={6} c="#37474F">
                          {new Date(note.createdAt).toDateString()}
                        </Title>
                      </div>
                    </Menu.Item>
                  </Link>
                ))
              ) : (
                <Menu.Item>
                  <Title order={4}>No notes available</Title>
                </Menu.Item>
              )}
            </Menu.Dropdown>
          </Menu>
        </Stack>
      </Center>
    </Stack>
  );
};

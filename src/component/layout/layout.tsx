import {
    AppShell,
    Container,
    type MantineSize,
    type MantineSpacing,
  } from "@mantine/core";
  import { useHeadroom } from "@mantine/hooks";
  
  interface CommonLayoutProps {
    children: React.ReactNode;
    header?: React.ReactNode;
    fixedHeader?: boolean;
    p?: MantineSpacing;
    containerSize?: number | MantineSize | (string & Record<string, never>);
    footer?: React.ReactNode;
    fixedFooter?: boolean;
  }
  
  export const CommonLayout = (props: CommonLayoutProps) => {
    const pinned = useHeadroom({ fixedAt: 40 });
  
    return (
      <>
        <AppShell
          {...(props.header
            ? {
                header: {
                  height: 80,
                  collapsed: !props.fixedHeader && !pinned,
                  offset: props.fixedHeader ?? false,
                },
              }
            : {})}
          {...(props.footer ? { footer: { height: 60 } } : {})}
          padding={0}
        >
          <AppShell.Header withBorder={false}>{props.header}</AppShell.Header>
  
          <AppShell.Main>
            <Container
              px={props.p ?? "xs"}
              py={0}
              size={props.containerSize ?? "xl"}
            >
              {props.children}
            </Container>
          </AppShell.Main>
  
          {props.footer && props.fixedFooter && (
            <AppShell.Footer withBorder={false}>{props.footer}</AppShell.Footer>
          )}
        </AppShell>
  
        {props.footer && !props.fixedFooter && props.footer}
      </>
    );
  };
  
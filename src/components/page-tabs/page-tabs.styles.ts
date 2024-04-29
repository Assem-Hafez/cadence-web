import type {
  StyletronCSSObject,
  StyletronCSSObjectOf,
} from '@/hooks/use-styletron-classes';
import type { Theme } from 'baseui';
import { MediaQueryPageMargins, PageMargins } from 'baseui/helpers/types';
import type { Responsive } from 'baseui/layout-grid';
import { TabOverrides, TabsOverrides } from 'baseui/tabs-motion';
import type { Breakpoints } from 'baseui/themes';
import type { StyleObject } from 'styletron-react';

export const getMediaQuery = (breakpoint: number): string =>
  `@media screen and (min-width: ${breakpoint}px)`;

export const getMediaQueries = (breakpoints: Breakpoints): string[] =>
  Object.keys(breakpoints)
    // @ts-ignore
    .map((key) => breakpoints[key])
    .sort((a, b) => a - b)
    .map(getMediaQuery);

const defaultCreateMargins = (margin: number): StyleObject => ({
  marginRight: `${margin}px`,
  marginLeft: `${margin}px`,
});

export function getMediaQueryMargins(
  theme: Theme,
  createStyles: (margin: number) => StyleObject = defaultCreateMargins
) {
  const result = {} as {
    [key: string]: StyleObject;
  };
  const mediaQueries = getMediaQueries(theme.breakpoints);
  for (const [index, query] of Object.entries(mediaQueries)) {
    // There is no guarantee grid.margins will have enough margins to satisfy
    // each breakpoint.
    const margin = Array.isArray(theme.grid.margins)
      ? theme.grid.margins[parseInt(index)] ?? theme.grid.margins.at(-1)
      : theme.grid.margins;

    result[query] = createStyles(margin);
  }
  return result;
}

export const overrides = {
  tabs: {
    Root: {
      style: ({ $theme }: { $theme: Theme }): StyleObject => ({
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #F3F3F3',
      }),
    },
    TabBar: {
      style: ({ $theme }: { $theme: Theme }): StyleObject => ({
        width: '100%',
        alignSelf: 'center',
        ...getMediaQueryMargins($theme, (margin) => ({
          maxWidth: `${$theme.grid.maxWidth + 2 * margin}px`,
        })),
      }),
    },
    TabList: {
      style: ({ $theme }: { $theme: Theme }): StyleObject => ({
        ...getMediaQueryMargins($theme),
        paddingBottom: 0,
        marginBottom: 0,
      }),
    },
    TabBorder: {
      style: {
        display: 'none',
      },
    },
    TabHighlight: {
      style: ({ $theme }: { $theme: Theme }): StyleObject => ({
        height: $theme.sizing.scale0,
      }),
    },
  } satisfies TabsOverrides,
  tab: {
    TabPanel: {
      style: { display: 'none' },
    },
  } satisfies TabOverrides,
};

const cssStylesObj = {
  breadcrumbItemContainer: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.sizing.scale550,
  }),
} satisfies StyletronCSSObject;

export const cssStyles: StyletronCSSObjectOf<typeof cssStylesObj> =
  cssStylesObj;

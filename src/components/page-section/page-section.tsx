'use client';
import React from 'react';
import { Cell, Grid } from 'baseui/layout-grid';
import { Props } from './page-section.types';

export default function PageSection(props: Props) {
  return (
    <section>
      <Grid>
        <Cell span={12}>{props.children}</Cell>
      </Grid>
    </section>
  );
}

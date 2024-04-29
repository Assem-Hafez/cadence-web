'use client';
import React, { Suspense } from 'react';
import Image from 'next/image';
import { Cell, Grid } from 'baseui/layout-grid';
import Link from 'next/link';
import { LabelSmall } from 'baseui/typography';
import useStyletronClasses from '@/hooks/use-styletron-classes';
import { Breadcrumbs } from 'baseui/breadcrumbs';
import { StyledLink } from 'baseui/link';
import PageTabs from '@/components/page-tabs/page-tabs';
import cadenceLogoSquare from '@/assets/cadence-logo-square.svg';
import { worflowPageTabsConfig } from '../config/workflow-page-tabs.config';
import { cssStyles, overrides } from './workflow-page-header.styles';
import { Props } from './workflow-page-header.types';

export default function WorkflowPageHeader({
  domainName,
  workflowId,
  runId,
  workflowStatusTag,
}: Props) {
  const { cls } = useStyletronClasses(cssStyles);
  return (
    <section>
      <Grid>
        <Cell span={12}>
          <Breadcrumbs
            overrides={overrides.breadcrumbs}
            showTrailingSeparator={false}
          >
            <div className={cls.breadcrumbItemContainer}>
              <Image
                width={22}
                height={22}
                alt="Cadence Icon"
                src={cadenceLogoSquare}
              />

              <StyledLink $as={Link} href="#">
                {domainName}
              </StyledLink>
            </div>
            <StyledLink $as={Link} href="#">
              {workflowId}
            </StyledLink>
            <div className={cls.breadcrumbItemContainer}>
              {runId}
              {workflowStatusTag}
            </div>
          </Breadcrumbs>
        </Cell>
      </Grid>
      <PageTabs
        selectedTab={worflowPageTabsConfig[0].key}
        tabList={worflowPageTabsConfig}
        setSelectedTab={() => { }}
      />
    </section>
  );
}

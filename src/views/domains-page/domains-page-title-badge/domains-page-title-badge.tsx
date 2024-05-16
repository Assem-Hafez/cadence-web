'use client';
import React from 'react';
import { Badge } from 'baseui/badge';
import type { Props } from './domains-page-title-badge.types';
import { overrides } from './domains-page-title-badge.styles';

export default function DomainsPageTitleBadge({ content }: Props) {
  return <Badge content={content} overrides={overrides.badge} />;
}

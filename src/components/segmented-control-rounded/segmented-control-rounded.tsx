'use client';
import { Segment, SegmentedControl } from 'baseui/segmented-control';
import { overrides } from './segmented-control-rounded.styles';
import React from 'react';
import type { Props } from './segmented-control-rounded.types';

export default function SegmentedControlRounded({
  activeKey,
  onChange,
  disabled,
  options,
}: Props) {
  return (
    <SegmentedControl
      overrides={overrides.segmentedControl}
      activeKey={activeKey}
      disabled={disabled}
      onChange={onChange}
    >
      {options.map((o) => (
        <Segment {...o} key={o.key} overrides={overrides.segment} />
      ))}
    </SegmentedControl>
  );
}

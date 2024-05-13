"use client";
import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import SegmentedControlRounded from '@/components/segmented-control-rounded/segmented-control-rounded';
import PrettyJson from '@/components/pretty-json/pretty-json';
import useStyletronClasses from '@/hooks/use-styletron-classes';
import { cssStyles } from './workflow-summary-tab-json-view.styles';
import { Props } from './workflow-summary-tab-json-view.types';
import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
import { MdCopyAll } from 'react-icons/md';
import { jsonViewTabsOptions } from './workflow-summary-tab-json-view.constants';


export default function WorkflowSummaryTabJsonView({
  inputJson,
  resultJson
}: Props) {
  const { cls } = useStyletronClasses(cssStyles);
  const jsonMap: Record<string, object> = { input: inputJson, result: resultJson }
  const [activeTab, setActiveTab] = useState<string>(jsonViewTabsOptions[0].key);

  return (
    <div className={cls.jsonViewContainer}>
      <div className={cls.jsonViewHeader}>
        <SegmentedControlRounded
          activeKey={activeTab}
          options={jsonViewTabsOptions}
          onChange={({ activeKey }) => setActiveTab(activeKey.toString())}
        />
        <Button
          onClick={() => copy(JSON.stringify(jsonMap[activeTab], null, '\t'))}
          size={SIZE.mini}
          shape={SHAPE.square}
          kind={KIND.secondary}
        >
          <MdCopyAll />
        </Button>
      </div>
      <PrettyJson
        json={jsonMap[activeTab]}
      />
    </div>
  );
}

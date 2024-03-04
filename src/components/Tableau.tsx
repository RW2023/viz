'use client';
/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import SubHeading from '@/components/ui/Heading';

interface Props {}

const Tableau: FC<Props> = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <SubHeading title="Grocery Visualization" />
      <div
        className="w-full" // This will ensure the width is 100% of its container
        id="viz1709543141332" // The ID should match the one in the embed code
        style={{ position: 'relative' }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Grocery Inventory"
              src="https://public.tableau.com/static/images/N2/N2WYQ7ZC2/1_rss.png"
              style={{ border: 'none' }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: 'none' }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="path" value="shared/N2WYQ7ZC2" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/N2/N2WYQ7ZC2/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
    </div>
  );
};

export default Tableau;

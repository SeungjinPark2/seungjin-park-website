'use client';

import Image from 'next/image';
import './side-section.scss';
import {useMemo, useState} from 'react';
import AccordionBody from './side-section-accordion-body';

export default function SideSection() {
  const [on, setOn] = useState(false);
  const accordionBody = useMemo(() => {
    return on ? <AccordionBody /> : <></>;
  }, [on]);

  return <div className="side-container">
    <div className="bmc-container"
      onMouseOver={() => {setOn(true);}}
      onMouseOut={() => {setOn(false);}}
    >
      <div className="bmc-accordion">
        <h3>Buy me a coffee :)</h3>
        <Image
          className={on ? "rotate" : ""}
          src={"/images/right-arrow.png"}
          alt="arrow img"
          width={20}
          height={20}
        />
      </div>
      {accordionBody}
    </div>
  </div>;
}

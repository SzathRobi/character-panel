import React from 'react';
import { attributesData } from './attributes-data';
import {
  GiHealthNormal,
  GiShield,
  GiLightningHelix,
  GiMuscleUp,
  GiBookmarklet,
} from 'react-icons/gi';
import { BiRun } from 'react-icons/bi';
import styles from './attributes-container.module.css';

function AttributesContainer() {
  const { human } = attributesData;
  const humanData = Object.entries(human);

  const getIcon = (attribute) => {
    if (attribute === 'health') return <GiHealthNormal />;
    if (attribute === 'armor') return <GiShield />;
    if (attribute === 'energy') return <GiLightningHelix />;
    if (attribute === 'strength') return <GiMuscleUp />;
    if (attribute === 'agilty') return <BiRun />;
    if (attribute === 'intellect') return <GiBookmarklet />;
  };

  return (
    <article className={styles.attributesContainer}>
      <h3>Attributes</h3>
      <div>
        {humanData.map((attribute, index) => (
          <div className={styles.attribute} key={index}>
            <span>{getIcon(attribute[0])}</span>
            <span>{attribute[1]}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default AttributesContainer;

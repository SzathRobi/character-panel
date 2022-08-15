import React from 'react';
import { GiMinigun } from 'react-icons/gi';
import AttributesContainer from './attributes-container';
import styles from './info-container.module.css';

function InfoContainer() {
  return (
    <section className={styles.infoContainer}>
      <article>
        <h2>Gamora</h2>
        <h3>Lvl 40 Warrior</h3>
        <div className={styles.iconContainer}>
          <GiMinigun />
        </div>
      </article>
      <AttributesContainer />
    </section>
  );
}

export default InfoContainer;

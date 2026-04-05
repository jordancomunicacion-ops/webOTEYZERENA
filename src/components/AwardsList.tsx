'use client';

import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';
import styles from './AwardsList.module.css';

interface AwardsListProps {
    awards: string[];
}

const AwardsList: React.FC<AwardsListProps> = ({ awards }) => {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>
                <Trophy size={28} className={styles.titleIcon} strokeWidth={1.5} />
                Premios y Reconocimientos
            </h3>
            <div className={styles.list}>
                {awards.map((award, index) => (
                    <div key={index} className={styles.awardItem}>
                        <div className={styles.iconWrapper}>
                            {award.toLowerCase().includes('mejor') || award.toLowerCase().includes('top') ? (
                                <Star size={20} fill="currentColor" strokeWidth={0} />
                            ) : (
                                <Award size={20} strokeWidth={2} />
                            )}
                        </div>
                        <span className={styles.awardText}>{award}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AwardsList;

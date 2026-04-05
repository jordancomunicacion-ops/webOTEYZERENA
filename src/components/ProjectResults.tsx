'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { TrendingDown } from 'lucide-react';
import styles from './ProjectResults.module.css';

interface Milestone {
    title: string;
    desc: string;
    icon?: string;
}

interface Metric {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
}

interface ProjectResultsProps {
    metrics?: Metric[];
    milestones: Milestone[];
}

const ProjectResults: React.FC<ProjectResultsProps> = ({ metrics, milestones }) => {
    // We only show the first metric as the "Highlight" for high impact
    const mainMetric = metrics && metrics.length > 0 ? metrics[0] : null;

    return (
        <div className={styles.container}>
            {mainMetric && (
                <div className={styles.highlightCard}>
                    <div className={styles.highlightContent}>
                        {mainMetric.prefix === '-' && (
                            <TrendingDown size={32} className={styles.trendIcon} strokeWidth={1.5} />
                        )}
                        <div className={styles.highlightValue}>
                            {mainMetric.prefix}{mainMetric.value}{mainMetric.suffix}
                        </div>
                    </div>
                    <div className={styles.highlightLabel}>
                        {mainMetric.label}
                    </div>
                </div>
            )}

            <div className={styles.milestonesGrid}>
                {milestones.map((m, index) => {
                    // @ts-ignore
                    const IconComponent = m.icon && LucideIcons[m.icon as keyof typeof LucideIcons] 
                        ? (LucideIcons[m.icon as keyof typeof LucideIcons] as React.FC<any>) 
                        : LucideIcons.CheckCircle;

                    return (
                        <div key={index} className={styles.milestoneCard}>
                            <div className={styles.iconWrapper}>
                                <IconComponent size={24} strokeWidth={1.5} />
                            </div>
                            <h4 className={styles.milestoneTitle}>{m.title}</h4>
                            <p className={styles.milestoneDesc}>{m.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectResults;

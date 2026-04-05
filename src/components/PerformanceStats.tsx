'use client';

import React, { useEffect, useState } from 'react';
import styles from './PerformanceStats.module.css';

interface Metric {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
}

interface PerformanceStatsProps {
    metrics: Metric[];
}

const PerformanceStats: React.FC<PerformanceStatsProps> = ({ metrics }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Impacto Real del Proyecto</h3>
            <div className={styles.metricsList}>
                {metrics.map((metric, index) => (
                    <div key={index} className={styles.metricItem}>
                        <div className={styles.metricHeader}>
                            <span className={styles.label}>{metric.label}</span>
                            <span className={styles.value}>
                                {metric.prefix}{metric.value}{metric.suffix}
                            </span>
                        </div>
                        <div className={styles.barContainer}>
                            <div 
                                className={`${styles.bar} ${metric.value >= 80 ? styles.barHigh : ''}`}
                                style={{ width: mounted ? `${metric.value}%` : '0%' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformanceStats;

export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string; // Short description for hover
    fullDescription: string; // Long description for detail page
    imageUrl: string;
    technicalDetails: {
        client: string;
        year: string;
        services: string[];
        location: string;
        website?: string;
    };
    performanceMetrics?: {
        label: string;
        value: number; // 0-100 for progress bar
        prefix?: string;
        suffix?: string;
    }[];
    awards?: string[];
    detailedMilestones?: {
        title: string;
        desc: string;
        icon?: string; // Lucide icon name
    }[];
}

export const projects: Project[] = [
    {
        id: 1,
        slug: 'sotodelprior',
        title: 'SOTO del PRIOR',
        description: 'Gestión integral y desarrollo de concepto para finca agroturística.',
        fullDescription: 'SOTO del PRIOR representa la excelencia en la gestión de espacios rurales. Hemos trabajado en la definición del concepto gastronómico, optimización de operaciones y diseño de la experiencia de cliente, transformando una finca tradicional en un destino referente.',
        imageUrl: '/images/sotodelprior.jpg',
        technicalDetails: {
            client: 'SOTO del PRIOR',
            year: '2022',
            services: ['Concepto Gastronómico', 'Diseño de Operaciones', 'Formación'],
            location: 'Navarra, España',
            website: 'www.sotodelprior.com'
        },
        performanceMetrics: [
            { label: 'Rendimiento de Personal', value: 85, suffix: '%' },
            { label: 'Aumento de Facturación', value: 42, suffix: '%' },
            { label: 'Rentabilidad Operativa', value: 30, suffix: '%' }
        ],
        awards: [
            'Mejor hamburguesa de Navarra 2024',
            'Top 4 mejor hamburguesa de España 2024',
            'Mejor hamburguesa de Navarra 2023',
            'Finalista mejor tortilla de Navarra 2023',
            'Mejor hamburguesa de Navarra 2022',
            'Premio Culinary action al proyecto más evolucionado 2022',
            'Certificado buey de bellota'
        ]
    },
    {
        id: 3,
        slug: 'la-gardabera',
        title: 'La Gardabera',
        description: 'Auditoría operativa y plan de expansión estratégica.',
        fullDescription: 'Para La Gardabera realizamos una auditoría profunda de sus operaciones actuales para detectar puntos de mejora. Optimizamos la gestión de compras y proveedores, transformando el caos administrativo en una gestión estratégica y eficiente.',
        imageUrl: '/images/la-gardabera.png',
        technicalDetails: {
            client: 'La Gardabera',
            year: '2019',
            services: ['Auditoría', 'Estrategia', 'Gestión de Compras'],
            location: 'Pamplona, España'
        },
        performanceMetrics: [
            { label: 'Reducción Gastos en Compras', value: 22, prefix: '-', suffix: '%' }
        ],
        detailedMilestones: [
            {
                title: 'Auditoría Operativa 360º',
                desc: 'Análisis detallado de flujos de trabajo en cocina, gestión de inventarios y control exhaustivo de mermas.',
                icon: 'Search'
            },
            {
                title: 'Centralización de Compras',
                desc: 'Reducción drástica del número de proveedores dispersos, priorizando socios estratégicos y días de reparto optimizados.',
                icon: 'ShoppingBag'
            },
            {
                title: 'Digitalización y Control de Pagos',
                desc: 'De pagos diarios descontrolados a programación de días concretos del mes, estabilizando la tesorería del negocio.',
                icon: 'Calendar'
            }
        ],
        awards: [
            'Finalista pincho de masa madre 2020',
            'Finalista maridaje piquillo y vino 2019'
        ]
    },
    {
        id: 2,
        slug: 'montagu',
        title: 'MONTAGU',
        description: 'Reinvención de la carta y estandarización de procesos de cocina.',
        fullDescription: 'En MONTAGU nos enfocamos en elevar la oferta gastronómica manteniendo la esencia rebelde del local. Diseñamos una carta 100% artesanal donde la elaboración propia es la protagonista, desde la panadería diaria hasta los fermentos y salsas.',
        imageUrl: '/images/montagu.jpeg',
        technicalDetails: {
            client: 'Grupo Montagu',
            year: '2023',
            services: ['Diseño de Carta', 'Escandallos', 'Formación de Equipo'],
            location: 'Madrid, Pamplona',
            website: 'www.montaguoriginals.com'
        },
        detailedMilestones: [
            {
                title: 'Carta 100% Artesanal',
                desc: 'Todo se elabora en casa: desde el pan de masa madre para los bocadillos hasta los procesos de fermentación más complejos.',
                icon: 'ChefHat'
            },
            {
                title: 'Ingeniería de "Platillos"',
                desc: 'Los entrantes dejan de ser raciones comunes para convertirse en platillos de alto nivel, elevando la experiencia gastronómica.',
                icon: 'Utensils'
            },
            {
                title: 'Reconocimiento Nacional',
                desc: 'Concepto validado por el crítico José Carlos Capel y ganador de premios nacionales de prestigio.',
                icon: 'Star'
            }
        ],
        awards: [
            'Mejor bocadillo de España 2023',
            'Reconocido por José Carlos Capel'
        ]
    },
    {
        id: 4,
        slug: 'soroeta',
        title: 'SOROETA',
        description: 'Transformación integral y diseño de experiencia artesanal.',
        fullDescription: 'En SOROETA hemos trabajado en la recuperación de la esencia local. Tras el primer mes de andadura, hemos evolucionado el modelo de negocio para optimizar la rentabilidad: el antiguo concepto de pinchos y menús semanales ha dado paso a una propuesta sólida de Menú Degustación y Raciones, complementada con un innovador Tardeo de Copas.',
        imageUrl: '/images/soroeta.png',
        technicalDetails: {
            client: 'SOROETA',
            year: '2026',
            services: ['Identidad Visual', 'Propuesta Gastronómica', 'Gestión Operativa', 'Estrategia de Comunicación'],
            location: 'Navarra, España',
            website: 'www.soroetairuna.com'
        },
        performanceMetrics: [
            { label: 'Incremento Rentabilidad (Menú Degustación)', value: 35, suffix: '%' },
            { label: 'Optimización Operativa (Menos rotación)', value: 50, suffix: '%' },
            { label: 'Captación Horas Valle (Tardeo)', value: 60, suffix: '%' }
        ],
        detailedMilestones: [
            {
                title: 'Evolución del Menú',
                desc: 'Transición estratégica de menús volátiles semanales a un Menú Degustación y Carta de Raciones consolidada.',
                icon: 'UtensilsCrossed'
            },
            {
                title: 'Nueva Línea de Negocio (Tardeo)',
                desc: 'Sustitución de los pinchos tradicionales por un concepto de Tardeo de Copas, maximizando el ticket medio en horas bajas.',
                icon: 'GlassWater'
            },
            {
                title: 'Eficiencia en Cocina',
                desc: 'Estandarización de procesos que permite una ejecución perfecta al eliminar la rotación constante de platos anteriores.',
                icon: 'ChefHat'
            }
        ]
    }
];

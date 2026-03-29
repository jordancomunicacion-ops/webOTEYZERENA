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
    };
}

export const projects: Project[] = [
    {
        id: 1,
        slug: 'sotodelprior',
        title: 'SOTOdelPRIOR',
        description: 'Gestión integral y desarrollo de concepto para finca agroturística.',
        fullDescription: 'SOTOdelPRIOR representa la excelencia en la gestión de espacios rurales. Hemos trabajado en la definición del concepto gastronómico, optimización de operaciones y diseño de la experiencia de cliente, transformando una finca tradicional en un destino referente.',
        imageUrl: '/images/sotodelprior.jpg',
        technicalDetails: {
            client: 'SOTOdelPRIOR',
            year: '2024',
            services: ['Concepto Gastronómico', 'Diseño de Operaciones', 'Formación'],
            location: 'Navarra, España'
        }
    },
    {
        id: 3,
        slug: 'la-gardabera',
        title: 'La Gardabera',
        description: 'Auditoría operativa y plan de expansión estratégica.',
        fullDescription: 'Para La Gardabera realizamos una auditoría profunda de sus operaciones actuales para detectar puntos de mejora. Desarrollamos un plan de expansión escalable y optimizamos la gestión de compras y proveedores.',
        imageUrl: '/images/la-gardabera.png',
        technicalDetails: {
            client: 'La Gardabera',
            year: '2023',
            services: ['Auditoría', 'Estrategia', 'Gestión de Compras'],
            location: 'Zaragoza, España'
        }
    },
    {
        id: 2,
        slug: 'montagu',
        title: 'MONTAGU',
        description: 'Reinvención de la carta y estandarización de procesos de cocina.',
        fullDescription: 'En MONTAGU nos enfocamos en elevar la oferta gastronómica manteniendo la esencia del local. Implementamos nuevos escandallos, fichas técnicas y formamos al equipo para asegurar la consistencia en cada servicio.',
        imageUrl: '/images/montagu.jpeg',
        technicalDetails: {
            client: 'Grupo Montagu',
            year: '2023',
            services: ['Diseño de Carta', 'Escandallos', 'Formación de Equipo'],
            location: 'Madrid, España'
        }
    },
    {
        id: 4,
        slug: 'soroeta',
        title: 'SOROETA',
        description: 'Transformación integral y diseño de experiencia artesanal.',
        fullDescription: 'En SOROETA hemos trabajado en la recuperación de la esencia local a través de una propuesta gastronómica honesta. Desde la selección de producto km 0 hasta el diseño de la identidad visual y operativa, SOROETA se ha consolidado como un proyecto referente en el sector primario.',
        imageUrl: '/images/soroeta.png',
        technicalDetails: {
            client: 'SOROETA',
            year: '2024',
            services: ['Identidad Visual', 'Propuesta Gastronómica', 'Gestión Operativa'],
            location: 'Navarra, España'
        }
    }
];

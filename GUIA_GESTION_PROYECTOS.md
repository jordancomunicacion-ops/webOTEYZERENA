# Guía de Gestión de Proyectos - Web Asesoría Gastronómica

Esta guía te permitirá añadir, modificar o eliminar proyectos de tu portafolio sin necesidad de conocimientos de programación.

## 1. Dónde están los datos

Toda la información de los proyectos se encuentra en un único archivo de texto:
`src/data/projects.ts`

Puedes abrir este archivo con cualquier editor de texto (Bloc de notas, VS Code, etc.), aunque se recomienda usar el mismo editor donde tienes el proyecto para evitar errores de formato.

## 2. Cómo añadir una imagen nueva

Antes de crear o modificar un proyecto, asegúrate de tener las imágenes listas.

1.  Prepara tus imágenes en formato `.jpg`, `.png` o `.webp`.
2.  Ve a la carpeta `public` carpeta `images` dentro de tu proyecto.
    *   Ruta completa: `Web asesoria gastronomica\public\images`
3.  Copia y pega ahí tus archivos de imagen.
    *   *Consejo: Usa nombres sencillos y sin espacios, por ejemplo: `restaurante-madrid.jpg` en lugar de `Foto Restaurante Madrid Final v2.jpg`.*

## 3. Cómo modificar el archivo de proyectos (`projects.ts`)

Abre el archivo `src/data/projects.ts`. Verás una estructura parecida a esta:

```typescript
export const projects: Project[] = [
    {
        id: 1,
        slug: 'sotodelprior',
        title: 'SOTOdelPRIOR',
        description: 'Gestión integral...',
        // ... más datos ...
    },
    // ... otros proyectos ...
];
```

### Para AÑADIR un proyecto nuevo:

Copia el siguiente bloque de código y pégalo **antes** del cierre del corchete final `];` (pero después de la llave de cierre `},` del proyecto anterior):

```typescript
    {
        id: 4, // Asegúrate de que este número sea único y consecutivo (si el anterior era 3, este es 4)
        slug: 'nombre-del-proyecto-url', // Esto aparecerá en la barra de direcciones (sin espacios, usa guiones)
        title: 'Nombre Título del Proyecto',
        description: 'Descripción corta que aparece en la portada.',
        fullDescription: 'Descripción larga y detallada que aparece al entrar en el proyecto. Aquí puedes explayarte explicando el trabajo realizado.',
        imageUrl: '/images/tu-foto-nueva.jpg', // IMPORTANTE: El nombre exacto del archivo que guardaste en public/images
        technicalDetails: {
            client: 'Nombre del Cliente',
            year: '2024',
            services: ['Servicio 1', 'Servicio 2', 'Servicio 3'], // Puedes poner tantos como quieras entre comillas
            location: 'Ciudad, País'
        }
    },
```

### Para MODIFICAR un proyecto existente:

Simplemente busca el texto que quieres cambiar (por ejemplo, el `title` o la `description`) y escribe el nuevo texto **manteniendo siempre las comillas simples `' '` alrededor**.

*   **Correcto:** `title: 'Nuevo Título',`
*   **Incorrecto:** `title: Nuevo Título,` (faltan comillas)

### Para ELIMINAR un proyecto:

Borra todo el bloque desde la llave de apertura `{` hasta la llave de cierre `},` correspondiente a ese proyecto.

## 4. Guardar y Ver

1.  Guarda los cambios en el archivo `src/data/projects.ts` (Ctrl + S).
2.  Si tienes la web abierta, los cambios deberían aparecer automáticamente.
3.  Si no ves los cambios, asegúrate de no haber borrado ninguna coma `,` o llave `}` accidentalmente.

---
**Nota:** El campo `id` debe ser siempre un número único. El campo `slug` no debe contener espacios ni caracteres especiales (tildes, ñ), usa guiones en su lugar (ej: `mi-proyecto` en vez de `Mi Proyecto`).

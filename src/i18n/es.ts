export default {
  header: {
    nav: [
      {
        label: 'Servicios <span class="text-[16px] ml-px">▾</span>',
        href: '/services',
      },
      {
        label: 'Sobre nosotros',
        href: '/about-us',
      },
      {
        label: 'Preguntas frecuentes',
        href: '/faq',
      },
    ],
    services: [
      {
        label: 'Pintura interior',
        href: 'interior-painting',
      },
      {
        label: 'Pintura exterior',
        href: 'exterior-painting',
      },
      {
        label: 'Reparación de drywall',
        href: 'drywall-repair',
      },
      {
        label: 'Texturizado de drywall',
        href: 'drywall-texture',
      },
    ],
    buttons: [
      {
        label: 'Reservar Ya!',
        href: '#',
        icon: 'arrow',
        background: 'bg-white',
      },
      {
        label: 'Llamar Ya',
        href: '#',
        icon: 'phone',
        background: 'bg-primary',
      },
    ],
  },
  main: {
    hero: {
      title:
        'Pintura interior y exterior <br/> y servicios de drywall <br/> en Nuevo México',
      description: 'Expertos de confianza en el hogar',
      buttons: [
        {
          icon: 'arrow',
          label: 'Reservar Ya!',
          href: '#',
          color: 'bg-white',
        },
        {
          icon: 'phone',
          label: 'Llamar Ya',
          href: '#',
          color: 'bg-secondary',
        },
      ],
    },
    benefits: [
      {
        icon: 'benefit-1',
        title: '8+ Años',
        subtitle: 'Experiencia práctica',
        description:
          'Más de 8 años ofreciendo servicios de pintura y drywall de alta calidad',
      },
      {
        icon: 'benefit-2',
        title: 'Calidad primero',
        subtitle: 'Satisfacción del cliente',
        description:
          'Cada proyecto se completa con cuidado, respeto y un fuerte enfoque en la calidad',
      },
      {
        icon: 'benefit-3',
        title: 'Servicio local',
        subtitle: 'Hogares de Nuevo México',
        description:
          'Atendemos con orgullo a propietarios en todo Nuevo México con un servicio confiable y profesional.',
      },
    ],
    services: {
      title:
        'Descubre nuestros servicios de mejora del hogar <br/> en Nuevo México',
      description:
        'Servicios profesionales de pintura y drywall diseñados para mejorar, proteger y <br/> realzar tu hogar con mano de obra de calidad y atención al detalle.',
      items: [
        {
          image: 'service-1',
          title: 'Pintura interior',
          description: 'Acabados interiores limpios y modernos',
          button: {
            label: 'Ver servicio',
            href: 'interior-painting',
          },
        },
        {
          image: 'service-2',
          title: 'Pintura exterior',
          description: 'Recubrimientos duraderos y resistentes al clima',
          button: {
            label: 'Ver servicio',
            href: 'exterior-painting',
          },
        },
        {
          image: 'service-3',
          title: 'Reparación de drywall',
          description: 'Restauración de muros sin marcas',
          button: {
            label: 'Ver servicio',
            href: 'drywall-repair',
          },
        },
        {
          image: 'service-4',
          title: 'Texturizado de drywall',
          description: 'Coincidencia perfecta de texturas',
          button: {
            label: 'Ver servicio',
            href: 'drywall-texture',
          },
        },
      ],
    },
    why: {
      title: 'Por qué elegir a <br class="hidden sm:block"/> Arcos Remodeling',
      description:
        'En Arcos Remodeling tratamos cada proyecto con responsabilidad, precisión y respeto. Desde el primer contacto hasta el último detalle, nuestro objetivo es entregar trabajo de calidad que cumpla tus expectativas y mejore tu hogar.',
      items: [
        {
          icon: 'why-1',
          title: 'Mano de obra de calidad',
          description:
            'Nos enfocamos en acabados limpios, detalles precisos y resultados duraderos que realzan el aspecto y el valor de tu hogar.',
        },
        {
          icon: 'why-2',
          title: 'Puntual y profesional',
          description:
            'Respetamos tu tiempo y tu espacio, ofreciendo un servicio organizado, puntual y profesional en cada proyecto.',
        },
      ],
    },
    process: {
      title: 'Un proceso simple y profesional',
      description:
        'En solo 3 pasos sencillos ofrecemos servicios de pintura y drywall con resultados limpios y confiables.',
      steps: [
        {
          title: 'Programación sencilla',
          description:
            'Hablamos de tu proyecto, respondemos tus preguntas y programamos el servicio en el mejor momento para ti.',
        },
        {
          title: 'Manos a la obra',
          description:
            'Nuestro equipo llega preparado y puntual, realizando el trabajo con atención al detalle, ejecución limpia y respeto por tu hogar.',
        },
        {
          title: 'Resultados de calidad',
          description:
            'Terminamos el proyecto a tu satisfacción, garantizando acabados limpios, resultados duraderos y un trabajo bien hecho a la primera.',
        },
      ],
    },
    improve: {
      title: 'Mejora tu hogar con mano de obra de calidad',
      description:
        'Programa tu proyecto de pintura o drywall con Arcos Remodeling y disfruta de servicio profesional, acabados limpios y resultados confiables en todo Nuevo México.',
      buttons: [
        {
          label: 'Reservar Ya!',
          href: '#',
          icon: 'arrow',
          color: 'bg-white',
        },
        {
          label: 'Llamar Ahora',
          href: '#',
          icon: 'phone',
          color: 'bg-secondary',
        },
      ],
    },
    gallery: {
      title: 'Hogares hermosos. Resultados de calidad.',
      description:
        'Mira nuestros últimos proyectos, transformaciones reales y trabajos terminados para propietarios en <br class="hidden sm:block"/> Nuevo México. Cada imagen refleja nuestro compromiso con la mano de obra de calidad, la atención al detalle y <br class="hidden sm:block"/> resultados bien hechos a la primera.',
      images: ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4'],
    },
    testimonials: {
      title: 'Lo que dicen los propietarios sobre Arcos Remodeling',
      description:
        'Respaldado por experiencias reales de clientes, Arcos Remodeling es confiable por su mano de obra de calidad, atención al detalle y servicio responsable en todo Nuevo México.',

    },
  },
  services: {},
  footer: {},
};

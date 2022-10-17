const productos = [
    {
        id: 1,
        name: 'Bennazianna',
        description: 'La más completa',
        price: 3650,
        img: './assets/imgs/imgpizzas/bennazianna.jfif',
        recomendada: true,
        category: 'pizzas',
    },
    {
        id: 2,
        name: 'Tronco-Pizza',
        description: 'Para todo el día',
        price: 870,
        img: './assets/imgs/imgpizzas/tronco',
        recomendada: true,
        category: 'pizzas',
    },
    {
        id: 3,
        name: 'Papas | Provenzal',
        description: 'Van como piña',
        price: 360,
        img: './assets/imgs/imgpizzas/papitas.jfif',
        recomendada: true,
        category: 'napapuki',
    },
    {
        id: 4,
        name: 'La Mr. Pit',
        description: 'Solo para expertos',
        price: 350,
        img: './assets/imgs/imgpizzas/mr-pit.jfif',
        recomendada: false,
        category: ['pizzas', 'populares'],
    },
    {
        id: 5,
        name: 'Q´Jamone',
        description: 'c/Jamón Crudo',
        price: 350,
        img: './assets/imgs/imgpizzas/Q-Jamone.jfif',
        recomendada: false,
        category: ['pizzas', 'populares'],
    },
    {
        id: 6,
        name: 'La Charly García',
        description: 'Basta',
        price: 380,
        img: './assets/imgs/imgpizzas/Carly.jfif',
        recomendada: false,
        category: ['pizzas', 'populares'],
    },
    {
        id: 7,
        name: 'La Maradona',
        description: 'Eterna',
        price: 450,
        img: './assets/imgs/imgpizzas/maradona',
        recomendada: false,
        category: ['pizzas', 'populares'],
    },
    {
        id: 8,
        name: 'Picantovich',
        description: 'Pica 2 veces',
        price: 750,
        img: './assets/imgs/imgpizzas/Picantovich.jfif',
        recomendada: false,
        category: ['pizzas', 'populares'],
    },
    {
        id: 9,
        name: 'La Hasbulla',
        description: 'En honor al 1',
        price: 990,
        img: './assets/imgs/imgpizzas/Hasbulla.jfif',
        recomendada: false,
        category: ['pizzas', 'populares'],
    },
    {
        id: 10,
        name: 'Leo Messi',
        description: 'De pie señores',
        price: 10,
        img: './assets/imgs/imgpizzas/Messi.jfif',
        recomendada: false,
        category: ['pizzas', 'populares'],
    },
    {
        id: 11,
        name: 'Nick Gi',
        description: 'La que desaparece',
        price: 'Gratis',
        img: './assets/imgs/imgpizzas/NickGi.jfif',
        recomendada: false,
        category: ['pizzas', 'populares'],
    },
    {
        id: 12,
        name: 'Nick Gi',
        description: 'La que desaparece',
        price: 'Gratis',
        img: './assets/imgs/imgpizzas/NickGi.jfif',
        recomendada: false,
        category: ['pizzas', 'populares'],
    },
    {
        id: 13,
        name: 'Simple',
        description: 'Para niños',
        price: 550,
        img: './assets/imgs/imgHambur/hsimple.png',
        recomendada: false,
        category: 'hamburguesas'
    },
    {
        id: 14,
        name: 'Hawaiana',
        description: 'va con piña',
        price: 750,
        img: './assets/imgs/imgHambur/hamburguesahawaiana.jpg',
        recomendada: false,
        category: 'hamburguesas'
    },
    {
        id: 15,
        name: 'Cheese Burguer',
        description: 'Ojo con el queso',
        price: 650,
        img: './assets/imgs/imgHambur/hQueso.jpg',
        recomendada: false,
        category: 'hamburguesas'
    },
    {
        id: 16,
        name: 'Americana',
        description: 'bien pulenta',
        price: 550,
        img: './assets/imgs/imgHambur/hAmericana.jpg',
        recomendada: false,
        category: 'hamburguesas'
    },
    {
        id: 17,
        name: 'Papas a la francesa',
        description: 'Clásico',
        price: 450,
        img: './assets/imgs/imgPapas/aLaFrancesa.jpeg',
        recomendada: false,
        category: 'napapuki'
    },
    {
        id: 18,
        name: 'Papas walfe',
        description: 'la rejillita',
        price: 550,
        img: './assets/imgs/imgPapas/wafles.jpg',
        recomendada: false,
        category: 'napapuki'
    },
    {
        id: 19,
        name: 'Papas al horno',
        description: 'para la culpa',
        price: 650,
        img: './assets/imgs/imgPapas/alHorno.jpg',
        recomendada: false,
        category: 'napapuki'
    },
    {
        id: 20,
        name: 'Wraps de vegetales',
        description: 'sin animalitos',
        price: 850,
        img: './assets/imgs/imgWraps/wVegetales.jpg',
        recomendada: false,
        category: 'wraps'
    },
    {
        id: 20,
        name: 'Wraps de vegetales',
        description: 'sin animalitos',
        price: 850,
        img: './assets/imgs/imgWraps/wVegetales.jpg',
        recomendada: false,
        category: 'wraps'
    },
    {
        id: 21,
        name: 'Wraps de pollo y vegetales',
        description: 'mamita querida pollo',
        price: 950,
        img: './assets/imgs/imgWraps/wPollo.jpg',
        recomendada: false,
        category: 'wraps'
    },
    {
        id: 22,
        name: 'Wraps mediterráneo',
        description: 'de la tierra de Serrat',
        price: 1050,
        img: './assets/imgs/imgWraps/wMediterraneo.jpg',
        recomendada: false,
        category: 'wraps'
    },
    {
        id: 23,
        name: 'Wraps dulce',
        description: 'llegó el postre',
        price: 750,
        img: './assets/imgs/imgWraps/wDulce.jpg',
        recomendada: false,
        category: 'wraps'
    },
    {
        id: 24,
        name: 'Quesadillas',
        description: 'bien picantes',
        price: 850,
        img: './assets/imgs/imMex/quesadillas.jpg',
        recomendada: false,
        category: 'mexican'
    },
    {
        id: 25,
        name: 'Tamales',
        description: 'los mejores',
        price: 750,
        img: './assets/imgs/imMex/tamales.jpeg',
        recomendada: false,
        category: 'mexican'
    },
    {
        id: 26,
        name: 'Elotes',
        description: 'la mejor salsa',
        price: 8950,
        img: './assets/imgs/imMex/elotes.jpg',
        recomendada: false,
        category: 'mexican'
    },
    {
        id: 27,
        name: 'Enchiladas',
        description: 'bien picantes',
        price: 1050,
        img: './assets/imgs/imMex/enchiladas.webp',
        recomendada: false,
        category: 'mexican'
    },
    {
        id: 28,
        name: 'Tacos',
        description: 'con mucho chile',
        price: 1250,
        img: './assets/imgs/imMex/tacos.jpg',
        recomendada: false,
        category: 'mexican'
    },



]




import empty from './assets/webp/img-placeholder.webp';
import joseFace from './assets/jpeg/jose-face.jpeg';

export const activities = [
    {
        activityId: 'hung-gar',
        name: 'Hung Gar',
        logo: empty,
    },
    {
        activityId: 'wing-chun',
        name: 'Wing Chun',
        logo: empty,
    },
    {
        activityId: 'sanda',
        name: 'Sanda',
        logo: empty,
    },
    {
        activityId: 'funcional',
        name: 'Funcional',
        logo: empty,
    },
];

export const filiales = [
    {
        filialId: 'kwoon-central',
        name: 'Kwoon Central',
        city: 'Rosario',
        address: 'Laprida 2907 - Rosario - Santa Fe',
        addressLink: 'https://maps.app.goo.gl/WAuqRqqVbcR9MvRFA',
        activities: 'Hung Gar - Wing Chun - Sanda - Funcional',
        director: 'Sifu Fabián González',
        instructorId: 'sifu-fabian-gonzalez',
    },
    {
        filialId: 'filial-la-plata',
        name: 'Filial La Plata, Bs. As.',
        city: 'La Plata',
        address: 'Club S y D San Martín, Calle 119 entre 530 y 531 Tolosa',
        addressLink: 'https://maps.app.goo.gl/o4X1RapUCv5rTGTU6',
        activities: 'Hung Gar',
        director: 'Instructor Ignacio Bruvera',
        instructorId: 'instructor-ignacio-bruvera',
    },
    {
        filialId: 'filial-comarca-andina',
        name: 'Filial Comarca Andina - El Hoyo',
        city: 'El Hoyo',
        address: 'Corfo El Hoyo - Chubut',
        addressLink: 'https://maps.app.goo.gl/UHhPPsScdT2NYgvdA',
        activities: 'Hung Gar - Chi Kung - Defensa Personal',
        director: 'Profesor Nahuel Campanari',
        instructorId: 'prof-nahuel-campanari',
    },
    {
        filialId: 'filial-rosario-zona-sur',
        name: 'Filial Rosario (Zona Sur)',
        city: 'Rosario',
        address: 'España 4588 esquina Coulin (Espacio Iluminarte)',
        addressLink: 'https://maps.app.goo.gl/LnCNpjvtTTTSVqQWA',
        activities: 'Hung Gar',
        director: 'Instructor José Luis Cristaldo Bustamante',
        instructorId: 'instructor-jose-luis-cb',
    },
];

export const instructores = [
    {
        instructorId: 'sifu-fabian-gonzalez',
        name: 'Sifu Fabián Luis González',
        yearsOfPractice: 40,
        bio: `
            Único epresentante del <b>Gran Maestro Li Hon Ki</b> en Argentina.
            <br><br>
            <i>Más 40 años de práctica ininterrumpida.</i>
        `,
        photo: empty,
        place: 'Kwoon Central',
        activities: ['hung-gar', 'wing-chun'],
    },
    {
        instructorId: 'prof-maxi-gomez',
        name: 'Profesor Maximiliano Gómez',
        yearsOfPractice: 30,
        bio: '',
        photo: empty,
        place: 'Kwoon Central',
        activities: ['sanda'],
    },
    {
        instructorId: 'prof-walter-mansilla',
        name: 'Profesor Walter Mansilla',
        yearsOfPractice: 20,
        bio: '',
        photo: empty,
        place: 'Kwoon Central',
        activities: ['hung-gar'],
    },
    {
        instructorId: 'prof-nahuel-campanari',
        name: 'Profesor Nahuel Campanari',
        yearsOfPractice: 20,
        bio: '',
        photo: empty,
        place: 'Comarca Andina - El Hoyo - Chubut',
        activities: ['hung-gar'],
    },
    {
        instructorId: 'instructor-jose-luis-cb',
        name: 'Instructor José Luis Cristaldo Bustamante',
        yearsOfPractice: 10,
        bio: `
            Acerca de mí: 
            <p>Comencé a practicar el estilo Hung Kuen el 12 de Noviembre de 2014, procurando un arte marcial que me posibilitara estar en forma, e inspirado por las películas de la serie "Érase una vez en China" de Jet Li y demás de Shaw Brothers.</p>
            <p>Con nueve años ya de práctica, llevo cuatro impartiendo clases en el turno Niños en el Kwoon Central y un año en turno mixto (niños y adultos) en turno nocturno a mi cargo en Iluminarte.</p>
            <p>Por otra parte, participé en torneos desde 2017, obteniendo en tal año el Primer puesto tanto en formas de manos (Gung Ji Foo Hoo Kuen) como de armas (Kunlun Gim) en el torneo Garra de Águila, reiterando la participación en 2022, obteniendo asimismo idénticos puestos en formas de manos (Foo Hook Seung Yin Kuen) cuanto en forma de armas (Kunlun Gim), y participando a su vez en 2023 en los Juegos CREAR en categoría mayores de 41 años, con forma de manos Lau Xing Kuen y forma de armas Kunlun Gim.
            <p>Cabe señalar que en el ámbito profesional me desempeño como abogado egresado de la Universidad Nacional de Rosario desde Agosto de 2015 en las áreas civil, comercial y laboral.</p>
            <p>Doy clases de Hung Gar para niños los días martes y jueves de 18:00hs a 19hs en el <a href="/filiales/kwoon-central">Kwoon Central</a>.</p>
        `,
        photo: joseFace,
        place: 'Kwoon Central - Filial Rosario (Zona Sur)',
        activities: ['hung-gar'],
    },
    {
        instructorId: 'instructor-ignacio-bruvera',
        name: 'Instructor Ignacio Bruvera',
        yearsOfPractice: 10,
        bio: '',
        photo: empty,
        place: 'La Plata - Buenos Aires',
        activities: ['hung-gar'],
    },
];

export const centralKwoonSchedule = [
    {
        day: 'Lunes',
        timeIn: '08:00',
        timeOut: '09:00',
        name: 'Funcional (Paula)',
        type: 'funcional',
    },
    {
        day: 'Miércoles',
        timeIn: '08:00',
        timeOut: '09:00',
        name: 'Funcional (Paula)',
        type: 'funcional',
    },
    {
        day: 'Viernes',
        timeIn: '08:00',
        timeOut: '09:00',
        name: 'Funcional (Paula)',
        type: 'funcional',
    },

    {
        day: 'Lunes',
        timeIn: '09:30',
        timeOut: '10:30',
        name: 'Wing Chun (Manuel)',
        type: 'wing-chun',
    },
    {
        day: 'Viernes',
        timeIn: '09:30',
        timeOut: '10:30',
        name: 'Wing Chun (Manuel)',
        type: 'wing-chun',
    },
    {
        day: 'Lunes',
        timeIn: '10:30',
        timeOut: '11:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Miércoles',
        timeIn: '10:30',
        timeOut: '11:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Viernes',
        timeIn: '10:30',
        timeOut: '11:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Martes',
        timeIn: '15:00',
        timeOut: '16:00',
        name: 'Wing Chun (Tadeo)',
        type: 'wing-chun',
    },
    {
        day: 'Jueves',
        timeIn: '15:00',
        timeOut: '16:00',
        name: 'Wing Chun (Tadeo)',
        type: 'wing-chun',
    },
    {
        day: 'Lunes',
        timeIn: '16:30',
        timeOut: '17:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Miércoles',
        timeIn: '16:30',
        timeOut: '17:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Viernes',
        timeIn: '16:30',
        timeOut: '17:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Lunes',
        timeIn: '19:00',
        timeOut: '20:30',
        name: 'Wing Chun',
        type: 'wing-chun',
    },
    {
        day: 'Miércoles',
        timeIn: '19:00',
        timeOut: '20:30',
        name: 'Wing Chun',
        type: 'wing-chun',
    },
    {
        day: 'Sábado',
        timeIn: '10:30',
        timeOut: '12:00',
        name: 'Wing Chun',
        type: 'wing-chun',
    },
    {
        day: 'Lunes',
        timeIn: '17:45',
        timeOut: '19:00',
        name: 'Sanda',
        type: 'sanda',
    },
    {
        day: 'Miércoles',
        timeIn: '17:45',
        timeOut: '19:00',
        name: 'Sanda',
        type: 'sanda',
    },
    {
        day: 'Viernes',
        timeIn: '17:45',
        timeOut: '19:00',
        name: 'Sanda',
        type: 'sanda',
    },
    {
        day: 'Martes',
        timeIn: '18:00',
        timeOut: '19:00',
        name: 'Hung Gar Niños',
        type: 'hung-gar',
    },
    {
        day: 'Jueves',
        timeIn: '18:00',
        timeOut: '19:00',
        name: 'Hung Gar Niños',
        type: 'hung-gar',
    },
    {
        day: 'Martes',
        timeIn: '19:00',
        timeOut: '20:30',
        name: 'Hung Gar',
        type: 'hung-gar',
    },
    {
        day: 'Jueves',
        timeIn: '19:00',
        timeOut: '20:30',
        name: 'Hung Gar',
        type: 'hung-gar',
    },
];

export const filialSurSchedule = [
    {
        day: 'Lunes',
        timeIn: '20:30',
        timeOut: '21:30',
        name: 'Hung Gar Adultos / Niños',
        type: 'hung-gar',
    },
    {
        day: 'Miércoles',
        timeIn: '20:30',
        timeOut: '21:30',
        name: 'Hung Gar Adultos / Niños',
        type: 'hung-gar',
    },
    {
        day: 'Viernes',
        timeIn: '20:30',
        timeOut: '21:30',
        name: 'Hung Gar Adultos / Niños',
        type: 'hung-gar',
    },
];

export const filialComarcaAndina = [];

export const filialLaPlata = [];

export const schedules = {
    'kwoon-central': centralKwoonSchedule,
    'filial-la-plata': filialLaPlata,
    'filial-comarca-andina': filialComarcaAndina,
    'filial-rosario-zona-sur': filialSurSchedule,
}
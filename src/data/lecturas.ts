// Datos reales tomados de @club.literarias en Instagram.
// Revisa citas, veredictos (estrellas) y notas antes de publicar: varias
// descripciones venían de texto OCR de las publicaciones y se limpiaron
// a mano donde era ilegible.

export type Color = 'plum' | 'orange' | 'olive' | 'teal' | 'navy' | 'coral';

export interface Lectura {
  slug: string;
  mes: string;
  numero: string; // 01–12
  anio: number;
  titulo: string;
  autora: string;
  paginas: number;
  genero: string;
  subgenero: string;
  editorial: string;
  sinopsis?: string;
  cita?: string;
  veredicto: number; // 1–5
  notas?: string[];
  lugar: string;
  color: Color;
  destacado?: boolean;
}

export const lecturas: Lectura[] = [
  {
    slug: 'agosto-2026',
    mes: 'Agosto',
    numero: '08',
    anio: 2026,
    titulo: 'Penélope y las 12 criadas',
    autora: 'Margaret Atwood',
    paginas: 199,
    genero: 'Ficción',
    subgenero: 'Reescritura de mito',
    editorial: 'DeBolsillo',
    sinopsis:
      'Una reinterpretación feminista del mito de Penélope que cuestiona el poder, el silencio y la historia contada por otros.',
    veredicto: 5,
    lugar: 'Por confirmar',
    color: 'plum',
    destacado: true,
  },
  {
    slug: 'julio-2026',
    mes: 'Julio',
    numero: '07',
    anio: 2026,
    titulo: 'Mis últimos 10 minutos y 38 segundos en este extraño mundo',
    autora: 'Elif Shafak',
    paginas: 381,
    genero: 'Ficción',
    subgenero: 'Ficción contemporánea',
    editorial: 'Lumen',
    cita:
      'El dolor es una golondrina —dijo el anciano—. Un día uno se despierta y cree que se ha ido para siempre, pero solo ha migrado a otro sitio, para calentarse las plumas. Tarde o temprano volverá a posarse en el corazón.',
    veredicto: 4,
    notas: ['Lectura conmovedora, original y muy humana.'],
    lugar: 'Casa de los Patos',
    color: 'orange',
  },
  {
    slug: 'junio-2026',
    mes: 'Junio',
    numero: '06',
    anio: 2026,
    titulo: 'Los recuerdos del porvenir',
    autora: 'Elena Garro',
    paginas: 352,
    genero: 'Ficción',
    subgenero: 'Novela histórica',
    editorial: 'Alfaguara',
    cita: '¿Y si morir fuera un dormir y un no despertar nunca?',
    veredicto: 4,
    lugar: 'Por confirmar',
    color: 'teal',
  },
  {
    slug: 'mayo-2026-somers',
    mes: 'Mayo',
    numero: '05',
    anio: 2026,
    titulo: 'La mujer desnuda',
    autora: 'Armonía Somers',
    paginas: 128,
    genero: 'Ficción',
    subgenero: 'Realismo fantástico · Terror',
    editorial: 'Criatura Editora',
    veredicto: 4,
    lugar: 'Casa de Chuy',
    color: 'olive',
  },
  {
    slug: 'mayo-2026-zweig',
    mes: 'Mayo',
    numero: '05',
    anio: 2026,
    titulo: 'Novela de ajedrez',
    autora: 'Stefan Zweig',
    paginas: 120,
    genero: 'Ficción',
    subgenero: 'Novela corta',
    editorial: 'El Acantilado',
    cita: 'Nada sobre la tierra ejerce tanta presión sobre la mente humana como la nada.',
    veredicto: 5,
    lugar: 'Casa de Chuy',
    color: 'navy',
  },
  {
    slug: 'abril-2026',
    mes: 'Abril',
    numero: '04',
    anio: 2026,
    titulo: 'La pesquisa',
    autora: 'Juan José Saer',
    paginas: 208,
    genero: 'Ficción',
    subgenero: 'Policiaco',
    editorial: 'Seix Barral',
    veredicto: 4,
    lugar: 'Casa de Maris y Marcela',
    color: 'coral',
  },
  {
    slug: 'marzo-2026',
    mes: 'Marzo',
    numero: '03',
    anio: 2026,
    titulo: 'El ruido y la furia',
    autora: 'William Faulkner',
    paginas: 392,
    genero: 'Ficción',
    subgenero: 'Ficción literaria',
    editorial: 'DeBolsillo',
    cita:
      'Padre había dicho que antes se reconocía a un caballero por sus libros; ahora se le reconoce por los que no ha devuelto.',
    veredicto: 4,
    notas: ['Lectura exigente, pero de una escritura y unos personajes inolvidables.'],
    lugar: 'Dulce Pecado',
    color: 'plum',
  },
  {
    slug: 'febrero-2026',
    mes: 'Febrero',
    numero: '02',
    anio: 2026,
    titulo: 'Hamnet',
    autora: 'Maggie O’Farrell',
    paginas: 372,
    genero: 'Ficción histórica',
    subgenero: 'Ficción literaria',
    editorial: 'Libros del Asteroide',
    cita:
      'Quien diga que la muerte es "serena", un apagarse poco a poco, nunca ha visto morir a nadie. La muerte es violenta, la muerte es una batalla.',
    veredicto: 5,
    notas: ['Una novela que vuelve físico el duelo y la pérdida.'],
    lugar: "Cinemax y Alessandro's @ D1",
    color: 'olive',
  },
  {
    slug: 'enero-2026',
    mes: 'Enero',
    numero: '01',
    anio: 2026,
    titulo: 'La física de la tristeza',
    autora: 'Georgi Gospodínov',
    paginas: 384,
    genero: 'Ficción',
    subgenero: 'Narrativa fragmentaria',
    editorial: 'Impedimenta',
    notas: [
      'Lo insignificante, ahí donde nadie mira, es donde anida la vida.',
      'El laberinto es la indecisión hecha piedra.',
    ],
    veredicto: 4,
    lugar: 'Antigua Hebrón Café · Torre Azteca',
    color: 'teal',
  },
];

export const lecturaDelMes = lecturas.find((l) => l.destacado) ?? lecturas[0];
export const lecturasAnteriores = lecturas.filter((l) => !l.destacado);

export const generos = [
  'Ficción',
  'Novela',
  'Autoras',
  'Cuento',
  'Ensayo',
  'Terror',
  'Lo extraño',
];

export const club = {
  nombre: 'Literarias',
  fundacion: 'Abril 2022',
  ciudad: 'Chihuahua, Chih.',
  integrantesIniciales: 5,
  integrantes: 12,
  librosLeidos: 46,
  instagram: 'https://www.instagram.com/club.literarias',
  descripcion:
    'Historias que nos mueven, nos cuestionan y se quedan. Desde 2022 nos juntamos a leer, discutir y a veces a discrepar en casas, cafés y salas de cine de Chihuahua.',
};

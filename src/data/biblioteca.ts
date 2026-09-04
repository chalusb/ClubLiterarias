// Biblioteca personal del club: libros recomendados aparte de las
// lecturas oficiales del mes. Portadas en public/biblioteca/{slug}.jpg.
export interface LibroBiblioteca {
  titulo: string;
  autor: string;
  slug: string;
}

export const biblioteca: LibroBiblioteca[] = [
  { titulo: 'Americanah', autor: 'Chimamanda Ngozi Adichie', slug: 'americanah-chimamanda-ngozi-adichie' },
  { titulo: 'Aura', autor: 'Carlos Fuentes', slug: 'aura-carlos-fuentes' },
  { titulo: 'Carcoma', autor: 'Layla Martínez', slug: 'carcoma-layla-martinez' },
  { titulo: 'Ceniza en la boca', autor: 'Brenda Navarro', slug: 'ceniza-en-la-boca-brenda-navarro' },
  { titulo: 'Crisálida', autor: 'Fernando Navarro', slug: 'crisalida-fernando-navarro' },
  { titulo: 'Cádavez exquisito', autor: 'Agustina Bazterrica', slug: 'cadavez-exquisito-agustina-bazterrica' },
  { titulo: 'El acontecimiento', autor: 'Annie Ernaux', slug: 'el-acontecimiento-annie-ernaux' },
  { titulo: 'El amante', autor: 'Marguerite Duras', slug: 'el-amante-marguerite-duras' },
  { titulo: 'El año del pensamiento mágico', autor: 'Joan Didion', slug: 'el-ano-del-pensamiento-magico-joan-didion' },
  { titulo: 'El fin del amor', autor: 'Tamara Tenenbaum', slug: 'el-fin-del-amor-tamara-tenenbaum' },
  { titulo: 'El lugar', autor: 'Annie Ernaux', slug: 'el-lugar-annie-ernaux' },
  { titulo: 'El paciente', autor: 'Juan Gómez-Jurado', slug: 'el-paciente-juan-gomez-jurado' },
  { titulo: 'El río que nos separa', autor: 'Ngugi wa Thiong’o', slug: 'el-rio-que-nos-separa-ngugi-wa-thiong-o' },
  { titulo: 'El verano en que mi madre tuvo los ojos verdes', autor: 'Tatiana Ţîbuleac', slug: 'el-verano-en-que-mi-madre-tuvo-los-ojos-verdes-tatiana-tibuleac' },
  { titulo: 'El verano sin hombres', autor: 'Siri Hustvedt', slug: 'el-verano-sin-hombres-siri-hustvedt' },
  { titulo: 'Ellas hablan', autor: 'Miriam Toews', slug: 'ellas-hablan-miriam-toews' },
  { titulo: 'Ellos', autor: 'Kay Dick', slug: 'ellos-kay-dick' },
  { titulo: 'En la tierra somos fugazmente grandiosos', autor: 'Ocean Vuong', slug: 'en-la-tierra-somos-fugazmente-grandiosos-ocean-vuong' },
  { titulo: 'Exhalación', autor: 'Ted Chiang', slug: 'exhalacion-ted-chiang' },
  { titulo: 'Hoy hubiera preferido no encontrarme a mí misma', autor: 'Herta Müller', slug: 'hoy-hubiera-preferido-no-encontrarme-a-mi-misma-herta-muller' },
  { titulo: 'La biblioteca de los nuevos comienzos', autor: 'Michiko Aoyama', slug: 'la-biblioteca-de-los-nuevos-comienzos-michiko-aoyama' },
  { titulo: 'La casa torcida', autor: 'Agatha Christie', slug: 'la-casa-torcida-agatha-christie' },
  { titulo: 'La muerte en Venecia', autor: 'Thomas Mann', slug: 'la-muerte-en-venecia-thomas-mann' },
  { titulo: 'La Sumisa', autor: 'Fiódor Dostoyevski', slug: 'la-sumisa-fiodor-dostoyevski' },
  { titulo: 'La vegetariana', autor: 'Han Kang', slug: 'la-vegetariana-han-kang' },
  { titulo: 'Laberinto', autor: 'Eduardo Antonio Parra', slug: 'laberinto-eduardo-antonio-parra' },
  { titulo: 'Las malas', autor: 'Camila Sosa Villada', slug: 'las-malas-camila-sosa-villada' },
  { titulo: 'Las niñas salvajes', autor: 'Ursula K. Le Guin', slug: 'las-ninas-salvajes-ursula-k-le-guin' },
  { titulo: 'Lehrerzimmer', autor: 'Markus Orths', slug: 'lehrerzimmer-markus-orths' },
  { titulo: 'Los siete maridos de Evelyn Hugo', autor: 'Taylor Jenkins Reid', slug: 'los-siete-maridos-de-evelyn-hugo-taylor-jenkins-reid' },
  { titulo: 'Mandíbula', autor: 'Mónica Ojeda', slug: 'mandibula-monica-ojeda' },
  { titulo: 'Niñapajaroglaciar', autor: 'Mariana Matija', slug: 'ninapajaroglaciar-mariana-matija' },
  { titulo: 'Pájaros de Fuego', autor: 'Anaïs Nin', slug: 'pajaros-de-fuego-anais-nin' },
  { titulo: 'Sofoco', autor: 'Laura Ortiz Gómez', slug: 'sofoco-laura-ortiz-gomez' },
  { titulo: 'Todo el mundo sabe que eres una bruja', autor: 'Rivka Galchen', slug: 'todo-el-mundo-sabe-que-eres-una-bruja-rivka-galchen' },
  { titulo: 'Un brazo y otros cuentos', autor: 'Yasunari Kawabata', slug: 'un-brazo-y-otros-cuentos-yasunari-kawabata' },
  { titulo: 'Un verdor terrible', autor: 'Benjamín Labatut', slug: 'un-verdor-terrible-benjamin-labatut' },
  { titulo: 'Yo que nunca supe de los hombres', autor: 'Jacqueline Harpman', slug: 'yo-que-nunca-supe-de-los-hombres-jacqueline-harpman' },
];

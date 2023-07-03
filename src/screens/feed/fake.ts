import { IVacancyCard } from '@/components/Cards/VacancyCard'

const vagasVoluntarias: IVacancyCard[] = [
  {
    ongName: 'ONG Ação Solidária',
    title: 'Assistente Administrativo',
    subtitle: 'Voluntariado',
    description:
      'A ONG Ação Solidária está em busca de um assistente administrativo voluntário para ajudar na organização de eventos e atividades internas. É necessário ter conhecimento básico em informática e disponibilidade de horário aos sábados.',
    imageUrl: 'https://exemplo.com/imagens/assistente_administrativo.jpg'
  },
  {
    ongName: 'Associação Esperança',
    title: 'Professor de Inglês',
    subtitle: 'Educação',
    description:
      'A Associação Esperança está buscando um professor de inglês voluntário para ministrar aulas duas vezes por semana. É necessário ter experiência no ensino do idioma e disponibilidade durante as tardes.',
    imageUrl: 'https://exemplo.com/imagens/professor_ingles.jpg'
  },
  {
    ongName: 'Projeto Amigo dos Animais',
    title: 'Auxiliar de Veterinário',
    subtitle: 'Cuidado Animal',
    description:
      'O Projeto Amigo dos Animais precisa de um auxiliar de veterinário voluntário para auxiliar nos cuidados e tratamentos dos animais resgatados. É necessário ter conhecimentos básicos em medicina veterinária e disponibilidade aos finais de semana.',
    imageUrl: 'https://exemplo.com/imagens/auxiliar_veterinario.jpg'
  },
  {
    ongName: 'Casa da Criança Feliz',
    title: 'Monitor de Recreação',
    subtitle: 'Infância',
    description:
      'A Casa da Criança Feliz está em busca de um monitor de recreação voluntário para coordenar atividades lúdicas e recreativas com as crianças atendidas. É necessário ter experiência com crianças e disponibilidade durante as manhãs.',
    imageUrl: 'https://exemplo.com/imagens/monitor_recreacao.jpg'
  },
  {
    ongName: 'Instituto Natureza Preservada',
    title: 'Auxiliar de Campo',
    subtitle: 'Meio Ambiente',
    description:
      'O Instituto Natureza Preservada precisa de um auxiliar de campo voluntário para auxiliar em pesquisas e monitoramentos ambientais. É necessário ter interesse na preservação ambiental e disponibilidade para viagens.',
    imageUrl: 'https://exemplo.com/imagens/auxiliar_campo.jpg'
  },
  {
    ongName: 'Associação Cultural Arte Viva',
    title: 'Instrutor de Dança',
    subtitle: 'Artes',
    description:
      'A Associação Cultural Arte Viva está procurando um instrutor de dança voluntário para ministrar aulas de diversos estilos, como ballet, jazz e hip-hop. É necessário ter experiência na área e disponibilidade durante as noites.',
    imageUrl: 'https://exemplo.com/imagens/instrutor_danca.jpg'
  },
  {
    ongName: 'Casa de Amparo Esperança',
    title: 'Auxiliar de Enfermagem',
    subtitle: 'Saúde',
    description:
      'A Casa de Amparo Esperança está em busca de um auxiliar de enfermagem voluntário para prestar assistência aos idosos residentes. É necessário ter formação na área e disponibilidade para trabalhar aos finais de semana.',
    imageUrl: 'https://exemplo.com/imagens/auxiliar_enfermagem.jpg'
  },
  {
    ongName: 'Projeto Cultivando Sonhos',
    title: 'Professor de Música',
    subtitle: 'Educação',
    description:
      'O Projeto Cultivando Sonhos precisa de um professor de música voluntário para dar aulas de instrumentos musicais, como violão, teclado e bateria. É necessário ter conhecimentos musicais e disponibilidade durante as tardes.',
    imageUrl: 'https://exemplo.com/imagens/professor_musica.jpg'
  },
  {
    ongName: 'Centro de Apoio Familiar',
    title: 'Psicólogo',
    subtitle: 'Saúde',
    description:
      'O Centro de Apoio Familiar está procurando um psicólogo voluntário para oferecer atendimento psicológico a famílias em situação de vulnerabilidade. É necessário ter formação na área e disponibilidade durante as manhãs.',
    imageUrl: 'https://exemplo.com/imagens/psicologo.jpg'
  },
  {
    ongName: 'Instituto de Educação Inclusiva',
    title: 'Instrutor de Libras',
    subtitle: 'Educação',
    description:
      'O Instituto de Educação Inclusiva está em busca de um instrutor de Libras voluntário para ministrar aulas de Língua Brasileira de Sinais para alunos com deficiência auditiva. É necessário ter conhecimento em Libras e disponibilidade durante as tardes.',
    imageUrl: 'https://exemplo.com/imagens/instrutor_libras.jpg'
  }
]

export const getVacancies = async (): Promise<IVacancyCard[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(vagasVoluntarias), 200)
  })
}

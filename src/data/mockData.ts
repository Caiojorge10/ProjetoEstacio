import { Voluntario, Organizacao, Projeto, Atividade } from '../types';

export const voluntariosMock: Voluntario[] = [
  {
    id: '1',
    nome: 'Maria Silva',
    email: 'maria.silva@email.com',
    telefone: '(11) 99999-9999',
    habilidades: ['Ensino', 'Organização', 'Comunicação'],
    disponibilidade: ['Segunda', 'Quarta', 'Sexta'],
    bio: 'Professora aposentada com 30 anos de experiência em educação infantil.',
    foto: 'https://via.placeholder.com/150',
    projetosParticipando: ['1', '3'],
    horasVoluntariado: 45
  },
  {
    id: '2',
    nome: 'João Santos',
    email: 'joao.santos@email.com',
    telefone: '(11) 88888-8888',
    habilidades: ['Tecnologia', 'Manutenção', 'Logística'],
    disponibilidade: ['Terça', 'Quinta', 'Sábado'],
    bio: 'Engenheiro de sistemas apaixonado por ajudar comunidades através da tecnologia.',
    foto: 'https://via.placeholder.com/150',
    projetosParticipando: ['2'],
    horasVoluntariado: 32
  },
  {
    id: '3',
    nome: 'Ana Costa',
    email: 'ana.costa@email.com',
    telefone: '(11) 77777-7777',
    habilidades: ['Saúde', 'Primeiros Socorros', 'Psicologia'],
    disponibilidade: ['Segunda', 'Terça', 'Quinta'],
    bio: 'Enfermeira com especialização em saúde pública e atenção primária.',
    foto: 'https://via.placeholder.com/150',
    projetosParticipando: ['1', '2'],
    horasVoluntariado: 67
  }
];

export const organizacoesMock: Organizacao[] = [
  {
    id: '1',
    nome: 'Centro Comunitário Esperança',
    descricao: 'Organização sem fins lucrativos dedicada ao desenvolvimento social da comunidade local.',
    endereco: 'Rua das Flores, 123 - Centro',
    telefone: '(11) 3333-3333',
    email: 'contato@esperanca.org.br',
    website: 'www.esperanca.org.br',
    areaAtuacao: ['Educação', 'Saúde', 'Cultura'],
    projetos: ['1', '3'],
    logo: 'https://via.placeholder.com/100',
    certificacoes: ['OSCIP', 'Utilidade Pública Municipal']
  },
  {
    id: '2',
    nome: 'Instituto Verde Futuro',
    descricao: 'Focada em projetos ambientais e sustentabilidade urbana.',
    endereco: 'Av. da Natureza, 456 - Jardim',
    telefone: '(11) 4444-4444',
    email: 'contato@verdefuturo.org.br',
    website: 'www.verdefuturo.org.br',
    areaAtuacao: ['Meio Ambiente', 'Sustentabilidade', 'Educação Ambiental'],
    projetos: ['2'],
    logo: 'https://via.placeholder.com/100',
    certificacoes: ['ONG Ambiental', 'Selo Verde']
  }
];

export const projetosMock: Projeto[] = [
  {
    id: '1',
    titulo: 'Educação para Todos',
    descricao: 'Projeto de alfabetização e reforço escolar para crianças e adultos da comunidade.',
    organizacaoId: '1',
    organizacaoNome: 'Centro Comunitário Esperança',
    areaAtuacao: ['Educação', 'Inclusão Social'],
    habilidadesNecessarias: ['Ensino', 'Paciência', 'Comunicação'],
    voluntariosNecessarios: 8,
    voluntariosParticipando: ['1', '3'],
    dataInicio: '2024-01-15',
    dataFim: '2024-12-15',
    status: 'ativo',
    impactoComunitario: 'Alfabetização de 50 pessoas e melhoria no desempenho escolar de 100 crianças.',
    horasEstimadas: 240,
    localizacao: 'Centro Comunitário Esperança',
    imagem: 'https://via.placeholder.com/300x200'
  },
  {
    id: '2',
    titulo: 'Hortas Comunitárias Sustentáveis',
    descricao: 'Criação de hortas urbanas para produção de alimentos orgânicos e educação ambiental.',
    organizacaoId: '2',
    organizacaoNome: 'Instituto Verde Futuro',
    areaAtuacao: ['Meio Ambiente', 'Agricultura Urbana', 'Educação'],
    habilidadesNecessarias: ['Agricultura', 'Organização', 'Trabalho em Equipe'],
    voluntariosNecessarios: 12,
    voluntariosParticipando: ['2', '3'],
    dataInicio: '2024-02-01',
    dataFim: '2024-11-30',
    status: 'ativo',
    impactoComunitario: 'Criação de 5 hortas comunitárias beneficiando 200 famílias.',
    horasEstimadas: 360,
    localizacao: 'Vários bairros da cidade',
    imagem: 'https://via.placeholder.com/300x200'
  },
  {
    id: '3',
    titulo: 'Saúde na Comunidade',
    descricao: 'Ações de prevenção e promoção da saúde para famílias em situação de vulnerabilidade.',
    organizacaoId: '1',
    organizacaoNome: 'Centro Comunitário Esperança',
    areaAtuacao: ['Saúde', 'Prevenção', 'Bem-estar'],
    habilidadesNecessarias: ['Saúde', 'Primeiros Socorros', 'Educação em Saúde'],
    voluntariosNecessarios: 6,
    voluntariosParticipando: ['1'],
    dataInicio: '2024-03-01',
    dataFim: '2024-12-31',
    status: 'ativo',
    impactoComunitario: 'Atendimento de 300 pessoas com ações preventivas e educativas.',
    horasEstimadas: 180,
    localizacao: 'Centro Comunitário Esperança',
    imagem: 'https://via.placeholder.com/300x200'
  }
];

export const atividadesMock: Atividade[] = [
  {
    id: '1',
    projetoId: '1',
    titulo: 'Aula de Alfabetização',
    descricao: 'Aula de alfabetização para adultos da comunidade.',
    data: '2024-01-20',
    duracao: 2,
    voluntariosParticipando: ['1', '3'],
    status: 'concluida',
    evidencia: ['fotos', 'relatório', 'avaliações']
  },
  {
    id: '2',
    projetoId: '2',
    titulo: 'Preparação do Solo',
    descricao: 'Preparação do solo para plantio das hortas comunitárias.',
    data: '2024-02-15',
    duracao: 4,
    voluntariosParticipando: ['2'],
    status: 'concluida',
    evidencia: ['fotos', 'relatório técnico']
  }
];

export interface Voluntario {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  habilidades: string[];
  disponibilidade: string[];
  bio: string;
  foto: string;
  projetosParticipando: string[];
  horasVoluntariado: number;
}

export interface Organizacao {
  id: string;
  nome: string;
  descricao: string;
  endereco: string;
  telefone: string;
  email: string;
  website: string;
  areaAtuacao: string[];
  projetos: string[];
  logo: string;
  certificacoes: string[];
}

export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  organizacaoId: string;
  organizacaoNome: string;
  areaAtuacao: string[];
  habilidadesNecessarias: string[];
  voluntariosNecessarios: number;
  voluntariosParticipando: string[];
  dataInicio: string;
  dataFim: string;
  status: 'ativo' | 'concluido' | 'cancelado';
  impactoComunitario: string;
  horasEstimadas: number;
  localizacao: string;
  imagem: string;
}

export interface Atividade {
  id: string;
  projetoId: string;
  titulo: string;
  descricao: string;
  data: string;
  duracao: number;
  voluntariosParticipando: string[];
  status: 'agendada' | 'em_andamento' | 'concluida';
  evidencia: string[];
}

export interface Avaliacao {
  id: string;
  projetoId: string;
  voluntarioId: string;
  nota: number;
  comentario: string;
  data: string;
  categoria: 'satisfacao' | 'impacto' | 'organizacao';
}

# Extensão Comunitária - Aplicativo React Native

## 📱 Sobre o Projeto

Este é um aplicativo móvel desenvolvido em React Native para conectar voluntários e organizações comunitárias, facilitando a participação em projetos de extensão universitária e ações sociais.

## 🎯 Objetivos do Projeto

### 1. DIAGNÓSTICO E TEORIZAÇÃO
- **Identificação das partes envolvidas e parceiros**: Voluntários, organizações comunitárias, universidades
- **Situação-problema identificada**: Dificuldade de conexão entre voluntários e organizações que precisam de apoio
- **Demanda sociocomunitária e motivação acadêmica**: Necessidade de plataforma para facilitar o voluntariado e extensão universitária
- **Objetivos**: Criar sistema de conexão, gerenciar projetos, acompanhar impacto social

### 2. PLANEJAMENTO PARA DESENVOLVIMENTO DO PROJETO
- **Plano de trabalho com cronograma**: Desenvolvimento em fases com entregas incrementais
- **Metodologia**: Desenvolvimento ágil com React Native e TypeScript
- **Avaliação dos resultados**: Métricas de uso, feedback dos usuários, impacto social

### 3. ENCERRAMENTO DO PROJETO
- **Evidências das atividades realizadas**: Aplicativo funcional, documentação, testes de usuário

## 🚀 Funcionalidades

### Telas Principais
- **Início**: Dashboard com estatísticas e projetos em destaque
- **Voluntários**: Lista de voluntários com perfis detalhados
- **Organizações**: Cadastro de organizações e seus projetos
- **Projetos**: Gerenciamento de projetos de extensão
- **Perfil**: Perfil do usuário e configurações

### Recursos
- ✅ Sistema de busca e filtros
- ✅ Perfis detalhados de voluntários e organizações
- ✅ Gerenciamento de projetos com status
- ✅ Sistema de habilidades e disponibilidade
- ✅ Estatísticas e métricas de impacto
- ✅ Interface responsiva e intuitiva

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **TypeScript** - Linguagem com tipagem estática
- **Expo** - Plataforma para desenvolvimento React Native
- **React Navigation** - Navegação entre telas
- **React Native Paper** - Componentes de UI Material Design
- **Expo Vector Icons** - Ícones para a interface

## 📱 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI
- Emulador Android/iOS ou dispositivo físico

### Instalação
```bash
# Clonar o repositório
git clone [URL_DO_REPOSITORIO]

# Entrar no diretório
cd ExtensaoComunitaria

# Instalar dependências
npm install

# Executar o projeto
npm start
```

### Comandos Disponíveis
```bash
npm start          # Inicia o servidor de desenvolvimento
npm run android    # Executa no emulador Android
npm run ios        # Executa no simulador iOS
npm run web        # Executa na web (para desenvolvimento)
```

## 📁 Estrutura do Projeto

```
ExtensaoComunitaria/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── screens/        # Telas da aplicação
│   ├── types/          # Definições TypeScript
│   ├── data/           # Dados mockados
│   └── utils/          # Utilitários
├── assets/             # Imagens e recursos
├── App.tsx             # Componente principal
├── package.json        # Dependências do projeto
└── README.md           # Documentação
```

## 🎨 Interface do Usuário

### Design System
- **Cores**: Paleta baseada em azul (#2196F3) com acentos
- **Tipografia**: Hierarquia clara com títulos e textos bem definidos
- **Componentes**: Cards, botões e inputs seguindo Material Design
- **Ícones**: Ionicons para consistência visual

### Responsividade
- Layout adaptável para diferentes tamanhos de tela
- Navegação intuitiva com tabs inferiores
- Scroll suave e feedback visual

## 📊 Dados e Estado

### Estruturas de Dados
- **Voluntários**: Perfil, habilidades, disponibilidade, projetos
- **Organizações**: Informações, áreas de atuação, certificações
- **Projetos**: Detalhes, status, voluntários necessários, impacto
- **Atividades**: Cronograma, evidências, avaliações

### Estado da Aplicação
- Gerenciamento local com React hooks
- Dados mockados para demonstração
- Preparado para integração com backend

## 🔧 Configuração e Personalização

### Variáveis de Ambiente
- Configurações de API (quando implementado)
- Chaves de serviços externos
- Configurações de ambiente

### Temas e Estilos
- Sistema de temas configurável
- Estilos centralizados em StyleSheet
- Cores e tipografia personalizáveis

## 📱 Testes e Qualidade

### Testes Implementados
- ✅ Validação de tipos TypeScript
- ✅ Estrutura de componentes testável
- ✅ Dados mockados para demonstração

### Próximos Passos para Qualidade
- Testes unitários com Jest
- Testes de integração
- Testes de usuário e feedback

## 🚀 Roadmap e Melhorias

### Fase 1 (Atual)
- ✅ Estrutura básica da aplicação
- ✅ Telas principais implementadas
- ✅ Navegação e UI básica

### Fase 2 (Próxima)
- Sistema de autenticação
- Backend e banco de dados
- Notificações push
- Geolocalização

### Fase 3 (Futura)
- Sistema de avaliações
- Relatórios e analytics
- Integração com redes sociais
- Versão web

## 👥 Contribuição

### Como Contribuir
1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

### Padrões de Código
- TypeScript para tipagem
- ESLint para qualidade de código
- Prettier para formatação
- Commits semânticos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

**Caio Jorge** - Estudante de Sistemas de Informação
- **Instituição**: Estácio
- **Disciplina**: Projeto de Extensão
- **Ano**: 2024

## 📞 Contato

- **Email**: [seu-email@exemplo.com]
- **LinkedIn**: [seu-linkedin]
- **GitHub**: [seu-github]

## 🙏 Agradecimentos

- Professores da Estácio pelo apoio
- Comunidade React Native
- Organizações parceiras
- Voluntários que testaram o aplicativo

---

**Desenvolvido com ❤️ para conectar pessoas e transformar comunidades**

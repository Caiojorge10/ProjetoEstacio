import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import { Card, Title, Paragraph, Button, Searchbar, Chip, Avatar, Badge } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { projetosMock, organizacoesMock, voluntariosMock } from '../data/mockData';
import { Projeto } from '../types';

export default function ProjetosScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjetos, setFilteredProjetos] = useState<Projeto[]>(projetosMock);
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    applyFilters(query, selectedFilter);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    applyFilters(searchQuery, filter);
  };

  const applyFilters = (query: string, filter: string) => {
    let filtered = projetosMock;

    // Aplicar filtro de status
    if (filter !== 'todos') {
      filtered = filtered.filter(projeto => projeto.status === filter);
    }

    // Aplicar busca por texto
    if (query.trim() !== '') {
      filtered = filtered.filter(projeto =>
        projeto.titulo.toLowerCase().includes(query.toLowerCase()) ||
        projeto.descricao.toLowerCase().includes(query.toLowerCase()) ||
        projeto.areaAtuacao.some(area =>
          area.toLowerCase().includes(query.toLowerCase())
        )
      );
    }

    setFilteredProjetos(filtered);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo':
        return '#4caf50';
      case 'concluido':
        return '#2196f3';
      case 'cancelado':
        return '#f44336';
      default:
        return '#666';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ativo':
        return 'Ativo';
      case 'concluido':
        return 'Concluído';
      case 'cancelado':
        return 'Cancelado';
      default:
        return status;
    }
  };

  const renderProjeto = ({ item }: { item: Projeto }) => {
    const organizacao = organizacoesMock.find(org => org.id === item.organizacaoId);
    
    return (
      <Card style={styles.projetoCard}>
        <Card.Cover source={{ uri: item.imagem }} style={styles.projetoImagem} />
        
        <Card.Content>
          <View style={styles.projetoHeader}>
            <Title style={styles.projetoTitulo}>{item.titulo}</Title>
            <Badge style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
              {getStatusText(item.status)}
            </Badge>
          </View>

          <Paragraph style={styles.projetoDescricao} numberOfLines={3}>
            {item.descricao}
          </Paragraph>

          <View style={styles.organizacaoInfo}>
            <Avatar.Image size={40} source={{ uri: organizacao?.logo || 'https://via.placeholder.com/40' }} />
            <View style={styles.organizacaoDetails}>
              <Text style={styles.organizacaoNome}>{organizacao?.nome}</Text>
              <Text style={styles.organizacaoLocal}>{item.localizacao}</Text>
            </View>
          </View>

          <View style={styles.areaAtuacaoContainer}>
            <Text style={styles.areaAtuacaoTitle}>Áreas de Atuação:</Text>
            <View style={styles.areaAtuacaoList}>
              {item.areaAtuacao.map((area, index) => (
                <Chip key={index} style={styles.areaAtuacaoChip} textStyle={styles.areaAtuacaoText}>
                  {area}
                </Chip>
              ))}
            </View>
          </View>

          <View style={styles.habilidadesContainer}>
            <Text style={styles.habilidadesTitle}>Habilidades Necessárias:</Text>
            <View style={styles.habilidadesList}>
              {item.habilidadesNecessarias.map((habilidade, index) => (
                <Chip key={index} style={styles.habilidadeChip} textStyle={styles.habilidadeText}>
                  {habilidade}
                </Chip>
              ))}
            </View>
          </View>

          <View style={styles.projetoMeta}>
            <View style={styles.metaItem}>
              <Ionicons name="time" size={16} color="#2196F3" />
              <Text style={styles.metaText}>{item.horasEstimadas}h estimadas</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="people" size={16} color="#2196F3" />
              <Text style={styles.metaText}>
                {item.voluntariosParticipando.length}/{item.voluntariosNecessarios} voluntários
              </Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="calendar" size={16} color="#2196F3" />
              <Text style={styles.metaText}>
                {new Date(item.dataInicio).toLocaleDateString('pt-BR')} - {new Date(item.dataFim).toLocaleDateString('pt-BR')}
              </Text>
            </View>
          </View>

          <View style={styles.impactoContainer}>
            <Text style={styles.impactoTitle}>Impacto Comunitário:</Text>
            <Text style={styles.impactoText}>{item.impactoComunitario}</Text>
          </View>

          <View style={styles.actionsContainer}>
            <Button mode="outlined" style={styles.actionButton}>
              <Ionicons name="information-circle" size={16} />
              Mais Detalhes
            </Button>
            <Button mode="contained" style={styles.actionButton}>
              <Ionicons name="person-add" size={16} />
              Participar
            </Button>
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar projetos por título, descrição ou área..."
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.searchBar}
      />

      {/* Filtros */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        <Chip
          selected={selectedFilter === 'todos'}
          onPress={() => handleFilterChange('todos')}
          style={styles.filterChip}
        >
          Todos
        </Chip>
        <Chip
          selected={selectedFilter === 'ativo'}
          onPress={() => handleFilterChange('ativo')}
          style={styles.filterChip}
        >
          Ativos
        </Chip>
        <Chip
          selected={selectedFilter === 'concluido'}
          onPress={() => handleFilterChange('concluido')}
          style={styles.filterChip}
        >
          Concluídos
        </Chip>
        <Chip
          selected={selectedFilter === 'cancelado'}
          onPress={() => handleFilterChange('cancelado')}
          style={styles.filterChip}
        >
          Cancelados
        </Chip>
      </ScrollView>

      <FlatList
        data={filteredProjetos}
        renderItem={renderProjeto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Estatísticas dos Projetos */}
      <Card style={styles.statsCard}>
        <Card.Content>
          <Title style={styles.statsTitle}>Estatísticas dos Projetos</Title>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Ionicons name="folder" size={24} color="#2196F3" />
              <Title style={styles.statNumber}>{projetosMock.length}</Title>
              <Paragraph>Total de Projetos</Paragraph>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="checkmark-circle" size={24} color="#2196F3" />
              <Title style={styles.statNumber}>
                {projetosMock.filter(p => p.status === 'ativo').length}
              </Title>
              <Paragraph>Projetos Ativos</Paragraph>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="time" size={24} color="#2196F3" />
              <Title style={styles.statNumber}>
                {projetosMock.reduce((total, p) => total + p.horasEstimadas, 0)}
              </Title>
              <Paragraph>Horas Estimadas</Paragraph>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    margin: 16,
    elevation: 2,
  },
  filtersContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  filterChip: {
    marginRight: 8,
  },
  listContainer: {
    padding: 16,
  },
  projetoCard: {
    marginBottom: 16,
    elevation: 3,
  },
  projetoImagem: {
    height: 200,
  },
  projetoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  projetoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  statusBadge: {
    alignSelf: 'flex-start',
  },
  projetoDescricao: {
    marginBottom: 16,
    lineHeight: 20,
  },
  organizacaoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  organizacaoDetails: {
    marginLeft: 12,
  },
  organizacaoNome: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  organizacaoLocal: {
    color: '#666',
    fontSize: 12,
  },
  areaAtuacaoContainer: {
    marginBottom: 16,
  },
  areaAtuacaoTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  areaAtuacaoList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  areaAtuacaoChip: {
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#e8f5e8',
  },
  areaAtuacaoText: {
    fontSize: 12,
  },
  habilidadesContainer: {
    marginBottom: 16,
  },
  habilidadesTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  habilidadesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  habilidadeChip: {
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#e3f2fd',
  },
  habilidadeText: {
    fontSize: 12,
  },
  projetoMeta: {
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metaText: {
    marginLeft: 8,
    fontSize: 14,
  },
  impactoContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#fff3e0',
    borderRadius: 8,
  },
  impactoTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  impactoText: {
    fontSize: 14,
    lineHeight: 18,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  statsCard: {
    margin: 16,
    elevation: 2,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    textAlign: 'center',
  },
});

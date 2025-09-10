import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import { Card, Title, Paragraph, Button, Searchbar, Chip, Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { organizacoesMock, projetosMock } from '../data/mockData';
import { Organizacao, Projeto } from '../types';

export default function OrganizacoesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOrganizacoes, setFilteredOrganizacoes] = useState<Organizacao[]>(organizacoesMock);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredOrganizacoes(organizacoesMock);
    } else {
      const filtered = organizacoesMock.filter(org =>
        org.nome.toLowerCase().includes(query.toLowerCase()) ||
        org.areaAtuacao.some(area =>
          area.toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredOrganizacoes(filtered);
    }
  };

  const getProjetosDaOrganizacao = (orgId: string): Projeto[] => {
    return projetosMock.filter(projeto => projeto.organizacaoId === orgId);
  };

  const renderOrganizacao = ({ item }: { item: Organizacao }) => {
    const projetos = getProjetosDaOrganizacao(item.id);
    
    return (
      <Card style={styles.organizacaoCard}>
        <Card.Content>
          <View style={styles.organizacaoHeader}>
            <Avatar.Image size={80} source={{ uri: item.logo }} />
            <View style={styles.organizacaoInfo}>
              <Title style={styles.organizacaoNome}>{item.nome}</Title>
              <Paragraph style={styles.organizacaoDescricao} numberOfLines={2}>
                {item.descricao}
              </Paragraph>
              <View style={styles.organizacaoStats}>
                <View style={styles.statItem}>
                  <Ionicons name="folder" size={16} color="#2196F3" />
                  <Paragraph style={styles.statText}>{projetos.length} projetos</Paragraph>
                </View>
                <View style={styles.statItem}>
                  <Ionicons name="location" size={16} color="#2196F3" />
                  <Paragraph style={styles.statText}>{item.endereco.split(',')[0]}</Paragraph>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.areaAtuacaoContainer}>
            <Paragraph style={styles.areaAtuacaoTitle}>Áreas de Atuação:</Paragraph>
            <View style={styles.areaAtuacaoList}>
              {item.areaAtuacao.map((area, index) => (
                <Chip key={index} style={styles.areaAtuacaoChip} textStyle={styles.areaAtuacaoText}>
                  {area}
                </Chip>
              ))}
            </View>
          </View>

          <View style={styles.certificacoesContainer}>
            <Paragraph style={styles.certificacoesTitle}>Certificações:</Paragraph>
            <View style={styles.certificacoesList}>
              {item.certificacoes.map((cert, index) => (
                <Chip key={index} style={styles.certificacaoChip} textStyle={styles.certificacaoText}>
                  {cert}
                </Chip>
              ))}
            </View>
          </View>

          <View style={styles.contatoContainer}>
            <View style={styles.contatoItem}>
              <Ionicons name="call" size={16} color="#2196F3" />
              <Paragraph style={styles.contatoText}>{item.telefone}</Paragraph>
            </View>
            <View style={styles.contatoItem}>
              <Ionicons name="mail" size={16} color="#2196F3" />
              <Paragraph style={styles.contatoText}>{item.email}</Paragraph>
            </View>
            <View style={styles.contatoItem}>
              <Ionicons name="globe" size={16} color="#2196F3" />
              <Paragraph style={styles.contatoText}>{item.website}</Paragraph>
            </View>
          </View>

          {projetos.length > 0 && (
            <View style={styles.projetosContainer}>
              <Paragraph style={styles.projetosTitle}>Projetos Ativos:</Paragraph>
              {projetos.slice(0, 2).map((projeto) => (
                <Card key={projeto.id} style={styles.projetoCard}>
                  <Card.Content>
                    <Title style={styles.projetoTitulo}>{projeto.titulo}</Title>
                    <Paragraph numberOfLines={2}>{projeto.descricao}</Paragraph>
                    <View style={styles.projetoMeta}>
                      <Text style={styles.projetoMetaText}>
                        <Ionicons name="time" size={14} /> {projeto.horasEstimadas}h
                      </Text>
                      <Text style={styles.projetoMetaText}>
                        <Ionicons name="people" size={14} /> {projeto.voluntariosNecessarios} voluntários
                      </Text>
                    </View>
                    <Button mode="outlined" style={styles.projetoButton}>
                      Ver Projeto
                    </Button>
                  </Card.Content>
                </Card>
              ))}
            </View>
          )}

          <View style={styles.actionsContainer}>
            <Button mode="outlined" style={styles.actionButton}>
              <Ionicons name="call" size={16} />
              Contatar
            </Button>
            <Button mode="contained" style={styles.actionButton}>
              <Ionicons name="eye" size={16} />
              Ver Detalhes
            </Button>
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar organizações por nome ou área de atuação..."
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.searchBar}
      />

      <FlatList
        data={filteredOrganizacoes}
        renderItem={renderOrganizacao}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Estatísticas das Organizações */}
      <Card style={styles.statsCard}>
        <Card.Content>
          <Title style={styles.statsTitle}>Estatísticas das Organizações</Title>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Ionicons name="business" size={24} color="#2196F3" />
              <Title style={styles.statNumber}>{organizacoesMock.length}</Title>
              <Paragraph>Total de Organizações</Paragraph>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="folder" size={24} color="#2196F3" />
              <Title style={styles.statNumber}>
                {organizacoesMock.reduce((total, org) => total + org.projetos.length, 0)}
              </Title>
              <Paragraph>Projetos Ativos</Paragraph>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="star" size={24} color="#2196F3" />
              <Title style={styles.statNumber}>
                {organizacoesMock.reduce((total, org) => total + org.certificacoes.length, 0)}
              </Title>
              <Paragraph>Certificações</Paragraph>
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
  listContainer: {
    padding: 16,
  },
  organizacaoCard: {
    marginBottom: 16,
    elevation: 3,
  },
  organizacaoHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  organizacaoInfo: {
    flex: 1,
    marginLeft: 16,
  },
  organizacaoNome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  organizacaoDescricao: {
    color: '#666',
    marginBottom: 8,
    lineHeight: 18,
  },
  organizacaoStats: {
    flexDirection: 'row',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  statText: {
    marginLeft: 4,
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
  certificacoesContainer: {
    marginBottom: 16,
  },
  certificacoesTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  certificacoesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  certificacaoChip: {
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#fff3e0',
  },
  certificacaoText: {
    fontSize: 12,
  },
  contatoContainer: {
    marginBottom: 16,
  },
  contatoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contatoText: {
    marginLeft: 8,
    fontSize: 14,
  },
  projetosContainer: {
    marginBottom: 16,
  },
  projetosTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  projetoCard: {
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  projetoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  projetoMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  projetoMetaText: {
    fontSize: 12,
    color: '#666',
  },
  projetoButton: {
    alignSelf: 'flex-start',
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
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    textAlign: 'center',
  },
});

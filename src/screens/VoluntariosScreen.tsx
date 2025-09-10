import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button, Searchbar, Chip, Avatar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { voluntariosMock } from '../data/mockData';
import { Voluntario } from '../types';

export default function VoluntariosScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVoluntarios, setFilteredVoluntarios] = useState<Voluntario[]>(voluntariosMock);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredVoluntarios(voluntariosMock);
    } else {
      const filtered = voluntariosMock.filter(voluntario =>
        voluntario.nome.toLowerCase().includes(query.toLowerCase()) ||
        voluntario.habilidades.some(habilidade =>
          habilidade.toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredVoluntarios(filtered);
    }
  };

  const renderVoluntario = ({ item }: { item: Voluntario }) => (
    <Card style={styles.voluntarioCard}>
      <Card.Content>
        <View style={styles.voluntarioHeader}>
          <Avatar.Image size={60} source={{ uri: item.foto }} />
          <View style={styles.voluntarioInfo}>
            <Title style={styles.voluntarioNome}>{item.nome}</Title>
            <Paragraph style={styles.voluntarioEmail}>{item.email}</Paragraph>
            <View style={styles.voluntarioStats}>
              <View style={styles.statItem}>
                <Ionicons name="time" size={16} color="#2196F3" />
                <Paragraph style={styles.statText}>{item.horasVoluntariado}h</Paragraph>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="folder" size={16} color="#2196F3" />
                <Paragraph style={styles.statText}>{item.projetosParticipando.length} projetos</Paragraph>
              </View>
            </View>
          </View>
        </View>

        <Paragraph style={styles.voluntarioBio}>{item.bio}</Paragraph>

        <View style={styles.habilidadesContainer}>
          <Paragraph style={styles.habilidadesTitle}>Habilidades:</Paragraph>
          <View style={styles.habilidadesList}>
            {item.habilidades.map((habilidade, index) => (
              <Chip key={index} style={styles.habilidadeChip} textStyle={styles.habilidadeText}>
                {habilidade}
              </Chip>
            ))}
          </View>
        </View>

        <View style={styles.disponibilidadeContainer}>
          <Paragraph style={styles.disponibilidadeTitle}>Disponibilidade:</Paragraph>
          <View style={styles.disponibilidadeList}>
            {item.disponibilidade.map((dia, index) => (
              <Chip key={index} style={styles.disponibilidadeChip} textStyle={styles.disponibilidadeText}>
                {dia}
              </Chip>
            ))}
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <Button mode="outlined" style={styles.actionButton}>
            <Ionicons name="call" size={16} />
            Contatar
          </Button>
          <Button mode="contained" style={styles.actionButton}>
            <Ionicons name="eye" size={16} />
            Ver Perfil
          </Button>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar voluntários por nome ou habilidades..."
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.searchBar}
      />

      <FlatList
        data={filteredVoluntarios}
        renderItem={renderVoluntario}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Estatísticas dos Voluntários */}
      <Card style={styles.statsCard}>
        <Card.Content>
          <Title style={styles.statsTitle}>Estatísticas dos Voluntários</Title>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Ionicons name="people" size={24} color="#2196F3" />
              <Title style={styles.statNumber}>{voluntariosMock.length}</Title>
              <Paragraph>Total de Voluntários</Paragraph>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="time" size={24} color="#2196F3" />
              <Title style={styles.statNumber}>
                {voluntariosMock.reduce((total, v) => total + v.horasVoluntariado, 0)}
              </Title>
              <Paragraph>Horas Totais</Paragraph>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="folder" size={24} color="#2196F3" />
              <Title style={styles.statNumber}>
                {voluntariosMock.reduce((total, v) => total + v.projetosParticipando.length, 0)}
              </Title>
              <Paragraph>Projetos Ativos</Paragraph>
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
  voluntarioCard: {
    marginBottom: 16,
    elevation: 3,
  },
  voluntarioHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  voluntarioInfo: {
    flex: 1,
    marginLeft: 16,
  },
  voluntarioNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  voluntarioEmail: {
    color: '#666',
    marginBottom: 8,
  },
  voluntarioStats: {
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
  voluntarioBio: {
    marginBottom: 16,
    lineHeight: 20,
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
  disponibilidadeContainer: {
    marginBottom: 16,
  },
  disponibilidadeTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  disponibilidadeList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  disponibilidadeChip: {
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#f3e5f5',
  },
  disponibilidadeText: {
    fontSize: 12,
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

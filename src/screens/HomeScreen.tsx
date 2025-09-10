import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Button, Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { projetosMock, voluntariosMock, organizacoesMock } from '../data/mockData';

export default function HomeScreen() {
  const totalProjetos = projetosMock.length;
  const totalVoluntarios = voluntariosMock.length;
  const totalOrganizacoes = organizacoesMock.length;
  const projetosAtivos = projetosMock.filter(p => p.status === 'ativo').length;

  return (
    <ScrollView style={styles.container}>
      {/* Header com título do projeto */}
      <Card style={[styles.headerCard, { backgroundColor: '#2196F3' }]}>
        <Card.Content>
          <Title style={styles.headerTitle}>Extensão Comunitária</Title>
          <Paragraph style={styles.headerSubtitle}>
            Conectando voluntários e organizações para transformar comunidades
          </Paragraph>
        </Card.Content>
      </Card>

      {/* Estatísticas */}
      <View style={styles.statsContainer}>
        <Card style={styles.statCard}>
          <Card.Content style={styles.statContent}>
            <Ionicons name="folder" size={32} color="#2196F3" />
            <View style={styles.statText}>
              <Title style={styles.statNumber}>{totalProjetos}</Title>
              <Paragraph>Projetos</Paragraph>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.statCard}>
          <Card.Content style={styles.statContent}>
            <Ionicons name="people" size={32} color="#2196F3" />
            <View style={styles.statText}>
              <Title style={styles.statNumber}>{totalVoluntarios}</Title>
              <Paragraph>Voluntários</Paragraph>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.statCard}>
          <Card.Content style={styles.statContent}>
            <Ionicons name="business" size={32} color="#2196F3" />
            <View style={styles.statText}>
              <Title style={styles.statNumber}>{totalOrganizacoes}</Title>
              <Paragraph>Organizações</Paragraph>
            </View>
          </Card.Content>
        </Card>
      </View>

      {/* Projetos em Destaque */}
      <Card style={styles.sectionCard}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Projetos em Destaque</Title>
          {projetosMock.slice(0, 2).map((projeto) => (
            <Card key={projeto.id} style={styles.projectCard}>
              <Card.Cover source={{ uri: projeto.imagem }} />
              <Card.Content>
                <Title>{projeto.titulo}</Title>
                <Paragraph numberOfLines={2}>{projeto.descricao}</Paragraph>
                <View style={styles.projectMeta}>
                  <Text style={styles.projectMetaText}>
                    <Ionicons name="location" size={16} /> {projeto.localizacao}
                  </Text>
                  <Text style={styles.projectMetaText}>
                    <Ionicons name="time" size={16} /> {projeto.horasEstimadas}h
                  </Text>
                </View>
                <Button mode="contained" style={styles.projectButton}>
                  Ver Detalhes
                </Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Content>
      </Card>

      {/* Impacto Comunitário */}
      <Card style={styles.sectionCard}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Impacto Comunitário</Title>
          <View style={styles.impactContainer}>
            <View style={styles.impactItem}>
              <Ionicons name="school" size={24} color="#2196F3" />
              <Text style={styles.impactText}>Educação para 150 pessoas</Text>
            </View>
            <View style={styles.impactItem}>
              <Ionicons name="leaf" size={24} color="#2196F3" />
              <Text style={styles.impactText}>5 hortas comunitárias</Text>
            </View>
            <View style={styles.impactItem}>
              <Ionicons name="medical" size={24} color="#2196F3" />
              <Text style={styles.impactText}>300 atendimentos de saúde</Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* Chamada para Ação */}
      <Card style={[styles.ctaCard, { backgroundColor: '#FF9800' }]}>
        <Card.Content>
          <Title style={styles.ctaTitle}>Seja um Voluntário!</Title>
          <Paragraph style={styles.ctaText}>
            Junte-se a nós e ajude a transformar sua comunidade através do voluntariado.
          </Paragraph>
          <Button mode="contained" style={styles.ctaButton}>
            Cadastrar-se
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerCard: {
    margin: 16,
    elevation: 4,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
    elevation: 2,
  },
  statContent: {
    alignItems: 'center',
    padding: 16,
  },
  statText: {
    alignItems: 'center',
    marginTop: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  sectionCard: {
    margin: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  projectCard: {
    marginBottom: 16,
    elevation: 2,
  },
  projectMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  projectMetaText: {
    fontSize: 12,
    color: '#666',
  },
  projectButton: {
    marginTop: 8,
  },
  impactContainer: {
    marginTop: 8,
  },
  impactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  impactText: {
    marginLeft: 12,
    fontSize: 16,
  },
  ctaCard: {
    margin: 16,
    elevation: 4,
  },
  ctaTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ctaText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 8,
  },
  ctaButton: {
    alignSelf: 'center',
    marginTop: 8,
  },
});

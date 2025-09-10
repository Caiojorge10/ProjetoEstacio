import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert, Text } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar, List, Switch, Divider, TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { voluntariosMock, projetosMock } from '../data/mockData';

export default function PerfilScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // Simular usuário logado (em um app real viria do contexto de autenticação)
  const currentUser = voluntariosMock[0];
  const userProjetos = projetosMock.filter(projeto => 
    currentUser.projetosParticipando.includes(projeto.id)
  );

  const handleSaveProfile = () => {
    setIsEditing(false);
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
  };

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', style: 'destructive', onPress: () => console.log('Logout') }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header do Perfil */}
      <Card style={styles.profileHeader}>
        <Card.Content style={styles.profileHeaderContent}>
          <Avatar.Image size={100} source={{ uri: currentUser.foto }} />
          <View style={styles.profileInfo}>
            <Title style={styles.profileName}>{currentUser.nome}</Title>
            <Paragraph style={styles.profileEmail}>{currentUser.email}</Paragraph>
            <Paragraph style={styles.profilePhone}>{currentUser.telefone}</Paragraph>
          </View>
          <Button
            mode="outlined"
            onPress={() => setIsEditing(!isEditing)}
            style={styles.editButton}
          >
            {isEditing ? 'Cancelar' : 'Editar'}
          </Button>
        </Card.Content>
      </Card>

      {/* Estatísticas Pessoais */}
      <Card style={styles.statsCard}>
        <Card.Content>
          <Title style={styles.statsTitle}>Minhas Estatísticas</Title>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Ionicons name="time" size={32} color="#2196F3" />
              <Title style={styles.statNumber}>{currentUser.horasVoluntariado}</Title>
              <Paragraph>Horas Voluntariado</Paragraph>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="folder" size={32} color="#2196F3" />
              <Title style={styles.statNumber}>{currentUser.projetosParticipando.length}</Title>
              <Paragraph>Projetos Ativos</Paragraph>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="star" size={32} color="#2196F3" />
              <Title style={styles.statNumber}>4.8</Title>
              <Paragraph>Avaliação</Paragraph>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* Informações Pessoais */}
      <Card style={styles.infoCard}>
        <Card.Content>
          <Title style={styles.cardTitle}>Informações Pessoais</Title>
          
          {isEditing ? (
            <View>
              <TextInput
                label="Nome"
                value={currentUser.nome}
                style={styles.input}
                mode="outlined"
              />
              <TextInput
                label="Email"
                value={currentUser.email}
                style={styles.input}
                mode="outlined"
                keyboardType="email-address"
              />
              <TextInput
                label="Telefone"
                value={currentUser.telefone}
                style={styles.input}
                mode="outlined"
                keyboardType="phone-pad"
              />
              <TextInput
                label="Biografia"
                value={currentUser.bio}
                style={styles.input}
                mode="outlined"
                multiline
                numberOfLines={3}
              />
              <Button mode="contained" onPress={handleSaveProfile} style={styles.saveButton}>
                Salvar Alterações
              </Button>
            </View>
          ) : (
            <View>
              <List.Item
                title="Nome"
                description={currentUser.nome}
                left={(props) => <List.Icon {...props} icon="account" />}
              />
              <Divider />
              <List.Item
                title="Email"
                description={currentUser.email}
                left={(props) => <List.Icon {...props} icon="email" />}
              />
              <Divider />
              <List.Item
                title="Telefone"
                description={currentUser.telefone}
                left={(props) => <List.Icon {...props} icon="phone" />}
              />
              <Divider />
              <List.Item
                title="Biografia"
                description={currentUser.bio}
                left={(props) => <List.Icon {...props} icon="information" />}
              />
            </View>
          )}
        </Card.Content>
      </Card>

      {/* Habilidades */}
      <Card style={styles.infoCard}>
        <Card.Content>
          <Title style={styles.cardTitle}>Minhas Habilidades</Title>
          <View style={styles.skillsContainer}>
            {currentUser.habilidades.map((habilidade, index) => (
              <Button
                key={index}
                mode="outlined"
                style={styles.skillButton}
                textColor="#2196F3"
              >
                {habilidade}
              </Button>
            ))}
          </View>
        </Card.Content>
      </Card>

      {/* Disponibilidade */}
      <Card style={styles.infoCard}>
        <Card.Content>
          <Title style={styles.cardTitle}>Minha Disponibilidade</Title>
          <View style={styles.availabilityContainer}>
            {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((dia) => (
              <Button
                key={dia}
                mode={currentUser.disponibilidade.includes(dia) ? "contained" : "outlined"}
                style={styles.availabilityButton}
                textColor={currentUser.disponibilidade.includes(dia) ? 'white' : '#2196F3'}
              >
                {dia}
              </Button>
            ))}
          </View>
        </Card.Content>
      </Card>

      {/* Projetos Participando */}
      <Card style={styles.infoCard}>
        <Card.Content>
          <Title style={styles.cardTitle}>Projetos que Participo</Title>
          {userProjetos.map((projeto) => (
            <Card key={projeto.id} style={styles.projectCard}>
              <Card.Content>
                <Title style={styles.projectTitle}>{projeto.titulo}</Title>
                <Paragraph numberOfLines={2}>{projeto.descricao}</Paragraph>
                <View style={styles.projectMeta}>
                  <Text style={styles.projectMetaText}>
                    <Ionicons name="time" size={14} /> {projeto.horasEstimadas}h
                  </Text>
                  <Text style={styles.projectMetaText}>
                    <Ionicons name="location" size={14} /> {projeto.localizacao}
                  </Text>
                </View>
                <Button mode="outlined" style={styles.projectButton}>
                  Ver Detalhes
                </Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Content>
      </Card>

      {/* Configurações */}
      <Card style={styles.infoCard}>
        <Card.Content>
          <Title style={styles.cardTitle}>Configurações</Title>
          
          <List.Item
            title="Notificações"
            description="Receber notificações sobre projetos e atividades"
            left={(props) => <List.Icon {...props} icon="bell" />}
            right={() => (
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Modo Escuro"
            description="Ativar tema escuro"
            left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
            right={() => (
              <Switch
                value={darkModeEnabled}
                onValueChange={setDarkModeEnabled}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Privacidade"
            description="Configurar privacidade do perfil"
            left={(props) => <List.Icon {...props} icon="shield-account" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => Alert.alert('Privacidade', 'Configurações de privacidade')}
          />
          <Divider />
          <List.Item
            title="Sobre o App"
            description="Versão 1.0.0"
            left={(props) => <List.Icon {...props} icon="information" />}
            onPress={() => Alert.alert('Sobre', 'Extensão Comunitária v1.0.0\nDesenvolvido para conectar voluntários e organizações')}
          />
        </Card.Content>
      </Card>

      {/* Botão de Logout */}
      <Button
        mode="outlined"
        onPress={handleLogout}
        style={styles.logoutButton}
        textColor="#f44336"
      >
        <Ionicons name="log-out-outline" size={16} />
        Sair da Conta
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    margin: 16,
    elevation: 4,
  },
  profileHeaderContent: {
    alignItems: 'center',
    padding: 20,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileEmail: {
    color: '#666',
    marginTop: 4,
  },
  profilePhone: {
    color: '#666',
    marginTop: 4,
  },
  editButton: {
    marginTop: 8,
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
  infoCard: {
    margin: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  saveButton: {
    marginTop: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillButton: {
    marginRight: 8,
    marginBottom: 8,
  },
  availabilityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  availabilityButton: {
    marginRight: 8,
    marginBottom: 8,
    minWidth: 80,
  },
  projectCard: {
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
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
    alignSelf: 'flex-start',
  },
  logoutButton: {
    margin: 16,
    borderColor: '#f44336',
  },
});

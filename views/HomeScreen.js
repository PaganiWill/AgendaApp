import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppointmentContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const HomeScreen = ({ nomePaciente, profissional, especialidade, dataHorario }) => {
    // Função para obter a data atual no formato desejado
    const getCurrentDate = () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('pt-BR');
        return formattedDate;
    };

    return (
        <View style={styles.screenContainer}>
            <View style={styles.appointmentContainer}>
                <AppointmentContainer>
                    <Text style={styles.title}>11:30</Text>
                    <Text style={styles.text}>Nome do Paciente: Carlos Alberto{nomePaciente}</Text>
                    <Text style={styles.text}>Profissional: Dr. Anderson{profissional}</Text>
                    <Text style={styles.text}>Especialidade: Ortodontista{especialidade}</Text>
                </AppointmentContainer>

                <View style={styles.spacing}></View>

                <AppointmentContainer>
                    <Text style={styles.title}>13:30</Text>
                    <Text style={styles.text}>Nome do Paciente: Genivaldo Assis{nomePaciente}</Text>
                    <Text style={styles.text}>Profissional: Dr. Maicon{profissional}</Text>
                    <Text style={styles.text}>Especialidade: Implantodentista{especialidade}</Text>
                </AppointmentContainer>
            </View>

            {/* Campo de texto para mostrar a data atual */}
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Data atual: {getCurrentDate()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 20,
    },
    appointmentContainer: {
        marginBottom: 20,
    },
    spacing: {
        marginVertical: 10, // Espaçamento vertical entre os containers de agendamento
    },
    dateContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    container: {
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        borderWidth: 2, // Adicionando borda
        borderColor: '#E0E0E0', // Cor da borda
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    dateText: {
        fontSize: 20,
    },
});

export default HomeScreen;

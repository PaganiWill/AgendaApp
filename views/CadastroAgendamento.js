import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CheckBox } from '@rneui/themed';
import { SelectList } from 'react-native-dropdown-select-list'
import Modal from './Modal';
import ModalTeste from './Modal';

const CadastroAgendamento = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [horario, setHorario] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [activeInput, setActiveInput] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [cro, setCRO] = useState('');

    const [selected, setSelected] = React.useState("");
  
    const especialidade = [
        {key:'1', value:'Ortodontista'},
        {key:'2', value:'Odontopediatra'},
        {key:'3', value:'Clínico geral'},
        {key:'4', value:'Implantodentista'},
        {key:'5', value:'Estomatologista'},
        {key:'6', value:'Odontologia estética'},
    ]

    const profissional = [
        {key:'1', value:'Dr. Maicon'},
        {key:'2', value:'Dr. Anderson'},
    ]

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(Platform.OS === 'ios');
        setDate(currentDate);
        const formattedDate = currentDate.toLocaleDateString('pt-BR');
        setDataNascimento(formattedDate);
        setShowPicker(false); // Close picker after selecting date
    };

    const handlePhoneChange = (formatted, extracted) => {
        setCelular(formatted);
    };

    const handleRegister = () => {
        // Implement register logic
        console.log('Registrando usuário:', { nome, celular, cpf, endereco, dataNascimento });
        navigation.navigate('Agenda');
    };

    const handleInputFocus = (fieldName) => {
        setActiveInput(fieldName);
        setShowPicker(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../img/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Cliente:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={nome}
                    onChangeText={text => setNome(text)}
                    onFocus={() => handleInputFocus('Cliente')}
                />
            </View>

            <View style={styles.select}>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={especialidade} 
                    save="value"
                    placeholder='Especialidade'
                />
            
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={profissional} 
                    save="value"
                    placeholder='Profissional'
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Data Agendamento:</Text>
                <TouchableOpacity onPress={toggleDatepicker} style={styles.dateInputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder='11/04/2024'
                        value={dataNascimento}
                        editable={false}
                    />
                </TouchableOpacity>

                {showPicker &&
                    <DateTimePicker
                        mode="date"
                        value={date}
                        onChange={onChangeDate}
                    />
                }

                <Text style={styles.label}>Horário:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='13:30'
                    value={horario}
                    onChangeText={text => setHorario(text)}
                    onFocus={() => handleInputFocus('Horário')}
                />



            </View>

            <View style={{marginVertical: 15}}>
                {/*<TouchableOpacity style={styles.buttonRegistrar} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Agendar</Text>
            </TouchableOpacity>*/}
                <ModalTeste/>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    select: {
        justifyContent: "space-between",
        flexDirection: "row",
        gap: 60,
    },
    checkBox: {
        marginBottom: 10,
        width: '20%',
        backgroundColor: 'ffffff'
    },
    inputContainer: {
        marginBottom: 10,
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 130,
        height: 150,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    inputCro: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    buttonRegistrar: {
        width: 200,
        height: 40,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CadastroAgendamento;

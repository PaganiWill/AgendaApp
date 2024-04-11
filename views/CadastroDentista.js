import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CheckBox } from '@rneui/themed';
import { SelectList } from 'react-native-dropdown-select-list'
import ModalTeste from './Modal';

const CadastroDentista = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [activeInput, setActiveInput] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [cro, setCRO] = useState('');

    const [selected, setSelected] = React.useState("");
  
    const data = [
        {key:'1', value:'Ortodontista'},
        {key:'2', value:'Odontopediatra'},
        {key:'3', value:'Clínico geral'},
        {key:'4', value:'Implantodentista'},
        {key:'5', value:'Estomatologista'},
        {key:'6', value:'Odontologia estética'},
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
        navigation.navigate('Home');
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
                <Text style={styles.label}>Nome Completo:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={nome}
                    onChangeText={text => setNome(text)}
                    onFocus={() => handleInputFocus('Nome Completo')}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Celular:</Text>
                <TextInputMask
                    style={styles.input}
                    placeholder="(XX) XXXXX-XXXX"
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) ',
                    }}
                    value={celular}
                    onChangeText={handlePhoneChange}
                    onFocus={() => handleInputFocus('Celular')}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>CPF:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="XXX.XXX.XXX-XX"
                    value={cpf}
                    onChangeText={text => setCpf(text)}
                    onFocus={() => handleInputFocus('CPF')}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Endereço:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={endereco}
                    onChangeText={text => setEndereco(text)}
                    onFocus={() => handleInputFocus('Endereço')}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Data Nascimento:</Text>
                <TouchableOpacity onPress={toggleDatepicker} style={styles.dateInputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="01/01/1900"
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
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>CRO:</Text>
                <TextInput
                    style={styles.inputCro}
                    placeholder=""
                    value={cro}
                    onChangeText={text => setCRO(text)}
                    onFocus={() => handleInputFocus('CRO')}
                />
            </View>

            <View style={styles.checkBox}>
                <CheckBox
                    center
                    title="Ativo"
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                />
            </View>

            <View >
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                    placeholder='Especialidade'
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

export default CadastroDentista;

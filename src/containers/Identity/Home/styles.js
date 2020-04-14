import { StyleSheet } from 'react-native';
import Colors from '../../../globals/colors';
export default StyleSheet.create({
    root: {
        flex: 1,
        padding: 16,
    },
    textHeader: {
        paddingBottom: 20,
        fontSize: 24,
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    textBadge: {
        marginTop: "10%",
        fontSize: 18,
    },
    scanToVerifyBtn: {
        flexDirection: 'row',
        backgroundColor: Colors.linkButtonColor,
        borderRadius: 8,
        padding: 10,
        marginRight: '55%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    icon: {
        color: '#d6cccb',
    },
});
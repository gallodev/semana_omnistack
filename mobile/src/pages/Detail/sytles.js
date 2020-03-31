import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default  StyleSheet.create({
    container : {
        flex: 1,
        paddingTop : Constants.statusBarHeight + 20,
        paddingHorizontal : 24,
    },
    header : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    incident: {
        padding:24,
        borderRadius: 8,
        backgroundColor : "#FFFFFF",
        marginBottom: 16,
        marginTop:48 
    },
    incidentProperty: {
        fontSize:14,
        color : "#41414D",
        fontWeight: "bold",
        marginTop:24
    },
    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        color : "#737380",        
    },
    contactBox:{
        padding:24,
        borderRadius: 8,
        backgroundColor : "#FFFFFF",
        marginBottom: 16,        
    },
    heroTitle:{
        fontWeight:"bold",
        fontSize:20,
        color:"#13131a",
        lineHeight:30,
    },
    heroDescription:{
        fontSize:15,
        color:"#737380",
        marginTop:16,
        marginBottom: 5,
        fontWeight : "bold"
    },
    action:{
        alignItems : "center",
        flexDirection : "row",        
        justifyContent : "space-between",              
    },
    actionButton: {
        backgroundColor:"#e02041",        
        width: "48%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    actionText : { 
        fontSize: 15,
        color : "#FFF",
        fontWeight : "bold"
    }
});
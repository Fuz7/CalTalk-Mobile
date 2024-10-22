import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEBCD",
    alignItems: "center",
    justifyContent: "start",
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderRadius: 20,
  },

  titleContainer: {
    backgroundColor: "#664229",
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: 32,
    width: 260,
    maxHeight: 56,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.31,
    shadowRadius: 3.84,

    // Android Shadow
    elevation: 6,
  },
  togglersContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    maxHeight: 42,
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 25,
    marginTop: 70,
  
  },

  instructionContainer: {
    width: 114,
    height: 42,
    backgroundColor: "#664229",
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.65,
    shadowRadius: 3.5,
    elevation: 9, 
  },

  instructionText: {
    fontSize: 16,
    color: "white",
    textAlign:'center'
  },
  
  languageContainer:{
    width: 105,
    height:41,
    borderRadius: 5, 
    backgroundColor: 'white',
    alignItems:'flex-start',
    justifyContent:'center',
    paddingLeft: 11,
  },
  languageText:{
    fontSize:16,
    fontWeight: 'bold'
  }
});

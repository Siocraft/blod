import { BText, BTextInput, FloatingInformation, GoBack } from "@components";
import { AntDesign } from "@expo/vector-icons";
import { ColorsEnum } from "@theme";
import React, { FC, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import FAQJSON from "./FAQ.json";

const getHighlightedText = (text: string, searchString: string) => {
  if (searchString.length < 3) {
    return text;
  }
  const parts = text.split(new RegExp(`(${searchString})`, "gi"));
  return <BText size="large" color="black">
    {parts.map((part, index) => (
      <BText
        key={"HighlightedText_" + index}
        color={part.toLowerCase() === searchString.toLowerCase() ? "secondary" : "black"}
        bold={part.toLowerCase() === searchString.toLowerCase()}
      >
        {part}
      </BText>
    ))}
  </BText>;
};



export const FrequentlyAskedQuestions: FC = () => {

  const [ searchString, setSearchString ] = useState("");

  const questionsToShow = searchString.length < 3 ? FAQJSON : FAQJSON.filter(({ question, answer }) => {
    return (
      question.toLowerCase().includes(searchString.toLowerCase()) || answer.toLowerCase().includes(searchString.toLowerCase())
    );
  });
  
  return <SafeAreaView style={styles.safeAreaView}>
    <GoBack/>
    <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
      <BTextInput
        containerStyle={styles.inputContainer}
        style={styles.input}
        icon={() => <AntDesign name="search1" size={20} color={ColorsEnum.secondary} />}
        placeholder="Buscar preguntas"
        value={searchString}
        onChangeText={setSearchString}
        autoCorrect={false}
        autoCapitalize="none"
        autoComplete="off"
      />
    </View>
    <ScrollView style={styles.scrollContainer}>
      <BText
        size="title"
        bold
        color="black"
        style={styles.titleText}
      >
        Preguntas frecuentes al donar sangre
      </BText>
      {
        questionsToShow.map(({ question, answer }, index) => {
          return <View key={"FAQs_Question_" + index}>
            <BText style={styles.questionText} size="large" bold color="black">
              {getHighlightedText(question, searchString)}
            </BText>
            <View style={{ height: 8 }} />
            <View style={styles.answerContainer}>
              <View style={styles.blueLine} />
              <BText style={styles.answerText} size="large" color="black">
                {getHighlightedText(answer, searchString)}
              </BText>
            </View>
          </View>;
        })
      }
      <View style={styles.bottomWhiteSpace} />
    </ScrollView>
    <FloatingInformation
      link="https://www.donarsangre.org/todo-sobre-la-sangre/preguntas-frecuentes/"
      text="Consulta más preguntas frecuentes aquí"
    />
  </SafeAreaView>;
};


const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: ColorsEnum.white,
    flex: 1
  },
  inputContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  input: {
  },
  container: {
    padding: 16,
  },
  scrollContainer: {
    padding: 16,
    paddingTop: 0
  },
  infoContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    textAlign: "center",
  },
  icon: {
    marginVertical: 32,
  },
  infoText: {
    textAlign: "center",
  },
  bottomWhiteSpace: {
    height: 120,
  },
  titleText: {
    marginVertical: 16
  },
  questionText: {
    marginHorizontal: 16,
  },
  answerText: {
    marginRight: 32,
  },
  answerContainer: {
    flexDirection: "row",
    marginBottom: 32,
  },
  blueLine: { width: 2, backgroundColor: ColorsEnum.secondary, marginLeft: 16, borderRadius: 2, marginRight: 8 }
});
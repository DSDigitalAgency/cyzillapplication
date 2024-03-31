import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question: "How do I sell a property on Cyzill?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      question: "How do I sell a property on Cyzill?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      question: "How do I sell a property on Cyzill?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      question: "How do I sell a property on Cyzill?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    // Add more FAQs as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ScrollView className="flex-1 p-4 bg-sky-100">
      <View className="w-full">
        {faqs.map((faq, index) => (
          <View key={index} className="flex-1 p-4">
            <TouchableOpacity
              style={{
                backgroundColor: activeIndex === index ? "#2893FE" : "#c1d0e8",
              }}
              className="rounded-3xl p-5 relative items-center justify-center"
              onPress={() => toggleAnswer(index)}
            >
              <Text
                style={{ color: activeIndex === index ? "white" : "black" }}
                className="text-lg font-semibold"
              >
                {faq.question}
              </Text>
            </TouchableOpacity>
            {activeIndex === index && (
              <View className="max-h-[500px] overflow-hidden duration-500 rounded-3xl bg-blue-200">
                <Text className="p-5 leading-6">{faq.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Faq;

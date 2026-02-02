import { colors } from "@/constants/colors";
import { theme } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={theme.headings.h1}>Title</Text>
      <Text style={theme.headings.h2}>Subtitle</Text>
      <Text style={theme.headings.h3}>Subsubtitle</Text>
      <Text style={theme.headings.default}>Edit src/app/index.tsx to edit this screen.</Text>
      <View style={styles.card}>
        <Text style={theme.headings.default}>card test</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background
  },
  card: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 16,
    padding: 16,
    width: "100%",
  }
});

import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function Cv() {
  return (
    <View style={styles.container}>
      {/* Header section with profile image */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/ngothuanphat.jpg")}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.title}>Ngô Thuận Phát</Text>
      <Text style={styles.role}>Backend Developer</Text>

      {/* Contact information */}
      <View style={styles.contactContainer}>
        <View style={styles.contactItem}>
          <FontAwesome name="phone" size={16} color="black" />
          <Text style={styles.contactText}>0399245850</Text>
        </View>

        <View style={styles.contactItem}>
          <MaterialIcons name="email" size={16} color="black" />
          <Text style={styles.contactText}>phatngo.040103@gmail.com</Text>
        </View>

        <View style={styles.contactItem}>
          <FontAwesome name="github" size={16} color="black" />
          <Text style={styles.contactText}>https://github.com/Thupha41</Text>
        </View>

        <View style={styles.contactItem}>
          <Ionicons name="location" size={16} color="black" />
          <Text style={styles.contactText}>Ho Chi Minh city</Text>
        </View>
      </View>

      {/* Summary section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SUMMARY</Text>
        <View style={styles.divider} />
        <Text style={styles.sectionText}>
          I am a fourth-year student with a strong passion for backend
          development and API design, eager to build scalable and efficient
          systems. Since my second year, I have been self-learning and working
          with Node.js, gaining a deep understanding of RESTful APIs. I am
          skilled in database management using MongoDB and MySQL and have
          experience working with cloud services like AWS and VPS hosting.
          Additionally, I have hands-on experience deploying CI/CD pipelines
          using GitHub Actions and Docker.
        </Text>
        <Text style={styles.sectionText}>
          I am always eager to learn new technologies, optimize performance, and
          solve real-world problems through clean and maintainable code.
        </Text>
      </View>

      {/* Education section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        <View style={styles.divider} />

        <View style={styles.educationItem}>
          <View style={styles.educationHeader}>
            <Text style={styles.educationInstitution}>
              University of Information and Technology - Vietnam National
              University, TP.HCM
            </Text>
            <Text style={styles.educationPeriod}>2021 - June, 2026</Text>
          </View>
          <Text style={styles.educationDegree}>Information System</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>
              • Achieved the title of Upper second class honours in each
              semesters.
            </Text>
            <Text style={styles.bulletItem}>• Current GPA: 8.22</Text>
          </View>
        </View>
      </View>

      {/* Skills section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.divider} />

        <View style={styles.skillsContainer}>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Major skills</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • Strong knowledge of JavaScript
              </Text>
              <Text style={styles.bulletItem}>
                • Proficient in working with HTML, CSS, JavaScript, GitHub, and
                Node.js
              </Text>
              <Text style={styles.bulletItem}>
                • Experience in SQL and NoSQL databases
              </Text>
              <Text style={styles.bulletItem}>
                • Knowledge of React.js library and Express.js framework
              </Text>
              <Text style={styles.bulletItem}>
                • System analysis and design
              </Text>
              <Text style={styles.bulletItem}>
                • Object-Oriented Programming (OOP)
              </Text>
              <Text style={styles.bulletItem}>
                • Experienced in working with Docker
              </Text>
              <Text style={styles.bulletItem}>
                • Experienced in deploying applications on AWS or VPS and
                setting up CI/CD pipelines with GitHub Actions
              </Text>
            </View>
          </View>

          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Soft skills</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Presentation skills</Text>
              <Text style={styles.bulletItem}>• Problem-solving skills</Text>
              <Text style={styles.bulletItem}>
                • Self-learning and research skills
              </Text>
              <Text style={styles.bulletItem}>• Communication skills</Text>
              <Text style={styles.bulletItem}>• Teamwork skills</Text>
              <Text style={styles.bulletItem}>• Project management skills</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Project section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROJECTS</Text>
        <View style={styles.divider} />
        <Text
          style={{
            fontSize: 16,
            lineHeight: 20,
            marginBottom: 10,
            textAlign: "justify",
            fontWeight: "bold",
          }}
        >
          DESIGNING A E-COMMERCE WEBSITE
        </Text>
        <Text style={styles.sectionText}>Description:</Text>
        <Text style={styles.sectionText}>
          The International Brand Distributor Store System is a cutting-edge
          e-commerce platform designed to revolutionize the online retail
          landscape for clothing. This project addresses the growing need for
          providing the sale of international fashion brands but also enhances
          the overall shopping experience through advanced technological
          features.
        </Text>
        <Text style={styles.sectionText}>Github link:</Text>
        <Text style={styles.sectionText}>
          https://github.com/Thupha41/Web-Clothes-API
        </Text>
        <Text style={styles.sectionText}>
          https://github.com/Thupha41/Web-ClothesReact
        </Text>

        <Text></Text>
      </View>

      {/* Hobbies section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>HOBBIES</Text>
        <View style={styles.divider} />
        <Text style={styles.sectionText}>
          Reading books, playing soccer, researching document.
        </Text>
      </View>

      {/* Option 1: Use StatusBar from react-native correctly */}
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#555",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  role: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20,
    color: "#555",
  },
  contactContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 30,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  contactText: {
    marginLeft: 5,
    fontSize: 14,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
    textAlign: "justify",
  },
  educationItem: {
    marginBottom: 15,
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  educationInstitution: {
    fontSize: 15,
    fontWeight: "bold",
    flex: 1,
  },
  educationPeriod: {
    fontSize: 14,
  },
  educationDegree: {
    fontSize: 14,
    marginTop: 5,
  },
  bulletList: {
    marginTop: 5,
  },
  bulletItem: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 3,
  },
  skillsContainer: {
    marginTop: 5,
  },
  skillCategory: {
    marginBottom: 15,
  },
  skillCategoryTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

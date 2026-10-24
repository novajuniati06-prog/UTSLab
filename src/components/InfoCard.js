
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const selesai = status.toLowerCase() === 'selesai';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View
        style={[
          styles.badge,
          selesai ? styles.greenBadge : styles.orangeBadge,
        ]}
      >
        <Text
          style={[
            styles.statusText,
            selesai ? styles.greenText : styles.orangeText,
          ]}
        >
          {status}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 15,
  },
  greenBadge: {
    backgroundColor: '#DCFCE7',
  },
  orangeBadge: {
    backgroundColor: '#FFEDD5',
  },
  statusText: {
    fontWeight: 'bold',
  },
  greenText: {
    color: '#15803D',
  },
  orangeText: {
    color: '#C2410C',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

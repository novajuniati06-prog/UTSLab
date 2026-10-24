
import { useState } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import InfoCard from '../components/InfoCard';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function App() {
  const [keyword, setKeyword] = useState('');

  const mahasiswaFiltered = DAFTAR_MAHASISWA.filter(
    (mahasiswa) =>
      mahasiswa.nama.toLowerCase().includes(keyword.toLowerCase())
  );

 const renderMahasiswa = ({ item }: { item: { id: string; nama: string; prodi: string } }) => (
    <View style={styles.studentCard}>
      <Text style={styles.studentName}>{item.nama}</Text>
      <Text style={styles.prodi}>{item.prodi}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mahasiswaFiltered}
        keyExtractor={(item) => item.id}
        renderItem={renderMahasiswa}
        ListHeaderComponent={
          <View>
            <Text style={styles.header}>UTS Pemrograman Mobile</Text>
            <Text style={styles.subtitle}>
              Soal 1: Custom Reusable Component
            </Text>

            <InfoCard
              title="Membuat Halaman Login"
              status="selesai"
              onPress={() =>
                Alert.alert('Detail', 'Tugas halaman login telah selesai.')
              }
            />

            <InfoCard
              title="Membuat Fitur Pencarian"
              status="proses"
              onPress={() =>
                Alert.alert('Detail', 'Tugas fitur pencarian sedang diproses.')
              }
            />

            <Text style={styles.subtitle}>
              Soal 2: Direktori Mahasiswa
            </Text>

            <TextInput
              style={styles.searchInput}
              placeholder="Cari nama mahasiswa..."
              value={keyword}
              onChangeText={setKeyword}
              autoCapitalize="none"
            />

            <Text style={styles.resultTitle}>
              Daftar Mahasiswa ({mahasiswaFiltered.length})
            </Text>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Data tidak ditemukan!
          </Text>
        }
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    padding: 20,
    paddingTop: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginTop: 18,
    marginBottom: 14,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },
  studentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2563EB',
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  prodi: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5,
  },
  emptyText: {
    textAlign: 'center',
    color: '#DC2626',
    fontSize: 16,
    marginTop: 20,
  },
});

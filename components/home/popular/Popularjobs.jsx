import React from 'react'
import styles from './popularjobs.style'
import { View, Text,FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import {useRouter} from 'expo-router'
import {SIZES, COLORS} from '../../../constants'
import PopularJobCards from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {

  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
      </View>
    </View>
  )
}

export default Popularjobs;
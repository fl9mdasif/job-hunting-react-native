import React from 'react'
import styles from './popularjobs.style'
import { View, Text,FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import {useRouter} from 'expo-router'
import {SIZES, COLORS} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
// import { isLoaded, isLoading } from 'expo-font'

const Popularjobs = () => {

  const isLoading = false
  const error = false

  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
          data={[1,2,3,4,5]}
            // data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                // selectedJob={selectedJob}
                // handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs;
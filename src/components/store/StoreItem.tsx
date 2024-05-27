import {colors} from '@/constants';
import {KindMenu, Store} from '@/types/domain';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  store: Store;
}

function formatStoreType(type: KindMenu) {
  switch (type) {
    case 'cafe': {
      return '카페';
    }
    case 'food': {
      return '음식집';
    }
    default: {
      return '기타';
    }
  }
}

export default function StoreItem({store}: Props) {
  const handleDetailPage = () => {
    console.log('detail');
  };
  return (
    <Pressable onPress={handleDetailPage} style={styles.container}>
      <View style={styles.imageContainer}>
        {store?.photos[0]?.file ? (
          <Image source={{uri: store.photos[0].file}} style={styles.image} />
        ) : (
          <View style={styles.noImage}>
            <Ionicons name="image-outline" size={30} color={colors.GRAY_500} />
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.storeName}>{store.name}</Text>
          <View style={styles.cityContainer}>
            <MaterialIcons
              name="location-on"
              size={10}
              color={colors.GRAY_600}
            />
            <Text style={styles.city}>{store.city}</Text>
          </View>
          <Text style={styles.kind}>{formatStoreType(store.kind_menu)}</Text>

          <View style={styles.ratingAndReviewContainer}>
            {typeof store.rating === 'number' ? (
              <View style={styles.ratingContainer}>
                <Ionicons name="paw" size={14} color={colors.AMBER_400} />
                <Text style={styles.ratingText}>{store.rating}</Text>
              </View>
            ) : (
              <Ionicons name="paw" size={14} color={colors.GRAY_400} />
            )}
            <Text style={styles.reviewLen}>({store.reviews_len})</Text>
          </View>
          <View></View>
        </View>

        <View>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail">
            {store.description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'relative',
    width: 130,
    height: 150,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    overflow: 'hidden',
    objectFit: 'cover',
  },
  noImage: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: colors.GRAY_100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    justifyContent: 'space-between',
  },
  storeName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.GRAY_700,
  },
  cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 2,
    gap: 2,
  },
  city: {
    fontSize: 12,
    color: colors.GRAY_500,
    fontWeight: '600',
  },
  kind: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: colors.AMBER_500,
    fontWeight: '600',
  },
  ratingAndReviewContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.BLACK,
  },
  reviewLen: {
    fontSize: 12,
    color: colors.BLACK,
  },
  description: {
    width: Dimensions.get('screen').width / 2,
    fontSize: 12,
    color: colors.BLACK,
  },
});

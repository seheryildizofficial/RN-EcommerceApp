import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme/appColors';
const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const productItemStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    borderWidth: 0.5,
    borderColor: AppColors.SECONDARY,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 5,
  },
  infoContainer: {
    flex: 2,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {homeScreenStyles, productItemStyle};

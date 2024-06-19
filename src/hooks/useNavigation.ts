import { RootStackParams } from '@/router';
import { useNavigation as useNavigationRN } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useNavigation = () =>
  useNavigationRN<NativeStackNavigationProp<RootStackParams>>();

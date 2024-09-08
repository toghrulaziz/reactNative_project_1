import { StyledView, StyledText } from '@common/StyledComponents';
import { useNavigation } from '@react-navigation/native';
import { StyledTouchableOpacity } from './StyledComponents';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  return (
    <StyledView className={`w-full flex-row bg-slate-500 items-center justify-center relative`}>
      {canGoBack && <StyledTouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className="absolute left-2 top-5 p-2 bg-gray-700 rounded-lg">
        <StyledText className="text-white text-sm font-semibold">Go back</StyledText>
      </StyledTouchableOpacity>}
      <StyledText className="text-white font-poppi-medium text-[20px] pb-5 pt-6">
        {title}
      </StyledText>
    </StyledView>
  );
};

export default CustomHeader;
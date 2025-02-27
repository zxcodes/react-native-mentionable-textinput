import { StyleSheet } from 'react-native';

const maxHeightInputText = 150;
const minHeightInputTextContainer = 25;

export default StyleSheet.create({
  textInput: {
    flex: 1,
  },

  textInInputText: {
    color: '#FFF',
  },

  mentionInInputText: {
    color: '#fff',
  },

  separator: {
    width: '100%',
    height: 1,
  },

  textInputContainer: {
    flexDirection: 'row',
    maxHeight: maxHeightInputText,
    minHeight: minHeightInputTextContainer,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },

  actionsInputText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
  },

  footerPaddingIos: {
    paddingTop: 0,
  },

  mentionTypeListItemText: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  mentionResultListItemText: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

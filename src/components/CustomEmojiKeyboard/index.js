import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { EmojiKeyboard } from 'rn-emoji-keyboard'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'

export const CustomEmojiKeyboard = ({ handlePickEmoji }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <EmojiKeyboard
                    onEmojiSelected={handlePickEmoji}
                    enableSearchBar
                    theme={{
                        category: {
                            icon: colors.dark,
                            iconActive: colors.primary,
                            container: colors.background
                        },
                        search: {
                            placeholder: colors.background,
                            text: colors.background,
                            background: colors.primary
                        }
                    }}
                    enableCategoryChangeAnimation={false}
                    styles={{ container: { borderRadius: 0 }, searchBar: { container: { borderRadius: 10, borderColor: colors.primary, marginBottom: 10 }, text: { fontFamily: fonts.default } } }}
                    allowMultipleSelections
                    enableRecentlyUsed
                    hideHeader
                    categoryPosition="top"
                    emojiSize={24}
                    categoryOrder={["recently_used"]}
                />
            </View>
        </SafeAreaView>
    )
}
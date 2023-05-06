import { View } from 'react-native'
import React, { useState } from 'react'
import Pdf from 'react-native-pdf';
import { metrics } from '../../../metrics';
import { getFilename } from '../../../utils/mime';
import { colors } from '../../../theme/colors';
import { Text } from 'react-native-paper';
import { getExtension } from '../../../utils/mime';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomChatBubblePdf({ uri }) {
    const [numberOfPages, setNumberOfPages] = useState(0);
    return (
        <View style={{ width: metrics.screenWidth * 0.72, height: 200, borderRadius: 10 }}>
            <Pdf
                source={{ uri, cache: true, cacheFileName: getFilename(uri) }}
                style={{ width: metrics.screenWidth * 0.72, height: 150, borderRadius: 10 }}
                onLoadComplete={(numberOfPages, filePath) => {
                    setNumberOfPages(numberOfPages);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                fitPolicy={0}
                trustAllCerts={false}
                scale={1.3}
            />
            <View style={{ height: 50, position: 'absolute', backgroundColor: colors.primary, bottom: 0, padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons
                        name="file-pdf-box"
                        size={30}
                        color={colors.background}
                    />
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ color: colors.background, fontSize: 12 }}>{getFilename(uri) + "." + getExtension(uri)}</Text>
                        <Text style={{ color: colors.background, fontSize: 10 }}>{numberOfPages} {numberOfPages > 1 ? "pages" : "page"}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
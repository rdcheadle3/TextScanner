import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";

const CameraScreen = () => {
	const [hasPermission, setHasPermission] = useState(null);
	const [cameraRef, setCameraRef] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}

	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}
	return (
		<View style={{ flex: 1 }}>
			<Camera
				style={{ flex: 1 }}
				type={Camera.Constants.Type.back}
				ref={(ref) => setCameraRef(ref)}
			/>
		</View>
	);
};

export default function App() {
	return <CameraScreen />;
}

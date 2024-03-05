import { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from "expo-router"
import "./nativewind-output"

//components
import { COLORS, icons, SIZES } from "./constants"
import { NearbyJobs,PopularJobs, ScreenHeaderBtn, welcome } from "./components"

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>
        home
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



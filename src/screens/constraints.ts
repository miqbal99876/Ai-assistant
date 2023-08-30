export type RootStackParamList={
    Splash:undefined,
    WelcomeScreen:undefined,
    ChatScreen:undefined,
}

export type UserNavigationPropType = NavigationProp<RootStackParamList>;
export type UserNavigationRootProps<T extends keyof RootStackParamList> = {
    route: RouteProp<RootStackParamList, T>;
    navigation: NavigationProp<RootStackParamList, T>;
};
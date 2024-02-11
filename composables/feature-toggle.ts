export const useFeatureToggle = () => {
    const runtimeConfig = useRuntimeConfig()
    const features = runtimeConfig.public.features

    const enabled = (feature: string): boolean => {
        return features.includes(feature)
    }

    return {enabled}
}

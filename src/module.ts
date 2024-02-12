import {addComponent, createResolver, defineNuxtModule} from "@nuxt/kit";
import {addImports} from "nuxt/kit";

export default defineNuxtModule({
    setup() {
        const {resolve} = createResolver(import.meta.url)
        addComponent({name: "FeatureToggle", filePath: resolve("runtime/components/feature-toggle.vue")})

        addImports({
            name: "useFeatureToggle",
            from: resolve("runtime/composables/feature-toggle.ts")
        })
    }
})
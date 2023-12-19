import { onMounted, ref, watch } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'


export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }

    onMounted(() => getCategory())
    watch(
        () => route.params.id,
        (newValue, oldValue) => {
            getCategory(newValue)
        },
        {
            immediate: true
        }
    )
    return { categoryData }
}
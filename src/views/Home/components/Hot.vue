<script setup>
import { onMounted, ref } from 'vue'
import Panel from './Panel.vue'
import { getHotAPI } from '@/apis/home'

// 获取数据
const hotList = ref([])

const getHotList = async () => {
    const res = await getHotAPI()
    hotList.value = res.result
}

onMounted(() => getHotList())
</script>

<template>
    <panel title="人气推荐" subTitle="新鲜出炉 品质靠谱">
        <ul class="goods-list">
            <li v-for="item in hotList" :key="item.id">
                <RouterLink to="/">
                    <img v-img-lazy="item.picture" alt="" />
                    <p class="name">{{ item.title }}</p>
                    <p class="desc">{{ item.alt }}</p>
                </RouterLink>
            </li>
        </ul>
    </panel>
</template>


<style scoped lang='scss'>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 426px;

    li {
        width: 306px;
        height: 406px;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
        }

        .desc {
            color: #999;
            font-size: 18px;
        }
    }
}
</style>
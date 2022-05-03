<!--<template>-->
<!--  <div class="dashboard-container">-->
<!--    <div class="dashboard-text">Hello，{{ name }}</div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { mapGetters } from 'vuex'-->

<!--export default {-->
<!--  name: 'Dashboard',-->
<!--  computed: {-->
<!--    ...mapGetters([-->
<!--      'name'-->
<!--    ])-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.dashboard {-->
<!--  &-container {-->
<!--    margin: 30px;-->
<!--  }-->
<!--  &-text {-->
<!--    font-size: 30px;-->
<!--    line-height: 46px;-->
<!--  }-->
<!--}-->
<!--</style>-->

<template>
  <div class="dashboard-editor-container">
    <!--    <github-corner class="github-corner" />-->

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <!--    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">-->
    <!--      <line-chart :chart-data="lineChartData" />-->
    <!--    </el-row>-->

    <el-row :gutter="32">
      <!--          <el-col :xs="24" :sm="24" :lg="8">-->
      <!--            <div class="chart-wrapper">-->
      <!--              <raddar-chart />-->
      <!--            </div>-->
      <!--          </el-col>-->
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <h4 align="center">帖子分类统计</h4>
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="7">
        <div class="chart-wrapper">
          <h4 align="center">表白墙分类统计</h4>
          <wall-bar-chart :x-axis-data="wallXAxisData" :series-data="wallSeriesData" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="9">
        <div class="chart-wrapper">
          <h4 align="center">二手上架分类统计</h4>
          <goods-bar-chart :x-axis-data="goodsXAxisData" :series-data="goodsSeriesData" />
        </div>
      </el-col>
    </el-row>

    <!--    <el-row :gutter="8">-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">-->
    <!--        <transaction-table />-->
    <!--      </el-col>-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
    <!--        <todo-list />-->
    <!--      </el-col>-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
    <!--        <box-card />-->
    <!--      </el-col>-->
    <!--    </el-row>-->
  </div>
</template>

<script>
// import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
// import LineChart from './components/LineChart'
// import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import WallBarChart from './components/BarChart'
import GoodsBarChart from './components/BarChart'
import { fetchWallCountByState } from '@/api/wall'
import { fetchGoodsCountByCategory } from '@/api/market'
// import TransactionTable from './components/TransactionTable'
// import TodoList from './components/TodoList'
// import BoxCard from './components/BoxCard'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    // GithubCorner,
    PanelGroup,
    // LineChart,
    // RaddarChart,
    PieChart,
    WallBarChart,
    GoodsBarChart
    // TransactionTable,
    // TodoList,
    // BoxCard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      wallXAxisData: [],
      wallSeriesData: [],
      goodsXAxisData: [],
      goodsSeriesData: []
    }
  },
  created() {
  },
  async  mounted() {
    await this.getWallCountGroupByState()
    await this.getGoodsCountByCategory()
  },
  methods: {
    async getWallCountGroupByState() {
      const _this = this
      await fetchWallCountByState().then(res => {
        if (res.data.length > 0) {
          res.data.forEach(function(item) {
            _this.wallXAxisData.push(item.stateName)
            _this.wallSeriesData.push(item.auditStateCount)
          })
        }
        console.log(res.data)
      })
    },
    async getGoodsCountByCategory() {
      const _this = this
      await fetchGoodsCountByCategory().then(res => {
        if (res.data.length > 0) {
          res.data.forEach(function(item) {
            _this.goodsXAxisData.push(item.categoryName)
            _this.goodsSeriesData.push(item.goodsCategoryIdCount)
          })
        }
        console.log(res.data)
      })
    },
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>

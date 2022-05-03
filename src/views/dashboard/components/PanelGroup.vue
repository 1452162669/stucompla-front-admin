<template>
  <el-row :gutter="30" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="$router.push('/users')">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            用户
          </div>
          <p class="card-panel-num">{{ userTotal }}</p>

          <!--          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="$router.push('/posts/index')">
        <div class="card-panel-icon-wrapper icon-edit">
          <svg-icon icon-class="edit" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            帖子
          </div>
          <p class="card-panel-num">{{ postTotal }}</p>
          <!--          <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel">
        <!-- 这里应该跳转评论管理页 -->
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="message" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            回复
          </div>
          <p class="card-panel-num">{{ commentTotal }}</p>
          <!--          <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="$router.push('/walls/index')">
        <div class="card-panel-icon-wrapper icon-wall">
          <svg-icon icon-class="tab" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            表白墙
          </div>
          <p class="card-panel-num">{{ wallTotal }}</p>
          <!--          <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="$router.push('/market/goodsTable')">
        <div class="card-panel-icon-wrapper icon-lock">
          <svg-icon icon-class="lock" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            商品
          </div>
          <p class="card-panel-num">{{ goodsTotal }}</p>
          <!--          <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon icon-class="shopping" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            订单
          </div>
          <p class="card-panel-num">{{ orderTotal }}</p>
          <!--          <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />-->
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// import CountTo from 'vue-count-to'

import { fetchUserTotal } from '@/api/user'
import { fetchPostTotal } from '@/api/post'
import { fetchCommentTotal } from '@/api/comment'
import { fetchWallTotal } from '@/api/wall'
import { fetchGoodsTotal, fetchOrderTotal } from '@/api/market'

export default {
  components: {
    // CountTo
  },
  data() {
    return {
      userTotal: 0,
      postTotal: 0,
      commentTotal: 0,
      wallTotal: 0,
      goodsTotal: 0,
      orderTotal: 0
    }
  },
  async created() {
    await this.getUserTotal()
    await this.getPostTotal()
    await this.getCommentTotal()
    await this.getWallTotal()
    await this.getGoodsTotal()
    await this.getOrderTotal()
  },
  methods: {
    getUserTotal() {
      fetchUserTotal().then(res => {
        this.userTotal = res.data
      })
    },
    getPostTotal() {
      fetchPostTotal().then(res => {
        this.postTotal = res.data
      })
    },
    getCommentTotal() {
      fetchCommentTotal().then(res => {
        this.commentTotal = res.data
      })
    },
    getWallTotal() {
      fetchWallTotal().then(res => {
        this.wallTotal = res.data
      })
    },
    getGoodsTotal() {
      fetchGoodsTotal().then(res => {
        this.goodsTotal = res.data
      })
    },
    getOrderTotal() {
      fetchOrderTotal().then(res => {
        this.orderTotal = res.data
      })
    },
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-edit {
        background: #f4516c;
      }

      .icon-wall{
        background: #499381;
      }

      .icon-lock{
        background: darkkhaki;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-edit {
      color: #f4516c;
    }

    .icon-wall{
      color: #499381;
    }

    .icon-lock{
      color: darkkhaki;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>

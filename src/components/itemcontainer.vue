<template>
  <section>
    <header class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{ level }}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{ itemNum }}</span>
    </header>
    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style"></router-link>
    </div>
    <div v-if="fatherComponent == 'item'">
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="itemDetail.length > 0">
          <header class="item_title">{{ ietmDetail[itemNum - 1].topic_name }}</header>
          <ul>
            <li v-for="(item, index) in itemDetail[itemNum - 1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">
              <span class="option_style" v-bind:class="{'has_choosedNum == index'}">{{chooseType(index)}}</span>
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
      <span class="submit_item button_style" v-else @click="submitAnswer"></span>
    </div>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'itemcontainer',
    data() {
      return {
        itemId: null,
        choosedNum: null,
        choosedId: null,
      }
    },
    props: ['fatherComponent'],
    computed: mapState([
      'itemNum',
      'level',
      'itemDetail',
      'timer'
    ]),
    methods: {
      ...mapAction([
        'addNum', 'initializeData',
      ]),
      nextItem() {
        if(this.choosedNum !== null) {
          this.addNum(this.choosedId)
        } else {
          alert('您还没有选择答案哦！')
        }
      },
      chooseType: type => {
        switch (type){
          case 0: return 'A';
          case 1: return 'B';
          case 2: return 'C';
          case 3: return 'D';
        }
      },
      choosed(type, id) {
        this.chooseNum = type
        this.choosedId = id
      },
      submitAnswer() {
        if (this.choosedNum !== null) {
          this.addNum(this.choosedId)
          clearInterval(this.timer)
          this.$router.push('score')
        } else {
          alter('您还没选择答案哦！')
        }
      }
    },
    created() {
      if (this.fatherComponent == 'home') {
        this.initializeData()
        document.body.style.backgroundImage = 'url(./assets/images/1-1/jpg)'
      }
    }
  }
</script>

<style>
</style>

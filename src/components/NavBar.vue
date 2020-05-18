<template>
  <div class="shadow-xl flex-row md:w-20 md:h-full fixed w-full h-16 block bg-softbg bottom-0 z-10">
    <ul>
      <li class="special">
        <homebutton />
      </li>
      <li>
        <a class="tooltip" href="/snippets">
          <font-awesome-icon
            icon="code"
            class="text-softgray hover:text-tomato text-2xl mt-12 transition duration-500"
          />

          <div class="right invisible md:visible">Kod Parçaları</div>
        </a>
      </li>
      <li>
        <a class="tooltip" href="/posts">
          <font-awesome-icon
            icon="book-open"
            class="text-softgray hover:text-tomato text-2xl mt-12 transition duration-500"
          />
          <div class="invisible md:visible right">Blog</div>
        </a>
      </li>

      <li>
        <a class="tooltip" href="#">
          <font-awesome-icon
            icon="tags"
            class="text-softgray hover:text-tomato text-2xl mt-12 transition duration-500"
          />
          <div class="right invisible md:visible">Etiketler</div>
        </a>
      </li>
      <li>
        <a class="tooltip" href="#">
          <font-awesome-icon
            icon="coffee"
            class="text-softgray hover:text-tomato text-2xl mt-12 transition duration-500"
          />
          <div class="right invisible md:visible">Kahve</div>
        </a>
      </li>
      <div v-if="user">
        <li>
          <a class="tooltip" href="/admin/add">
            <font-awesome-icon
              icon="pen-alt"
              class="text-softgray hover:text-tomato text-2xl mt-12 transition duration-500"
            />
            <div class="right invisible md:visible">Yazı Ekle</div>
          </a>
        </li>
        <li>
          <a class="tooltip" @click="logout">
            <font-awesome-icon
              icon="sign-out-alt"
              class="text-softgray hover:text-tomato text-2xl mt-12 transition duration-500"
            />
            <div class="right invisible md:visible">Çıkış Yap</div>
          </a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import homebutton from "./homebutton";
import * as utils from "../utils/index.js";
export default {
  components: {
    homebutton
  },
  data: function() {
    return {
      user: false
    };
  },
  methods: {
    logout: function() {
      utils.logout();
    }
  },
  created() {
    utils.getUser().then(user => {
      this.user = user;
    });
  }
};
</script>

<style scoped lang="css">
.home {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    331deg,
    rgba(2, 0, 36, 1) 0%,
    #f96a1f 0%,
    #fa8142 50%,
    #fb9865 100%
  );
}

@media only screen and (max-width: 762px) {
  li {
    display: block;
    justify-content: center;
    float: left;
    margin-left: 10%;
    margin-top: -25px;
  }
  .special {
    display: block;
    justify-content: center;
    float: left;
    margin-left: 8% !important;
    margin-top: 0px !important;
  }
}

/* Large screens */
@media only screen and (min-width: 762px) {
  li {
    display: block;
    justify-content: center;
  }
  .tooltip {
    display: inline-block;
    position: relative;

    text-align: left;
  }

  .tooltip .right {
    top: 80%;
    left: 100%;
    margin-left: 20px;
    transform: translate(0, -50%);
    padding: 10px 20px;
    color: #ffffff;
    background-color: #777777;
    font-weight: normal;
    font-size: 12px;

    position: absolute;
    z-index: 99999999;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: visibility 0s, opacity 0.4s linear;
  }

  .tooltip:hover .right {
    opacity: 100;
    transition: visibility 0s, opacity 0.1s linear;
  }

  .tooltip .right i {
    position: absolute;
    top: 80%;
    right: 100%;
    margin-top: -12px;
    width: 12px;
    height: 24px;
    overflow: hidden;
  }

  .tooltip .right i::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    left: 0;
    top: 80%;
    transform: translate(50%, -50%) rotate(-45deg);
    background-color: #777777;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  }
}
</style>

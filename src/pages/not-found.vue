<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable no-undef -->

<template>
  <header class="flex h-screen items-center justify-center">
    <h1
      class="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100"
    >
     {{ userData.name }} {{ userData.acc_code }}
      {{ id }}
    </h1>
    <h2>Order List</h2>
    <ul>
      <li v-for="order in orderList" :key="order.order_id">
        <!-- Hiển thị thông tin của từng đơn hàng -->
        {{ order.order_id }} - {{ order.order_status }} - {{ formatDate(order.update_time) }}
      </li>
    </ul>
  </header>
</template>
<script>
// eslint-disable-next-line import/no-relative-packages
import CryptoJS from 'crypto-js';
import moment from 'moment';

export default {
  data() {
    return {
      id: this.$route.query.id,
      token: this.$route.query.token,
      userData: [], // You can store the fetched user data here
      orderList: [], // You can store the fetched user data here
    };
  },
  created() {
    // Call a method to fetch user data when the component is created
    this.fetchShopData();
  },
  methods: {
    formatDate(timestamp) {
      return moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss');
    },
    getOrderListTiktok(appKey, secret, accessToken, pageSize, orderStatus, sortBy) {
      const timestamp = Math.floor(Date.now() / 1000);
      const queries = {
        app_key: appKey,
        timestamp,
        page_size: pageSize,
        order_status: orderStatus,
        sort_by: sortBy,
      };
      const path = '/api/orders/search';
      const sign = this.generateSHA256(path, queries, secret);

      // Define the URL of your proxy server
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

      // Construct the TikTok API URL with the proxy server URL
      const apiUrl = `https://open-api.tiktokglobalshop.com${path}?app_key=${appKey}&access_token=${accessToken}&sign=${sign}&timestamp=${timestamp}&page_size=${pageSize}&order_status=${orderStatus}&sort_by=${sortBy}`;

      // Use axios to make a POST request to the proxy server URL
      // eslint-disable-next-line no-undef
      return axios
        .post(proxyUrl + apiUrl, {})
        .then((response) => response.data)
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('Error:', error);
          throw error;
        });
    },
    generateSHA256(path, queries, secret) {
      const sortedKeys = Object.keys(queries).sort();
      let input = path;

      sortedKeys.forEach((key) => {
        input += key + queries[key];
      });

      input = secret + input + secret;

      // eslint-disable-next-line no-undef
      const signature = CryptoJS.HmacSHA256(input, secret).toString();

      return signature;
    },
    fetchShopData() {
      // eslint-disable-next-line no-undef
      axios
        .get(
          `https://hq.vuongandong.com/danang/api/test.php?shop_code=${this.id}`,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        )
        .then((response) => {
          console.log(response);
          this.userData = response.data;
          return this.getOrderListTiktok(
            response.data.app_key,
            response.data.app_secret,
            response.data.app_access_token,
            20,
            112,
            'CREATE_TIME',
          ).then((orderList) => {
            // eslint-disable-next-line no-console
            console.log(orderList); // Log kết quả của getOrderListTiktok()
            this.orderList = orderList.data.order_list;
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

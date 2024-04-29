<!-- eslint-disable max-len -->
<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>
      <span class="font-semibold text-xl tracking-tight">Tiktok Support</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
           @click="handleClick(AWAITING_SHIPMENT)"
          :class="[
            isActive == AWAITING_SHIPMENT ? 'text-white' : '',
            'block mt-4 lg:inline-block lg:mt-0 cursor-pointer text-teal-200 hover:text-white',
          ]"
        >
          Awaiting Shipment
        </a>
        <a
           @click="handleClick(AWAITING_COLLECTION)"
          :class="[
            isActive == AWAITING_COLLECTION ? 'text-white' : '',
            'ml-3 block mt-4 lg:inline-block cursor-pointer lg:mt-0 text-teal-200 hover:text-white',
          ]"
        >
          Awaiting Collection
        </a>
        <a
           @click="handleClick(ON_HOLD)"
          :class="[
            isActive == ON_HOLD ? 'text-white' : '',
            'ml-3 block mt-4 lg:inline-block lg:mt-0 cursor-pointer text-teal-200 hover:text-white',
          ]"
        >
          Pending
        </a>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >To day (US)</a
        >
      </div>
    </div>
  </nav>
  <div class="bg-indigo-900 text-center py-4 lg:px-4">
    <div
      class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span
        class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
        >{{ userData.person }} ACC</span
      >
      <span class="font-semibold mr-2 text-left flex-auto">
        ({{ userData.acc_code }}) {{ id }}</span
      >
      <svg
        class="fill-current opacity-75 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
        />
      </svg>
    </div>
  </div>
  <div  v-if="show" id="alert-border-3" class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
        <div class="ms-3 text-sm font-medium" target="_blank" @click="show=false">
              Add Order Successfully! <a :href="orderDetailAdmin" class="font-semibold underline hover:no-underline">Order Detail</a>. Give it a click if you like.
         </div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-3" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
  </div>
  <div v-if="erorrCors" id="YOUR_ID" class="fixed z-50 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button @click="erorrCors= false" type="button" data-behavior="cancel" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <span class="sr-only">Close</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
              </div>
              <div class="sm:flex sm:items-start">
                  <div
                      class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                          Currently the Proxy server has failed
                      </h3>
                      <div class="mt-2">
                          <p class="text-sm text-gray-500">
                              Please click accept to authenticate the proxy server.<br>
                              Demo:
                         </p>
                         <div class="bg-yellow-300 mt-4">
                            <img src="https://hqvuongandong.nyc3.cdn.digitaloceanspaces.com/hd-4584-1714363684.png" class=" h-full w-full ">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" @click="openNewTab(urlRedirect)" data-behavior="commit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                      Accept
                  </button>
                  <button @click="erorrCors= false" type="button" data-behavior="cancel" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm">
                      Cancel
                  </button>
              </div>
          </div>
      </div>
  </div>
  <div class="container m-auto pt-3">
    <template v-if="loading" >
      <div class="text-center mb-3">
          <div role="status">
              <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
          </div>
      </div>
    </template>
    <template v-if="orderList.length">
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
          <li v-for="order in orderList" :key="order.order_id" class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">

              <div class="flex-1 min-w-0">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  Order Id: {{ order.order_id }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Date Order: US - {{ formatDateUS(order.update_time) }}
                 VN - {{ formatDate(order.update_time) }}
                </p>
              </div>
               <div class="flex-shrink-0">
                  <div class="flex items-center text-xs"  v-for="item in order.items" :key="item.product_id">
                     <div class="relative">
                      <img  class="mr-2 w-12 h-12 rounded-full cursor-pointer" :src="item.sku_image"  @click="showPopup = true" :alt="item.sku_name">
                      <!-- Popup -->
                      <div v-if="showPopup" class="fixed top-2/4 left-2/4 z-50 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 flex items-center justify-center bg-black bg-opacity-75">
                        <!-- Nội dung popup -->
                        <div class="bg-white p-4">
                          <!-- Hình ảnh hiển thị -->
                          <img class="w-full" :src="item.sku_image" :alt="item.sku_name">
                          <!-- Nút đóng popup -->
                          <button @click="showPopup = false" class="absolute top-0 right-0 -translate-y-1/2 p-2 text-black text-4xl">×</button>
                        </div>
                      </div>
                    </div>
                    <div>
                      {{item.quantity}} x {{item.sku_name}}
                    </div>
                  </div>
                </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                <template v-if="order.check">
                  <span
                    class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                    >Đã Add</span
                  >
                </template>
                <template v-else>
                  <span @click="callRequest(adminCronFail+id+'&ids='+order.order_id)"
                    class="bg-yellow-100 text-yellow-800 text-xs cursor-pointer font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
                    >Chưa Add</span
                  >
                </template>
              </div>
            </div>
          </li>
        </ul>
    </template>
    <template v-else>
      <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Hiện tại chưa có Order !</span> Chăm ACC  tý đi nhóoo.
      </div>
      </div>
    </template>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-relative-packages
import CryptoJS from 'crypto-js';
import moment from 'moment';
import 'moment-timezone';
// eslint-disable-next-line no-unused-vars
export default {
  data() {
    return {
      id: this.$route.query.id,
      token: this.$route.query.token,
      maximum: this.$route.query.maximum,
      userData: [], // You can store the fetched user data here
      orderList: [], // You can store the fetched user data here
      orderList2: [], // You can store the fetched user data here
      isActive: 111,
      orderEnd: [],
      showPopup: false,
      loading: true,
      page: 1,
      adminCronFail: 'https://hq.vuongandong.com/danang/api/app-cron-sync-tiktok-fail-label.php?shop_code=',
      AWAITING_SHIPMENT: 111,
      AWAITING_COLLECTION: 112,
      ON_HOLD: 105,
      app_key: '',
      app_secret: '',
      app_access_token: '',
      k2: 0,
      orderDetailAdmin: '',
      show: false,
      erorrCors: false,
      urlRedirect: '',
    };
  },
  created() {
    // Call a method to fetch user data when the component is created
    this.fetchShopData();
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    openNewTab(_url) {
      setTimeout(() => {
        this.fetchShopData();
      }, 10000);
      window.open(_url, '_blank');
    },
    callRequest(_url) {
      if (_url) {
        this.loading = true;
        // eslint-disable-next-line no-undef
        axios.get(_url)
          .then((response) => {
          // Xử lý dữ liệu từ phản hồi API
            console.log(response);
            // eslint-disable-next-line no-param-reassign
            this.fetchShopData();
            this.hide = true;
            // response = JSON.parse(response);
            // if (response.data.order_id) {
            //   this.fetchShopData();
            // }
          })
          .catch((error) => {
            // Xử lý lỗi nếu có
            console.error(error);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    handleClick(id) {
      // eslint-disable-next-line no-alert
      if (this.isActive !== id) {
        this.loading = true;
        this.isActive = id;
        this.fetchShopData(); // Gọi lại fetchShopData khi isActive thay đổi
      }
    },
    formatDate(timestamp) {
      return moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss');
    },
    formatDateUS(timestamp) {
      return moment.unix(timestamp).tz('America/Los_Angeles').format('YYYY-MM-DD HH:mm:ss');
    },
    getOrderListTiktok(
      appKey,
      secret,
      accessToken,
      pageSize,
      orderStatus,
      sortBy,
      createTimeFrom,
      createTimeTo,
    ) {
      const timestamp = Math.floor(Date.now() / 1000);
      const queries = {
        app_key: appKey,
        timestamp,
        page_size: pageSize,
        sort_by: sortBy,
        create_time_from: createTimeFrom,
        create_time_to: createTimeTo,
      };
      let string = '';
      if (this.isActive !== this.ON_HOLD) {
        queries.order_status = orderStatus;
        string += `&order_status=${orderStatus}`;
      }

      const path = '/api/orders/search';
      const sign = this.generateSHA256(path, queries, secret);

      // Define the URL of your proxy server
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

      // Construct the TikTok API URL with the proxy server URL
      const apiUrl = `https://open-api.tiktokglobalshop.com${path}?app_key=${appKey}&access_token=${accessToken}&sign=${sign}&timestamp=${timestamp}&page_size=${pageSize}${string}&sort_by=${sortBy}&create_time_from=${createTimeFrom}&create_time_to=${createTimeTo}`;
      // Use axios to make a POST request to the proxy server URL
      // eslint-disable-next-line no-undef
      return axios
        .post(proxyUrl + apiUrl, {})
        .then((response) => response.data)
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('Error:', error);
          if (error.response.data.includes('See /corsdemo for more info')) {
            this.erorrCors = true;
            this.urlRedirect = proxyUrl + apiUrl;
            // this.openNewTab(this.urlRedirect);
          }
          throw error;
        });
    },
    getOrderDetailTiktok(
      appKey,
      secret,
      accessToken,
      orderIdList,
    ) {
      const timestamp = Math.floor(Date.now() / 1000);
      const queries = {
        app_key: appKey,
        timestamp,
        order_id_list: `["${orderIdList}"]`,
      };

      const path = '/api/orders/detail/query';
      const sign = this.generateSHA256(path, queries, secret);

      // Define the URL of your proxy server
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

      // Construct the TikTok API URL with the proxy server URL
      let apiUrl = `https://open-api.tiktokglobalshop.com${path}?app_key=${appKey}&access_token=${accessToken}&sign=${sign}&timestamp=${timestamp}&order_id_list=`;
      // Use axios to make a POST request to the proxy server URL
      apiUrl += `["${orderIdList}"]`;
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
          // Tạo một đối tượng Date đại diện cho ngày hôm nay
          // Lấy ngày hôm nay với múi giờ Los Angeles
          const date = moment.tz('America/Los_Angeles');
          // Đặt thời gian trong ngày thành 0:00 AM
          date.startOf('day');
          date.subtract(60, 'minutes');
          // truwf ddi 1h để xly pending
          const date2 = moment.tz('America/Los_Angeles');
          // Đặt thời gian trong ngày thành 0:00 AM
          date2.startOf('day');
          // Đặt thời gian trong ngày thành 12:00 PM
          date2.hours(24).minutes(0).seconds(0);
          if (this.maximum === true) {
            // order nhiều >100
            // awaiting collection : nhiều thì date nên chia 3 khung giờ
            // eslint-disable-next-line eqeqeq
            if (this.page == 1) {
              date2.hours(8).minutes(0).seconds(0);
            } else if (this.page === 2) {
              date.hours(8).minutes(0).seconds(0);
              date2.hours(16).minutes(0).seconds(0);
            } else if (this.page === 3) {
              date.hours(16).minutes(0).seconds(0);
              date2.hours(24).minutes(0).seconds(0);
            }
          }
          const startTimestamp = date.unix();
          // Chuyển đổi đối tượng Moment thành timestamp
          const endTimestamp = date2.unix();
          this.app_key = response.data.app_key;
          this.app_secret = response.data.app_secret;
          this.app_access_token = response.data.app_access_token;
          return this.getOrderListTiktok(
            response.data.app_key,
            response.data.app_secret,
            response.data.app_access_token,
            100,
            this.isActive,
            'CREATE_TIME',
            startTimestamp,
            endTimestamp,
          // eslint-disable-next-line consistent-return
          ).then((orderListt) => {
            // eslint-disable-next-line no-console
            console.log(orderListt); // Log kết quả của getOrderListTiktok()

            // const listOrder = orderList.data.order_list.map((v) => v.order_id);
            this.loading = false;
            this.orderList = [];
            this.orderList2 = orderListt;
            if (this.orderList2.data.total > 0) {
            // Tạo mảng promises để chứa các promise từ việc gọi API kiểm tra order id
              const checkOrderPromises = [];

              // Lặp qua danh sách đơn hàng và gọi API kiểm tra từng order id
              if (this.isActive === this.ON_HOLD) {
                // eslint-disable-next-line no-unused-vars
                const orderOnHold = this.orderList2.data.order_list.filter((v) => (v.order_status === this.ON_HOLD ? v : ''));
                // eslint-disable-next-line no-param-reassign
                this.orderList2.data.order_list = orderOnHold;
              }
              this.orderList2.data.order_list.forEach((order) => {
                const orderId = order.order_id;
                // eslint-disable-next-line no-undef
                const checkOrderPromise = axios.get(
                  `https://hq.vuongandong.com/danang/api/order.php?act=check_order&order_id=${orderId}`,
                );
                // Đẩy promise vào mảng promises
                checkOrderPromises.push(checkOrderPromise);
              });
              // Sử dụng Promise.all để chờ tất cả các promise hoàn thành
              return Promise.all(checkOrderPromises)
                .then((responses) => {
                  // Xử lý kết quả từ mỗi promise
                  // eslint-disable-next-line no-shadow
                  let k = 0;
                  // eslint-disable-next-line no-shadow
                  this.k2 = 0;
                  // eslint-disable-next-line no-shadow
                  responses.forEach((response) => {
                    // console.log(response);
                    // Kiểm tra response để xác định xem order id đã tồn tại hay không
                    // eslint-disable-next-line camelcase
                    const result = this.orderList2.data.order_list.find(({ order_id }) => order_id === response.data.order_id);
                    console.log(result);
                    if (result) {
                      // eslint-disable-next-line no-param-reassign
                      this.orderList2.data.order_list[k].check = response.data;
                    }
                    // eslint-disable-next-line max-len
                    this.getOrderDetailTiktok(this.app_key, this.app_secret, this.app_access_token, this.orderList2.data.order_list[k].order_id).then((res) => {
                      if (res.data.order_list.length > 0) {
                        // eslint-disable-next-line no-param-reassign
                        this.orderList2.data.order_list[[this.k2]].items = res.data.order_list[0].item_list;
                        // console.log(this.orderList2.data.order_list[[this.k2]]);
                        this.k2 += 1;
                      }
                    });
                    // eslint-disable-next-line no-plusplus
                    k++;
                    this.orderEnd.push({
                      status: response.data.status,
                      order_id: response.data.order_id,
                    });
                  });

                  // Sau khi kiểm tra xong, gán orderList cho this.orderList
                  this.orderList = this.orderList2.data.order_list;
                  console.log(this.orderList);
                })
                .catch((error) => {
                  console.error('Error while checking orders:', error);
                });
            }
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

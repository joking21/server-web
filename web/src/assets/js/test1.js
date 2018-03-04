export default {
    data(){
      return{
          
      }
    },
    methods:{
        getFun(){
          $.ajax({
              url:"/requires/selectAll",
              type: 'GET',
              success(d) {
                 console.log(d);
              },
              error(data) {
                  console.log(data);
              }
          });
        },
        getEs6(){
            
        }
    },
    created(){
        console.log('pp');
      //   this.getFun();
    }
  }
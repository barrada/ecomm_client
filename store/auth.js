export const state = () => ({
    loggedIn:false,
    userInfo:''
  })

  export const mutations  = {
    login(state){
        // state.current = arabic;
      state.loggedIn = true;
        // state.current = arabic          
        
    },
    logout(state){
        // state.current = arabic;
      state.loggedIn = false;
      localStorage.setItem('token','')
      this.$router.push("/")
        // state.current = arabic      
        
    },
    setUserInfo(state,userdata){
        state.userInfo = JSON.parse(JSON.stringify(userdata))
    }
  }


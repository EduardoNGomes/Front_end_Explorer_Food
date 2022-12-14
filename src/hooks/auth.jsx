import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({children}){

  const [data, setData]= useState({})
  const [loading, setLoading] = useState(false)


  const signIn = async ({email, password}) => {
    setLoading(true)
    try {


      const response = await api.post('/sessions', {email, password})
      const {user, token} = response.data


      localStorage.setItem('@foodExplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodExplorer:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({user, token})

    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Não foi possível entrar')
      }

    }
    setLoading(false)

  }

  const signOut = async () => {
    localStorage.removeItem('@foodExplorer:token')
    localStorage.removeItem('@foodExplorer:user')


    setLoading(false)

    setData({})

  }


  useEffect(()=>{
    const token = localStorage.getItem('@foodExplorer:token')
    const user = localStorage.getItem('@foodExplorer:user')

    if(user && token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  },[])

  return(
    <AuthContext.Provider value={{
      user: data.user,
      signIn,
      signOut,
      loading,
    }}>
      {children}
    </AuthContext.Provider>
  )

}


function useAuth(){
  const context = useContext(AuthContext)
  
  return context
}
export { AuthProvider, useAuth }

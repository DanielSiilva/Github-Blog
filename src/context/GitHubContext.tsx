import {
    createContext,
    ReactNode,
    useEffect,
    useState,
} from 'react'
import { api } from '../lib/axios';


interface Profile {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company?: any;
  blog: string;
  location?: any;
  email?: any;
  hireable: boolean;
  bio: string;
  twitter_username?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}


  

  
interface GitHubContextType {
  profile: Profile
}
  
export const GitHubContext = createContext({} as GitHubContextType)
  
interface OrderContextProviderProps {
    children: ReactNode
}


  
export function GitHubContextProvider({ children }: OrderContextProviderProps) {
   const [profile, setProfile] = useState<Profile>({} as Profile)

   console.log(profile)
  
   

    async function fetchProfile (){
      const response = await api.get('/users/DanielSiilva')

      setProfile(response.data)

    }


    useEffect(()=>{
      fetchProfile()
    }, [])

    
    
  return (
    <GitHubContext.Provider
        value={{
         profile,



        }}
    >
        {children}
    </GitHubContext.Provider>
  )
}
  
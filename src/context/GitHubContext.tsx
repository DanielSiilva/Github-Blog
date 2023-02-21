import {
    createContext,
    ReactNode,
    useEffect,
    useState,
} from 'react'
import { api } from '../lib/axios';


interface Profile {
  name: string
  followers: string
  login: string
  avatar_url: string
  html_url: string
  company: string
  bio: string
}

interface Issue {
  title: string
  body: string
  created_at: string
  html_url: string
  number: string
  comments: string
  login: string
}


  

  
interface GitHubContextType {
  profile: Profile,
  issue: Issue | undefined,
  issues: Issue[],
  fetchIssuesId: (id: string) => Promise<void>
  
}
  
export const GitHubContext = createContext({} as GitHubContextType)
  
interface OrderContextProviderProps {
    children: ReactNode
}


  
export function GitHubContextProvider({ children }: OrderContextProviderProps) {
   const [profile, setProfile] = useState<Profile>({} as Profile)
   const [issue, setIssue] = useState<Issue | undefined>(undefined)
   const [issues, setIssues] = useState<Issue[]>([])
  
  
   

    async function fetchProfile (){
      const response = await api.get('/users/DanielSiilva')
      setProfile(response.data)
    }

    async function fetchIssues (){
      const response = await api.get('/repos/DanielSiilva/Github-Blog/issues')
      setIssues(response.data)
    }

    async function fetchIssuesId (id: string){
      const response = await api.get(`/repos/DanielSiilva/Github-Blog/issues/${id}`)
      setIssue(response.data)
    }
   


    useEffect(()=>{
      fetchProfile()
    }, [])

    useEffect(()=>{
      fetchIssues()
    }, [])
    
    
  return (
    <GitHubContext.Provider
        value={{
         profile,
         issue,
         issues,
         fetchIssuesId


        }}
    >
        {children}
    </GitHubContext.Provider>
  )
}
  
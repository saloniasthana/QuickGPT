import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyChats,dummyUserData } from "../assets/assets";


export const AppContext = createContext();
// const AppContext = createContext ();

export const AppContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const navigate = useNavigate();

    const fetchUser = async () => {
        setUser(dummyUserData);
    };
    
    const fetchUsersChats = async () => {
         setChats(dummyChats)
         setSelectedChat(dummyChats[0]);
    };
     
    useEffect(()=> {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme)
    },[theme]);

8520
      useEffect(() => {
        if(user){
            fetchUsersChats()
        }
        else {
            setChats([])
            setSelectedChat(null)  
        }
      },[user]);

    useEffect(()=> {
        fetchUser();
    },[] );

    // const value = {  
    //     navigate, user, setUser, fetchUser, chats, setChats,
    //     selectedChat, setSelectedChat,
    //     theme, setTheme
    
    // }
    
    return (
        <AppContext.Provider 
          value={{ chats, setChats, selectedChat, setSelectedChat, theme, setTheme, user, setUser, navigate }}> 
            {children}
        </AppContext.Provider>
    );
};


  

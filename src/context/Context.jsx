import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=>{

    const[input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult]= useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const delayPara = (index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord);
        },75*index)
    }

    const onSent = async (prompt)=>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);
        setPrevPrompts(prev=>[...prev,input]);

        const response = await run(input);
        let responseArray = response.split("**");
        //eg: "Hello, how **are** you?" => { "Hello, how "  , are"  ,  " you?" }
        let newResponse;
        for(let i=0;i<responseArray.length; i++){
            if(i==0 || i%2 !=1){
                //choosing the non zero even indexes and adding them to the new response without making any changes
                newResponse+=responseArray[i];
            }
            else{
                //choosing the odd indexes and making them bold before adding them back to the newResponse
                newResponse+= "<b>" + responseArray[i] + "</b>";
            }
        //newResponse:  "Hello, how **are** you?" => "Hello, how <b>are</b> you?"
        }
        //replacing * with a line break
        let newResponse2 = newResponse.split("*").join("</br>");

        //response text animation
        let newResponseArray= newResponse2.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+ " ");  //added an extra " " because we won't get the space because of splitting the response at " "
        }
        setLoading(false);
        setInput("");
    }



    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return(
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
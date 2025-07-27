import { useState } from "react"

export default function Form(){

    const [plainText,setPlainText] = useState("");
    const [cipherText,setCipherText] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("Plain text:", plainText);
    }

    return (
        <>
        <section className="flex justify-center">
            <article className="flex flex-col max-w-[800px] p-4">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center">
                <input type="text" 
                className="border-1 rounded-md min-w-[400px] min-h-[200px] p-2 my-2"
                placeholder="Enter your message here..." 
                value={plainText} 
                onChange={(e) => {setPlainText(e.target.value)}}
                aria-label="input text" required />
                <button type="submit" 
                className=" rounded-md bg-gray-700 text-white p-3"
                 >Encrypt</button>
                </form>

                <div className="border-1 rounded-md min-w-[400px] min-h-[200px] p-2 my-2">
                    <p>{cipherText}</p>
                </div>
            </article>

        </section>
        </>
    )
}
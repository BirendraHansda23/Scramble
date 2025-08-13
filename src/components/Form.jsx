import { useState } from "react"
import { SHA256 } from "crypto-js";
import { SHA3 } from "crypto-js";
import { AES } from "crypto-js";
import { DES } from "crypto-js";

export default function Form(){

    const [plainText,setPlainText] = useState("");
    const [cipher, setCipher] = useState({ text: "", key: null });
    const [method, setMethod] = useState({ methodName:"", reversible: null });
    const [copied, setCopied] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        console.log("Plain text:", plainText);
        console.log(method);
        
        if (method.methodName === "sha256") {
            setCipher({ text: SHA256(plainText).toString(), key: method.reversible?"key": null});
        }

        if (method.methodName === "sha3") {
            setCipher({ text: SHA3(plainText).toString(), key: method.reversible?"key": null});
        }

        if (method.methodName === "aes") {
        // AES encryption placeholder
        }

        if (method.methodName === "des") {
        // DES encryption placeholder
        }
        
        console.log(cipher);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(`${cipher.text} [key:${cipher.key}]`).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        });
    }

    return (
        <>
        <section className="flex justify-center">
            <article className="flex flex-col max-w-[800px] p-4">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center">

                    <label htmlFor="method">Choose an encryption method </label>
                    <select
                    className="bg-gray-100 py-1 rounded-md"
                    name="method"
                    id="method"
                    onChange={(e) => {
                        const value = e.target.value;
                        const reversibleMethods = ["aes","des"];
                        const rev = reversibleMethods.includes(value)? true : false;
                        setMethod({ methodName: value, reversible: rev });
                    }}
                    autoFocus
                    required
                    >
                    <optgroup label="Reversible">
                        <option value="aes">AES</option>
                        <option value="des">DES</option>
                    </optgroup>
                    <optgroup label="Irreversible">
                        <option value="sha256">SHA256</option>
                        <option value="sha3">SHA3</option>
                    </optgroup>
                    </select>

                    <input type="text" 
                    className="border-1 rounded-md min-w-[400px] min-h-[200px] p-2 my-2"
                    placeholder="Enter your message here..." 
                    value={plainText} 
                    onChange={(e) => {setPlainText(e.target.value)}}
                    aria-label="input text" required />


                    <button type="submit" 
                    className="rounded-md bg-blue-700 text-white p-3"
                    >Encrypt</button>
                </form>

                {cipher.text && <><textarea
                    readOnly
                    value={cipher.text}
                    rows={6}
                    className="w-full p-3 my-2 border rounded font-mono whitespace-pre-wrap break-all"
                    />
                    <button onClick={handleCopy}
                        className=" rounded-md bg-gray-900 text-white py-3 px-2"
                    >Copy to clip</button>
                    {copied && <p className="text-md text-green-600 mt-1">Copied!</p>}
                    </>
                }
                
            </article>

        </section>
        </>
    )
}
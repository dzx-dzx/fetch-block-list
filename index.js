import { JSDOM } from 'jsdom';
import axios from 'axios';

const dom = new JSDOM(await axios.get("https://bedrock.dev/zh/docs/stable/Addons#Blocks").then((res) => res.data))

const res = []

dom.window.document.querySelectorAll(".docs-content > table:nth-child(8) > tbody:nth-child(1) > tr").forEach((e) => {
    console.log(e.textContent.replace(/\s/g, ""))
    res.push(e.textContent.replace(/\s/g, ""))
})

res.shift()

console.log(res)
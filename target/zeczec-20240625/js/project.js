import { viewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@1.3.3/dist/PDMarkdownKit.js";
let pre;

document.addEventListener("DOMContentLoaded", async function () {

    await fetch('https://raw.githubusercontent.com/pardnchiu/PDMarkdownKit/refs/heads/main/README.md')
    .then(response => response.text())
    .then(data => {
        pre = data;
    })
    .catch(error => {
        console.error(error);
    });

    let app = new PD({
        id: "app",
        next: _ => {           
            const dom_viewer = new viewer({ 
                pre: pre, 
                delay: 50,
                fillMode: 0
            });

            "section.markdown".$._child([
                dom_viewer.body
            ]);

            dom_viewer.init();
        }
    })

});
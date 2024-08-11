import { viewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@1.0.1/dist/PDMarkdownKit.js";
let delay_observer;
const pre = `# PDMarkdownKit (JavaScript Library)

> PDMarkdownKit is a lightweight Markdown editor and viewer library based on JavaScript. It offers rich features to edit and preview Markdown content in real-time.

![](https://img.shields.io/github/v/release/pardnchiu/PDMarkdownKit?color=bb4444) ![](https://img.shields.io/npm/v/pdmarkdownkit?color=44bb44) ![](https://img.shields.io/github/size/pardnchiu/PDMarkdownKit/dist%2FPDMarkdownKit.js?color=4444bb) ![](https://img.shields.io/github/license/pardnchiu/PDMarkdownKit?color=bbbb44)<br>
![](https://img.shields.io/badge/tag-JavaScript%20Library-44bbbb) ![](https://img.shields.io/badge/creator-邱敬幃%20Pardn%20Chiu-bb44bb)

## Feature

- Provide standalone editor and viewer modules, supporting real-time preview and scroll synchronization.
- Support various Markdown syntax, including headings, bold, italic, links, images, code blocks, etc.
- Offer undo and redo functionality, and support file import and export (.md and .html formats).
- Rendered using [PDRenderKit](https://github.com/pardnchiu/PDRenderKit).
- Use [Font Awesome 6](https://fontawesome.com/v6/search) icons.
- Use [code-prettify](https://github.com/googlearchive/code-prettify) for code highlighting.

## Creator

<img src="https://pardn.io/image/head-s.jpg" style="float: left; margin-right: 0.5rem; width: 128px; height: 128px;">

### 邱敬幃 Pardn Chiu

[![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 
<br><br>

## License

This source code project is licensed under the [GPL-3.0](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) license.

## How to use
- ### Add dependency \`PDRenderKit\`
    \`\`\`Html
    <script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@[VERSION]/dist/PDRenderKit.js" copyright="Pardn Ltd"></script>
    \`\`\`
- ### Directly download the package
    \`\`\`Shell
    npm i pdmarkdownkit
    \`\`\`
- ### Or include via \`cdn.jsdelivr.net\`
    \`\`\`JAVASCRIPT
    import { editor,  iewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@[VERSION]/dist/PDMarkdownKit.js";

    const elm_editor = new editor({
        id: "",                             // Default PDMDEditor
        placeholder: "Content",             // Default Type here ..
        placeholderColor: "#ff000080",      // Default #0000ff1a
        focusBackgroundColor: "#ff00001a",  // Default #0000ffff
        focusTextColor: "#ff0000",          // Default bfbfbf
        showRow: 1,                         // Show number of rows, default 1
        fillMode: 1,                        // Fill mode, resizes with parent element, default 1
        preventRefresh: 0                   // Prevent refresh, default 0
    });

    const elm_viewer = new viewer({
        id: "",                 // Default PDMDViewer
        pre: "",                // Default content. Displayed when PDEditor is empty
        delay: 50,              // Update delay, default 300ms, minimum 1
        editor: elm_editor,     // Link to editor
        scrollSync: 1,          // Synchronize scrolling with editor
        tagPath: "?keyword=",   // Hashtag path, required to detect hashtags
        tagTarget: "_blank",    // Open hashtags in, default _blank
        fillMode: 1             // Fill mode, resizes with parent element, default 1
    });

    // Add elements to the view
    {DOM}.appendChild(elm_editor.body);
    {DOM}.appendChild(elm_viewer.body);

    // Initialize editor and viewer.
    elm_editor.init(pre: string);
    elm_viewer.init(pre: string);
    \`\`\`

## Heading

H1
===
\`\`\`
H1
===
\`\`\`

H2
---
\`\`\`
H2
---
\`\`\`

- # H1 → \`# H1\`
- ## H2 → \`## H2\`
- ### H3 → \`### H3\`
- #### H4 → \`#### H4\`
- ##### H5 → \`##### H5\`
- ###### H6 → \`##### H6\`

## Font Style

- ### Bold
    1. **Bold 1** → \`**Bold 1**\`
    2. <b>Bold 2</b> → \`<b>Bold 2</b>\`
    3. <strong>Bold 3</strong> → \`<strong>Bold 3</strong>\`
- ### Italic
    1. *Italic 1* → \`*Italic 1*\`
    2. _Italic 2_ → \`_Italic 2_\`
    3. <i>Italic 3</i> → \`<i>Italic 3</i>\`
    4. <em>Italic 4</em> → \`<em>Italic 4</em>\`
- ### Strile Through
    1. ~~Strile Through 1~~ → \`~~Strile Through 1~~\`
    2. <s>Strile Through 2</s> → \`<s>Strile Through 2</s>\`
- ### Under Line
    1. __Under Line 1__ → \`__Under Line 1__\` 
    2. <u>Under Line 2</u> → \`<u>Under Line 2</u>\`
- ### Mark
    1. ==Mark 1== → \`==Mark 1==\`
    2. <mark>Mark 2</mark> → \`<mark>Mark 2</mark>\`
- ### Superscripts / Subscripts
    1. x^2^ → \`x^2^\`
    2. H~2~O → \`H~2~O\`

## Horizontal Rule

- \`---\` ↓

---

- \`***\` ↓

***

## Blockquote

> Blockquote-1
> 
>> Blockquote-2
>>> Blockquote-3

## Table

| Title | Title |
| - | - |
| Value | Value |
| Value | Value |
| Value | Value |
| Value | Value |

## List

- Ordered List
    1. ol List 0
    2. ol List 0
    3. ol List 0
        1. ol List 1
            1. ol List 2
                1. ol List 3
                    1. ol List 4
- Unordered List
    - ul List 0
    - ul List 0
    - ul List 0
        - ul List 1
            - ul List 2
                - ul List 3
                    - ul List 4
- Mixed List
    - ul List 0
    - ul List 0
    - ul List 0
        1. ol List 1
        1. ol List 1
        1. ol List 1
            - ul List 2
            - ul List 2
            - ul List 2
                1. ol List 3
                    - ul List 4

## Code Block

- ### inline: 
    \`#Code-1\`
- ### Block: 
    \`\`\`
    #Code-2
    #Code-2
    #Code-2
    \`\`\`
- ### Block by Space*4: 

    #Code-3
    #Code-3
    #Code-3

## Link

- ### Link-1 https://github.com/pardnchiu/PDMarkdownKit/
- ### [Link-2](https://github.com/pardnchiu/PDMarkdownKit/)
- ### [Link-3](https://github.com/pardnchiu/PDMarkdownKit/ "Github")

## Image

- ### Image-1 
    ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
- ### Image-2 
    ![name](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
- ### Image-3 
    ![name](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit "title")
- ### Image-4 (width: 50%, height: 360) 
    ![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*360)
- ### Image + Link 
    [![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)](https://github.com/pardnchiu/PDMarkdownKit)
- ### Video
    ![](static/image/youtube.mov)

### Hashtag

#test1 #test2 #test3

## Shortcut Keys

- Supported
    - Copy: \`cmd/ctrl\` + \`c\`
    - Cut: \`cmd/ctrl\` + \`x\`
    - Paste: \`cmd/ctrl\` + \`v\`
    - Undo: \`cmd/ctrl\` + \`z\`
    - Redo: \`cmd/ctrl\` + \`shift\` + \`z\`
    - Bold: \`cmd/ctrl\` + \`b\`
    - Italic: \`cmd/ctrl\` + \`i\`
    - Strikethrough: \`cmd/ctrl\` + \`s\`
    - Underline: \`cmd/ctrl\` + \`u\`
    - Mark: \`cmd/ctrl\` + \`m\`
    - Superscript: \`cmd/ctrl\` + \`ArrowUp\`
    - Subscript: \`cmd/ctrl\` + \`ArrowDown\`
    - Code block: \`cmd/ctrl\` + \`k\`
- Disabled
    - Refresh: \`cmd/ctrl\` + \`r\` or \`F5\`

***

*All translations powered by ChatGPT*

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)`;

(_ => {
  document.addEventListener("DOMContentLoaded", function () {
    const body = new PD({
      id: "body",
      data: {
        list_4: Array.from({ length: 4 }, (_, i) => i + 1),
        list_8: Array.from({ length: 8 }, (_, i) => i + 1)
      },
      event: {
        tab: _ => {
          this.$pre().$$class("show") ? this.$pre().class_("show") : this.$pre()._class("show")
        }
      },
      next: _ => {
        (_ => {
          updateShadow();
          document.body.addEventListener("scroll", function () {
            updateShadow();
          });
    
          function updateShadow() {
            const y = document.body.$y;
            const bottom = document.body.scrollHeight - "footer".$.clientHeight - document.body.clientHeight;
    
            (function () {
              if (!"nav".$) return;
              if (y <= 0) return "nav".$.style_("boxShadow");
              else if (y >= 32) return "nav".$._style({
                boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
              });
              "nav".$._style({
                boxShadow: `0 ${0.125 * y / 32}rem ${0.25 * y / 32}rem rgba(0, 0, 0, ${0.1 * y / 32})`
              });
            }());
    
            (function () {
              if (!"section.float-bottom".$) return;
              const value = bottom - y;
              if (value <= 0) {
                return "section.float-bottom".$.style_("boxShadow");
              }
              else if (value >= 32) {
                return "section.float-bottom".$._style({
                  boxShadow: "0 -0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
                });
              };
              "section.float-bottom".$._style({
                boxShadow: `0 -${0.125 * value / 32}rem ${0.25 * value / 32}rem rgba(0, 0, 0, ${0.1 * value / 32})`
              });
            }());
          };
        })();

        setTimeout(_ => {
          const br = "blog".$.$sel("section.br");
          if (br) {
            const top = $vh - br.$h;
            br._style({ top: `${(br.$h + 64 > $vh) ? top : 0}px` });

            if ("section[name='blog-content']".$ == null) {
              return;
            };

            const dom_viewer = new viewer({
              id: "",
              pre: pre,
              delay: 0
            });
            "blog".$.$child([0, 0])._child(dom_viewer.body, "section.page".$);
            dom_viewer.init();
          };
        }, 300);
      }
    })
  });
})();

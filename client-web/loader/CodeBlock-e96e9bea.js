"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CodeBlock-e96e9bea"],
    {
        896867: (e, o, r) => {
            r.r(o), r.d(o, { CodeBlock: () => v, default: () => x });
            var n = r(202784),
                t = r(325686),
                l = r(621555),
                a = r(245918);
            const c = (0, l.Z)({
                    loader: function () {
                        return r
                            .e("react-syntax-highlighter/refractor-core-import")
                            .then(r.t.bind(r, 692037, 23))
                            .then(function (e) {
                                return e.default || e;
                            });
                    },
                    isLanguageRegistered: function (e, o) {
                        return e.registered(o);
                    },
                    languageLoaders: a.Z,
                    registerLanguage: function (e, o, r) {
                        return e.register(r);
                    },
                }),
                i = {
                    'pre[class*="language-"]': { color: "#d4d4d4", fontSize: "13px", textShadow: "none", fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace', direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "1.5", MozTabSize: "4", OTabSize: "4", tabSize: "4", WebkitHyphens: "none", MozHyphens: "none", msHyphens: "none", hyphens: "none", padding: "1em", margin: ".5em 0", overflow: "auto", background: "#1e1e1e" },
                    'code[class*="language-"]': { color: "#d4d4d4", fontSize: "13px", textShadow: "none", fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace', direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "1.5", MozTabSize: "4", OTabSize: "4", tabSize: "4", WebkitHyphens: "none", MozHyphens: "none", msHyphens: "none", hyphens: "none" },
                    'pre[class*="language-"]::selection': { textShadow: "none", background: "#264F78" },
                    'code[class*="language-"]::selection': { textShadow: "none", background: "#264F78" },
                    'pre[class*="language-"] *::selection': { textShadow: "none", background: "#264F78" },
                    'code[class*="language-"] *::selection': { textShadow: "none", background: "#264F78" },
                    ':not(pre) > code[class*="language-"]': { padding: ".1em .3em", borderRadius: ".3em", color: "#db4c69", background: "#1e1e1e" },
                    ".namespace": { Opacity: ".7" },
                    "doctype.doctype-tag": { color: "#569CD6" },
                    "doctype.name": { color: "#9cdcfe" },
                    comment: { color: "#6a9955" },
                    prolog: { color: "#6a9955" },
                    punctuation: { color: "#d4d4d4" },
                    ".language-html .language-css .token.punctuation": { color: "#d4d4d4" },
                    ".language-html .language-javascript .token.punctuation": { color: "#d4d4d4" },
                    property: { color: "#9cdcfe" },
                    tag: { color: "#569cd6" },
                    boolean: { color: "#569cd6" },
                    number: { color: "#b5cea8" },
                    constant: { color: "#9cdcfe" },
                    symbol: { color: "#b5cea8" },
                    inserted: { color: "#b5cea8" },
                    unit: { color: "#b5cea8" },
                    selector: { color: "#d7ba7d" },
                    "attr-name": { color: "#9cdcfe" },
                    string: { color: "#ce9178" },
                    char: { color: "#ce9178" },
                    builtin: { color: "#ce9178" },
                    deleted: { color: "#ce9178" },
                    ".language-css .token.string.url": { textDecoration: "underline" },
                    operator: { color: "#d4d4d4" },
                    entity: { color: "#569cd6" },
                    "operator.arrow": { color: "#569CD6" },
                    atrule: { color: "#ce9178" },
                    "atrule.rule": { color: "#c586c0" },
                    "atrule.url": { color: "#9cdcfe" },
                    "atrule.url.function": { color: "#dcdcaa" },
                    "atrule.url.punctuation": { color: "#d4d4d4" },
                    keyword: { color: "#569CD6" },
                    "keyword.module": { color: "#c586c0" },
                    "keyword.control-flow": { color: "#c586c0" },
                    function: { color: "#dcdcaa" },
                    "function.maybe-class-name": { color: "#dcdcaa" },
                    regex: { color: "#d16969" },
                    important: { color: "#569cd6" },
                    italic: { fontStyle: "italic" },
                    "class-name": { color: "#4ec9b0" },
                    "maybe-class-name": { color: "#4ec9b0" },
                    console: { color: "#9cdcfe" },
                    parameter: { color: "#9cdcfe" },
                    interpolation: { color: "#9cdcfe" },
                    "punctuation.interpolation-punctuation": { color: "#569cd6" },
                    variable: { color: "#9cdcfe" },
                    "imports.maybe-class-name": { color: "#9cdcfe" },
                    "exports.maybe-class-name": { color: "#9cdcfe" },
                    escape: { color: "#d7ba7d" },
                    "tag.punctuation": { color: "#808080" },
                    cdata: { color: "#808080" },
                    "attr-value": { color: "#ce9178" },
                    "attr-value.punctuation": { color: "#ce9178" },
                    "attr-value.punctuation.attr-equals": { color: "#d4d4d4" },
                    namespace: { color: "#4ec9b0" },
                    'pre[class*="language-javascript"]': { color: "#9cdcfe" },
                    'code[class*="language-javascript"]': { color: "#9cdcfe" },
                    'pre[class*="language-jsx"]': { color: "#9cdcfe" },
                    'code[class*="language-jsx"]': { color: "#9cdcfe" },
                    'pre[class*="language-typescript"]': { color: "#9cdcfe" },
                    'code[class*="language-typescript"]': { color: "#9cdcfe" },
                    'pre[class*="language-tsx"]': { color: "#9cdcfe" },
                    'code[class*="language-tsx"]': { color: "#9cdcfe" },
                    'pre[class*="language-css"]': { color: "#ce9178" },
                    'code[class*="language-css"]': { color: "#ce9178" },
                    'pre[class*="language-html"]': { color: "#d4d4d4" },
                    'code[class*="language-html"]': { color: "#d4d4d4" },
                    ".language-regex .token.anchor": { color: "#dcdcaa" },
                    ".language-html .token.punctuation": { color: "#808080" },
                    'pre[class*="language-"] > code[class*="language-"]': { position: "relative", zIndex: "1" },
                    ".line-highlight.line-highlight": { background: "#f7ebc6", boxShadow: "inset 5px 0 0 #f7d87c", zIndex: "0" },
                },
                s = {
                    'code[class*="language-"]': { background: "hsl(230, 1%, 98%)", color: "hsl(230, 8%, 24%)", fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace', direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "1.5", MozTabSize: "2", OTabSize: "2", tabSize: "2", WebkitHyphens: "none", MozHyphens: "none", msHyphens: "none", hyphens: "none" },
                    'pre[class*="language-"]': { background: "hsl(230, 1%, 98%)", color: "hsl(230, 8%, 24%)", fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace', direction: "ltr", textAlign: "left", whiteSpace: "pre", wordSpacing: "normal", wordBreak: "normal", lineHeight: "1.5", MozTabSize: "2", OTabSize: "2", tabSize: "2", WebkitHyphens: "none", MozHyphens: "none", msHyphens: "none", hyphens: "none", padding: "1em", margin: "0.5em 0", overflow: "auto", borderRadius: "0.3em" },
                    'code[class*="language-"]::-moz-selection': { background: "hsl(230, 1%, 90%)", color: "inherit" },
                    'code[class*="language-"] *::-moz-selection': { background: "hsl(230, 1%, 90%)", color: "inherit" },
                    'pre[class*="language-"] *::-moz-selection': { background: "hsl(230, 1%, 90%)", color: "inherit" },
                    'code[class*="language-"]::selection': { background: "hsl(230, 1%, 90%)", color: "inherit" },
                    'code[class*="language-"] *::selection': { background: "hsl(230, 1%, 90%)", color: "inherit" },
                    'pre[class*="language-"] *::selection': { background: "hsl(230, 1%, 90%)", color: "inherit" },
                    ':not(pre) > code[class*="language-"]': { padding: "0.2em 0.3em", borderRadius: "0.3em", whiteSpace: "normal" },
                    comment: { color: "hsl(230, 4%, 64%)", fontStyle: "italic" },
                    prolog: { color: "hsl(230, 4%, 64%)" },
                    cdata: { color: "hsl(230, 4%, 64%)" },
                    doctype: { color: "hsl(230, 8%, 24%)" },
                    punctuation: { color: "hsl(230, 8%, 24%)" },
                    entity: { color: "hsl(230, 8%, 24%)", cursor: "help" },
                    "attr-name": { color: "hsl(35, 99%, 36%)" },
                    "class-name": { color: "hsl(35, 99%, 36%)" },
                    boolean: { color: "hsl(35, 99%, 36%)" },
                    constant: { color: "hsl(35, 99%, 36%)" },
                    number: { color: "hsl(35, 99%, 36%)" },
                    atrule: { color: "hsl(35, 99%, 36%)" },
                    keyword: { color: "hsl(301, 63%, 40%)" },
                    property: { color: "hsl(5, 74%, 59%)" },
                    tag: { color: "hsl(5, 74%, 59%)" },
                    symbol: { color: "hsl(5, 74%, 59%)" },
                    deleted: { color: "hsl(5, 74%, 59%)" },
                    important: { color: "hsl(5, 74%, 59%)" },
                    selector: { color: "hsl(119, 34%, 47%)" },
                    string: { color: "hsl(119, 34%, 47%)" },
                    char: { color: "hsl(119, 34%, 47%)" },
                    builtin: { color: "hsl(119, 34%, 47%)" },
                    inserted: { color: "hsl(119, 34%, 47%)" },
                    regex: { color: "hsl(119, 34%, 47%)" },
                    "attr-value": { color: "hsl(119, 34%, 47%)" },
                    "attr-value > .token.punctuation": { color: "hsl(119, 34%, 47%)" },
                    variable: { color: "hsl(221, 87%, 60%)" },
                    operator: { color: "hsl(221, 87%, 60%)" },
                    function: { color: "hsl(221, 87%, 60%)" },
                    url: { color: "hsl(198, 99%, 37%)" },
                    "attr-value > .token.punctuation.attr-equals": { color: "hsl(230, 8%, 24%)" },
                    "special-attr > .token.attr-value > .token.value.css": { color: "hsl(230, 8%, 24%)" },
                    ".language-css .token.selector": { color: "hsl(5, 74%, 59%)" },
                    ".language-css .token.property": { color: "hsl(230, 8%, 24%)" },
                    ".language-css .token.function": { color: "hsl(198, 99%, 37%)" },
                    ".language-css .token.url > .token.function": { color: "hsl(198, 99%, 37%)" },
                    ".language-css .token.url > .token.string.url": { color: "hsl(119, 34%, 47%)" },
                    ".language-css .token.important": { color: "hsl(301, 63%, 40%)" },
                    ".language-css .token.atrule .token.rule": { color: "hsl(301, 63%, 40%)" },
                    ".language-javascript .token.operator": { color: "hsl(301, 63%, 40%)" },
                    ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": { color: "hsl(344, 84%, 43%)" },
                    ".language-json .token.operator": { color: "hsl(230, 8%, 24%)" },
                    ".language-json .token.null.keyword": { color: "hsl(35, 99%, 36%)" },
                    ".language-markdown .token.url": { color: "hsl(230, 8%, 24%)" },
                    ".language-markdown .token.url > .token.operator": { color: "hsl(230, 8%, 24%)" },
                    ".language-markdown .token.url-reference.url > .token.string": { color: "hsl(230, 8%, 24%)" },
                    ".language-markdown .token.url > .token.content": { color: "hsl(221, 87%, 60%)" },
                    ".language-markdown .token.url > .token.url": { color: "hsl(198, 99%, 37%)" },
                    ".language-markdown .token.url-reference.url": { color: "hsl(198, 99%, 37%)" },
                    ".language-markdown .token.blockquote.punctuation": { color: "hsl(230, 4%, 64%)", fontStyle: "italic" },
                    ".language-markdown .token.hr.punctuation": { color: "hsl(230, 4%, 64%)", fontStyle: "italic" },
                    ".language-markdown .token.code-snippet": { color: "hsl(119, 34%, 47%)" },
                    ".language-markdown .token.bold .token.content": { color: "hsl(35, 99%, 36%)" },
                    ".language-markdown .token.italic .token.content": { color: "hsl(301, 63%, 40%)" },
                    ".language-markdown .token.strike .token.content": { color: "hsl(5, 74%, 59%)" },
                    ".language-markdown .token.strike .token.punctuation": { color: "hsl(5, 74%, 59%)" },
                    ".language-markdown .token.list.punctuation": { color: "hsl(5, 74%, 59%)" },
                    ".language-markdown .token.title.important > .token.punctuation": { color: "hsl(5, 74%, 59%)" },
                    bold: { fontWeight: "bold" },
                    italic: { fontStyle: "italic" },
                    namespace: { Opacity: "0.8" },
                    "token.tab:not(:empty):before": { color: "hsla(230, 8%, 24%, 0.2)" },
                    "token.cr:before": { color: "hsla(230, 8%, 24%, 0.2)" },
                    "token.lf:before": { color: "hsla(230, 8%, 24%, 0.2)" },
                    "token.space:before": { color: "hsla(230, 8%, 24%, 0.2)" },
                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item": { marginRight: "0.4em" },
                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": { background: "hsl(230, 1%, 90%)", color: "hsl(230, 6%, 44%)", padding: "0.1em 0.4em", borderRadius: "0.3em" },
                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": { background: "hsl(230, 1%, 90%)", color: "hsl(230, 6%, 44%)", padding: "0.1em 0.4em", borderRadius: "0.3em" },
                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": { background: "hsl(230, 1%, 90%)", color: "hsl(230, 6%, 44%)", padding: "0.1em 0.4em", borderRadius: "0.3em" },
                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": { background: "hsl(230, 1%, 78%)", color: "hsl(230, 8%, 24%)" },
                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": { background: "hsl(230, 1%, 78%)", color: "hsl(230, 8%, 24%)" },
                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": { background: "hsl(230, 1%, 78%)", color: "hsl(230, 8%, 24%)" },
                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": { background: "hsl(230, 1%, 78%)", color: "hsl(230, 8%, 24%)" },
                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": { background: "hsl(230, 1%, 78%)", color: "hsl(230, 8%, 24%)" },
                    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": { background: "hsl(230, 1%, 78%)", color: "hsl(230, 8%, 24%)" },
                    ".line-highlight.line-highlight": { background: "hsla(230, 8%, 24%, 0.05)" },
                    ".line-highlight.line-highlight:before": { background: "hsl(230, 1%, 90%)", color: "hsl(230, 8%, 24%)", padding: "0.1em 0.6em", borderRadius: "0.3em", boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)" },
                    ".line-highlight.line-highlight[data-end]:after": { background: "hsl(230, 1%, 90%)", color: "hsl(230, 8%, 24%)", padding: "0.1em 0.6em", borderRadius: "0.3em", boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)" },
                    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": { backgroundColor: "hsla(230, 8%, 24%, 0.05)" },
                    ".line-numbers.line-numbers .line-numbers-rows": { borderRightColor: "hsla(230, 8%, 24%, 0.2)" },
                    ".command-line .command-line-prompt": { borderRightColor: "hsla(230, 8%, 24%, 0.2)" },
                    ".line-numbers .line-numbers-rows > span:before": { color: "hsl(230, 1%, 62%)" },
                    ".command-line .command-line-prompt > span:before": { color: "hsl(230, 1%, 62%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-1": { color: "hsl(5, 74%, 59%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-5": { color: "hsl(5, 74%, 59%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-9": { color: "hsl(5, 74%, 59%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-2": { color: "hsl(119, 34%, 47%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-6": { color: "hsl(119, 34%, 47%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-10": { color: "hsl(119, 34%, 47%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-3": { color: "hsl(221, 87%, 60%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-7": { color: "hsl(221, 87%, 60%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-11": { color: "hsl(221, 87%, 60%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-4": { color: "hsl(301, 63%, 40%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-8": { color: "hsl(301, 63%, 40%)" },
                    ".rainbow-braces .token.token.punctuation.brace-level-12": { color: "hsl(301, 63%, 40%)" },
                    "pre.diff-highlight > code .token.token.deleted:not(.prefix)": { backgroundColor: "hsla(353, 100%, 66%, 0.15)" },
                    "pre > code.diff-highlight .token.token.deleted:not(.prefix)": { backgroundColor: "hsla(353, 100%, 66%, 0.15)" },
                    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
                    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
                    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
                    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
                    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
                    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
                    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
                    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
                    "pre.diff-highlight > code .token.token.inserted:not(.prefix)": { backgroundColor: "hsla(137, 100%, 55%, 0.15)" },
                    "pre > code.diff-highlight .token.token.inserted:not(.prefix)": { backgroundColor: "hsla(137, 100%, 55%, 0.15)" },
                    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
                    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
                    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
                    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
                    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
                    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
                    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
                    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
                    ".prism-previewer.prism-previewer:before": { borderColor: "hsl(0, 0, 95%)" },
                    ".prism-previewer-gradient.prism-previewer-gradient div": { borderColor: "hsl(0, 0, 95%)", borderRadius: "0.3em" },
                    ".prism-previewer-color.prism-previewer-color:before": { borderRadius: "0.3em" },
                    ".prism-previewer-easing.prism-previewer-easing:before": { borderRadius: "0.3em" },
                    ".prism-previewer.prism-previewer:after": { borderTopColor: "hsl(0, 0, 95%)" },
                    ".prism-previewer-flipped.prism-previewer-flipped.after": { borderBottomColor: "hsl(0, 0, 95%)" },
                    ".prism-previewer-angle.prism-previewer-angle:before": { background: "hsl(0, 0%, 100%)" },
                    ".prism-previewer-time.prism-previewer-time:before": { background: "hsl(0, 0%, 100%)" },
                    ".prism-previewer-easing.prism-previewer-easing": { background: "hsl(0, 0%, 100%)" },
                    ".prism-previewer-angle.prism-previewer-angle circle": { stroke: "hsl(230, 8%, 24%)", strokeOpacity: "1" },
                    ".prism-previewer-time.prism-previewer-time circle": { stroke: "hsl(230, 8%, 24%)", strokeOpacity: "1" },
                    ".prism-previewer-easing.prism-previewer-easing circle": { stroke: "hsl(230, 8%, 24%)", fill: "transparent" },
                    ".prism-previewer-easing.prism-previewer-easing path": { stroke: "hsl(230, 8%, 24%)" },
                    ".prism-previewer-easing.prism-previewer-easing line": { stroke: "hsl(230, 8%, 24%)" },
                };
            var d = r(392237),
                g = r(731708),
                u = r(154003),
                p = r(111677),
                h = r.n(p),
                m = r(720526),
                b = r(125363),
                k = r(601576),
                f = r(730372);
            const w = h().icf7f1a4,
                y = h().f88553c8;
            function v({ code: e, headerBarStyle: o, language: r }) {
                const l = (0, b.I0)(),
                    a = d.default.theme.paletteName,
                    p = n.useMemo(() => {
                        let e = { fontFamily: "monospace", lineHeight: 1.3, whiteSpace: "pre", fontSize: d.default.theme.fontSizesPx.subtext2, display: "block", width: "100%", boxSizing: "border-box", borderTopEndRadius: r ? "none" : d.default.theme.borderRadii.medium, borderTopStartRadius: r ? "none" : d.default.theme.borderRadii.medium, borderBottomLeftRadius: d.default.theme.borderRadii.medium, borderBottomRightRadius: d.default.theme.borderRadii.medium, padding: d.default.theme.spaces.space12, marginTop: "0" };
                        return "light" !== a && (e = { ...e, backgroundColor: d.default.theme.colors.gray50 }), e;
                    }, [r, a]),
                    h = n.useCallback(() => {
                        (0, f.DL)(e, r || "*"), l && l((0, k.fz)({ text: y, withAutoDismiss: !0 }));
                    }, [e, r, l]);
                return n.createElement(t.Z, { testID: "markdown-code-block" }, n.createElement(t.Z, { style: [C.headerBlock, o] }, n.createElement(g.ZP, { style: C.headerText }, r), n.createElement(t.Z, { style: C.headerRight }, n.createElement(u.ZP, { "aria-label": w, icon: n.createElement(m.default, null), onPress: h, size: "xSmall", type: "primaryText" }))), n.createElement(c, { customStyle: p, language: r || "text", style: d.default.isDarkMode() ? i : s }, e));
            }
            const C = d.default.create((e) => ({ headerBlock: { borderTopEndRadius: e.borderRadii.medium, borderTopStartRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: e.spaces.space2, paddingBottom: e.spaces.space2, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space8, alignItems: "center", width: "100%" }, headerText: { fontFamily: "monospace", fontSize: e.fontSizesPx.subtext2 }, headerRight: { alignItems: "end" }, copyButton: { borderRadius: e.borderRadii.xLarge } })),
                x = v;
        },
        730372: (e, o, r) => {
            r.d(o, { $E: () => u, DL: () => d, OR: () => g });
            var n = r(202784),
                t = r(576648);
            let l = !1;
            function a(e) {
                if (e instanceof HTMLElement)
                    if ("A" !== e.tagName || e.dataset.copyPreserve) Array.from(e.children).forEach(a);
                    else {
                        const o = document.createDocumentFragment();
                        for (; e.firstChild; ) o.appendChild(e.firstChild);
                        e.parentNode?.replaceChild(o, e);
                    }
            }
            function c(e, o) {
                const r = window.getComputedStyle(e).fontFamily.toLowerCase(),
                    n = r.includes("mono") || r.includes("courier") || o;
                (e.style.color = "black"), (e.style.backgroundColor = "transparent"), (e.style.fontFamily = n ? "monospace" : "sans-serif"), n && (e.style.fontSize = "10pt"), Array.from(e.children).forEach((e) => c(e, o));
            }
            function i(e, o, r) {
                const n = e.getElementsByClassName(o);
                Array.from(n).forEach((e) => {
                    e.style.display = r;
                });
            }
            function s(e) {
                let o = !0,
                    r = e?.cloneNode(!0);
                const n = window.getSelection();
                if (!r && n && n.rangeCount > 0) {
                    const e = n.getRangeAt(0).cloneContents(),
                        o = document.createElement("div");
                    o.appendChild(e), (r = o);
                }
                if (!r) return [!1, "", ""];
                i(r, "katex", "none"), i(r, "raw_katex", "inline"), i(r, "raw_katex_block", "block"), i(r, "omit-from-copy", "none");
                const t = document.createElement("div");
                (t.style.backgroundColor = "white"), t.appendChild(r), document.body.appendChild(t), a(r), c(r);
                const l = document.createRange();
                l.selectNodeContents(r);
                const s = window.getSelection(),
                    d = s.rangeCount ? s.getRangeAt(0) : null;
                s.removeAllRanges(), s.addRange(l);
                try {
                    document.execCommand("copy");
                } catch (e) {
                    o = !1;
                }
                const g = p(t).replace(/(\r\n|\n){3,}/g, (e) => e.slice(0, e.indexOf("\n", e.indexOf("\n") + 1)));
                const u = t.innerHTML;
                return document.body.removeChild(t), d && (s.removeAllRanges(), s.addRange(d)), [o, u, g];
            }
            function d(e, o) {
                l = !0;
                const r = document.createElement("div");
                r.style.backgroundColor = "white";
                const n = document.createElement("div");
                var t;
                (n.innerHTML = `<pre><code class="language-${o}">${((t = e), t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"))}</code></pre>`), c(n, !0), r.appendChild(n), document.body.appendChild(r);
                const a = document.createRange();
                a.selectNodeContents(r);
                const i = window.getSelection(),
                    s = i.rangeCount ? i.getRangeAt(0) : null;
                i.removeAllRanges(), i.addRange(a);
                try {
                    document.execCommand("copy");
                } catch (e) {}
                document.body.removeChild(r), s && (i.removeAllRanges(), i.addRange(s)), (l = !1);
            }
            function g(e, o) {
                l = !0;
                const [r] = s(e);
                !r && o && t.Z.setString(o), (l = !1);
            }
            function u() {
                n.useEffect(() => {
                    const e = (e) => {
                        const o = window.getSelection().rangeCount > 0;
                        if (
                            (e.target instanceof HTMLElement && ("INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName)) ||
                            !o ||
                            l ||
                            (function () {
                                const e = window.getSelection().getRangeAt(0).commonAncestorContainer;
                                let o = e.nodeType === Node.TEXT_NODE ? e.parentElement : e;
                                for (; o; ) {
                                    if ("CODE" === o.tagName || "PRE" === o.tagName) return !0;
                                    o = o.parentElement;
                                }
                                return !1;
                            })() ||
                            (function () {
                                const e = window.getSelection().getRangeAt(0).commonAncestorContainer;
                                let o = e.nodeType === Node.TEXT_NODE ? e.parentElement : e;
                                for (; o; ) {
                                    if ("INPUT" === o.tagName || "TEXTAREA" === o.tagName) return !0;
                                    o = o.parentElement;
                                }
                                return !1;
                            })()
                        )
                            return;
                        const [r, n, t] = s(null);
                        if (r) {
                            e.preventDefault();
                            const o = document.getElementById("react-native-stylesheet"),
                                r = `<style>${o?.innerText || ""}</style>${n}`;
                            null != e.clipboardData && e.clipboardData.setData("text/html", r), null != e.clipboardData && e.clipboardData.setData("text/plain", t);
                        }
                    };
                    return (
                        document.addEventListener("copy", e),
                        () => {
                            document.removeEventListener("copy", e);
                        }
                    );
                }, []);
            }
            function p(e) {
                if (null === e || (e.nodeType !== Node.TEXT_NODE && e.nodeType !== Node.ELEMENT_NODE)) return "";
                if (e.nodeType === Node.TEXT_NODE) return e.textContent.replace(/\t/g, "\t");
                let o = "";
                const r = Array.from(e.childNodes);
                for (const e of r) e && (o += p(e));
                switch (e.nodeName.toLowerCase()) {
                    case "br":
                    case "div":
                    case "li":
                    case "ul":
                    case "ol":
                        o += "\r\n";
                        break;
                    case "p":
                        o += "\r\n\r\n";
                }
                return o;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CodeBlock-e96e9bea.f4af9cfa.js.map

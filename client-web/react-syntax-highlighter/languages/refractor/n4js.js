"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_n4js"],
    {
        823360: (e) => {
            function t(e) {
                (e.languages.n4js = e.languages.extend("javascript", { keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/ })), e.languages.insertBefore("n4js", "constant", { annotation: { pattern: /@+\w+/, alias: "operator" } }), (e.languages.n4jsd = e.languages.n4js);
            }
            (e.exports = t), (t.displayName = "n4js"), (t.aliases = ["n4jsd"]);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_n4js.c3387f0a.js.map

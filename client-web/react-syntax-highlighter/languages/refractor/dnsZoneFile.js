"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["react-syntax-highlighter_languages_refractor_dnsZoneFile"],
    {
        560367: (e) => {
            function n(e) {
                (e.languages["dns-zone-file"] = {
                    comment: /;.*/,
                    string: { pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: !0 },
                    variable: [
                        { pattern: /(^\$ORIGIN[ \t]+)\S+/m, lookbehind: !0 },
                        { pattern: /(^|\s)@(?=\s|$)/, lookbehind: !0 },
                    ],
                    keyword: /^\$(?:INCLUDE|ORIGIN|TTL)(?=\s|$)/m,
                    class: { pattern: /(^|\s)(?:CH|CS|HS|IN)(?=\s|$)/, lookbehind: !0, alias: "keyword" },
                    type: { pattern: /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/, lookbehind: !0, alias: "keyword" },
                    punctuation: /[()]/,
                }),
                    (e.languages["dns-zone"] = e.languages["dns-zone-file"]);
            }
            (e.exports = n), (n.displayName = "dnsZoneFile"), (n.aliases = []);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/react-syntax-highlighter_languages_refractor_dnsZoneFile.b2bca5ea.js.map

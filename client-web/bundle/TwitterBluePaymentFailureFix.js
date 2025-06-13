"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBluePaymentFailureFix"],
    {
        213840: (e, t, n) => {
            n.r(t), n.d(t, { PURCHASE_ORIGINS_TO_RESOLUTION_PAGES: () => m, default: () => w });
            var o = n(202784),
                a = n(107267),
                l = n(190286),
                i = n(111677),
                c = n.n(i),
                r = n(516951);
            const u = c().hd50e064,
                s = c().j24c37b2,
                p = c().h3701ffe,
                g = c().a74821a0,
                f = c().dad69faa,
                m = Object.freeze({ apple: "https://apps.apple.com/account/billing", google: "https://play.google.com/store/account/subscriptions?sku=com.twitter.google.rogue.one.1.1&package=com.twitter.android" }),
                w = () => {
                    const e = (0, a.useHistory)(),
                        t = (0, a.useLocation)(),
                        n = () => e.goBack(),
                        i = t?.query?.originating_platform,
                        c = null != i && "string" == typeof i ? m[i.toLowerCase()] : null;
                    return null != c ? o.createElement(l.Z, { allowBackNavigation: !0, cancelButtonLabel: u, confirmButtonLabel: p, confirmButtonLink: c, headline: f, onCancel: n, onConfirm: r.Z, text: g }) : o.createElement(l.Z, { allowBackNavigation: !0, confirmButtonLabel: s, headline: f, onCancel: n, onConfirm: n, text: g, withCancelButton: !1 });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBluePaymentFailureFix.569d974a.js.map

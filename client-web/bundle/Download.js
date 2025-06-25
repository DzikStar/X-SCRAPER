"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Download"],
    {
        290402: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(807896),
                a = r(202784),
                s = r(182056),
                n = r(879113),
                i = r(392237),
                l = r(111677),
                c = r.n(l),
                d = r(968478);
            const p = c().aa6e3300,
                u = ({ retryMessage: e, ...t }, r) => {
                    const i = s.Z.isOnline();
                    return a.createElement(n.Z, (0, o.Z)({}, t, { icon: i ? void 0 : a.createElement(d.default, { style: m.icon }), retryMessage: i ? e : p }));
                },
                m = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = a.forwardRef(u);
        },
        951790: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(323265);
            const a = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = s(e),
                            r = [t.android, t.ios],
                            o = r.find((e) => e.matches());
                        return o ? [o] : r;
                    },
                    getiOSAppStoreLink(e) {
                        const t = s(e);
                        return t.ios.matches() ? t.ios.url : t.ios.webUrl;
                    },
                    getAndroidAppStoreLink(e) {
                        const t = s(e);
                        return t.android.matches() ? t.android.url : t.android.webUrl;
                    },
                    goToAppStore(e) {
                        const t = this.getAppStoreURLs(e);
                        t[0] && a.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        a.setLocation(e);
                    },
                },
                s = (e = "rwoiah") => ({ android: { platform: "android", matches: () => o.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => o.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                n = a;
        },
        57314: (e, t, r) => {
            r.r(t), r.d(t, { default: () => Z });
            var o = r(202784),
                a = r(325686),
                s = r(688715),
                n = r(731708),
                i = r(779610),
                l = r(392237),
                c = r(111677),
                d = r.n(c),
                p = r(951790),
                u = r(725516),
                m = r(264922);
            const h = d().afcad7f2,
                w = d().a6b0b41a,
                f = d().c365dcc6,
                b = (0, s.ju)("https://help.x.com/using-twitter#twitter-on-your-device"),
                g = { android: d().i8385a2c, ios: d().h201c4c2 };
            class y extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._appStoreUrls = p.Z.getAppStoreURLs("download")),
                        (this._handleDownloadClick = () => {
                            this.props.analytics.scribeAction("done");
                        });
                }
                render() {
                    return o.createElement(
                        m.Z,
                        { title: h },
                        o.createElement(a.Z, { style: S.itemContainer }, o.createElement(n.ZP, { color: "gray700", size: "subtext2" }, w)),
                        this._appStoreUrls.map(({ matches: e, platform: t, url: r, webUrl: o }, a) => this._renderAppStoreLink(e() ? r : o, g[t], a)),
                        o.createElement(i.Z, { key: "other", label: f, link: { external: !0, pathname: b }, onPress: this._handleDownloadClick }),
                    );
                }
                _renderAppStoreLink(e, t, r = 0) {
                    return o.createElement(i.Z, { key: r, label: t, link: { external: !0, pathname: e }, onPress: this._handleDownloadClick });
                }
            }
            const S = l.default.create((e) => ({ itemContainer: { alignItems: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, flexDirection: "row", paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space12, width: "100%" } })),
                Z = (0, u.Z)(y, { page: "download", section: "download" });
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(202784),
                a = r(476984),
                s = r.n(a),
                n = r(143778),
                i = r(750410),
                l = r(682830);
            const c = "failed",
                d = "loaded",
                p = "loading",
                u = "none";
            class m extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: a, icon: s, loadingMessage: n, onRequestRetry: d, render: m, renderFailure: h, retryMessage: w, retryable: f } = this.props;
                    switch (a) {
                        case c:
                            return f ? o.createElement(i.Z, { icon: s, onRequestRetry: d, retryMessage: w }) : r ? o.createElement(l.m, { failureMessage: r }) : h();
                        case p:
                            return o.createElement(l.J, { "aria-label": e, color: t, loadingMessage: n });
                        case u:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Download.8c7f75ea.js.map

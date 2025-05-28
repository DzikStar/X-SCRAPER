"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileMobileAppSpotlight", "icons/IconMediumPlus-js"],
    {
        202407: (e, t, n) => {
            n.r(t), n.d(t, { default: () => I });
            var a = n(807896),
                o = n(202784),
                r = n(325686),
                l = n(107267),
                i = n(154003),
                s = n(779610),
                c = n(392237),
                d = n(111677),
                u = n.n(d),
                p = n(509875),
                m = n(980407),
                b = n(800536),
                h = n(855488),
                g = n(731708),
                f = n(521219);
            const y = u().b772cd66,
                v = u().g4098f78,
                E = u().b949cdc6;
            function k(e) {
                const [t, n] = o.useState(e.values.url),
                    a = o.useMemo(() => t && (0, f.Z)(t), [t]),
                    { helpLink: l, inputLabel: s, onCancel: c, onChange: d, title: u } = e;
                function p() {
                    a || d(t);
                }
                return o.createElement(
                    m.Z,
                    { "aria-hidden": !1, backButtonType: "back", onBackClick: c, rightControl: o.createElement(i.ZP, { disabled: !t || !!a, onPress: p }, y), title: u },
                    o.createElement(
                        r.Z,
                        { style: C.container },
                        o.createElement(h.Z, {
                            autoFocus: !0,
                            errorText: a,
                            invalid: !!a,
                            label: s,
                            maxLength: f.c,
                            name: "url",
                            onChange: function (e) {
                                n(e.target.value);
                            },
                            onSubmitEditing: p,
                            value: t,
                        }),
                        o.createElement(g.ZP, { link: l, style: C.text, weight: "bold", withUnderline: !0 }, v),
                        o.createElement(g.ZP, { align: "center", color: "red500", style: C.removeApp }, E),
                    ),
                );
            }
            const C = c.default.create((e) => ({ container: { paddingBottom: e.spaces.space64 }, removeApp: { padding: e.spaces.space16, paddingTop: e.spaces.space40 }, text: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                S = u().b91d1394,
                Z = u().i2209530,
                w = Object.freeze({ IOS: "ios", ANDROID: "android" }),
                P = [
                    { key: w.IOS, label: u().aab2fae0, placeholder: u().af40a8e0, component: k, constants: { title: u().d3cd1160, helpLink: "", inputLabel: u().f2124008 } },
                    { key: w.ANDROID, label: u().f7d1a8e0, placeholder: u().af40a8e0, component: k, constants: { title: u().dc0d9d6a, helpLink: "", inputLabel: u().dd1605f0 } },
                ],
                A = Object.freeze({ APPLE_APP_STORE: 1, GOOGLE_PLAY_STORE: 2 });
            function I(e) {
                const t = (0, l.useHistory)(),
                    [n, c] = o.useState(),
                    d = { isDirty: !1, hasAllRequiredValues: !1, values: { appStoreListings: [] } },
                    u = o.useCallback(() => {
                        t.goBack({ backLocation: b.V5 });
                    }, [t]);
                function h() {}
                function g(e, t = !1) {
                    let n;
                    if (e.key === w.IOS) {
                        const e = d?.values?.appStoreListings?.find((e) => e.appStore === A.APPLE_APP_STORE);
                        n = e?.url;
                    } else if (e.key === w.ANDROID) {
                        const e = d?.values?.appStoreListings?.find((e) => e.appStore === A.GOOGLE_PLAY_STORE);
                        n = e?.url;
                    }
                    return !n && t ? e.placeholder : n;
                }
                function f() {
                    c(void 0);
                }
                if (n) {
                    const e = n.component,
                        t = { url: g(n) };
                    return o.createElement(e, (0, a.Z)({ onCancel: f, onChange: f, values: t }, n.constants));
                }
                return o.createElement(
                    m.Z,
                    {
                        "aria-hidden": !1,
                        backButtonType: "back",
                        onBackClick: u,
                        rightControl: (function () {
                            const e = !d.isDirty || !d.hasAllRequiredValues || false;
                            return o.createElement(i.ZP, { disabled: e, onPress: h }, Z);
                        })(),
                        title: S,
                    },
                    o.createElement(
                        r.Z,
                        { style: D.container },
                        P.map((e) => {
                            return o.createElement(s.Z, {
                                description: g(e, !0),
                                key: e.key,
                                label: e.label,
                                onPress:
                                    ((t = e),
                                    (e) => {
                                        e.preventDefault(), c(t);
                                    }),
                                thumbnail: o.createElement(p.default, { style: D.addIcon }),
                                thumbnailSize: "medium",
                            });
                            var t;
                        }),
                    ),
                );
            }
            const D = c.default.create((e) => ({ container: { paddingBottom: e.spaces.space64 }, addIcon: { color: e.colors.gray700, backgroundColor: e.colors.gray50, borderRadius: "50%", padding: e.spaces.space8 } }));
        },
        521219: (e, t, n) => {
            n.d(t, { Z: () => i, c: () => o });
            var a = n(111677);
            const o = 385,
                r = n.n(a)().b679ff6a,
                l = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,385}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
            function i(e) {
                return e.length > o ? r : l.test(e) ? void 0 : r;
            }
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                o = n(325686),
                r = n(191796),
                l = n(58399),
                i = n(731708),
                s = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: p = !1, label: m, link: b, onPress: h, paddingHorizontal: g, renderRightContent: f, role: y = "tab", styleOverride: v, testID: E = "pivot", thumbnail: k, thumbnailSize: C, withoutArrow: S = !1 } = e,
                        Z = [u.thumbnailContainer, "medium" === C && u.thumbnailContainerMedium],
                        w = "string" == typeof m ? a.createElement(i.ZP, null, m) : m,
                        P = "object" == typeof b && b.external && !b.openInSameFrame,
                        A = n ? ("string" == typeof n ? a.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${E}-description` }, n) : n) : null,
                        I = a.useMemo(() => ("space0" === g ? { paddingHorizontal: 0 } : { paddingHorizontal: g ? c.default.theme.spaces[g] : c.default.theme.componentDimensions.gutterHorizontal }), [g]);
                    return a.createElement(s.Z, { "aria-selected": "tab" === y ? p : null, disabled: d, link: d ? void 0 : b, onPress: h, role: y, style: [u.root, I, d && u.disabled, v], testID: E, withInteractiveStyling: !!b || !!h }, a.createElement(o.Z, { style: u.contentContainer }, k ? a.createElement(o.Z, { style: Z }, k) : null, a.createElement(o.Z, { style: u.content }, w, A), f ? f() : null, (!b && !h) || d || S ? null : P ? a.createElement(r.default, { style: u.icon }) : a.createElement(l.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        509875: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 32 32", children: a.createElement("g", null, a.createElement("path", { d: "M17 5h-2v10H5v2h10v10h2V17h10v-2H17V5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 32, height: 32 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileMobileAppSpotlight.af55452a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileMobileAppSpotlight"],
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
                d = n(332920),
                p = n.n(d),
                u = n(509875),
                m = n(980407),
                b = n(800536),
                f = n(855488),
                h = n(731708),
                g = n(521219);
            const y = p().b772cd66,
                k = p().g4098f78,
                C = p().b949cdc6;
            function E(e) {
                const [t, n] = o.useState(e.values.url),
                    a = o.useMemo(() => t && (0, g.Z)(t), [t]),
                    { helpLink: l, inputLabel: s, onCancel: c, onChange: d, title: p } = e;
                function u() {
                    a || d(t);
                }
                return o.createElement(
                    m.Z,
                    { "aria-hidden": !1, backButtonType: "back", onBackClick: c, rightControl: o.createElement(i.ZP, { disabled: !t || !!a, onPress: u }, y), title: p },
                    o.createElement(
                        r.Z,
                        { style: v.container },
                        o.createElement(f.Z, {
                            autoFocus: !0,
                            errorText: a,
                            invalid: !!a,
                            label: s,
                            maxLength: g.c,
                            name: "url",
                            onChange: function (e) {
                                n(e.target.value);
                            },
                            onSubmitEditing: u,
                            value: t,
                        }),
                        o.createElement(h.ZP, { link: l, style: v.text, weight: "bold", withUnderline: !0 }, k),
                        o.createElement(h.ZP, { align: "center", color: "red500", style: v.removeApp }, C),
                    ),
                );
            }
            const v = c.default.create((e) => ({ container: { paddingBottom: e.spaces.space64 }, removeApp: { padding: e.spaces.space16, paddingTop: e.spaces.space40 }, text: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                S = p().b91d1394,
                P = p().i2209530,
                Z = Object.freeze({ IOS: "ios", ANDROID: "android" }),
                w = [
                    { key: Z.IOS, label: p().aab2fae0, placeholder: p().af40a8e0, component: E, constants: { title: p().d3cd1160, helpLink: "", inputLabel: p().f2124008 } },
                    { key: Z.ANDROID, label: p().f7d1a8e0, placeholder: p().af40a8e0, component: E, constants: { title: p().dc0d9d6a, helpLink: "", inputLabel: p().dd1605f0 } },
                ],
                A = Object.freeze({ APPLE_APP_STORE: 1, GOOGLE_PLAY_STORE: 2 });
            function I(e) {
                const t = (0, l.useHistory)(),
                    [n, c] = o.useState(),
                    d = { isDirty: !1, hasAllRequiredValues: !1, values: { appStoreListings: [] } },
                    p = o.useCallback(() => {
                        t.goBack({ backLocation: b.V5 });
                    }, [t]);
                function f() {}
                function h(e, t = !1) {
                    let n;
                    if (e.key === Z.IOS) {
                        const e = d?.values?.appStoreListings?.find((e) => e.appStore === A.APPLE_APP_STORE);
                        n = e?.url;
                    } else if (e.key === Z.ANDROID) {
                        const e = d?.values?.appStoreListings?.find((e) => e.appStore === A.GOOGLE_PLAY_STORE);
                        n = e?.url;
                    }
                    return !n && t ? e.placeholder : n;
                }
                function g() {
                    c(void 0);
                }
                if (n) {
                    const e = n.component,
                        t = { url: h(n) };
                    return o.createElement(e, (0, a.Z)({ onCancel: g, onChange: g, values: t }, n.constants));
                }
                return o.createElement(
                    m.Z,
                    {
                        "aria-hidden": !1,
                        backButtonType: "back",
                        onBackClick: p,
                        rightControl: (function () {
                            const e = !d.isDirty || !d.hasAllRequiredValues || false;
                            return o.createElement(i.ZP, { disabled: e, onPress: f }, P);
                        })(),
                        title: S,
                    },
                    o.createElement(
                        r.Z,
                        { style: L.container },
                        w.map((e) => {
                            return o.createElement(s.Z, {
                                description: h(e, !0),
                                key: e.key,
                                label: e.label,
                                onPress:
                                    ((t = e),
                                    (e) => {
                                        e.preventDefault(), c(t);
                                    }),
                                thumbnail: o.createElement(u.default, { style: L.addIcon }),
                                thumbnailSize: "medium",
                            });
                            var t;
                        }),
                    ),
                );
            }
            const L = c.default.create((e) => ({ container: { paddingBottom: e.spaces.space64 }, addIcon: { color: e.colors.gray700, backgroundColor: e.colors.gray50, borderRadius: "50%", padding: e.spaces.space8 } }));
        },
        521219: (e, t, n) => {
            n.d(t, { Z: () => i, c: () => o });
            var a = n(332920);
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
                    const { decoration: t, description: n, disabled: d = !1, isActive: u = !1, label: m, link: b, onPress: f, paddingHorizontal: h, renderRightContent: g, role: y = "tab", styleOverride: k, testID: C = "pivot", thumbnail: E, thumbnailSize: v, withoutArrow: S = !1 } = e,
                        P = [p.thumbnailContainer, "medium" === v && p.thumbnailContainerMedium],
                        Z = "string" == typeof m ? a.createElement(i.ZP, null, m) : m,
                        w = "object" == typeof b && b.external && !b.openInSameFrame,
                        A = n ? ("string" == typeof n ? a.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, n) : n) : null,
                        I = a.useMemo(() => ("space0" === h ? { paddingHorizontal: 0 } : { paddingHorizontal: h ? c.default.theme.spaces[h] : c.default.theme.componentDimensions.gutterHorizontal }), [h]);
                    return a.createElement(s.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : b, onPress: f, role: y, style: [p.root, I, d && p.disabled, k], testID: C, withInteractiveStyling: !!b || !!f }, a.createElement(o.Z, { style: p.contentContainer }, E ? a.createElement(o.Z, { style: P }, E) : null, a.createElement(o.Z, { style: p.content }, Z, A), g ? g() : null, (!b && !f) || d || S ? null : w ? a.createElement(r.default, { style: p.icon }) : a.createElement(l.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileMobileAppSpotlight.cb4f3f1a.js.map

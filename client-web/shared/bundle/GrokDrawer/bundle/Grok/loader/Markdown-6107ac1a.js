"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a", "icons/IconGrokDeepsearch-js", "icons/IconGrokEdit-js", "icons/IconGrokFullLogo-js", "icons/IconGrokModeFun-js", "icons/IconGrokSendButton-js", "icons/IconHashStroke-js", "icons/IconHeadPhones-js", "icons/IconIceCream-js", "icons/IconIllustrationNotificationsSecurityUnknown-js", "icons/IconIllustrationSafetyReportUser-js", "icons/IconInstitutionFill-js", "icons/IconKnife-js", "icons/IconLightBlubReasoning-js", "icons/IconLocationHoursCaret-js", "icons/IconLogoMessenger-js", "icons/IconLogoSlack-js", "icons/IconManageDeckStroke-js", "icons/IconMediumPlus-js", "icons/IconMegaphoneStroke-js", "icons/IconNotificationsOff-js", "icons/IconNotificationsSecurityAlert-js", "icons/IconOverflow-js", "icons/IconPhotoReorder-js", "icons/IconPlayCircleFill-js", "icons/IconPlusCircleFill-js", "icons/IconPointer-js", "icons/IconQuoteBlock-js", "icons/IconReasoningLightBulbEmpty-js", "icons/IconShield-js", "icons/IconSortDown-js", "icons/IconStockDirectionArrow-js", "icons/IconStockGraph-js", "icons/IconSuperlikesStroke-js", "icons/IconTimelineStroke-js", "icons/IconToken-js", "icons/IconTwitterCoinGray-js", "icons/IconUnlock-js", "icons/IconVideoExpand-js", "icons/IconWriteStroke-js", "icons/IconYelpRating35NoMargin-js", "icons/IconYelpRating50NoMargin-js"],
    {
        927974: (e, t, l) => {
            l.d(t, { Z: () => n });
            var i,
                r,
                a = {
                    fragment: {
                        argumentDefinitions: (i = [{ defaultValue: null, kind: "LocalArgument", name: "cursor" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "personalityHooksAllPersonalitiesQuery",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GrokUserPersonalitiesResponse",
                                kind: "LinkedField",
                                name: "grok_user_personalities",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "GrokPersonalityWithId",
                                        kind: "LinkedField",
                                        name: "personalities",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "GrokPersonality",
                                                kind: "LinkedField",
                                                name: "personality",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "personality", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "initial_user_prompt", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "personality_id", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: i, kind: "Operation", name: "personalityHooksAllPersonalitiesQuery", selections: r },
                    params: { id: "a5moJWybwfm8-u5Tx05vIw", metadata: {}, name: "personalityHooksAllPersonalitiesQuery", operationKind: "query", text: null },
                };
            a.hash = "e71ee736ad72fd1f1dcd522244f21f22";
            const n = a;
        },
        246851: (e, t, l) => {
            l.d(t, { Z: () => r });
            var i = l(202784);
            function r(e) {
                const t = i.useRef();
                return (
                    i.useEffect(() => {
                        t.current = e;
                    }),
                    t.current
                );
            }
        },
        933340: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)(
                    "svg",
                    {
                        ...e,
                        role: e["aria-label"] ? e.role || "img" : void 0,
                        "aria-hidden": void 0 === e["aria-label"],
                        style: [n.Z.root, e.style],
                        viewBox: "0 0 24 24",
                        children: i.createElement(
                            "g",
                            null,
                            i.createElement("path", {
                                clipRule: "evenodd",
                                d: "M12.026 9.017c.772 0 1.42-.352 1.603-1.005.024-.09.036-.181.036-.275l.017-2.353v-.03l.002-.03c0-.904-.73-1.324-1.645-1.324-.91 0-1.65.488-1.657 1.384l-.002 2.372c-.001.093.008.185.027.275.158.68.822.986 1.619.986zm-4.248-.138c.034.303 0 .553-.264.824-.6.61-1.657.613-2.16.306-.464-.281-3.523-2.542-4.02-2.911l-.13-.13c-.148-.203-.405-.812.067-1.38.412-.496 1.386-.619 1.99-.335.03.014.06.028.092.041.097.043.194.086.28.15l3.618 2.623c.257.225.49.48.527.812zm14.95-3.197c-.412-.498-1.387-.62-1.99-.337-.031.015-.063.03-.095.043-.096.043-.192.086-.278.148L16.748 8.16c-.258.225-.491.48-.528.812-.033.303 0 .553.265.823.599.61 1.656.614 2.16.307.45-.273 3.346-2.412 3.971-2.874l.05-.037.13-.13c.148-.203.404-.812-.067-1.38zm-5.543 12.314h2.127v-.001h2.151c.048 0 .09.001.09-.076.005-.386-.01-.769-.113-1.142-.29-1.052-.923-1.79-1.991-2.093-.863-.246-1.734-.225-2.59.05-.632.204-1.133.594-1.49 1.156-.466.735-.575 1.544-.425 2.386.198 1.103.856 1.836 1.896 2.23.53.202 1.085.252 1.648.242.326-.006.647-.034.963-.113.97-.243 1.663-.798 1.99-1.767.03-.085.024-.115-.078-.115-.621.002-1.242.002-1.863 0-.073 0-.114.026-.156.082-.145.194-.33.336-.565.406-.325.098-.648.078-.967-.02-.369-.114-.59-.369-.689-.737-.023-.086-.033-.174-.044-.263l-.01-.09c-.017-.123-.006-.135.116-.135zm2.268-1.169h-1.418l-.824.001c-.069 0-.09-.01-.072-.088.117-.538.533-.89 1.083-.91.301-.011.59.017.847.197.256.181.385.441.464.734.019.07-.024.068-.064.066h-.016zM5.479 15.41v-.172c-.001-.151-.002-.293.003-.433.002-.085-.019-.114-.11-.114-.645.003-1.29.003-1.936 0-.084 0-.114.017-.114.109.002 1.873.002 3.745 0 5.618 0 .087.021.112.11.112.64-.005 1.277-.005 1.916 0 .105.001.134-.022.134-.132-.004-1.023-.003-2.046.005-3.069.001-.235.03-.473.162-.68.22-.344.635-.502 1.054-.398.355.09.572.316.643.678.038.194.044.391.044.588v.753l-.001 2.147c0 .085.018.113.11.113.648-.002 1.297-.002 1.946 0 .087.001.105-.027.105-.108-.002-.779-.003-1.558-.002-2.338v-.18c-.002-.208-.004-.416.02-.622.035-.315.116-.605.36-.833.395-.37 1.284-.366 1.469.417.05.224.074.451.072.68.002.957.002 1.912-.002 2.868 0 .094.025.117.118.117.638-.005 1.277-.005 1.915 0 .1 0 .13-.024.13-.127-.003-.662-.003-1.323-.003-1.984l-.001-1.656c0-.24-.019-.478-.059-.715-.063-.354-.213-.665-.48-.907-.531-.48-1.171-.614-1.859-.53-.694.086-1.26.41-1.655 1-.043.065-.062.053-.101-.002-.231-.34-.514-.614-.895-.784-.267-.116-.546-.186-.836-.208-.617-.054-1.199.048-1.732.377-.185.115-.349.258-.53.415zm6.352-5.619c2.118 0 3.74.384 4.968.995v.001c.955.474 1.67 1.084 2.191 1.759l-14.285.001.005-.007h-.018c1.21-1.628 3.59-2.749 7.139-2.749z",
                                fillRule: "evenodd",
                            }),
                        ),
                    },
                    { writingDirection: t },
                );
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        664345: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 16 16", children: i.createElement("g", null, i.createElement("path", { d: "M1.333 8.882C3 14.795 12 13.886 12 9.036c0-2.737-4.038-3.307-4.856-1.921-.616 1.043 2.328.961 1.712 2.004C8.038 10.505 4 9.935 4 7.2c0-5.075 9.667-6.049 10.667-.136", fill: "none", stroke: "currentColor", strokeWidth: "1.333" })) }, { writingDirection: t });
            };
            o.metadata = { width: 16, height: 16 };
            const c = o;
        },
        386594: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M21 18s-1.334 1.544-2.834 1.544-2.707-1.429-4.18-1.429c-1.472 0-2.395.804-2.986 1.43m7.414-15.13l.172.17c.78.782.78 2.048 0 2.83l-12 12c-.375.374-.884.585-1.414.585H3v-2.172c0-.53.21-1.039.586-1.414l12-12c.78-.78 2.047-.78 2.828 0z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        542832: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 88 32", children: i.createElement("g", null, i.createElement("path", { d: "M76.717 24.208V7.916h2.596v10.752l5.493-6.257h3.148l-4.94 5.362L88 24.208h-3.102l-4.04-5.53-1.545-.01v5.54h-2.596zm-7.876.274c-3.86 0-5.951-2.716-5.951-6.184 0-3.491 2.09-6.184 5.951-6.184 3.884 0 5.952 2.693 5.952 6.184 0 3.468-2.068 6.184-5.952 6.184zm-3.24-6.184c0 2.692 1.471 4.039 3.24 4.039 1.793 0 3.24-1.347 3.24-4.04 0-2.692-1.447-4.06-3.24-4.06-1.769 0-3.24 1.368-3.24 4.06zm-9.939 5.91v-9.926l2.184-1.871h4.642v2.19h-4.229v9.607h-2.597zm-9.929.301c-4.95 0-7.9-3.564-7.9-8.424 0-4.906 3.056-8.557 7.997-8.557 3.86 0 6.687 1.962 7.353 5.613H50.22c-.437-2.076-2.183-3.24-4.39-3.24-3.561 0-5.124 3.058-5.124 6.184 0 3.126 1.563 6.16 5.125 6.16 3.4 0 4.895-2.441 5.01-4.472h-5.125v-2.362h7.744l-.013 1.235c0 4.59-1.886 7.863-7.713 7.863zM12.98 20.54l11.175-8.19c.547-.4 1.33-.244 1.591.38 1.374 3.288.76 7.241-1.973 9.955-2.733 2.714-6.536 3.31-10.012 1.954l-3.797 1.745c5.446 3.697 12.06 2.782 16.193-1.324 3.278-3.255 4.293-7.692 3.344-11.693l.008.009c-1.376-5.878.339-8.227 3.852-13.031l.25-.345-4.624 4.59v-.014l-16.01 15.968m-2.302 1.987c-3.91-3.707-3.235-9.446.1-12.755 2.467-2.449 6.508-3.448 10.036-1.979l3.788-1.737c-.682-.49-1.557-1.017-2.561-1.387-4.537-1.854-9.97-.931-13.658 2.728-3.547 3.523-4.663 8.94-2.747 13.561 1.431 3.454-.915 5.898-3.278 8.364C1.517 30.2.677 31.074 0 32l10.672-9.466" })) }, { writingDirection: t });
            };
            o.metadata = { width: 88, height: 32 };
            const c = o;
        },
        534222: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { clipRule: "evenodd", d: "M9.5 7C8.672 7 8 8.119 8 9.5S8.672 12 9.5 12 11 10.881 11 9.5 10.328 7 9.5 7zM16 9.5c0 1.381-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7 16 8.119 16 9.5zm4.523 8.195c1.126-1.686 1.727-3.668 1.727-5.695-.003-2.718-1.084-5.323-3.005-7.245C17.323 2.834 14.718 1.753 12 1.75c-2.027 0-4.009.601-5.695 1.727-1.685 1.127-2.999 2.728-3.775 4.6-.776 1.873-.979 3.934-.583 5.923.395 1.988 1.372 3.814 2.805 5.248 1.434 1.433 3.26 2.41 5.248 2.805 1.989.395 4.05.193 5.922-.583 1.873-.776 3.474-2.09 4.6-3.775zM18.86 7.417c.906 1.356 1.39 2.951 1.39 4.583-.002 2.187-.872 4.284-2.419 5.831-1.547 1.547-3.644 2.417-5.831 2.419-1.632 0-3.227-.484-4.583-1.39-1.357-.907-2.415-2.195-3.039-3.703-.624-1.507-.788-3.166-.47-4.767.319-1.6 1.105-3.07 2.258-4.224C7.32 5.013 8.79 4.226 10.39 3.91c1.6-.319 3.26-.155 4.767.469 1.508.624 2.796 1.682 3.703 3.039zM12 17.997c2.85 0 5.159-1.983 5.159-4.34H6.84c0 2.357 2.31 4.34 5.159 4.34z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        317976: (e, t, l) => {
            l.r(t), l.d(t, { default: () => d });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101),
                o = l(369594);
            const c = (e = {}) => {
                const { direction: t } = (0, a.Z)(),
                    l = (0, o.M)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 32 32", children: i.createElement("g", null, i.createElement("defs", null, i.createElement("mask", { id: `${l}-a` }, i.createElement("path", { d: "M0 0h32v32H0z", fill: "#fff" }), i.createElement("path", { d: "M15.25 12.562l-3.78 3.783-1.065-1.06L16 9.69l5.595 5.593-1.065 1.06-3.78-3.782v10.19h-1.5v-10.19z", fill: "#000" }))), i.createElement("rect", { fill: "currentColor", height: "30", mask: `url(#${l}-a)`, rx: "15", width: "30", x: "1", y: "1" })) }, { writingDirection: t });
            };
            c.metadata = { width: 32, height: 32 };
            const d = c;
        },
        721569: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        628752: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3.75 13.75V12c0-4.556 3.694-8.25 8.25-8.25s8.25 3.694 8.25 8.25v1.75m-16.5 0v6.5h4v-6.5h-4zm16.5 0v6.5h-4v-6.5h4z", fill: "none", stroke: "currentColor", strokeLinecap: "square", strokeLinejoin: "round", strokeWidth: "1.5" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        188189: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M15.22 11.28l.284.958-.284-.959zm-5.562-.956l.126.992-.126-.992zm-4.438 1.78c-.346.43-.277 1.06.154 1.406.43.345 1.06.277 1.406-.154l-1.56-1.252zM10 17v-1H9v1h1zm4 0h1v-1h-1v1zM11 3h2V1h-2v2zm5 13H8v2h8v-2zm-9-1V7H5v8h2zm10-8v2.5h2V7h-2zm0 2.5V15h2V9.5h-2zm-1.496 2.738c.77-.227 1.585-.765 2.14-1.173.294-.215.546-.417.726-.566l.213-.18.06-.052.016-.015.005-.004.002-.002L18 9.5l-.666-.745-.002.001-.01.01-.047.04-.181.153c-.158.13-.378.307-.632.493-.54.395-1.114.747-1.525.868l.567 1.918zm-5.72-.922c.684-.087 1.244.172 2.198.561.897.366 2.065.791 3.522.361l-.567-1.918c-.758.224-1.369.044-2.199-.294-.772-.316-1.886-.861-3.206-.694l.252 1.984zm-3.004 2.04c.369-.46.878-.952 1.436-1.343.569-.397 1.116-.64 1.568-.697l-.252-1.984c-.895.114-1.75.545-2.462 1.042-.722.505-1.368 1.13-1.85 1.73l1.56 1.252zM8 16c-.552 0-1-.448-1-1H5c0 1.657 1.343 3 3 3v-2zm8 2c1.657 0 3-1.343 3-3h-2c0 .552-.448 1-1 1v2zM13 3c2.21 0 4 1.79 4 4h2c0-3.314-2.686-6-6-6v2zm-2-2C7.686 1 5 3.686 5 7h2c0-2.21 1.79-4 4-4V1zm-1 17h4v-2h-4v2zm3-1v3h2v-3h-2zm-2 3v-3H9v3h2zm1 1c-.552 0-1-.448-1-1H9c0 1.657 1.343 3 3 3v-2zm1-1c0 .552-.448 1-1 1v2c1.657 0 3-1.343 3-3h-2z", fill: "currentColor" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        190077: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M10.631 2.266a.716.716 0 00-.378.108c-.042.027-4.291 2.661-8.752 3.32a.712.712 0 00-.61.687c-.003.112-.179 11.158 9.444 15.54a.718.718 0 00.296.064V2.266z", fill: "#1DA1F2" }), i.createElement("path", { d: "M10.631 2.266c.131 0 .262.036.378.108.042.027 4.291 2.661 8.752 3.32.344.05.601.34.608.687.004.112.181 11.158-9.443 15.54a.703.703 0 01-.295.064V2.266z", fill: "#78C6EE" }), i.createElement("circle", { cx: "17.935", cy: "13.125", fill: "#FFD03F", r: "5.095" }), i.createElement("path", { d: "M17.911 15.173a.529.529 0 10.002 1.058.529.529 0 00-.002-1.058zm0-5.011a1.99 1.99 0 00-1.988 1.988.355.355 0 00.71 0 1.28 1.28 0 011.277-1.277 1.28 1.28 0 011.277 1.277c0 .704-.573 1.277-1.277 1.277a.355.355 0 00-.355.355v.523a.355.355 0 00.71 0v-.199a1.987 1.987 0 00-.354-3.944z", fill: "#14171A" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        300637: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)(
                    "svg",
                    {
                        ...e,
                        role: e["aria-label"] ? e.role || "img" : void 0,
                        "aria-hidden": void 0 === e["aria-label"],
                        style: [n.Z.root, e.style],
                        viewBox: "0 0 200 200",
                        children: i.createElement(
                            "g",
                            null,
                            i.createElement("circle", { cx: "100", cy: "100", fill: "#97E3FF", r: "100" }),
                            i.createElement("path", { d: "M99.95 69.267V54.525H59.092c-2.575 0-4.658 2.083-4.658 4.658v6.467L80.81 88.767c3.548-9.925 10.123-19.5 19.14-19.5zM77.758 104.15c0-3.008.55-6.808 1.608-10.792L54.426 71.5v69.417c0 2.575 2.082 4.658 4.657 4.658H99.95v-14.683c-15.133.008-22.192-15.175-22.192-26.742z", fill: "#005FD1" }),
                            i.createElement("path", { d: "M80.8 88.767l-26.375-23.11V71.5l24.942 21.858c.408-1.516.883-3.058 1.433-4.59z", fill: "#005FD1" }),
                            i.createElement("path", { d: "M122.15 104.15c0 5.417-1.55 11.625-4.75 16.7l26.683 23.392c.858-.842 1.392-2.017 1.392-3.325V59.192c0-2.575-2.083-4.658-4.658-4.658H99.95v14.742c14.075-.01 22.2 23.307 22.2 34.874zm-22.2 26.75v14.683h38.992l-24.217-21.225c-3.567 3.91-8.467 6.542-14.775 6.542z", fill: "#1DA1F2" }),
                            i.createElement("path", { d: "M144.083 144.242L117.4 120.85c-.792 1.25-1.675 2.425-2.667 3.508l24.217 21.225h1.875c1.267-.008 2.417-.516 3.258-1.34z", fill: "#005FD1" }),
                            i.createElement("path", { d: "M99.95 69.267c-9.025 0-15.6 9.583-19.158 19.508l19.158 16.792v-36.3zM79.367 93.358c-1.058 3.983-1.608 7.783-1.608 10.792 0 11.567 7.057 26.75 22.19 26.75v-19.492l-20.583-18.05z", fill: "#1DA1F2" }),
                            i.createElement("path", { d: "M99.95 105.558l-19.158-16.79c-.55 1.532-1.025 3.074-1.433 4.59L99.94 111.4v-5.842h.008z", fill: "#005FD1" }),
                            i.createElement("path", { d: "M99.95 130.9c6.3 0 11.208-2.633 14.783-6.542l-14.783-12.95V130.9zm0-61.633v36.292l17.442 15.29c3.2-5.074 4.75-11.282 4.75-16.7.008-11.567-8.117-34.883-22.192-34.883z", fill: "#71C9F8" }),
                            i.createElement("path", { d: "M99.95 111.4l14.783 12.95c.992-1.083 1.875-2.258 2.667-3.508L99.958 105.55v5.85h-.008z", fill: "#1DA1F2" }),
                            i.createElement("path", { d: "M149.717 149.175l-104.11-91.25c-2.55-2.233-2.8-6.1-.566-8.65 2.234-2.55 6.11-2.8 8.65-.567l104.11 91.25c2.55 2.233 2.8 6.108.566 8.65-2.233 2.542-6.108 2.8-8.65.567z", fill: "#71C9F8" }),
                        ),
                    },
                    { writingDirection: t },
                );
            };
            o.metadata = { width: 200, height: 200 };
            const c = o;
        },
        264686: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M2 5.618V9.5h20V5.618L12 1.5zm2 4.632h2v9H4zm4.667 0h2v9h-2zm6.666 0h-2v9h2zm2.667 0h2v9h-2zM2 20v2h20v-2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        951381: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3.207 5.793l1.586-1.586c.39-.39 1.023-.39 1.414 0L21 19c-6 1.5-10 2-16-4l3-3-4.793-4.793c-.39-.39-.39-1.023 0-1.414z", fill: "none", stroke: "currentColor", strokeLinecap: "square", strokeLinejoin: "round", strokeWidth: "1.5" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        790322: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M15 18v-1.042c0-.386.226-.732.558-.928l.05-.03C17.64 14.775 19 12.546 19 10c0-3.866-3.134-7-7-7s-7 3.134-7 7c0 2.546 1.36 4.775 3.392 6l.05.03c.332.196.558.542.558.928V18m6 0v1c0 1.657-1.343 3-3 3s-3-1.343-3-3v-1m6 0H9", stroke: "currentColor", strokeLinejoin: "round", strokeWidth: "2" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        558697: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 10 11", children: i.createElement("g", null, i.createElement("path", { d: "M5 7.754l-3.524-3.52.59-.592L5 6.579l2.934-2.937.59.591L5 7.754z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 10, height: 11 };
            const c = o;
        },
        395581: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 2.572c-5.31 0-9.43 3.89-9.43 9.145 0 2.75 1.128 5.124 2.963 6.765.154.138.247.33.253.538l.052 1.677c.016.535.57.883 1.058.667l1.87-.826c.16-.07.338-.084.505-.037.86.237 1.776.363 2.73.363 5.312 0 9.43-3.89 9.43-9.145 0-5.256-4.12-9.146-9.43-9.146zm5.662 7.036l-2.77 4.394c-.44.7-1.384.873-2.045.378l-2.203-1.653c-.202-.15-.48-.15-.68.002l-2.977 2.257c-.397.302-.915-.174-.65-.595l2.77-4.394c.44-.7 1.385-.873 2.046-.377l2.203 1.653c.202.15.48.15.68-.002l2.976-2.257c.397-.302.916.174.65.595z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        340905: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M6.533 14.488c0 1.09-.89 1.98-1.98 1.98-1.09 0-1.982-.89-1.982-1.98 0-1.09.892-1.98 1.982-1.98h1.98v1.98zm.997 0c0-1.09.892-1.98 1.982-1.98 1.09 0 1.98.89 1.98 1.98v4.96c0 1.09-.89 1.98-1.98 1.98-1.09 0-1.98-.89-1.98-1.98v-4.96zm1.982-7.955c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98v1.98h-1.98zm0 .997c1.09 0 1.98.892 1.98 1.982 0 1.09-.89 1.98-1.98 1.98h-4.96c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98h4.96zm7.955 1.982c0-1.09.89-1.98 1.98-1.98 1.09 0 1.982.89 1.982 1.98 0 1.09-.892 1.98-1.982 1.98h-1.98v-1.98zm-.997 0c0 1.09-.892 1.98-1.982 1.98-1.09 0-1.98-.89-1.98-1.98v-4.96c0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98v4.96zm-1.982 7.955c1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.982-1.98 1.982-1.09 0-1.98-.892-1.98-1.982v-1.98h1.98zm0-.997c-1.09 0-1.98-.892-1.98-1.982 0-1.09.89-1.98 1.98-1.98h4.96c1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98h-4.96z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        786912: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M22.568 5.339c-.088-.236-.285-.412-.53-.461-.246-.049-.501.029-.668.206l-3.28 3.269-2.455-2.454 3.28-3.269c.177-.177.255-.432.196-.668-.049-.245-.216-.452-.452-.54C17.933 1.137 17.157 1 16.352 1c-3.673 0-6.648 2.984-6.648 6.685.02 1.6-.521 3.043-1.542 4.064l-.059.059-6.256 6.253c-1.129 1.129-1.129 2.965 0 4.094.57.56 1.306.845 2.052.845.737 0 1.483-.285 2.043-.844l6.314-6.322.059-.059c.992-.962 2.377-1.482 3.948-1.482C19.946 14.322 23 11.337 23 7.646c0-.815-.147-1.59-.432-2.307zm-6.236 7.481c-1.994-.01-3.82.677-5.116 1.973-.029.02-.049.039-.059.069l-6.256 6.244c-.56.56-1.453.56-2.013 0-.55-.55-.55-1.453 0-2.003l6.452-6.45.088-.108c1.159-1.286 1.777-3.004 1.748-4.899 0-2.857 2.318-5.174 5.175-5.174.206 0 .403.01.599.029l-2.877 2.876c-.137.137-.216.324-.216.52s.079.383.216.52l3.496 3.495c.285.285.756.285 1.041 0l2.877-2.876c.02.196.039.403.039.609.001 2.848-2.326 5.175-5.194 5.175z" }), i.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        509875: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 32 32", children: i.createElement("g", null, i.createElement("path", { d: "M17 5h-2v10H5v2h10v10h2V17h10v-2H17V5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 32, height: 32 };
            const c = o;
        },
        730873: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M22 2.63v17.74l-7.05-2.27c-.29 1.65-1.72 2.9-3.45 2.9C9.57 21 8 19.43 8 17.5v-1.63l-1.15-.37H4.5C3.12 15.5 2 14.38 2 13v-3c0-1.38 1.12-2.5 2.5-2.5h2.35L22 2.63zM6 9.5H4.5c-.27 0-.5.22-.5.5v3c0 .28.23.5.5.5H6v-4zm2 4.27l12 3.86V5.37L8 9.23v4.54zm2 2.74v.99c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.02l-3-.97z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        165243: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M20.29 2.29l-2.34 2.34C16.47 3.01 14.34 2 12 2 7.93 2 4.51 5.02 4 9.05L2.87 18h1.72l-2.3 2.29 1.42 1.42 18-18-1.42-1.42zM6.59 16H5.13l.85-6.7C6.36 6.27 8.94 4 12 4c1.79 0 3.42.78 4.54 2.05L6.59 16zM12 22c-1.57 0-2.98-.73-3.89-1.86l1.42-1.43c.55.78 1.45 1.29 2.47 1.29 1.31 0 2.42-.83 2.83-2H12v-2h6.86l-.74-5.87 1.76-1.76c.05.22.08.44.11.67L21.14 18H16.9c-.46 2.28-2.48 4-4.9 4z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        503089: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23.098 17.97l-8.62-14.93c-.54-.94-1.51-1.5-2.6-1.5h-.02c-1.09 0-2.06.58-2.6 1.53L.888 18c-.53.94-.52 2.06.03 2.99.54.92 1.49 1.47 2.55 1.47h17.07c1.06 0 2.02-.55 2.56-1.48.54-.94.54-2.07 0-3.01z", fill: "#F4212E" }), i.createElement("path", { d: "M11.998 18.89c-.76 0-1.38-.62-1.38-1.38s.62-1.37 1.38-1.37 1.37.61 1.37 1.37-.61 1.38-1.37 1.38zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z", fill: "#FFF" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        587854: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M10 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm2 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        321264: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { clipRule: "evenodd", d: "M6 3H2v18h4V3zm9 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        208340: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { clipRule: "evenodd", d: "M19.595 7.664c.205.138.396.288.553.467.665.758.864 1.795.716 3.029-.017.11-.035.22-.057.33-.717 3.681-3.17 4.955-6.304 4.955h-.484c-.383 0-.709.278-.768.656l-.68 4.242c-.06.378-.386.657-.77.657H8.997c-.259 0-.505-.231-.463-.516.026-.172.29-1.838.557-3.524l.033-.21.55-3.466c.068-.433.437-.751.875-.751h.031l.59.002h.11l.633.002h.034c5.64 0 7.144-3.434 7.649-5.873zM13.26 2c2.142 0 3.8.466 4.742 1.508.642.71 1.014 1.64.916 2.971-.063-.024-.124-.05-.19-.07-.064-.022-.13-.043-.197-.062-.133-.04-.272-.075-.413-.106-.14-.032-.286-.059-.434-.083-.504-.081-1.067-.122-1.673-.122h-4.873c-.179 0-.351.039-.513.116-.352.17-.599.5-.66.886L7.943 19.781h-3.41c-.327 0-.577-.293-.526-.617L6.595 2.751c.068-.433.44-.751.878-.751h5.788zm2.75 4.855c.564 0 1.083.037 1.544.112.132.02.26.045.387.073.123.028.243.058.36.093.058.016.115.034.17.052.115.039.225.08.331.126-.074.382-.18.791-.324 1.233-.65 1.998-1.949 3.255-3.88 3.81-.763.218-1.627.327-2.595.327H10.18c-.1 0-.193.01-.28.026l.818-5.196c.04-.26.207-.473.432-.58.102-.05.216-.076.336-.076h4.525z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        233585: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M7 5.5C7 4.119 8.119 3 9.5 3h5C15.881 3 17 4.119 17 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-5C8.119 21 7 19.881 7 18.5v-13zM9.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-5zM1 7.5C1 6.119 2.119 5 3.5 5H5v2H3.5c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5H5v2H3.5C2.119 19 1 17.881 1 16.5v-9zM20.5 7H19V5h1.5C21.881 5 23 6.119 23 7.5v9c0 1.381-1.119 2.5-2.5 2.5H19v-2h1.5c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        337291: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 1.75C6.339 1.75 1.75 6.34 1.75 12S6.339 22.25 12 22.25 22.25 17.66 22.25 12 17.661 1.75 12 1.75zm-2.5 14.7v-8.9l7 4.45-7 4.45z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        857629: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 22.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM11 16v-3H8v-2h3V8h2v3h3v2h-3v3h-2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        809375: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { clipRule: "evenodd", d: "M4.743 4.741l14.66 5.462-5.453 1.526c-1.076.302-1.918 1.143-2.22 2.22L10.205 19.4 4.743 4.74zm-2.027.289c-.538-1.445.87-2.854 2.315-2.316l15.645 5.829c1.633.608 1.535 2.95-.143 3.42l-6.044 1.692c-.404.113-.72.429-.832.832l-1.693 6.045c-.47 1.677-2.811 1.776-3.42.143L2.716 5.03z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        763569: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M22 13H7v-2h15v2zm0-9H7v2h15V4zm-7 14H7v2h8v-2zM5 2H2v20h3V2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        859461: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M15 18v-1.042c0-.386.226-.732.558-.928l.05-.03C17.64 14.775 19 12.546 19 10c0-3.866-3.134-7-7-7s-7 3.134-7 7c0 2.546 1.36 4.775 3.392 6l.05.03c.332.196.558.542.558.928V18m6 0v1c0 1.657-1.343 3-3 3s-3-1.343-3-3v-1m6 0H9" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        319889: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12.325 2.054c-.21-.072-.44-.072-.65 0l-8 2.75C3.27 4.944 3 5.323 3 5.75v6.162c0 2.807 1.149 4.83 2.813 6.405 1.572 1.488 3.632 2.6 5.555 3.636l.157.085c.296.16.653.16.95 0l.157-.085c1.923-1.037 3.983-2.148 5.556-3.636C19.85 16.742 21 14.719 21 11.912V5.75c0-.427-.271-.807-.675-.946l-8-2.75z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        626167: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M22 7H2l10 11L22 7z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        575059: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 undefined undefined", children: i.createElement("g", null, i.createElement("path", { d: "M11.333 4H5.62c-.37 0-.667.298-.667.667 0 .368.298.666.667.666h4.104L3.53 11.53c-.26.26-.26.682 0 .942.13.13.3.196.471.196.171 0 .341-.066.471-.196l6.196-6.195v4.105c0 .369.298.666.666.666.37 0 .667-.297.667-.666V4.667c0-.369-.298-.667-.667-.667z" })) }, { writingDirection: t });
            };
            o.metadata = { width: void 0, height: void 0 };
            const c = o;
        },
        76745: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14.25 12.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25m0 4.5c-.685 0-1.298-.306-1.711-.789m1.711.789v8m0-12.5C13.007 7.75 12 8.757 12 10c0 .558.203 1.068.539 1.461M14.25 7.75v-4m-1.711 7.711L9 15l-2-2-3 3M14.25 3.75h-9.5c-.552 0-1 .448-1 1v14.5c0 .552.448 1 1 1h9.5m0-16.5h5c.552 0 1 .448 1 1v14.5c0 .552-.448 1-1 1h-5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        201889: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M18.387 8.551c-.603-1.216-1.799-1.978-3.127-2.046-1.121-.061-2.288.381-3.259 1.366-.972-.985-2.139-1.427-3.261-1.366-1.328.068-2.524.829-3.127 2.046-.609 1.23-.575 2.834.349 4.533.919 1.685 2.72 3.479 5.696 5.212L12 18.5l.342-.204c2.975-1.733 4.776-3.527 5.694-5.212.924-1.699.958-3.303.349-4.533zm-2.113 3.875c-.644 1.181-1.952 2.56-4.272 3.963-2.321-1.403-3.63-2.782-4.274-3.963-.667-1.223-.618-2.218-.287-2.89.336-.677.999-1.103 1.745-1.145.733-.036 1.607.306 2.333 1.295l.483.653.483-.653c.726-.989 1.599-1.331 2.332-1.295.745.042 1.407.468 1.743 1.145.332.671.38 1.667-.286 2.89zm3.147-9.266l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        47286: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2H5zm2.5 5.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM11 13h7v-2h-7v2zm0 4h4v-2h-4v2zm8.5-10C20.88 7 22 8.12 22 9.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-9C2 8.12 3.12 7 4.5 7h15zM4 18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5v9z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        626093: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }), i.createElement("path", { d: "M11.5 7.67c.31-.179.69-.179 1 0l3 1.732c.31.179.5.509.5.866v3.464c0 .357-.19.687-.5.866l-3 1.732c-.31.179-.69.179-1 0l-3-1.732c-.31-.179-.5-.509-.5-.866v-3.464c0-.357.19-.687.5-.866l3-1.732z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        729488: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 16 16", children: i.createElement("g", null, i.createElement("g", { fill: "#536471" }, i.createElement("path", { clipRule: "evenodd", d: "M8.003 14.102c3.368 0 6.099-2.73 6.099-6.099 0-3.367-2.73-6.098-6.099-6.098-3.367 0-6.098 2.73-6.098 6.098s2.73 6.099 6.098 6.099zm0 1.236c4.051 0 7.335-3.284 7.335-7.335 0-4.05-3.284-7.334-7.335-7.334C3.953.669.67 3.953.67 8.003c0 4.051 3.284 7.335 7.334 7.335z", fillRule: "evenodd" }), i.createElement("path", { d: "M12.204 5.58c-.302.127-.626.213-.967.251.348-.197.614-.511.74-.885-.325.183-.685.317-1.069.388-.307-.31-.744-.505-1.228-.505-.93 0-1.683.717-1.683 1.6 0 .126.015.248.043.365-1.399-.067-2.639-.704-3.469-1.672-.144.237-.227.512-.227.804 0 .555.297 1.046.748 1.332-.276-.008-.535-.08-.762-.2v.02c0 .776.58 1.423 1.35 1.57-.142.036-.29.056-.443.056-.109 0-.215-.01-.317-.029.214.636.836 1.099 1.572 1.111-.576.43-1.302.686-2.09.686-.136 0-.27-.008-.402-.023.745.455 1.63.72 2.58.72 3.096 0 4.789-2.439 4.789-4.554 0-.068-.002-.138-.005-.206.328-.226.614-.508.839-.828z" }))) }, { writingDirection: t });
            };
            o.metadata = { width: 16, height: 16 };
            const c = o;
        },
        416955: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M9 7.75a3 3 0 015.179-2.062l1.452-1.376A5 5 0 007 7.75V8h-.499a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5h11a2.5 2.5 0 002.5-2.5v-9a2.5 2.5 0 00-2.5-2.5H9zM10.002 14a2 2 0 113 1.732V18h-2v-2.268a2 2 0 01-1-1.732z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        707305: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M19.1 4c.62 1.02.9 2.072.9 3.4 0 4.235-3.629 9.737-6.574 13.6H6.698L4 4.927l5.89-.557 1.427 11.437c1.333-2.163 2.978-5.563 2.978-7.88 0-1.27-.218-2.134-.56-2.845L19.1 4z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        177826: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3 5.5C3 4.12 4.12 3 5.5 3H10v2H5.5c-.28 0-.5.22-.5.5V10H3V5.5zM14 3h4.5C19.88 3 21 4.12 21 5.5V10h-2V5.5c0-.28-.22-.5-.5-.5H14V3zM5 14v4.5c0 .28.22.5.5.5H10v2H5.5C4.12 21 3 19.88 3 18.5V14h2zm16 0v4.5c0 1.38-1.12 2.5-2.5 2.5H14v-2h4.5c.28 0 .5-.22.5-.5V14h2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        376021: (e, t, l) => {
            l.r(t), l.d(t, { default: () => d });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(717683),
                o = l(347101);
            const c = (e = {}) => {
                const t = i.useContext(n.Z),
                    { direction: l } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style, t && o.Z.iconRTL], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" })) }, { writingDirection: l });
            };
            c.metadata = { width: 24, height: 24 };
            const d = c;
        },
        930060: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)(
                    "svg",
                    {
                        ...e,
                        role: e["aria-label"] ? e.role || "img" : void 0,
                        "aria-hidden": void 0 === e["aria-label"],
                        style: [n.Z.root, e.style],
                        viewBox: "0 0 55 9",
                        children: i.createElement("g", null, i.createElement("path", { d: "M53 7.393C53 8.28 52.28 9 51.393 9h-5.786C44.72 9 44 8.28 44 7.393V1.607C44 .72 44.72 0 45.607 0h5.786C52.28 0 53 .72 53 1.607v5.786z", fill: "#BCBDBB" }), i.createElement("path", { d: "M51.556 3.792l-2.112-.31-.967-2.192v-.003L47.56 3.48l-2.11.307 1.525 1.494-.36 2.116 1.863-1.227 1.93 1.183-.38-2.067", fill: "#F0F0EF" }), i.createElement("path", { d: "M42 7.393C42 8.28 41.28 9 40.393 9h-5.786C33.72 9 33 8.28 33 7.393V1.607C33 .72 33.72 0 34.607 0h5.786C41.28 0 42 .72 42 1.607v5.786z", fill: "#BCBDBB" }), i.createElement("path", { d: "M37.5 0h-2.893C33.72 0 33 .72 33 1.607v5.786C33 8.28 33.72 9 34.607 9H37.5V0z", fill: "#F0971C" }), i.createElement("path", { d: "M40.556 3.792l-2.112-.31-.967-2.192v-.003L36.56 3.48l-2.11.307 1.525 1.494-.36 2.116 1.863-1.227 1.93 1.183-.38-2.067", fill: "#FFF" }), i.createElement("path", { d: "M31 7.393C31 8.28 30.28 9 29.393 9h-5.786C22.72 9 22 8.28 22 7.393V1.607C22 .72 22.72 0 23.607 0h5.786C30.28 0 31 .72 31 1.607v5.786z", fill: "#F0971C" }), i.createElement("path", { d: "M29.557 3.792l-2.112-.31-.967-2.19-.917 2.188-2.11.307 1.526 1.494-.36 2.116L26.48 6.17l1.93 1.183-.38-2.067", fill: "#FFF" }), i.createElement("path", { d: "M20 7.393C20 8.28 19.28 9 18.393 9h-5.786C11.72 9 11 8.28 11 7.393V1.607C11 .72 11.72 0 12.607 0h5.786C19.28 0 20 .72 20 1.607v5.786z", fill: "#F0971C" }), i.createElement("path", { d: "M18.556 3.792l-2.112-.31-.965-2.19-.92 2.188-2.11.307 1.526 1.494-.36 2.116L15.48 6.17l1.927 1.183-.378-2.067", fill: "#FFF" }), i.createElement("path", { d: "M9 7.393C9 8.28 8.28 9 7.393 9H1.607C.72 9 0 8.28 0 7.393V1.607C0 .72.72 0 1.607 0h5.786C8.28 0 9 .72 9 1.607v5.786z", fill: "#F0971C" }), i.createElement("path", { d: "M7.556 3.792l-2.112-.31-.965-2.19-.92 2.188-2.11.307L2.977 5.28l-.36 2.116L4.48 6.17l1.927 1.183-.378-2.067", fill: "#FFF" })),
                    },
                    { writingDirection: t },
                );
            };
            o.metadata = { width: 55, height: 9 };
            const c = o;
        },
        308986: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 55 9", children: i.createElement("g", null, i.createElement("path", { d: "M53 7.393C53 8.28 52.28 9 51.393 9h-5.786C44.72 9 44 8.28 44 7.393V1.607C44 .72 44.72 0 45.607 0h5.786C52.28 0 53 .72 53 1.607v5.786z", fill: "#DA050A" }), i.createElement("path", { d: "M51.556 3.792l-2.112-.31-.967-2.192v-.003L47.56 3.48l-2.11.307 1.525 1.494-.36 2.116 1.863-1.227 1.93 1.183-.38-2.067", fill: "#FFF" }), i.createElement("path", { d: "M42 7.393C42 8.28 41.28 9 40.393 9h-5.786C33.72 9 33 8.28 33 7.393V1.607C33 .72 33.72 0 34.607 0h5.786C41.28 0 42 .72 42 1.607v5.786z", fill: "#DA050A" }), i.createElement("path", { d: "M40.556 3.792l-2.112-.31-.967-2.192v-.003L36.56 3.48l-2.11.307 1.525 1.494-.36 2.116 1.863-1.227 1.93 1.183-.38-2.067", fill: "#FFF" }), i.createElement("path", { d: "M31 7.393C31 8.28 30.28 9 29.393 9h-5.786C22.72 9 22 8.28 22 7.393V1.607C22 .72 22.72 0 23.607 0h5.786C30.28 0 31 .72 31 1.607v5.786z", fill: "#DA050A" }), i.createElement("path", { d: "M29.557 3.792l-2.112-.31-.967-2.19-.917 2.188-2.11.307 1.526 1.494-.36 2.116L26.48 6.17l1.93 1.183-.38-2.067", fill: "#FFF" }), i.createElement("path", { d: "M20 7.393C20 8.28 19.28 9 18.393 9h-5.786C11.72 9 11 8.28 11 7.393V1.607C11 .72 11.72 0 12.607 0h5.786C19.28 0 20 .72 20 1.607v5.786z", fill: "#DA050A" }), i.createElement("path", { d: "M18.556 3.792l-2.112-.31-.965-2.19-.92 2.188-2.11.307 1.526 1.494-.36 2.116L15.48 6.17l1.927 1.183-.378-2.067", fill: "#FFF" }), i.createElement("path", { d: "M9 7.393C9 8.28 8.28 9 7.393 9H1.607C.72 9 0 8.28 0 7.393V1.607C0 .72.72 0 1.607 0h5.786C8.28 0 9 .72 9 1.607v5.786z", fill: "#DA050A" }), i.createElement("path", { d: "M7.556 3.792l-2.112-.31-.965-2.19-.92 2.188-2.11.307L2.977 5.28l-.36 2.116L4.48 6.17l1.927 1.183-.378-2.067", fill: "#FFF" })) }, { writingDirection: t });
            };
            o.metadata = { width: 55, height: 9 };
            const c = o;
        },
        858440: (e, t, l) => {
            l.d(t, { Z: () => a });
            var i = l(878052),
                r = l(202784);
            function a() {
                var e = (0, r.useState)(() => i.Z.get("window")),
                    t = e[0],
                    l = e[1];
                return (
                    (0, r.useEffect)(() => {
                        function e(e) {
                            var t = e.window;
                            null != t && l(t);
                        }
                        return (
                            i.Z.addEventListener("change", e),
                            l(i.Z.get("window")),
                            () => {
                                i.Z.removeEventListener("change", e);
                            }
                        );
                    }, []),
                    t
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a.7040679a.js.map

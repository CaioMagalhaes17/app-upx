var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// src/utils/index.tsx
import { twMerge } from "tailwind-merge";
var cn = (...classes) => twMerge(clsx_default(classes));

// src/atoms/Button.tsx
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var buttonStyles = cva(["btn"]);
var Button = forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "button",
      __spreadValues({
        ref,
        className: cn(buttonStyles({ className }))
      }, props)
    );
  }
);

// src/atoms/Text.tsx
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var textStyles = cva2("", {
  variants: {
    textoColor: {
      primary: "text-[#009e3b]"
    },
    emphasis: {
      low: "text-gray-600 font-light"
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl"
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
      extrabold: "font-extrabold"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    italic: {
      true: "italic"
    },
    underline: {
      true: "underline underline-offset-2"
    }
  },
  defaultVariants: {
    align: "left"
  }
});
function Text(_a) {
  var _b = _a, {
    as,
    align,
    size,
    emphasis,
    italic,
    underline,
    weight,
    className,
    textoColor,
    ref
  } = _b, props = __objRest(_b, [
    "as",
    "align",
    "size",
    "emphasis",
    "italic",
    "underline",
    "weight",
    "className",
    "textoColor",
    "ref"
  ]);
  const Component = as || "span";
  return /* @__PURE__ */ jsx2(
    Component,
    __spreadValues({
      className: cn(
        textStyles({
          size,
          weight,
          emphasis,
          italic,
          underline,
          align,
          textoColor,
          className
        })
      )
    }, props)
  );
}

// src/atoms/Box.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Box = forwardRef2((_a, ref) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx3("div", __spreadValues({ ref }, props));
});

// src/atoms/Input.tsx
import { cva as cva3 } from "class-variance-authority";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var inputStyles = cva3([
  "form-input-custom"
]);
var Input = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx4(
      "input",
      __spreadValues({
        ref,
        type: "text",
        autoComplete: "off",
        className: cn(inputStyles({ className }))
      }, props)
    );
  }
);

// src/components/Header.tsx
import { cva as cva4 } from "class-variance-authority";
import { Fragment, jsx as jsx5 } from "react/jsx-runtime";
var headerStyle = cva4([
  "z-40"
]);
function Header({ className, children }) {
  return /* @__PURE__ */ jsx5(Fragment, { children: /* @__PURE__ */ jsx5("header", { className: cn(headerStyle({ className })), children: /* @__PURE__ */ jsx5("div", { className: "shadow-sm", children }) }) });
}

// src/components/Logo.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function Logo(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx6(
    "img",
    __spreadValues({
      alt: "logo",
      src: "http://localhost:5173/images/logo-sympla.png"
    }, props)
  );
}

// src/components/Panel.tsx
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx7 } from "react/jsx-runtime";
var panelStyle = cva5([
  "panel"
]);
function Panel(_a) {
  var _b = _a, { className, children } = _b, rest = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx7("div", __spreadProps(__spreadValues({ className: cn(panelStyle({ className })) }, rest), { children }));
}

// src/components/Sidebar.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function Sidebar({ children }) {
  return /* @__PURE__ */ jsx8("nav", { className: "leftbar", children });
}

// src/components/Accordion.tsx
import * as React3 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { jsx as jsx9, jsxs } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx9(
    AccordionPrimitive.Item,
    __spreadValues({
      ref,
      className: cn("border-b-[#323b45] border-b", className)
    }, props)
  );
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx9(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx9(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
      ]
    })
  ) });
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx9(
    AccordionPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: "overflow-hidden text-sm transition-all data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
    }, props), {
      children: /* @__PURE__ */ jsx9("div", { className: cn("pb-4 pt-0", className), children })
    })
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/Icons/IconDollarSignCircle.tsx
import { Fragment as Fragment2, jsx as jsx10, jsxs as jsxs2 } from "react/jsx-runtime";
var IconDollarSignCircle = ({ className, fill = false, duotone = true }) => {
  return /* @__PURE__ */ jsx10(Fragment2, { children: !fill ? /* @__PURE__ */ jsxs2("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: [
    /* @__PURE__ */ jsx10("circle", { opacity: duotone ? "0.5" : "1", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx10("path", { d: "M12 6V18", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }
    )
  ] }) : /* @__PURE__ */ jsxs2("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: [
    /* @__PURE__ */ jsx10(
      "path",
      {
        opacity: duotone ? "0.5" : "1",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M29.3332 15.9998C29.3332 23.3636 23.3636 29.3332 15.9998 29.3332C8.63604 29.3332 2.6665 23.3636 2.6665 15.9998C2.6665 8.63604 8.63604 2.6665 15.9998 2.6665C23.3636 2.6665 29.3332 8.63604 29.3332 15.9998Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx10(
      "path",
      {
        d: "M17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8V8.42231C12.8261 8.81156 11 10.4448 11 12.6667C11 15.2229 13.417 17 16 17C17.8353 17 19 18.2076 19 19.3333C19 20.459 17.8353 21.6667 16 21.6667C14.1647 21.6667 13 20.459 13 19.3333C13 18.781 12.5523 18.3333 12 18.3333C11.4477 18.3333 11 18.781 11 19.3333C11 21.5552 12.8261 23.1884 15 23.5777V24C15 24.5523 15.4477 25 16 25C16.5523 25 17 24.5523 17 24V23.5777C19.1739 23.1884 21 21.5552 21 19.3333C21 16.7771 18.583 15 16 15C14.1647 15 13 13.7924 13 12.6667C13 11.541 14.1647 10.3333 16 10.3333C17.8353 10.3333 19 11.541 19 12.6667C19 13.219 19.4477 13.6667 20 13.6667C20.5523 13.6667 21 13.219 21 12.6667C21 10.4448 19.1739 8.81156 17 8.42231V8Z",
        fill: duotone ? "currentColor" : "white"
      }
    )
  ] }) });
};

// src/Icons/IconShoppingCart.tsx
import { jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
var IconShoppingCart = ({ className, fill = false, duotone = true }) => {
  return /* @__PURE__ */ jsxs3("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: [
    /* @__PURE__ */ jsx11(
      "path",
      {
        d: "M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ jsx11(
      "path",
      {
        opacity: duotone ? "0.5" : "1",
        d: "M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }
    ),
    /* @__PURE__ */ jsx11(
      "path",
      {
        opacity: duotone ? "0.5" : "1",
        d: "M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }
    ),
    /* @__PURE__ */ jsx11("path", { opacity: duotone ? "0.5" : "1", d: "M11 9H8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsx11(
      "path",
      {
        d: "M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }
    )
  ] });
};

// src/Icons/IconHelp.tsx
import { Fragment as Fragment3, jsx as jsx12, jsxs as jsxs4 } from "react/jsx-runtime";
var IconHelpCircle = ({ className, fill = false, duotone = true }) => {
  return /* @__PURE__ */ jsx12(Fragment3, { children: !fill ? /* @__PURE__ */ jsxs4("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: [
    /* @__PURE__ */ jsx12("circle", { opacity: duotone ? "0.5" : "1", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsx12(
      "path",
      {
        d: "M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ jsx12("circle", { cx: "12", cy: "16", r: "1", fill: "currentColor" })
  ] }) : /* @__PURE__ */ jsxs4("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: [
    /* @__PURE__ */ jsx12("path", { opacity: duotone ? "0.5" : "1", d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z", fill: "currentColor" }),
    /* @__PURE__ */ jsx12(
      "path",
      {
        d: "M12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx12("path", { d: "M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z", fill: "currentColor" })
  ] }) });
};

// src/Icons/IconUser.tsx
import { Fragment as Fragment4, jsx as jsx13, jsxs as jsxs5 } from "react/jsx-runtime";
var IconUser = ({
  className,
  fill = false,
  duotone = true
}) => {
  return /* @__PURE__ */ jsx13(Fragment4, { children: !fill ? /* @__PURE__ */ jsxs5(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx13(
          "circle",
          {
            cx: "12",
            cy: "6",
            r: "4",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsx13(
          "path",
          {
            opacity: duotone ? "0.5" : "1",
            d: "M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ jsxs5(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      className,
      children: [
        /* @__PURE__ */ jsx13("circle", { cx: "9", cy: "4.5", r: "3", fill: "currentColor" }),
        /* @__PURE__ */ jsx13(
          "path",
          {
            opacity: duotone ? "0.5" : "1",
            d: "M15 13.125C15 14.989 15 16.5 9 16.5C3 16.5 3 14.989 3 13.125C3 11.261 5.68629 9.75 9 9.75C12.3137 9.75 15 11.261 15 13.125Z",
            fill: "currentColor"
          }
        )
      ]
    }
  ) });
};

// src/Icons/IconLogout.tsx
import { Fragment as Fragment5, jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var IconLogout = ({
  className,
  fill = false,
  duotone = true
}) => {
  return /* @__PURE__ */ jsx14(Fragment5, { children: !fill ? /* @__PURE__ */ jsxs6(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx14(
          "path",
          {
            opacity: duotone ? "0.5" : "1",
            d: "M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx14(
          "path",
          {
            d: "M12 15L12 2M12 2L15 5.5M12 2L9 5.5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  ) : /* @__PURE__ */ jsxs6(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx14(
          "path",
          {
            opacity: duotone ? "0.5" : "1",
            d: "M22 15.9998V14.9998C22 12.1714 21.9998 10.7576 21.1211 9.87891C20.2424 9.00023 18.8282 9.00023 15.9998 9.00023H7.99977C5.17135 9.00023 3.75713 9.00023 2.87845 9.87891C2 10.7574 2 12.1706 2 14.9976V14.9998V15.9998C2 18.8282 2 20.2424 2.87868 21.1211C3.75736 21.9998 5.17157 21.9998 8 21.9998H16H16C18.8284 21.9998 20.2426 21.9998 21.1213 21.1211C22 20.2424 22 18.8282 22 15.9998Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx14(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 4.02744L14.4306 5.98809C14.7001 6.30259 15.1736 6.33901 15.4881 6.06944C15.8026 5.79988 15.839 5.3264 15.5695 5.01191L12.5695 1.51191C12.427 1.34567 12.219 1.25 12 1.25C11.7811 1.25 11.5731 1.34567 11.4306 1.51191L8.43057 5.01191C8.161 5.3264 8.19743 5.79988 8.51192 6.06944C8.82641 6.33901 9.29989 6.30259 9.56946 5.98809L11.25 4.02744L11.25 15C11.25 15.4142 11.5858 15.75 12 15.75Z",
            fill: "currentColor"
          }
        )
      ]
    }
  ) });
};

// src/Icons/IconPlus.tsx
import { jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
var IconPlus = ({ className, fill = false, duotone = true }) => {
  return /* @__PURE__ */ jsxs7("svg", { width: "20", height: "20", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
    /* @__PURE__ */ jsx15("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ jsx15("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] });
};

// src/Icons/IconMinus.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
var IconMinus = ({ className, fill = false, duotone = true }) => {
  return /* @__PURE__ */ jsx16("svg", { width: "16", height: "20", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", className, children: /* @__PURE__ */ jsx16("line", { x1: "5", y1: "12", x2: "19", y2: "12" }) });
};

// src/Icons/IconMapPin.tsx
import { jsx as jsx17, jsxs as jsxs8 } from "react/jsx-runtime";
var IconMapPin = ({ className, fill = false, duotone = true }) => {
  return /* @__PURE__ */ jsxs8("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: [
    /* @__PURE__ */ jsx17(
      "path",
      {
        opacity: duotone ? "0.5" : "1",
        d: "M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }
    ),
    /* @__PURE__ */ jsx17("circle", { cx: "12", cy: "10", r: "3", stroke: "currentColor", strokeWidth: "1.5" })
  ] });
};

// src/components/Footer.tsx
import { cva as cva6 } from "class-variance-authority";
import { Fragment as Fragment6, jsx as jsx18 } from "react/jsx-runtime";
var FooterStyle = cva6([
  "w-full h-[40vh]"
]);
function Footer({ className, children, style }) {
  return /* @__PURE__ */ jsx18(Fragment6, { children: /* @__PURE__ */ jsx18("footer", { className: cn(FooterStyle({ className })), style, children }) });
}

// src/Icons/IconBell.tsx
import { Fragment as Fragment7, jsx as jsx19, jsxs as jsxs9 } from "react/jsx-runtime";
var IconBell = ({ className, fill = false, duotone = true }) => {
  return /* @__PURE__ */ jsx19(Fragment7, { children: !fill ? /* @__PURE__ */ jsxs9("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: [
    /* @__PURE__ */ jsx19(
      "path",
      {
        d: "M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }
    ),
    /* @__PURE__ */ jsx19(
      "path",
      {
        opacity: duotone ? "0.5" : "1",
        d: "M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }
    )
  ] }) : /* @__PURE__ */ jsxs9("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className, children: [
    /* @__PURE__ */ jsx19(
      "path",
      {
        opacity: duotone ? "0.5" : "1",
        d: "M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx19(
      "path",
      {
        d: "M7.24316 18.5454C7.8941 20.5506 9.77767 22.0002 11.9998 22.0002C14.222 22.0002 16.1055 20.5506 16.7565 18.5454C13.611 19.1357 10.3886 19.1357 7.24316 18.5454Z",
        fill: "currentColor",
        stroke: !duotone ? "white" : "currentColor"
      }
    )
  ] }) });
};

// src/components/Dropdown.tsx
import * as React4 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { jsx as jsx20, jsxs as jsxs10 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxs10(
    DropdownMenuPrimitive.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx20(ChevronRight, { className: "ml-auto h-4 w-4" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React4.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx20(
    DropdownMenuPrimitive.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsx20(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx20(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx20(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxs10(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsx20("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx20(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx20(Check, { className: "h-4 w-4" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs10(
    DropdownMenuPrimitive.RadioItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx20("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx20(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx20(Circle, { className: "h-2 w-2 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx20(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React4.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx20(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx20(
    "span",
    __spreadValues({
      className: cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props)
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/Table/index.tsx
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";

// src/components/Table/shadcn-ui-table/index.tsx
import * as React5 from "react";
import { Fragment as Fragment8, jsx as jsx21 } from "react/jsx-runtime";
var Table = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx21("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx21(
    "table",
    __spreadValues({
      ref,
      className: cn("w-full caption-bottom text-sm", className)
    }, props)
  ) });
});
Table.displayName = "Table";
var TableHeader = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx21("thead", __spreadValues({ ref, className: cn("[&_tr]:border-b", className) }, props));
});
TableHeader.displayName = "TableHeader";
var TableBody = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx21(
    "tbody",
    __spreadValues({
      ref,
      className: cn("[&_tr:last-child]:border-0", className)
    }, props)
  );
});
TableBody.displayName = "TableBody";
var TableFooter = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx21(
    "tfoot",
    __spreadValues({
      ref,
      className: cn(
        "border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-slate-800/50",
        className
      )
    }, props)
  );
});
TableFooter.displayName = "TableFooter";
var TableRow = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx21(
    "tr",
    __spreadValues({
      ref,
      className: cn(
        "border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",
        className
      )
    }, props)
  );
});
TableRow.displayName = "TableRow";
var TableHead = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx21(
    "th",
    __spreadValues({
      ref,
      className: cn(
        "text-left",
        className
      )
    }, props)
  );
});
TableHead.displayName = "TableHead";
var TableCell = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx21(
    "td",
    __spreadValues({
      ref,
      className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)
    }, props)
  );
});
TableCell.displayName = "TableCell";
var TableCaption = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx21(
    "caption",
    __spreadValues({
      ref,
      className: cn("mt-4 text-sm text-slate-500 dark:text-slate-400", className)
    }, props)
  );
});
TableCaption.displayName = "TableCaption";
var TablePagination = () => /* @__PURE__ */ jsx21(Fragment8, { children: /* @__PURE__ */ jsx21("div", { className: "flex items-center justify-end space-x-2 py-4" }) });

// src/components/Table/index.tsx
import { jsx as jsx22, jsxs as jsxs11 } from "react/jsx-runtime";
function DataTable(_a) {
  var _b = _a, {
    data,
    columns,
    title,
    handleOnChangeQuery = () => {
    },
    query = "",
    children,
    needSearch
  } = _b, rest = __objRest(_b, [
    "data",
    "columns",
    "title",
    "handleOnChangeQuery",
    "query",
    "children",
    "needSearch"
  ]);
  var _a2;
  const table = useReactTable(__spreadValues({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  }, rest));
  return /* @__PURE__ */ jsxs11("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx22(Text, { as: "h5", className: "flex flex-row gap-5 font-semibold text-lg dark:text-white-light mb-5", children: /* @__PURE__ */ jsx22(Text, { as: "span", children: title }) }),
    /* @__PURE__ */ jsxs11("div", { className: "flex md:items-center justify-between md:!flex-row flex-col mb-5 gap-5", children: [
      /* @__PURE__ */ jsx22("div", { className: "flex items-center flex-wrap", children }),
      needSearch && /* @__PURE__ */ jsx22(
        Input,
        {
          id: "search2",
          type: "text",
          className: "!w-auto",
          placeholder: "Procurar...",
          value: query,
          onChange: (event) => handleOnChangeQuery(event.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsx22("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxs11(Table, { children: [
      /* @__PURE__ */ jsx22(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx22(TableRow, { children: headerGroup.headers.map((header) => {
        return /* @__PURE__ */ jsx22(TableHead, { children: header.isPlaceholder ? null : flexRender(
          header.column.columnDef.header,
          header.getContext()
        ) }, header.id);
      }) }, headerGroup.id)) }),
      /* @__PURE__ */ jsx22(TableBody, { children: ((_a2 = table.getRowModel().rows) == null ? void 0 : _a2.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx22(
        TableRow,
        {
          "data-state": row.getIsSelected() && "selected",
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx22(TableCell, { children: flexRender(
            cell.column.columnDef.cell,
            cell.getContext()
          ) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsx22(TableRow, { children: /* @__PURE__ */ jsx22(
        TableCell,
        {
          colSpan: columns.length,
          className: "h-24 text-center",
          children: "Nenhum resultado encontrado"
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsx22(TablePagination, {})
  ] });
}

// src/components/NavigationMenu.tsx
import * as React6 from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva as cva7 } from "class-variance-authority";
import { ChevronDown as ChevronDown2 } from "lucide-react";
import { jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
var NavigationMenu = React6.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs12(
    NavigationMenuPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx23(NavigationMenuViewport, {})
      ]
    })
  );
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx23(
    NavigationMenuPrimitive.List,
    __spreadValues({
      ref,
      className: cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )
    }, props)
  );
});
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva7(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
var NavigationMenuTrigger = React6.forwardRef((_a, ref) => {
  var _b = _a, { className, children, showTrigger = true } = _b, props = __objRest(_b, ["className", "children", "showTrigger"]);
  return /* @__PURE__ */ jsxs12(
    NavigationMenuPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(navigationMenuTriggerStyle(), "group", className)
    }, props), {
      children: [
        children,
        " ",
        showTrigger ? /* @__PURE__ */ jsx23(
          ChevronDown2,
          {
            className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        ) : ""
      ]
    })
  );
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx23(
    NavigationMenuPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
        className
      )
    }, props)
  );
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx23("div", { className: cn("absolute top-full flex justify-center"), children: /* @__PURE__ */ jsx23(
    NavigationMenuPrimitive.Viewport,
    __spreadValues({
      className: cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-[#323b45] bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      ),
      ref
    }, props)
  ) });
});
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx23(
    NavigationMenuPrimitive.Indicator,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx23("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
    })
  );
});
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// src/components/Carousel.tsx
import * as React7 from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
var CarouselContext = React7.createContext(null);
function useCarousel() {
  const context = React7.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React7.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children
    } = _b, props = __objRest(_b, [
      "orientation",
      "opts",
      "setApi",
      "plugins",
      "className",
      "children"
    ]);
    const [carouselRef, api] = useEmblaCarousel(
      __spreadProps(__spreadValues({}, opts), {
        axis: orientation === "horizontal" ? "x" : "y"
      }),
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React7.useState(false);
    const [canScrollNext, setCanScrollNext] = React7.useState(false);
    const onSelect = React7.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React7.useCallback(() => {
      api == null ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React7.useCallback(() => {
      api == null ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React7.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React7.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React7.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api == null ? void 0 : api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx24(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx24(
          "div",
          __spreadProps(__spreadValues({
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel"
          }, props), {
            children
          })
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React7.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx24("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx24(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "flex",
        className
      )
    }, props)
  ) });
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React7.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx24(
    "div",
    __spreadValues({
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        className
      )
    }, props)
  );
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React7.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs13(
    "button",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev
    }, props), {
      children: [
        /* @__PURE__ */ jsx24(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx24("span", { className: "sr-only", children: "Previous slide" })
      ]
    })
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React7.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs13(
    "button",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext
    }, props), {
      children: [
        /* @__PURE__ */ jsx24(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx24("span", { className: "sr-only", children: "Next slide" })
      ]
    })
  );
});
CarouselNext.displayName = "CarouselNext";
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Box,
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  DataTable,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Footer,
  Header,
  IconBell,
  IconDollarSignCircle,
  IconHelpCircle,
  IconLogout,
  IconMapPin,
  IconMinus,
  IconPlus,
  IconShoppingCart,
  IconUser,
  Input,
  Logo,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Panel,
  Sidebar,
  Text
};
//# sourceMappingURL=index.js.map
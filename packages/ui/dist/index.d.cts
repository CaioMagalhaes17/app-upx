import * as React$1 from 'react';
import React__default, { ComponentProps, FC } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';

declare const buttonStyles: (props?: class_variance_authority_types.ClassProp | undefined) => string;
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;
declare const Button: React$1.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const textStyles: (props?: ({
    textoColor?: "primary" | null | undefined;
    emphasis?: "low" | null | undefined;
    size?: "base" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | null | undefined;
    weight?: "bold" | "thin" | "normal" | "medium" | "semibold" | "black" | "extrabold" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
    italic?: boolean | null | undefined;
    underline?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type TextElementTypes = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
type TextProps = ComponentProps<TextElementTypes> & VariantProps<typeof textStyles> & {
    as: TextElementTypes;
};
declare function Text({ as, align, size, emphasis, italic, underline, weight, className, textoColor, ref, ...props }: TextProps): react_jsx_runtime.JSX.Element;

declare const Box: React__default.ForwardRefExoticComponent<Omit<Omit<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | React__default.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React__default.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React__default.RefObject<HTMLDivElement> | null | undefined;
}, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

declare const inputStyles: (props?: class_variance_authority_types.ClassProp | undefined) => string;
type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;
declare const Input: React__default.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React__default.RefAttributes<HTMLInputElement>>;

declare const headerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
type HeaderProps = ComponentProps<"header"> & VariantProps<typeof headerStyle>;
declare function Header({ className, children }: HeaderProps): react_jsx_runtime.JSX.Element;

declare function Logo({ ...props }: ComponentProps<"img">): react_jsx_runtime.JSX.Element;

declare const panelStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
type PanelProps = ComponentProps<"div"> & VariantProps<typeof panelStyle>;
declare function Panel({ className, children, ...rest }: PanelProps): react_jsx_runtime.JSX.Element;

declare function Sidebar({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

declare const Accordion: React$1.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface IconDollarSignCircleProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}
declare const IconDollarSignCircle: FC<IconDollarSignCircleProps>;

interface IconShoppingCartProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}
declare const IconShoppingCart: FC<IconShoppingCartProps>;

interface IconHelpCircleProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}
declare const IconHelpCircle: FC<IconHelpCircleProps>;

interface IconUserProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}
declare const IconUser: FC<IconUserProps>;

interface IconLogoutProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}
declare const IconLogout: FC<IconLogoutProps>;

interface IconPlusProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}
declare const IconPlus: FC<IconPlusProps>;

interface IconMinusProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}
declare const IconMinus: FC<IconMinusProps>;

interface IconMapPinProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}
declare const IconMapPin: FC<IconMapPinProps>;

declare const FooterStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;
type FooterProps = ComponentProps<"footer"> & VariantProps<typeof FooterStyle>;
declare function Footer({ className, children, style }: FooterProps): react_jsx_runtime.JSX.Element;

interface IconBellProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}
declare const IconBell: FC<IconBellProps>;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const NavigationMenu: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const NavigationMenuList: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React$1.RefAttributes<HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const NavigationMenuItem: React$1.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React$1.RefAttributes<HTMLLIElement>>;
declare const NavigationMenuTrigger: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & {
    showTrigger?: Boolean;
} & React$1.RefAttributes<HTMLButtonElement>>;
declare const NavigationMenuContent: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuLink: React$1.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const NavigationMenuViewport: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuViewportProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuIndicator: React$1.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuIndicatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
declare const Carousel: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & CarouselProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CarouselPrevious: React$1.ForwardRefExoticComponent<Omit<Omit<ButtonProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: React$1.ForwardRefExoticComponent<Omit<Omit<ButtonProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Box, Button, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Footer, Header, IconBell, IconDollarSignCircle, IconHelpCircle, IconLogout, IconMapPin, IconMinus, IconPlus, IconShoppingCart, IconUser, Input, Logo, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Panel, Sidebar, Text };

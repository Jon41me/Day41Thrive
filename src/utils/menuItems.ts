export interface MenuItem {
    href: string;
    text: string;
    isNav: boolean;
    children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
    { 
        href: "#about", 
        text: "Our Story", 
        isNav: true 
    },
    { 
        href: "/growth-gauge", 
        text: "Growth Gauge", 
        isNav: false 
    },
    { 
        href: "/work-with-us", 
        text: "Work With Us", 
        isNav: false,
        children: [
            { href: "/programs", text: "Programs", isNav: false },
            { href: "/partners", text: "Partners", isNav: false }
        ]
    },
    { 
        href: "#", 
        text: "Thrive Wire", 
        isNav: false,
        children: [
            { href: "/blog", text: "Blog", isNav: false },
            { href: "/media", text: "Media", isNav: false },
            { href: "/join-us", text: "Join Us", isNav: false },
            { href: "/swag", text: "SWAG", isNav: false },
            { href: "/thrivers", text: "Thrivers", isNav: false },
            { href: "/dont-guess", text: "Don't GUESS", isNav: false }
        ]
    },
    {
        href: "/contact",
        text: "Contact Us",
        isNav: false
    }
];
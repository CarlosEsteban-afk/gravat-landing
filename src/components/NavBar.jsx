import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem, Link, Button
} from "@nextui-org/react";



export default function App({ links, actions }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
    
    return (
        <Navbar className="border-t-8 border-socials h-24 " isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <img src="icon.jpg" alt="icon" className="h-8 w-8 ml-1 inline-block" />
                    <p className="font-bold text-inherit text-2xl ml-2">GRAVAT</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {links.map((button, index) => (
                    <NavbarItem key={index} className="ml-2 font-medium">
                        <Link color="foreground" href="#">
                            {button.text}
                        </Link>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    {
                        actions.map((button, index) => (
                            <Button key={index} className="ml-2 border-1 border-socials" variant="bordered" radius="full" >
                                {button.text}
                            </Button>
                        ))
                    }
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

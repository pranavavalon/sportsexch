import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import NavLogo from "../../assets/logo.png";
import "./NavBar.css"
import { navMenu } from "../../utils/constant.js"

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="header">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-0 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 lg:gap-x-12">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center">
                        <p className="company-logo ">Sports<span className='logo-color'>Exch</span></p>
                        {/* <img className="h-8 logo-img" src={NavLogo} alt="" /> */}
                    </a>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-4 nav-menu">
                        {navMenu.map((element, index) => {
                            return (
                                <a key={index} href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    {element}
                                </a>
                            )
                        })}

                    </Popover.Group>
                
                </div>
            </nav>
           
        </header>
    )
}

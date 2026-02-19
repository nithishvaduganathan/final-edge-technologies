import React from 'react';
import { Globe, Smartphone, Cpu, ShieldCheck, Code, BarChart } from 'lucide-react';

export const COMPANY_CONFIG = {
    name: "Final Edge Technologies",
    tagline: "Building Smart Digital Solutions for Modern Businesses",
    email: "finaledgetechnologies@gmail.com",
    phone: "+91 8531977455",
    address: "Thiruvarur, Tamil nadu, India - 609 503",
    devToUsername: "nithish_vaduganathan" // CHANGE THIS to your Dev.to username (e.g., 'finaledge')
};

export const HERO_CONTENT = {
    title: "Building Smart Digital Solutions for Modern Businesses",
    subtitle: "We specialize in delivering high-performance Web, Mobile, and IoT solutions tailored to drive your business growth. From concept to deployment, we are your dedicated technical partners.",
    primaryAction: "Get a Free Consultation",
    secondaryAction: "View Our Services"
};

export const ABOUT_CONTENT = {
    mission: {
        title: "Our Mission",
        text: "At Final Edge Technologies, our mission is to empower businesses with cutting-edge digital solutions that drive growth and efficiency. We believe in the transformative power of technology to solve complex challenges. We are dedicated to building long-term partnerships with our clients, engaging in every step of the digital transformation journey from concept to deployment and beyond."
    },
    values: [
        {
            title: "Innovation",
            text: "Constantly exploring new technologies to provide the best solutions.",
            icon: <Code size={32} />
        },
        {
            title: "Integrity",
            text: "Transparent communication and honest business practices.",
            icon: <ShieldCheck size={32} />
        },
        {
            title: "Excellence",
            text: "Delivering high-quality, bug-free, and performant code.",
            icon: <BarChart size={32} />
        },
        {
            title: "Collaboration",
            text: "Working closely with clients to truly understand their vision.",
            icon: <Globe size={32} />
        }
    ]
};

export const SERVICES = [
    {
        id: "web",
        title: "Website Development",
        shortDesc: "Corporate websites, portfolios, custom dashboards, and web applications.",
        fullDesc: "We build modern, responsive, and high-performance websites tailored to your brand. Our web solutions are SEO-optimized, accessible, and designed to convert visitors into customers.",
        icon: <Globe size={40} color="var(--accent)" />,
        details: ["Corporate Websites & Landing Pages", "E-commerce Solutions (Shopify, WooCommerce, Custom)", "Custom Web Applications (React, Next.js)", "Admin Dashboards & Portals"],
        benefits: "Enhanced online presence, better user engagement, and scalable architecture."
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        shortDesc: "Native and cross-platform mobile applications for iOS and Android.",
        fullDesc: "Reach your customers on their favorite devices with our mobile app development services. We create seamless, intuitive, and feature-rich apps for both iOS and Android platforms.",
        icon: <Smartphone size={40} color="var(--accent)" />,
        details: ["iOS & Android Apps", "Cross-Platform (Flutter/React Native)", "UI/UX Design & Prototyping", "App Store Deployment & Optimization"],
        benefits: "Reach customers continuously, improve brand loyalty, and leverage device capabilities."
    },
    {
        id: "iot",
        title: "IoT Solutions",
        shortDesc: "Smart device integration, sensor monitoring systems, and automation logic.",
        fullDesc: "Unlock the power of connected devices. We design and build IoT ecosystems that collect data, automate processes, and provide real-time insights for your business.",
        icon: <Cpu size={40} color="var(--accent)" />,
        details: ["Smart Home/Office Automation", "Industrial IoT & Sensor Networks", "ESP32 & Arduino Firmware Development", "Real-time Monitoring Dashboards (MQTT/HTTP)"],
        benefits: "Operational efficiency, data-driven insights, and remote control capabilities."
    },
    {
        id: "support",
        title: "Software Support",
        shortDesc: "Bug fixing, upgrades, server monitoring, and long-term technical support.",
        fullDesc: "Our relationship doesn't end at deployment. We provide ongoing maintenance and support to ensure your software remains secure, up-to-date, and performs at its best.",
        icon: <ShieldCheck size={40} color="var(--accent)" />,
        details: ["24/7 Server Monitoring", "Bug Fixes & Security Patches", "Performance Optimization", "Legacy System Upgrades"],
        benefits: "Peace of mind, reduced downtime, and extended software lifecycles."
    }
];

export const PROJECTS = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        description: "A full-featured shopping platform with secure payment gateway integration, real-time inventory management, and a custom admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 2,
        title: "Smart Home Dashboard",
        category: "IoT Solution",
        description: "Centralized control panel for smart home devices, featuring real-time data monitoring via MQTT, device scheduling, and remote access control.",
        tech: ["Flutter", "Firebase", "ESP32", "MQTT"],
        image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 3,
        title: "FinTech Corporate Portal",
        category: "Web Design",
        description: "Modern, responsive corporate website for a leading financial consultancy firm, featuring interactive charts, client portals, and secure document sharing.",
        tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 4,
        title: "HealthTrack Mobile App",
        category: "Mobile App",
        description: "A cross-platform mobile application for tracking fitness goals, diet logging, and scheduling appointments with healthcare professionals.",
        tech: ["React Native", "Redux", "Node.js"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    }
];

export const GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1553877616-15280ed4be8b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
];

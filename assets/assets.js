import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import github from './github-icon.png';
import postman from './postman-icon.png';
import aws from './aws-icon.png';
import ubuntu from './linux-ubuntu-icon.png';
import gitlab from './gitlab-icon.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import frontend from './frontend.jpg';
import backend from './backend.jpg';
import fullstack from './fullstack.jpg';
import devops from './devops.jpg';
import datamangement from './datamangement.jpg';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import { data } from 'motion/react-client';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    github,
    postman,
    gitlab,
    ubuntu,
    aws,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    frontend,
    backend,
    fullstack,
    devops,
    datamangement,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Study Notion Ed_tech Platform',
        description: 'An online learning platform built using the MERN stack, featuring course management, user authentication, and progress tracking.',
        bgImage: '/work-1.png',
    },
    {
        title: 'Portfolio',
        description: 'A personal portfolio showcasing projects, skills, and professional achievements, built using React and basic Next.js.',
        bgImage: '/work-2.png',
    },
    {
        title: 'Expence Tracker',
        description: 'A financial management tool developed using the MERN stack, allowing users to track income, expenses, and generate reports.',
        bgImage: '/work-3.png',
    },
    {
        title: 'Weather App',
        description: 'A frontend application utilizing JavaScript and APIs to provide real-time weather updates for any location.',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.frontend, title: 'Frontend Development', description: 'Building responsive, user-friendly, and visually appealing interfaces using React.js.....', link: '' },
    { icon: assets.backend, title: 'Backend Development', description: 'Creating reliable and scalable APIs for client-server communication....', link: '' },
    { icon: assets.datamangement, title: 'Database Management', description: 'Structuring databases to store and organize data effectively...', link: '' },
    { icon: assets.fullstack, title: 'Full Stack Development', description: 'Building complete applications with both frontend and backend....', link: '' },
    { icon:assets.devops, title:'DevOps and Deployment', description:'Automating testing and deployment using CI/CD tools like GitHub Actions', link:'' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, TailwindCSS,Core Java, JavaScript, React Js, Express js, Node js, MongoDB, Mongoose, SQL, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Master of Computer Applicaation from KNIT Sultanpur. \n  B.Sc. in Mathematics from M.L.K PG College, Balrampur.' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Study Notion EDtech platform, Portfolio, Expence tracker, Text editor and Many other Projects makes using several technology tech stack.' }
];

export const toolsData = [
    assets.vscode, assets.mongodb, assets.github, assets.git, assets.postman, assets.aws, assets.gitlab, assets.firebase, assets.ubuntu
];
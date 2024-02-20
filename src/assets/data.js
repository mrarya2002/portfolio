export const projects = [
    {
        id:1,
        name:"Two good co.",
        description:"gsap HTML CSS JS",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQue9GAYRL2lNwFzl2DATRIk63Bj87_JgO-3w&usqp=CAU",
        github:"mrarya.github.io",
        live:"arya.good.comm",
        tech:"html-css"
    },
    {
        id:2,
        name:"Sundown web",
        description:"gsap HTML CSS JS",
        img:"https://uploads-ssl.webflow.com/644bc965881cba09e414cd5b/64d3e7b9211401bf7ebd601a_Showcase%2BThumb.jpg",
        github:"mrarya.github.io",
        live:"arya.good.comm",
        tech:"html-css"
    },
    {
        id:3,
        name:"Pinterest",
        description:"HTML CSS JS",
        img:"https://images.ctfassets.net/2pyx8rwuvz6x/3agrFy0rGxd9Vg2eHdKHH/ea15edb209ebd0028b2dda6d64fc93b6/post-107-assets-1-en-us.jpg?fm=webp&q=85",
        github:"mrarya.github.io",
        live:"arya.good.comm",
        tech:"javascript"
    },
    {
        id:4,
        name:"Shopping Cart",
        description:"HTML CSS JS",
        img:"https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png",
        github:"mrarya.github.io",
        live:"arya.good.comm",
        tech:"javascript"
    },
    {
        id:5,
        name:"Calculator",
        description:"HTML CSS JS",
        img:"https://res.cloudinary.com/dz209s6jk/image/upload/v1625142745/Screenshots/m1ntyhfni1w9907kypck.jpg",
        github:"mrarya.github.io",
        live:"arya.good.comm",
        tech:"javascript"
    },
    {
        id:6,
        name:"Rest Country Api",
        description:"HTML CSS JS",
        img:"https://res.cloudinary.com/dz209s6jk/image/upload/v1554826345/Challenges/yhq5ihanseyinzwblaw1.jpg",
        github:"mrarya.github.io",
        live:"arya.good.comm",
        tech:"javascript"
    },
    {
        id:7,
        name:"Youtube Player",
        description:"React js",
        img:"https://9to5google.com/wp-content/uploads/sites/4/2022/10/YouTube-Ambient-Mode-cover.jpg?quality=82&strip=all&w=1600",
        github:"mrarya.github.io",
        live:"arya.good.comm",
        tech:"react-js"
    }
]

export const filterButtons =[
    {
        name:"Show All",
        value:"all"
    },
    {
        name:"HTML & CSS",
        value:"html-css"
    },
    {
        name:"Javascript",
        value:"javascript"
    },
    {
        name:"React JS",
        value:"react-js"
    },
    {
        name:"Node JS",
        value:"node-js"
    },
    {
        name:"PHP",
        value:"php"
    },
    {
        name:"Django",
        value:"django"
    }
]

export const gaming = [
    {
        id:1,
        name:"Tic Tac Toe",
        img:"",
    },
    {
        id:2,
        name:"Snake Xenzia",
        img:"",
    },
    {
        id:3,
        name:"Connect Four",
        img:"",
    },
    {
        id:4,
        name:"Hangman",
        img:""
    },
    {
        id:5,
        name:"ping pong",
        img:""
    }
]

export function  getProjects(){
    const ProjectList = projects;
    return ProjectList;
};

export function filterProjects(protype){
    let filteredProjects = getProjects().filter(pro=>pro.tech===protype)
    return filteredProjects;
}
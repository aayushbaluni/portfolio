import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Travel With Us',
        description: "Crafted captivating and responsive UI designs for a travel website using React.js, ensuring an engaging and visually stunning user experience",
        tools: ['React','SCSS','Git/GitHub'],
        role: 'Frontend Developer',
        code: 'https://github.com/aayushbaluni/Travel-Website',
        demo: 'https://tour-travel-bice.vercel.app/',
        image: travel,
        tags:['Css','React'],
    },
    {
        id: 2,
        name: 'VGTHR',
        description: 'Expertise in React.js, Node.js, MongoDB, Material UI, OTP less SignIn, and Razorpay. Developed platform with streamlined payment processing, boosting user engagement by 20% and reducing support inquiries by 25%.',
        tools: ['React', 'CSS', "Razorpay", "MongoDB","OTP-less SignIn"],
        role: 'Full Stack Developer',
        code: '[ https://github.com/aayushbaluni/VGther-Frontend , https://github.com/aayushbaluni/VGther-Server ]',
        demo: 'https://www.vgthr.com/',
        image: travel,
    },
    {
        id: 3,
        name: 'Anonymous Chat Platform with Rooms',
        description: 'Built a real-time, anonymous chat platform with room functionality using React.js and Socket.io, enabling users to engage in secure and instant communication within designated chat rooms.',
        tools: ['React', 'SCSS', 'Socket', 'Express','Node Js'],
        code: '[https://github.com/aayushbaluni/ChatRoom-Frontend, https://github.com/aayushbaluni/ChatRoom-Backend]',
        role: 'Full Stack Developer',
        demo: 'https://chat-room-frontend-alpha.vercel.app/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'TEXT TO VIDEO CONVERTOR',
        description: 'video generation application utilizing Flutter, Python, and Flask. Achieved a 25% improvement in rendering speed and a 15% reduction in resource utilization, enhancing overall performance',
        tools: ['Flutter','Flask','Python'],
        code: 'https://github.com/aayushbaluni/TextToVideo',
        demo: null,
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
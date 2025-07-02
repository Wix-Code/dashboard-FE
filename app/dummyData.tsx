import { Calendar, FolderOpen, Layers, LayoutGrid, Mails, Plane, UsersRound } from "lucide-react";

type SideBarLinks = {
  id: number;
  name: string;
  icon: any;
  link: string;
}

type Events = {
  id: number;
  name: string;
  day: string;
  hour: string;
}

type Workers = {
  id: number;
  name: string;
  role: string;
  level: string;
  gender?: string;
  fullAge?: number;
  email?: string;
  image: string;
  dob: string;
}

type Vacation = {
  id: number;
  name: string;
  vacationsNum?: number;
  workRemote?: number;
  email?: string;
  image: string;
  sickLeave: number;
}

export const sideBarLinks: SideBarLinks[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: <LayoutGrid className="w-[18px]" />,
    link: "/"
  },
  {
    id: 2,
    name: "Projects",
    icon: <Layers className="w-[18px]" />,
    link: "/projects"
  },
  {
    id: 3,
    name: "Calendar",
    icon: <Calendar className="w-[18px]"/>,
    link: "calendar"
  },
  {
    id: 4,
    name: "Vacations",
    icon: <Plane className="w-[18px]"/>,
    link: "/vacations"
  },
  {
    id: 5,
    name: "Employees",
    icon: <UsersRound className="w-[18px]" />,
    link: "/employees"
  },
  {
    id: 6,
    name: "Messenger",
    icon: <Mails className="w-[18px]"/>,
    link: "/messenger"
  },
  {
    id: 7,
    name: "Info Portal",
    icon: <FolderOpen className="w-[18px]"/>,
    link: "/info-portal"
  },
]

export const events: Events[] = [
  {
    id: 1,
    name: "Ray's Birthday",
    day: "Thur.",
    hour: "2:00PM"
  },
  {
    id: 2,
    name: "Ray's Birthday",
    day: "Thur.",
    hour: "2:00PM"
  },
  {
    id: 3,
    name: "Ray's Birthday",
    day: "Thur.",
    hour: "2:00PM"
  },
]

export const workers: Workers[] = [
  {
    id: 1,
    name: "Ogbonna Wisdom",
    role: "Developer",
    fullAge: 25,
    email: "ogbonna428@gmail.com",
    gender: "male",
    dob: "Feb 15th, 2000",
    level: "Senior",
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 2,
    name: "Ogbonna Wisdom",
    role: "Developer",
    fullAge: 25,
    email: "ogbonna428@gmail.com",
    gender: "female",
    dob: "Feb 15th, 2000",
    level: "Senior",
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 3,
    name: "Ogbonna Wisdom",
    role: "Developer",
    fullAge: 25,
    email: "ogbonna428@gmail.com",
    gender: "female",
    dob: "Feb 15th, 2000",
    level: "Senior",
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 4,
    name: "Ogbonna Wisdom",
    role: "Developer",
    fullAge: 25,
    gender: "female",
    email: "ogbonna428@gmail.com",
    dob: "Feb 15th, 2000",
    level: "Senior",
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 5,
    name: "Ogbonna Wisdom",
    role: "Developer",
    fullAge: 25,
    gender: "male",
    email: "ogbonna428@gmail.com",
    dob: "Feb 15th, 2000",
    level: "Senior",
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 6,
    name: "Ogbonna Wisdom",
    role: "Developer",
    gender: "female",
    fullAge: 25,
    email: "ogbonna428@gmail.com",
    dob: "Feb 15th, 2000",
    level: "Senior",
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 7,
    name: "Ogbonna Wisdom",
    role: "Developer",
    fullAge: 25,
    email: "ogbonna428@gmail.com",
    dob: "Feb 15th, 2000",
    gender: "female",
    level: "Senior",
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 8,
    name: "Ogbonna Wisdom",
    role: "Developer",
    fullAge: 25,
    email: "ogbonna428@gmail.com",
    dob: "Feb 15th, 2000",
    gender: "female",
    level: "Senior",
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
]

export const vacation: Vacation[] = [
  {
    id: 1,
    name: "Ogbonna Wisdom",
    workRemote: 25,
    email: "ogbonna428@gmail.com",
    sickLeave: 24,
    vacationsNum: 10,
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 2,
    name: "Ogbonna Wisdom",
    sickLeave: 25,
    email: "ogbonna428@gmail.com",
    vacationsNum: 10,
    workRemote: 20,
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 3,
    name: "Ogbonna Wisdom",
    sickLeave: 25,
    email: "ogbonna428@gmail.com",
    vacationsNum: 10,
    workRemote: 20,
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 4,
    name: "Ogbonna Wisdom",
    sickLeave: 25,
    email: "ogbonna428@gmail.com",
    vacationsNum: 10,
    workRemote: 20,
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 5,
    name: "Ogbonna Wisdom",
    sickLeave: 25,
    email: "ogbonna428@gmail.com",
    vacationsNum: 10,
    workRemote: 20,
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 6,
    name: "Ogbonna Wisdom",
    sickLeave: 25,
    email: "ogbonna428@gmail.com",
    vacationsNum: 10,
    workRemote: 20,
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 7,
    name: "Ogbonna Wisdom",
    sickLeave: 25,
    email: "ogbonna428@gmail.com",
    vacationsNum: 10,
    workRemote: 20,
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
  {
    id: 8,
    name: "Ogbonna Wisdom",
    sickLeave: 25,
    email: "ogbonna428@gmail.com",
    vacationsNum: 10,
    workRemote: 20,
    image: "https://thumbs.dreamstime.com/b/teenage-girl-cup-12997365.jpg"
  },
]
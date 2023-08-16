import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "J.T.",
    lastName: "Realmuto",
    email: "jt@gmail.com",
    password: "password0",
    picturePath: "p1.png",
    friends: [],
    location: "Philadelphia, PA",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Will",
    lastName: "Smith",
    email: "will@gmail.com",
    password: "password1",
    picturePath: "p2.png",
    friends: [],
    location: "Los Angeles, CA",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Adley",
    lastName: "Rutschman",
    email: "adley@gmail.com",
    password: "password2",
    picturePath: "p3.png",
    friends: [],
    location: "Baltimore, MD",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Buster",
    lastName: "Posey",
    email: "buster@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p4.png",
    friends: [],
    location: "San Francisco, CA",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Pudge",
    lastName: "Rodriguez",
    email: "pudge@gmail.com",
    password: "password4",
    picturePath: "p5.png",
    friends: [],
    location: "Detroit, MI",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Wilson",
    lastName: "Contreras",
    email: "wilson@gmail.com",
    password: "password5",
    picturePath: "p6.png",
    friends: [],
    location: "St. Louis, MO",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Sean",
    lastName: "Murphy",
    email: "sean@gmail.com",
    password: "password6",
    picturePath: "p7.png",
    friends: [],
    location: "Atlanta, GA",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Tyler",
    lastName: "Stephenson",
    email: "tyler@gmail.com",
    password: "password7",
    picturePath: "p9.png",
    friends: [],
    location: "Cincinatti, OH",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
  {
    _id: userIds[8],
    firstName: "Jonah",
    lastName: "Heim",
    email: "jonah@gmail.com",
    password: "password8",
    picturePath: "p10.png",
    friends: [],
    location: "Arlington, TX",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },

  {
    _id: userIds[9],
    firstName: "Alejandro",
    lastName: "Kirk",
    email: "alejandro@gmail.com",
    password: "password9",
    picturePath: "p14.png",
    friends: [],
    location: "Toranto, Canada",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Will",
    lastName: "Smith",
    location: "Los Angeles, CA",
   caption : "Some really long random caption",
    picturePath: "post1.png",
    userPicturePath: "p3.png",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
        "Take me out to the ballgame!",
        "Is it 1, 2 or 3 strikes until you're out?",
        "Buy me some peanuts and cracker jacks!",
        "Rooting for the home team!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Adley",
    lastName: "Rutschman",
    location: "Baltimore, MD",
    caption:
      "Another really long random caption. This one is longer than the previous one.",
    picturePath: "post2.png",
    userPicturePath: "p6.png",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
        "Take me out to the ballgame!",
        "Buy me some peanuts and cracker jacks!",
        "Rooting for the home team!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Pudge",
    lastName: "Rodriguez",
    location: "Detroit, MI",
    caption:
     "",
    picturePath: "post3.png",
    userPicturePath: "p5.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
        "Is it 1, 2 or 3 strikes?",
        "Buy me some peanuts and cracker jacks!",
        "Rooting for the home team!",
        "Play ball!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Wilson",
    lastName: "Contreras",
    location: "St. Louis, MO",
    caption:
      "This is the last really long random caption. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: "post4.png",
    userPicturePath: "p7.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
        "Take me out to the ballgame!",
        "Is it 1, 2 or 3 strikes?",
        "Buy me some peanuts and cracker jacks!",
        "Rooting for the home team!",
        "Play ball!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Sean",
    lastName: "Murphy",
    location: "Atlanta, GA",
    caption:
      "Just a short caption. I'm tired of typing. I'm going to play video games now.",
    picturePath: "post5.png",
    userPicturePath: "p8.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "Is it 1, 2 or 3 strikes?",
      "Buy me some peanuts and cracker jacks!",
      "Rooting for the home team!",
      "Play ball!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Tyler",
    lastName: "Stephenson",
    location: "Cincinatti, OH",
    caption:
      "There's no cryin in baseball!",
    picturePath: "post6.png",
    userPicturePath: "p9.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
        "Take me out to the ballgame!",
        "Play ball!",
    ],
  },
];
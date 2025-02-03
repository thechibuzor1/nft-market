/**
 * Types for static data
 */

export interface Auction {
  title: string;
  value: number;
  time: string;
  likes: number;
  bids: number;
  cover: string;
  profiles?: string[];
}

export interface NFT {
  title: string;
  value: number;
  time: string;
  bids: number;
  cover: string;
}

export interface Stat {
  svg: string;
  number: string;
  stat: string;
}

export interface ScrollingNFT {
  fileName: string;
  name: string;
}

export type FloatingSvg = {
  fileName: string;
  name: string;
  top: string;
  left: string;
};


/**
 * Static data
 */


export const auctions:Auction[] = [
    {
      title: "Tristique diam a, enim, eros tellus. Viverra etiam",
      value: 2.55,
      time: "2:41",
      likes: 54,
      bids: 14,
      cover: "/images/auction/Auctionimg1.jpeg",
      profiles: [
        "/images/profiles/profile1.jpeg",
        "/images/profiles/profile2.jpeg",
        "/images/profiles/profile3.jpeg",
        "/images/profiles/profile4.jpeg",
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      value: 3.19,
      time: "2:41",
      likes: 120,
      bids: 35,
      cover: "/images/auction/Auctionimg2.jpeg",
      profiles: [
        "/images/profiles/profile1.jpeg",
        "/images/profiles/profile2.jpeg",
        "/images/profiles/profile3.jpeg",
        "/images/profiles/profile4.jpeg",
      ],
    },
    {
      title: "Dui accumsan leo vestibulum ornare eu",
      value: 1.11,
      time: "22:59",
      likes: 570,
      bids: 101,
      cover: "/images/auction/Auctionimg3.jpeg",
      profiles: [
        "/images/profiles/profile7.jpeg",
        "/images/profiles/profile5.jpeg",
        "/images/profiles/profile8.jpeg",
        "/images/profiles/profile11.jpeg",
      ],
    },
    {
      title: "Senectus adipiscing nascetur accumsan etiam",
      value: 1.63,
      time: "37:01",
      likes: 98,
      bids: 12,
      cover: "/images/auction/Auctionimg4.jpeg",
      profiles: [
        "/images/profiles/profile1.jpeg",
        "/images/profiles/profile2.jpeg",
        "/images/profiles/profile3.jpeg",
        "/images/profiles/profile4.jpeg",
      ],
    },
    {
      title: "Mattis at diam lorem nisl nam sed sociis",
      value: 2.55,
      time: "12:15",
      likes: 540,
      bids: 19,
      cover: "/images/auction/Auctionimg5.jpeg",
      profiles: [
        "/images/profiles/profile5.jpeg",
        "/images/profiles/profile6.jpeg",
        "/images/profiles/profile7.jpeg",
        "/images/profiles/profile8.jpeg",
      ],
    },
    {
      title: "Senectus adipiscing nascetur accumsan etiam",
      value: 1.63,
      time: "37:01",
      likes: 98,
      bids: 12,
      cover: "/images/auction/Auctionimg4.jpeg",
      profiles: [
        "/images/profiles/profile9.jpeg",
        "/images/profiles/profile10.jpeg",
        "/images/profiles/profile11.jpeg",
      ],
    },
    {
      title: "Mattis at diam lorem nisl nam sed sociis",
      value: 2.55,
      time: "12:15",
      likes: 540,
      bids: 19,
      cover: "/images/auction/Auctionimg5.jpeg",
      profiles: [
        "/images/profiles/profile12.jpeg",
        "/images/profiles/profile13.jpeg",
        "/images/profiles/profile14.jpeg",
        "/images/profiles/profile16.jpeg",
      ],
    },
    {
      title: "Tristique diam a, enim, eros tellus. Viverra etiam",
      value: 2.55,
      time: "2:41",
      likes: 54,
      bids: 14,
      cover: "/images/auction/Auctionimg1.jpeg",
      profiles: [
        "/images/profiles/profile10.jpeg",
        "/images/profiles/profile12.jpeg",
        "/images/profiles/profile13.jpeg",
        "/images/profiles/profile4.jpeg",
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      value: 3.19,
      time: "2:41",
      likes: 120,
      bids: 35,
      cover: "/images/auction/Auctionimg2.jpeg",
      profiles: [
        "/images/profiles/profile1.jpeg",
        "/images/profiles/profile2.jpeg",
        "/images/profiles/profile3.jpeg",
        "/images/profiles/profile4.jpeg",
      ],
    },
    {
      title: "Dui accumsan leo vestibulum ornare eu",
      value: 1.11,
      time: "22:59",
      likes: 570,
      bids: 101,
      cover: "/images/auction/Auctionimg3.jpeg",
      profiles: [
        "/images/profiles/profile10.jpeg",
        "/images/profiles/profile2.jpeg",
        "/images/profiles/profile13.jpeg",
        "/images/profiles/profile4.jpeg",
      ],
    },
    {
      title: "Senectus adipiscing nascetur accumsan etiam",
      value: 1.63,
      time: "37:01",
      likes: 98,
      bids: 12,
      cover: "/images/auction/Auctionimg4.jpeg",
      profiles: [
        "/images/profiles/profile1.jpeg",
        "/images/profiles/profile7.jpeg",
        "/images/profiles/profile13.jpeg",
        "/images/profiles/profile4.jpeg",
      ],
    },
    {
      title: "Mattis at diam lorem nisl nam sed sociis",
      value: 2.55,
      time: "12:15",
      likes: 540,
      bids: 19,
      cover: "/images/auction/Auctionimg5.jpeg",
      profiles: [
        "/images/profiles/profile1.jpeg",
        "/images/profiles/profile2.jpeg",
        "/images/profiles/profile3.jpeg",
        "/images/profiles/profile4.jpeg",
      ],
    },
    {
      title: "Senectus adipiscing nascetur accumsan etiam",
      value: 1.63,
      time: "37:01",
      likes: 98,
      bids: 12,
      cover: "/images/auction/Auctionimg4.jpeg",
      profiles: [
        "/images/profiles/profile3.jpeg",
        "/images/profiles/profile12.jpeg",
        "/images/profiles/profile11.jpeg",
        "/images/profiles/profile4.jpeg",
      ],
    },
    {
      title: "Mattis at diam lorem nisl nam sed sociis",
      value: 2.55,
      time: "12:15",
      likes: 540,
      bids: 19,
      cover: "/images/auction/Auctionimg5.jpeg",
      profiles: [
        "/images/profiles/profile3.jpeg",
        "/images/profiles/profile2.jpeg",
        "/images/profiles/profile8.jpeg",
        "/images/profiles/profile6.jpeg",
      ],
    },
  ];

export const nfts:NFT[] = [
    {
      title: "Vulputate velit viverra volutpat volutpat tristique",
      value: 1.25,
      time: "22:59",
      bids: 101,
      cover: "/images/nfts/blkimg1.png",
    },
    {
      title: "Egestas blandit sit egestas non sed. Purus semper",
      value: 1.25,
      time: "22:59",
      bids: 101,
      cover: "/images/nfts/blkimg2.png",
    },
    {
      title: "Id ut consequat netus nec vel amet ut porta in augue",
      value: 1.25,
      time: "22:59",
      bids: 101,
      cover: "/images/nfts/blkimg3.png",
    },
    {
      title: "Sed et nibh felis integer tellus turpin",
      value: 1.25,
      time: "22:59",
      bids: 101,
      cover: "/images/nfts/blkimg4.png",
    },
  ];

export const stat_data:Stat[] = [
    {
      svg: "profile.svg",
      number: "300k",
      stat: "Users Active",
    },
    {
      svg: "Artworks.svg",
      number: "52,5k",
      stat: "Artworks",
    },
    {
      svg: "artists.svg",
      number: "17,5k",
      stat: "Artists",
    },
    {
      svg: "eth.svg",
      number: "35.58",
      stat: "ETH Spent",
    },
  ];

export const popular_auctions:Auction[] =  [
  {
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    value: 2.55,
    time: "2:41",
    likes: 54,
    bids: 14,
    cover: "/images/popular/p1.jpeg",
  },
  {
    title: "Vulputate felis purus viverra morbi facilisi eget",
    value: 3.19,
    time: "2:41",
    likes: 120,
    bids: 35,
    cover: "/images/popular/p2.jpeg",
  },
  {
    title: "Dui accumsan leo vestibulum ornare eu",
    value: 1.11,
    time: "22:59",
    likes: 570,
    bids: 101,
    cover: "/images/popular/p3.jpeg",
  },
  {
    title: "Senectus adipiscing nascetur accumsan etiam",
    value: 1.63,
    time: "37:01",
    likes: 98,
    bids: 12,
    cover: "/images/popular/p4.jpeg",
  },
  {
    title: "Mattis at diam lorem nisl nam sed sociis",
    value: 2.55,
    time: "12:15",
    likes: 540,
    bids: 19,
    cover: "/images/popular/p5.jpeg",
  },
  {
    title: "Senectus adipiscing nascetur accumsan etiam",
    value: 1.63,
    time: "37:01",
    likes: 98,
    bids: 12,
    cover: "/images/popular/p6.jpeg",
  },
];
export const more_from:Auction[] =  [
  {
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    value: 2.55,
    time: "2:41",
    likes: 54,
    bids: 14,
    cover: "/images/morefrom/mf1.jpeg",
  },
  {
    title: "Vulputate felis purus viverra morbi facilisi eget",
    value: 3.19,
    time: "2:41",
    likes: 120,
    bids: 35,
    cover: "/images/morefrom/mf2.jpeg",
  },
  {
    title: "Dui accumsan leo vestibulum ornare eu",
    value: 1.11,
    time: "22:59",
    likes: 570,
    bids: 101,
    cover: "/images/morefrom/mf3.jpeg",
  },
  {
    title: "Senectus adipiscing nascetur accumsan etiam",
    value: 1.63,
    time: "37:01",
    likes: 98,
    bids: 12,
    cover: "/images/morefrom/mf4.jpeg",
  },
  {
    title: "Mattis at diam lorem nisl nam sed sociis",
    value: 2.55,
    time: "12:15",
    likes: 540,
    bids: 19,
    cover: "/images/morefrom/mf5.jpeg",
  },
  {
    title: "Senectus adipiscing nascetur accumsan etiam",
    value: 1.63,
    time: "37:01",
    likes: 98,
    bids: 12,
    cover: "/images/morefrom/mf6.jpeg",
  },
];


export const scrollingNfts:ScrollingNFT[] = [
  { fileName: "images/scrollingnfts/b1.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b2.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b3.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b5.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b6.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b7.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b8.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b9.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b10.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b11.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b12.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b13.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b14.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b15.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b16.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b17.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b18.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b19.jpeg", name: "2.55 ETH" },
];

export const floatingSvgs:FloatingSvg[] = [
  { fileName:  "images/floatingnfts/f4.jpeg", name: "2.55 ETH", top: "15%", left: "75%" },
  { fileName:  "images/floatingnfts/f2.jpeg", name: "2.55 ETH", top: "25%", left: "10%" },
  { fileName:  "images/floatingnfts/f5.jpeg", name: "2.55 ETH", top: "35%", left: "85%" },
  { fileName:  "images/floatingnfts/f3.jpeg", name: "2.55 ETH", top: "50%", left: "20%" },
  { fileName:  "images/floatingnfts/f6.jpeg", name: "2.55 ETH", top: "60%", left: "70%" },
  { fileName:  "images/floatingnfts/f1.jpeg", name: "2.55 ETH", top: "75%", left: "10%" },
];
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

export const auctions: Auction[] = [
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
];

export const nfts: NFT[] = [
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
];

export const stat_data: Stat[] = [
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
];

export const popular_auctions: Auction[] = [
  {
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    value: 2.55,
    time: "2:41",
    likes: 54,
    bids: 14,
    cover: "/images/popular/p1.jpeg",
  },
];

export const more_from: Auction[] = [
  {
    title: "Mattis at diam lorem nisl nam sed sociis",
    value: 2.55,
    time: "12:15",
    likes: 540,
    bids: 19,
    cover: "/images/morefrom/mf5.jpeg",
  },
];

export const scrollingNfts: ScrollingNFT[] = [
  { fileName: "images/scrollingnfts/b1.jpeg", name: "2.55 ETH" },
  { fileName: "images/scrollingnfts/b2.jpeg", name: "2.55 ETH" },
];


export const floatingSvgs:FloatingSvg[] = [
  { fileName:  "images/floatingnfts/f4.jpeg", name: "2.55 ETH", top: "15%", left: "75%" },
  { fileName:  "images/floatingnfts/f2.jpeg", name: "2.55 ETH", top: "25%", left: "10%" },
  { fileName:  "images/floatingnfts/f5.jpeg", name: "2.55 ETH", top: "35%", left: "85%" },
  { fileName:  "images/floatingnfts/f3.jpeg", name: "2.55 ETH", top: "50%", left: "20%" },
  { fileName:  "images/floatingnfts/f6.jpeg", name: "2.55 ETH", top: "60%", left: "70%" },
  { fileName:  "images/floatingnfts/f1.jpeg", name: "2.55 ETH", top: "75%", left: "10%" },
];
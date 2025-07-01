import React, { useState, useRef } from "react";

const Feeds = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Alex",
      age: 28,
      distance: "2 miles away",
      bio: "Adventure seeker and coffee enthusiast",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 1,
      name: "Alex",
      age: 28,
      bio: "Adventure seeker and coffee enthusiast",
      distance: "3 miles away",
      photos: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 2,
      name: "Sarah",
      age: 25,
      bio: "Artist and dog lover",
      distance: "5 miles away",
      photos: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 3,
      name: "Jamie",
      age: 30,
      bio: "Foodie and travel blogger",
      distance: "2 miles away",
      photos: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 4,
      name: "Michael",
      age: 32,
      bio: "Tech entrepreneur and fitness enthusiast",
      distance: "7 miles away",
      photos: [
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 5,
      name: "Emma",
      age: 27,
      bio: "Yoga instructor and nature lover",
      distance: "4 miles away",
      photos: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 6,
      name: "David",
      age: 31,
      bio: "Musician and photographer",
      distance: "1 mile away",
      photos: [
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      image:
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 7,
      name: "Sophia",
      age: 26,
      bio: "Medical student and bookworm",
      distance: "6 miles away",
      photos: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 8,
      name: "Ryan",
      age: 29,
      bio: "Software developer and gamer",
      distance: "8 miles away",
      photos: [
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 9,
      name: "Olivia",
      age: 24,
      bio: "Fashion designer and dancer",
      distance: "3 miles away",
      photos: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 10,
      name: "Daniel",
      age: 33,
      bio: "Chef and wine connoisseur",
      distance: "5 miles away",
      photos: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 2,
      name: "Jordan",
      age: 25,
      distance: "5 miles away",
      bio: "Artist and dog lover",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 3,
      name: "Taylor",
      age: 30,
      distance: "1 mile away",
      bio: "Foodie and travel addict",
      image:
        "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const cardRef = useRef(null);
  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    setTimeout(() => {
      setSwipeDirection(null);
      if (currentIndex < profiles.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 500);
  };

  const handleDragEnd = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const touchX = e.changedTouches[0].clientX;

    if (touchX < centerX - 50) {
      handleSwipe("left");
    } else if (touchX > centerX + 50) {
      handleSwipe("right");
    }
  };

  const currentProfile = profiles[currentIndex];

  return (
    <h1>Feeds</h1>
    // <div className="relative  bg-gray-100 overflow-hidden">
    //   <div className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-gradient-to-b from-black/30 to-transparent">
    //     <button className="text-white">
    //       <svg
    //         className="w-6 h-6"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M10 19l-7-7m0 0l7-7m-7 7h18"
    //         />
    //       </svg>
    //     </button>
    //     <div className="text-white font-bold text-xl">tinder</div>
    //     <button className="text-white">
    //       <svg
    //         className="w-6 h-6"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    //         />
    //       </svg>
    //     </button>
    //   </div>

    //   {/* Profile Card */}
    //   <div className="h-full flex items-center justify-center p-4">
    //     {currentProfile && (
    //       <div
    //         ref={cardRef}
    //         className={`relative w-full max-w-sm h-[70vh] bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-500 ${
    //           swipeDirection === "left"
    //             ? "-translate-x-full rotate-[-20deg] opacity-0"
    //             : swipeDirection === "right"
    //             ? "translate-x-full rotate-[20deg] opacity-0"
    //             : ""
    //         }`}
    //         onTouchEnd={handleDragEnd}
    //       >
    //         <img
    //           src={currentProfile.image}
    //           alt={currentProfile.name}
    //           className="h-full w-full object-cover"
    //         />
    //         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
    //           <div className="flex items-end">
    //             <h2 className="text-2xl font-bold">
    //               {currentProfile.name}, {currentProfile.age}
    //             </h2>
    //           </div>
    //           <p className="text-sm opacity-80">{currentProfile.distance}</p>
    //           <p className="mt-2">{currentProfile.bio}</p>
    //         </div>
    //       </div>
    //     )}
    //   </div>

    //   {/* Action Buttons */}
    //   <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8">
    //     <button
    //       onClick={() => handleSwipe("left")}
    //       className="p-4 bg-white rounded-full shadow-lg text-red-500 hover:bg-red-50 transition"
    //     >
    //       <svg
    //         className="w-8 h-8"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M6 18L18 6M6 6l12 12"
    //         />
    //       </svg>
    //     </button>

    //     <button className="p-4 bg-white rounded-full shadow-lg text-blue-500 hover:bg-blue-50 transition">
    //       <svg
    //         className="w-8 h-8"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M12 15l8-8m0 0l-8-8m8 8H4"
    //         />
    //       </svg>
    //     </button>

    //     <button
    //       onClick={() => handleSwipe("right")}
    //       className="p-4 bg-white rounded-full shadow-lg text-green-500 hover:bg-green-50 transition"
    //     >
    //       <svg
    //         className="w-8 h-8"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    //         />
    //       </svg>
    //     </button>
    //   </div>

    //   {/* Empty State */}
    //   {profiles.length === 0 && (
    //     <div className="absolute inset-0 flex items-center justify-center p-8">
    //       <div className="text-center">
    //         <h2 className="text-2xl font-bold text-gray-700">
    //           No more profiles
    //         </h2>
    //         <p className="text-gray-500 mt-2">
    //           Check back later for new matches
    //         </p>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default Feeds;
